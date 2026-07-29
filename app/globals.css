:root {
  --ink: #0b0b0d;
  --paper: #f1efe8;
  --red: #ff3b30;
  --muted: #a6a39d;
  --line: rgba(255,255,255,.16);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
}
a { color: inherit; text-decoration: none; }
button, input, textarea { font: inherit; }

.siteHeader {
  height: 76px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  width: 100%;
  color: white;
  border-bottom: 1px solid var(--line);
}
.brand { font-size: 25px; font-weight: 950; letter-spacing: -2px; }
.brand span { color: var(--red); }
.siteHeader nav { display: flex; align-items: center; gap: 30px; font-size: 13px; font-weight: 700; }
.navButton {
  padding: 12px 18px;
  border: 1px solid rgba(255,255,255,.5);
  text-transform: uppercase;
  letter-spacing: .08em;
}

.hero {
  min-height: 100vh;
  background:
    radial-gradient(circle at 85% 25%, rgba(255,59,48,.23), transparent 32%),
    linear-gradient(120deg, #08080a 0%, #111116 52%, #070709 100%);
  color: white;
  position: relative;
  display: grid;
  align-items: center;
  overflow: hidden;
}
.gridOverlay {
  position: absolute; inset: 0; opacity: .16;
  background-image:
    linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: linear-gradient(to right, black, transparent 82%);
}
.heroInner { position: relative; z-index: 2; padding: 130px 7vw 70px; max-width: 1180px; }
.eyebrow, .sectionLabel {
  text-transform: uppercase;
  letter-spacing: .2em;
  font-size: 11px;
  font-weight: 900;
}
.eyebrow { color: #c9c6c1; display: flex; align-items: center; gap: 10px; }
.eyebrow span { width: 32px; height: 2px; background: var(--red); }
.hero h1 {
  margin: 24px 0;
  font-size: clamp(72px, 11.5vw, 178px);
  line-height: .82;
  letter-spacing: -.07em;
  font-weight: 950;
}
.hero h1 em { color: var(--red); font-style: normal; }
.heroCopy {
  max-width: 690px;
  color: #c5c2bd;
  font-size: clamp(17px, 2vw, 23px);
  line-height: 1.5;
}
.heroActions { display: flex; align-items: center; gap: 28px; margin: 38px 0 54px; }
.primaryButton, .formButton {
  border: 0;
  background: var(--red);
  color: white;
  padding: 18px 26px;
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
}
.primaryButton:hover, .formButton:hover { filter: brightness(1.08); }
.textLink { font-size: 14px; font-weight: 750; }
.counter { width: min(520px, 100%); }
.counter strong { display: block; font-size: 44px; letter-spacing: -.04em; }
.counter span { color: #9d9993; font-size: 10px; letter-spacing: .18em; font-weight: 800; }
.counterLine { height: 2px; background: rgba(255,255,255,.16); margin-top: 14px; }
.counterLine i { display: block; width: 24%; height: 100%; background: var(--red); }
.scrollMarker {
  position: absolute; right: 4vw; bottom: 42px; color: #777;
  font-size: 9px; letter-spacing: .2em; transform: rotate(90deg);
}
.scrollMarker span { color: var(--red); margin-left: 8px; }

.statement {
  padding: 120px 7vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 8vw;
}
.sectionLabel { color: #77736c; }
.statement h2, .petitionIntro h2, .faq h2, .support h2 {
  font-size: clamp(48px, 7vw, 105px);
  line-height: .9;
  letter-spacing: -.06em;
  margin: 0 0 42px;
}
.statement div { max-width: 1000px; }
.statement div p {
  max-width: 760px;
  font-size: 20px;
  line-height: 1.65;
  color: #43413d;
}

.principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #cbc7be;
  border-bottom: 1px solid #cbc7be;
}
.principles article { padding: 70px 5vw; border-right: 1px solid #cbc7be; }
.principles article:last-child { border-right: 0; }
.principles span { color: var(--red); font-size: 12px; font-weight: 900; }
.principles h3 { font-size: 28px; margin: 44px 0 20px; }
.principles p { color: #5d5953; line-height: 1.65; }

.petitionSection {
  padding: 120px 7vw;
  background: #0b0b0d;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9vw;
}
.light { color: #aaa69f; }
.petitionIntro p:last-child { color: #aaa69f; line-height: 1.7; max-width: 500px; }
.petitionForm {
  padding: 38px;
  border: 1px solid rgba(255,255,255,.16);
  background: #111115;
}
.petitionForm label {
  display: block;
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 22px;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.petitionForm label small { float: right; color: #777; text-transform: none; letter-spacing: 0; }
.petitionForm input, .petitionForm textarea {
  display: block;
  width: 100%;
  margin-top: 9px;
  border: 1px solid #35353b;
  background: #0b0b0e;
  color: white;
  padding: 14px;
  outline: none;
}
.petitionForm input:focus, .petitionForm textarea:focus { border-color: var(--red); }
.twoCol { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.consent { display: flex !important; gap: 12px; text-transform: none !important; letter-spacing: 0 !important; line-height: 1.5; }
.consent input { width: 18px; margin: 2px 0 0; flex: 0 0 18px; }
.consent a { text-decoration: underline; }
.formButton { width: 100%; }
.formButton:disabled { opacity: .65; cursor: wait; }
.formMessage { line-height: 1.5; padding: 13px; margin-bottom: 0; }
.formMessage.success { background: rgba(44,190,90,.12); }
.formMessage.error { background: rgba(255,59,48,.12); }

.faq { padding: 120px 7vw; }
.faq h2 { max-width: 900px; }
.faqList { border-top: 1px solid #bbb6ad; }
.faq details { border-bottom: 1px solid #bbb6ad; padding: 24px 0; }
.faq summary {
  list-style: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary span { color: var(--red); }
.faq details p { max-width: 780px; color: #5e5a54; line-height: 1.7; }

.support {
  padding: 100px 7vw;
  background: var(--red);
  color: white;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 8vw;
}
.support p { line-height: 1.7; max-width: 560px; }
.outlineButton {
  margin-top: 20px;
  border: 1px solid rgba(255,255,255,.7);
  color: white;
  background: transparent;
  padding: 16px 22px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .08em;
}

footer {
  background: #08080a;
  color: #aaa;
  padding: 55px 7vw;
  display: grid;
  grid-template-columns: .6fr 2fr 1fr;
  gap: 30px;
  align-items: start;
}
.footerBrand { color: white; }
footer p { margin: 0; max-width: 620px; line-height: 1.6; }
footer div { display: flex; gap: 20px; }
footer small { grid-column: 1 / -1; border-top: 1px solid #25252a; padding-top: 25px; margin-top: 20px; }

.legalPage { max-width: 850px; margin: 0 auto; padding: 70px 24px 120px; }
.legalPage h1 { font-size: clamp(48px, 8vw, 90px); letter-spacing: -.06em; }
.legalPage h2 { margin-top: 42px; }
.legalPage p { line-height: 1.75; color: #4c4944; }
.legalDate { color: #777 !important; }
.backLink { font-weight: 800; }

@media (max-width: 820px) {
  .siteHeader nav a:not(.navButton) { display: none; }
  .hero h1 { font-size: clamp(58px, 19vw, 105px); }
  .statement, .petitionSection, .support { grid-template-columns: 1fr; }
  .statement { gap: 35px; }
  .principles { grid-template-columns: 1fr; }
  .principles article { border-right: 0; border-bottom: 1px solid #cbc7be; }
  .petitionForm { padding: 22px; }
  .twoCol { grid-template-columns: 1fr; gap: 0; }
  footer { grid-template-columns: 1fr; }
  footer small { grid-column: 1; }
}
