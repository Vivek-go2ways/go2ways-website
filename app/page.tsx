import type { Metadata } from "next";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Go2Ways | Enterprise Technology, AI Solutions & Software Products",
  description: "Go2Ways delivers enterprise technology services, AI solutions and innovative software products to help organisations modernise and grow.",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="silk-wave" data-wave="hero" data-parallax="" aria-hidden="true" />
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Technology That Moves", "Businesses Forward."]} />
          <p className="body-l hero-sub">Go2Ways helps organisations modernise operations through enterprise technology services, AI solutions and innovative software products.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={link("/services")}>Explore Our Solutions</a>
            <a className="btn btn-secondary" href={link("/contact")}>Contact Us</a>
          </div>
        </div>
      </section>
      <section className="panel" id="features">
        <div className="landing-intro">
          <div className="reveal">
            <span className="pill-tag">Solutions Designed Around Your Business</span>
          </div>
          <div className="landing-intro-copy">
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Technology Expertise.<br />Business-Focused Solutions.</h2>
            <p className="body-l text-slate reveal" style={{ "--stagger": 2 }}>We bring together enterprise technology expertise, intelligent AI capabilities and purpose-built software to help businesses solve complex challenges, improve operations and move forward with confidence.</p>
          </div>
        </div>
        <div className="card-grid" data-stagger-children="">
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/ibm-maximo.jpg")} alt="Enterprise technology engineers managing systems on a digital device" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Enterprise Technology Services</h3>
              <p className="muted">Modernise enterprise systems, manage critical assets and connect business operations through technology consulting, implementation and integration.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/workflow-automation.jpg")} alt="Operations team monitoring automated workflows and intelligent data dashboards" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">AI &amp; Intelligent Solutions</h3>
              <p className="muted">Explore practical AI solutions that help organisations automate workflows, improve decision-making and unlock value from their data.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/analytics-reporting.jpg")} alt="Software analytics dashboard displaying real-world performance metrics" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Software Products &amp; Innovation</h3>
              <p className="muted">Develop and deliver purpose-built software products that address real-world operational challenges, including our intelligent transport management platform, Ordova.</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section container" id="how">
        <div className="section-header">
          <span className="pill-tag reveal">Featured Product</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Meet Ordova</h2>
          <p className="body-l reveal" style={{ "--stagger": 2 }}><strong>Smarter Transport. Better Operations.</strong></p>
          <p className="body-l reveal" style={{ "--stagger": 3 }}>Ordova is an intelligent transport management platform designed to help transport operators and authorities manage planning, fleet operations and performance through connected technology.</p>
          <div className="reveal" style={{ "--stagger": 4 }}>
            <a className="btn btn-primary" href="https://ordova.go2ways.com/" target="_blank" rel="noopener noreferrer">Discover Ordova</a>
          </div>
        </div>
        <div className="card-grid" data-stagger-children="">
          <article className="step-card reveal">
            <span className="step-num">01</span>
            <h3 className="heading-s">Intelligent Planning</h3>
            <p className="body-m">Streamline route scheduling, vehicle allocations and service planning across transport networks.</p>
          </article>
          <article className="step-card reveal">
            <span className="step-num">02</span>
            <h3 className="heading-s">Fleet Operations</h3>
            <p className="body-m">Coordinate drivers, track vehicle movements live and maintain real-time operational control.</p>
          </article>
          <article className="step-card reveal">
            <span className="step-num">03</span>
            <h3 className="heading-s">Connected Performance</h3>
            <p className="body-m">Analyze service punctuality, fleet efficiency and key transit metrics for continuous improvement.</p>
          </article>
        </div>
      </section>
      <section className="section container" id="why">
        <div className="split">
          <div className="photo-frame reveal-scale" role="img" aria-label="Go2Ways technology team at work">
            <div className="photo-fallback">
              <img src={asset("/assets/img/logo.png")} alt="Go2Ways logo" />
            </div>
            <img className="photo" src={asset("/assets/img/team.jpg")} alt="Go2Ways technology team collaborate on client solutions" />
          </div>
          <div className="split-copy">
            <span className="pill-tag reveal">Why Go2Ways</span>
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>A Technology Partner<br />Focused on Real Business Outcomes</h2>
            <p className="body-l reveal" style={{ "--stagger": 2 }}>We combine enterprise systems expertise with modern AI and purpose-built software to deliver measurable outcomes and enduring technology partnerships.</p>
            <ul className="checklist reveal" style={{ "--stagger": 3 }}>
              <li>Enterprise technology expertise</li>
              <li>Solutions aligned with business needs</li>
              <li>Connected systems and integrated workflows</li>
              <li>Practical application of AI and innovation</li>
              <li>Commitment to long-term technology partnerships</li>
            </ul>
          </div>
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
