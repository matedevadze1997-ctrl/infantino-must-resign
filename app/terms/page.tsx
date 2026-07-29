export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <main className="legalPage">
      <a href="/" className="backLink">← Back to petition</a>
      <h1>Terms of Use</h1>
      <p className="legalDate">Effective: July 28, 2026</p>

      <h2>Purpose</h2>
      <p>
        This website hosts an independent petition and presents political and
        institutional opinions about football governance.
      </p>

      <h2>Signing rules</h2>
      <p>
        Signatures must be submitted voluntarily and with accurate
        information. Duplicate, automated, threatening, unlawful, defamatory
        or abusive submissions may be rejected or removed.
      </p>

      <h2>No guarantee of outcome</h2>
      <p>
        Signing does not create a legal right to any particular institutional
        action and does not itself remove any FIFA office-holder.
      </p>

      <h2>Content moderation</h2>
      <p>
        The campaign may moderate comments to protect participants, comply
        with law and preserve the integrity of the petition.
      </p>

      <h2>Trademarks and affiliation</h2>
      <p>
        References to FIFA and public office-holders are descriptive. This
        campaign is not affiliated with or endorsed by FIFA.
      </p>
    </main>
  );
}
