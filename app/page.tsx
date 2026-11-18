import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "go2ways — Intelligent AI Bot Assistant",
  description: "go2ways connects data, assets, people and workflows into one intelligent operational view.",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="silk-wave" data-wave="hero" data-parallax="" aria-hidden="true" />
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Intelligent AI Bot Assistant", "for Modern Businesses"]} />
          <p className="body-l hero-sub">Connecting data, assets, people and workflows into one intelligent operational view.</p>
        </div>
      </section>
      <section className="panel" id="features">
        <div className="landing-intro">
          <div className="reveal">
            <span className="pill-tag">AI-Powered Automation</span>
          </div>
          <div className="landing-intro-copy">
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Transforming Companies<br />with Smart AI Assistance</h2>
            <p className="body-l text-slate reveal" style={{ "--stagger": 2 }}>Our AI Bot Assistant combines natural language processing, machine learning, and contextual understanding to deliver accurate, real-time responses across multiple channels.</p>
          </div>
        </div>
        <div className="card-grid" data-stagger-children="">
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/workflow-automation.jpg")} alt="Operations control room with engineers monitoring live dashboards" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Workflow Automation</h3>
              <p className="muted">Design multi-step flows without code</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/ibm-maximo.jpg")} alt="Technician in a hard hat checking asset details on a tablet in a warehouse" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">IBM Maximo</h3>
              <p className="muted">Human-like replies across every channel</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/analytics-reporting.jpg")} alt="Analytics dashboard with performance charts on a tablet" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Analytics &amp; Reporting</h3>
              <p className="muted">Track performance instantly</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section container" id="how">
        <div className="section-header">
          <span className="pill-tag reveal">How it Works</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Launch your AI assistant<br />in three simple steps</h2>
          <p className="body-l reveal" style={{ "--stagger": 2 }}>Go from sign-up to automated conversations in an afternoon — no engineering team required.</p>
        </div>
        <div className="card-grid" data-stagger-children="">
          <article className="step-card reveal">
            <span className="step-num">01</span>
            <h3 className="heading-s">Connect your channels</h3>
            <p className="body-m">Plug go2ways into your website, WhatsApp, Slack or help desk in minutes with no-code integrations.</p>
          </article>
          <article className="step-card reveal">
            <span className="step-num">02</span>
            <h3 className="heading-s">Train on your knowledge</h3>
            <p className="body-m">Upload docs, FAQs and past tickets. The assistant learns your tone, policies and products.</p>
          </article>
          <article className="step-card reveal">
            <span className="step-num">03</span>
            <h3 className="heading-s">Automate &amp; improve</h3>
            <p className="body-m">Launch workflows, hand off to humans when needed, and track resolution in real time.</p>
          </article>
        </div>
      </section>
      <section className="section container" id="why">
        <div className="split">
          <div className="photo-frame reveal-scale" role="img" aria-label="Team at work">
            <div className="photo-fallback">
              <img src={asset("/assets/img/logo.png")} alt="" />
            </div>
            <img className="photo" src={asset("/assets/img/team.jpg")} alt="" />
          </div>
          <div className="split-copy">
            <span className="pill-tag reveal">Why go2ways</span>
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Built for teams<br />that move fast</h2>
            <p className="body-l reveal" style={{ "--stagger": 2 }}>Give every customer an instant, accurate answer while your team focuses on the conversations that need a human touch.</p>
            <ul className="checklist reveal" style={{ "--stagger": 3 }}>
              <li>Human-like answers in 40+ languages</li>
              <li>Seamless hand-off to live agents</li>
              <li>Enterprise-grade security &amp; SOC 2 compliance</li>
            </ul>
            <div className="stats-row reveal" style={{ "--stagger": 4 }}>
              <div>
                <b><span data-count="24">24</span>/7</b>
                <small>Always-on support</small>
              </div>
              <div>
                <b><span data-count="84">84</span>%</b>
                <small>Tickets auto-resolved</small>
              </div>
              <div>
                <b><span data-count="3">3</span>×</b>
                <small>Faster first response</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="pricing">
        <div className="section-header" style={{ marginBottom: "0" }}>
          <a className="pill-tag reveal" href={link("/contact")}>Contact Us</a>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Simple, transparent pricing</h2>
          <p className="body-l reveal" style={{ "--stagger": 2 }}>Start free for 14 days. Scale as your conversations grow.</p>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}
