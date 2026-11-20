import type { Metadata } from "next";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About Us — Go2Ways",
  description: "Go2Ways is an enterprise technology transformation partner for IBM Maximo, SAP and Oracle integrations, cloud, managed support and AI solutions.",
};

const STATS = [
  { value: 30, label: "Active Clients" },
  { value: 50, label: "Projects Done" },
  { value: 10, label: "Team Advisors" },
  { value: 5, label: "Glorious Years" },
];

const AI_POINTS = [
  {
    title: "AI & Intelligent Solutions",
    text: "Practical AI that helps organisations automate workflows, improve decision-making and unlock value from their data.",
    icon: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />,
  },
  {
    title: "AI-Ready Asset Management",
    text: "Helping clients move to IBM Maximo Application Suite and make use of its AI-driven capabilities for asset management.",
    icon: <path d="M4 20h16M6 16V9M10 16V5M14 16v-6M18 16V8" />,
  },
  {
    title: "AI in Our Products",
    text: "AI powers our software: Ordova recommends fixes that dispatchers approve, and Emp AI is built on the same intelligence.",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  },
];

const PILLARS = [
  { title: "Our Mission", image: "/assets/img/about/mission.jpg", alt: "Team discussing a project around a meeting table", text: "Help organisations improve efficiency, reduce operational risk and accelerate digital transformation." },
  { title: "Our Vision", image: "/assets/img/about/vision.jpg", alt: "Professional reviewing work on a tablet with colleagues behind", text: "Be the trusted partner for asset-driven businesses, connecting their systems, data and people." },
  { title: "Our Philosophy", image: "/assets/img/about/philosophy.jpg", alt: "Professional working on a tablet in a bright workspace", text: "Understand the business first, then build reliable technology that fits how it works." },
  { title: "Our Strategy", image: "/assets/img/about/strategy.jpg", alt: "Hands working on a laptop", text: "Combine enterprise expertise, practical AI and our own products to deliver lasting outcomes." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="hero industries-hero">
        <div className="wave-bottom-clip" aria-hidden="true">
          <div className="silk-wave" data-wave="hero" />
        </div>
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Your Enterprise Technology", "Transformation Partner"]} />
          <p className="body-l hero-sub">Enterprise technology services, AI solutions and software products that help organisations modernise operations and move business forward.</p>
        </div>
        <div className="stat-row" data-stagger-children="">
          {STATS.map((s) => (
            <div className="stat reveal" key={s.label}>
              <b><span data-count={s.value}>{s.value}</span>+</b>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="who-we-are">
        <div className="split">
          <div className="photo-frame reveal-scale" role="img" aria-label="Go2Ways team planning a project together">
            <div className="photo-fallback">
              <img src={asset("/assets/img/logo.png")} alt="Go2Ways logo" />
            </div>
            <img className="photo" src={asset("/assets/img/about/who-we-are.jpg")} alt="Team planning a project around a table" />
          </div>
          <div className="split-copy">
            <span className="pill-tag reveal">Who We Are</span>
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Hi, We&apos;re Go2Ways</h2>
            <p className="body-l reveal" style={{ "--stagger": 2 }}>Go2Ways delivers enterprise-grade technology services and AI solutions focused on IBM Maximo, SAP and Oracle integrations, cloud infrastructure and intelligent automation. Our team helps organisations improve efficiency, reduce operational risk and accelerate digital transformation.</p>
            <p className="body-l reveal" style={{ "--stagger": 3 }}>From implementation and integration to AI-driven automation, long-term support and infrastructure modernisation, we help businesses build scalable, reliable and intelligent technology ecosystems.</p>
            <ul className="checklist reveal" style={{ "--stagger": 4 }}>
              <li>IBM Silver Partner</li>
              <li>AWS Advanced Partner</li>
              <li>Red Hat Certified Partner</li>
              <li>SAP, Oracle and REST API integrations</li>
              <li>70+ certified professionals</li>
              <li>15+ years of experience across 8+ industries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container" id="ai">
        <div className="section-header">
          <span className="pill-tag reveal">AI at Our Core</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Intelligence Built Into Everything We Deliver</h2>
          <p className="body-l reveal" style={{ "--stagger": 2 }}>AI runs through our services and products, helping clients automate work, make faster decisions and get more from the enterprise systems they rely on every day.</p>
        </div>
        <div className="point-row" data-stagger-children="">
          {AI_POINTS.map((p) => (
            <article className="point-card good reveal" key={p.title}>
              <span className="good-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {p.icon}
                </svg>
              </span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="pillars">
        <div className="section-header">
          <span className="pill-tag reveal">What Drives Us</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Our Mission, Vision, Philosophy &amp; Strategy</h2>
        </div>
        <div className="card-grid cols-4" data-stagger-children="">
          {PILLARS.map((p) => (
            <article className="feature-card reveal" key={p.title}>
              <div className="media" data-tilt="">
                <div className="media-inner">
                  <img className="photo-fill" src={asset(p.image)} alt={p.alt} width="730" height="730" loading="lazy" />
                </div>
              </div>
              <div className="text">
                <h3 className="heading-s">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta container" id="cta">
        <div className="cta-card reveal-scale">
          <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
          <h2 className="heading-l">Let&apos;s Build What&apos;s Next.</h2>
          <p className="body-l">Whether you&apos;re modernising enterprise systems, exploring AI or looking for smarter software solutions, Go2Ways can help you take the next step.</p>
          <div className="cta-actions">
            <a className="btn btn-primary" href={link("/contact")}>Talk to Our Team</a>
          </div>
        </div>
      </section>
    </main>
  );
}
