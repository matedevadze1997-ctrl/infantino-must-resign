import { NextResponse } from "next/server";

function clean(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

function config() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase environment variables are not configured.");
  return { url: url.replace(/\/$/, ""), key };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = clean(body.firstName, 60);
    const lastName = clean(body.lastName, 60);
    const email = clean(body.email, 254).toLowerCase();
    const country = clean(body.country, 80);
    const comment = clean(body.comment, 500);
    const consent = body.consent === "true" || body.consent === true;

    if (firstName.length < 2 || lastName.length < 2 || country.length < 2 || !email.includes("@") || !consent) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const forwarded = request.headers.get("x-forwarded-for") || "";
    const ipHint = forwarded.split(",")[0]?.trim().slice(0, 64) || null;
    const userAgent = request.headers.get("user-agent")?.slice(0, 300) || null;
    const { url, key } = config();

    const response = await fetch(`${url}/rest/v1/signatures`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        country,
        comment: comment || null,
        consent,
        ip_hint: ipHint,
        user_agent: userAgent,
        status: "published",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 409 || text.includes("duplicate key")) {
        return NextResponse.json({ error: "This email has already signed the petition." }, { status: 409 });
      }
      console.error(text);
      return NextResponse.json({ error: "The signature could not be saved." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "The server could not process this request." }, { status: 500 });
  }
}
