import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ count: 0 });

  try {
    const response = await fetch(`${url}/rest/v1/signatures?select=id&status=eq.published`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "count=exact",
        Range: "0-0",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) return NextResponse.json({ count: 0 });
    const range = response.headers.get("content-range") || "0-0/0";
    const count = Number(range.split("/")[1] || 0);
    return NextResponse.json({ count: Number.isFinite(count) ? count : 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
