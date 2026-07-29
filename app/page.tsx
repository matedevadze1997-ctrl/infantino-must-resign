import PetitionForm from "@/components/PetitionForm";
import SignatureCounter from "@/components/SignatureCounter";

const principles = [
  {
    number: "01",
    title: "Accountability",
    text: "The leadership of world football should be answerable to supporters, players, clubs, associations and the public.",
  },
  {
    number: "02",
    title: "Transparency",
    text: "Major decisions affecting the global game should be explained clearly and subjected to meaningful scrutiny.",
  },
  {
    number: "03",
    title: "Integrity",
    text: "Football governance must protect the credibility of the sport above the interests of any individual office-holder.",
  },
];

const faqs = [
  [
    "Who is this petition addressed to?",
    "This petition is addressed to FIFA's member associations and the FIFA Council, the bodies with institutional influence over FIFA's leadership.",
  ],
  [
    "What happens after I sign?",
    "Your name, country and optional comment are added to the campaign database. Your email is used for verification and campaign administration and is not displayed publicly.",
  ],
  [
    "Is this website connected to FIFA?",
    "No. This is an independent civic campaign and is not affiliated with, endorsed by or operated by FIFA.",
  ],
  [
    "Can a petition automatically remove a FIFA president?",
    "No. A public petition does not itself remove an office-holder. Its purpose is to demonstrate public support and place pressure on the institutions that possess formal authority.",
  ],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Infantino Must Resign home">
          IMR<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#case">The case</a>
          <a href="#petition">Petition</a>
          <a href="#faq">FAQ</a>
          <a className="navButton" href="#petition">Sign now</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="gridOverlay" />
        <div className="heroInner">
          <p className="eyebrow"><span /> An independent global petition</p>
          <h1>
            INFANTINO
            <br />
            MUST <em>RESIGN.</em>
          </h1>
          <p className="heroCopy">
            A global call on FIFA&apos;s member associations and FIFA Council
            to demand accountable leadership and the resignation of Gianni
            Infantino.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#petition">Sign the petition</a>
            <a className="textLink" href="#case">Read our position →</a>
          </div>
          <SignatureCounter />
        </div>
        <div className="scrollMarker">SCROLL <span>↓</span></div>
      </section>

      <section className="statement" id="case">
        <p className="sectionLabel">Our position</p>
        <div>
          <h2>THE GAME BELONGS TO EVERYONE.</h2>
          <p>
            Global football requires leadership that earns public trust,
            welcomes scrutiny and treats institutional accountability as a
            duty—not an inconvenience.
          </p>
          <p>
            This campaign is a lawful expression of opinion. It asks the
            institutions responsible for FIFA governance to consider whether
            new leadership is necessary to restore confidence in the
            organisation.
          </p>
        </div>
      </section>

      <section className="principles">
        {principles.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="petitionSection" id="petition">
        <div className="petitionIntro">
          <p className="sectionLabel light">Add your voice</p>
          <h2>ONE NAME.<br />ONE MESSAGE.</h2>
          <p>
            Sign publicly with your name and country. Your email remains
            private and is used only for verification and campaign
            administration.
          </p>
        </div>
        <PetitionForm />
      </section>

      <section className="faq" id="faq">
        <p className="sectionLabel">Questions</p>
        <h2>FREQUENTLY ASKED</h2>
        <div className="faqList">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="support">
        <div>
          <p className="sectionLabel light">Keep it independent</p>
          <h2>SUPPORT THE CAMPAIGN.</h2>
        </div>
        <div>
          <p>
            Contributions will help cover the domain, hosting, security,
            maintenance and responsible promotion. A payment option will be
            added after the petition infrastructure is fully tested.
          </p>
          <button className="outlineButton" disabled>Support coming soon</button>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">IMR<span>.</span></a>
        <p>
          Independent campaign. Not affiliated with or endorsed by FIFA.
          Opinions are presented as opinions.
        </p>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <small>© {new Date().getFullYear()} Infantino Must Resign</small>
      </footer>
    </main>
  );
}
