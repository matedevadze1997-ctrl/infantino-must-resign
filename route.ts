export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <a href="/" className="backLink">← Back to petition</a>
      <h1>Privacy Policy</h1>
      <p className="legalDate">Effective: July 28, 2026</p>

      <h2>Information we collect</h2>
      <p>
        When you sign the petition, we collect your first name, last name,
        email address, country, optional comment, consent record and limited
        technical information used to protect the petition from abuse.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information to administer the petition, prevent duplicate
        or fraudulent signatures, display aggregate statistics and, where
        applicable, publish your name, country and comment. We do not publicly
        display your email address.
      </p>

      <h2>Sharing</h2>
      <p>
        Data may be processed by infrastructure providers necessary to operate
        the site, including hosting and database providers. We do not sell
        personal information.
      </p>

      <h2>Retention and requests</h2>
      <p>
        Records are retained while the campaign remains active and as needed
        for legitimate administrative or legal purposes. A dedicated contact
        address for access or deletion requests will be added before public
        promotion begins.
      </p>

      <h2>Independent status</h2>
      <p>
        This website is an independent campaign and is not affiliated with,
        endorsed by or operated by FIFA.
      </p>
    </main>
  );
}
