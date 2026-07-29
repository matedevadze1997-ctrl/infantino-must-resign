async function getCount(): Promise<number> {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return 0;

  try {
    const response = await fetch(`${site}/api/signatures/count`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return 0;
    const data = await response.json();
    return Number(data.count || 0);
  } catch {
    return 0;
  }
}

export default async function SignatureCounter() {
  const count = await getCount();

  return (
    <div className="counter" aria-label={`${count} verified supporters`}>
      <strong>{count.toLocaleString("en-US")}</strong>
      <span>VERIFIED SUPPORTERS</span>
      <div className="counterLine"><i /></div>
    </div>
  );
}
