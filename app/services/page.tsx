import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Services — go2ways",
  description: "We make operations easier to run by connecting data, assets, people and workflows into one intelligent operational view.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="silk-wave" data-wave="hero" data-parallax="" aria-hidden="true" />
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["We make Operations", "easier to run"]} />
          <p className="body-l hero-sub">Connecting data, assets, people and workflows into one intelligent operational view.</p>
        </div>
      </section>
      <section className="panel" id="how-we-work">
        <div className="panel-intro">
          <h2 className="heading-l reveal">How We Work</h2>
          <p className="body-l reveal" style={{ "--stagger": 1 }}>We combine operational context with technology<br />so teams can move faster without losing visibility or control.</p>
        </div>
        <div className="card-grid" data-stagger-children="">
          <article className="feature-card reveal">
            <div className="media" data-tilt="" style={{ padding: "8px 12px" }}>
              <div className="media-inner" style={{ borderRadius: "16px" }}>
                <img className="crop-ops" src={asset("/assets/img/svc-operations.png")} alt="Isometric city map with buses, depots and a field engineer, showing how assets and people connect" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Start with the operations</h3>
              <p className="body-m text-slate">We map the assets, people, workflows and decisions that keep the operation moving.</p>
              <p className="body-m text-slate">From vehicles and infrastructure to teams, schedules and real-world constraints, we build a complete picture of how your operation works. By understanding how everything connects, we can identify bottlenecks, dependencies and opportunities for improvement.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner" style={{ background: `url(${asset("/assets/img/svc-workflow-bg.png")}) center/cover` }}>
                <img className="crop-together" src={asset("/assets/img/svc-info-together.png")} alt="go2ways hub linking fleet, field teams, cloud data, facilities and documents" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Bring Information Together</h3>
              <p className="body-m text-slate">We create a shared operational view so teams are not working from different versions of the truth.</p>
              <p className="body-m text-slate">By connecting data across systems, departments and external sources, go2ways brings critical information into one up-to-date view. Everyone gets the context they need to coordinate faster, reduce manual handoffs and stay aligned.</p>
            </div>
          </article>
          <article className="feature-card reveal">
            <div className="media" data-tilt="">
              <div className="media-inner" style={{ background: "var(--surface-media)" }}>
                <img className="crop-action" src={asset("/assets/img/svc-data-action.png")} alt="Dashboard that identifies patterns, prioritises work and improves performance" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Turn Data into Action</h3>
              <p className="body-m text-slate">Use history and current information to identify patterns, prioritize work and improve performance.</p>
              <p className="body-m text-slate">We turn operational data into clear insights and actionable recommendations. Teams can identify recurring issues, prioritize what matters most and make faster, better decisions that continuously improve performance across the network.</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section container" id="why">
        <h2 className="why-logo reveal">Why <img src={asset("/assets/img/footer-logo.png")} alt="go2ways" width="144" height="30" /><span className="qmark" aria-hidden="true">?</span></h2>
        <p className="eyebrow-red reveal" style={{ "--stagger": 1 }}>The Problem</p>
        <div className="problem-row">
          <div className="problem-copy">
            <h3 className="heading-l reveal">Critical information<br />is scattered</h3>
            <p className="body-l reveal" style={{ "--stagger": 1 }}>When an asset breaks down or a vehicle needs attention, teams spend valuable time searching across multiple sources.</p>
            <span className="grad-rule reveal" data-inview="" style={{ "--stagger": 2 }} aria-hidden="true" />
          </div>
          <figure className="sources-card reveal-scale" data-inview="" aria-label="Information is spread across a system, team messages, spreadsheets and phone calls, with no single shared view">
            <figcaption className="card-label">Information spread across sources</figcaption>
            <svg className="src-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M28 38 C28 62, 50 62, 50 86" />
              <path d="M72 38 C72 62, 50 62, 50 86" />
              <path d="M28 62 C28 76, 50 74, 50 86" />
              <path d="M72 62 C72 76, 50 74, 50 86" />
            </svg>
            <div className="src-grid">
              <div className="src-tile">
                <span className="src-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M8 20h8M12 16v4" />
                  </svg>
                </span>
                <span>
                  <b>System A</b>
                  <small>Asset status</small>
                </span>
              </div>
              <div className="src-tile">
                <span className="src-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
                  </svg>
                </span>
                <span>
                  <b>Team messages</b>
                  <small>Latest updates</small>
                </span>
              </div>
              <div className="src-tile">
                <span className="src-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M3 15h18M9 3v18" />
                  </svg>
                </span>
                <span>
                  <b>Spreadsheets</b>
                  <small>Operational records</small>
                </span>
              </div>
              <div className="src-tile">
                <span className="src-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <span>
                  <b>Phone calls</b>
                  <small>Verbal handovers</small>
                </span>
              </div>
            </div>
            <div className="no-view"><span className="dot" aria-hidden="true" />No single shared view</div>
          </figure>
        </div>
        <div className="point-row" data-stagger-children="">
          <article className="point-card reveal">
            <span className="bang" style={{ "--d": 0 }} aria-hidden="true">!</span>
            <div>
              <h3>Teams spend time searching for context</h3>
              <p>Information is spread across sources.</p>
            </div>
          </article>
          <article className="point-card reveal">
            <span className="bang" style={{ "--d": 1 }} aria-hidden="true">!</span>
            <div>
              <h3>Conflicting information has to be reconciled</h3>
              <p>Teams must piece together what is true.</p>
            </div>
          </article>
          <article className="point-card reveal">
            <span className="bang" style={{ "--d": 2 }} aria-hidden="true">!</span>
            <div>
              <h3>Coordinating the next step creates delays</h3>
              <p>Action waits on calls and handovers.</p>
            </div>
          </article>
        </div>
        <svg className="converge" viewBox="0 0 1200 110" preserveAspectRatio="none" aria-hidden="true" data-inview="">
          <path d="M200 0 C200 60, 600 40, 600 100" />
          <path d="M600 0 L600 100" />
          <path d="M1000 0 C1000 60, 600 40, 600 100" />
        </svg>
      </section>
      <section className="section container" id="solution">
        <div className="section-header">
          <h2 className="why-logo small reveal">The <img src={asset("/assets/img/footer-logo.png")} alt="go2ways" width="144" height="30" /> solution</h2>
          <p className="heading-l reveal" style={{ "--stagger": 1 }}>One connected view<br />for every operation</p>
          <p className="body-l reveal" style={{ "--stagger": 2 }}>Teams, fleet, data and records come together in one live view, so everyone knows what to do next.</p>
        </div>
        <div className="org-row">
          <div className="org-inputs">
            <p className="card-label">Connected inputs</p>
            <ul className="in-list">
              <li className="in-pill reveal" style={{ "--stagger": 0 }}><span className="in-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" /></svg></span>Teams</li>
              <li className="in-pill reveal" style={{ "--stagger": 1 }}><span className="in-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="15" rx="2" /><path d="M4 11h16M8 18v3M16 18v3M8 14.5h.01M16 14.5h.01" /></svg></span>Fleet</li>
              <li className="in-pill reveal" style={{ "--stagger": 2 }}><span className="in-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg></span>Data</li>
              <li className="in-pill reveal" style={{ "--stagger": 3 }}><span className="in-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg></span>Records</li>
            </ul>
          </div>
          <svg className="in-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" data-inview="">
            <path d="M0 14 C55 14, 45 50, 100 50" />
            <path d="M0 38 C55 38, 45 50, 100 50" />
            <path d="M0 62 C55 62, 45 50, 100 50" />
            <path d="M0 86 C55 86, 45 50, 100 50" />
          </svg>
          <div className="org-dash">
            <p className="card-label">All organised in go2ways</p>
            <div className="dash reveal-scale" data-inview="" role="img" aria-label="Example go2ways operations overview showing active assets, on-time status, items needing attention, network activity and live alerts">
              <div className="dash-top" aria-hidden="true">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                {" "}
                <img src={asset("/assets/img/logo.png")} alt="" width="90" height="25" />
                {" "}
                <span className="live"><span className="pulse" />Live overview</span>
              </div>
              <div className="dash-body" aria-hidden="true">
                <p className="dash-title">Operations overview</p>
                <p className="dash-sub">Your operation, organised in one place</p>
                <div className="dash-stats">
                  <div>
                    <small>Active assets</small>
                    <b>
                      <span data-count="128">128</span>
                    </b>
                  </div>
                  <div>
                    <small>On-time status</small>
                    <b><span data-count="94">94</span>%</b>
                  </div>
                  <div className="warn">
                    <small>Needs attention</small>
                    <b>03 <em>items</em></b>
                  </div>
                </div>
                <div className="dash-bottom">
                  <div className="dash-chart">
                    <small>Network activity</small>
                    {" "}
                    <svg viewBox="0 0 300 70" preserveAspectRatio="none">
                      <path className="l1" d="M0 52 C30 48, 45 30, 75 34 S120 50, 150 36 S200 12, 230 20 S275 30, 300 14" />
                      <path className="l2" d="M0 62 C35 60, 55 50, 85 54 S135 62, 165 50 S215 38, 245 44 S280 40, 300 34" />
                    </svg>
                  </div>
                  <div className="dash-alerts">
                    <small>Live attention</small>
                    <p className="alert-row amber"><i />Vehicle service due</p>
                    <p className="alert-row blue"><i />Route update received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="point-row" data-stagger-children="">
          <article className="point-card good reveal">
            <span className="good-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
              </svg>
            </span>
            <div>
              <h3>Faster decisions</h3>
              <p>Everyone works from the same live picture.</p>
            </div>
          </article>
          <article className="point-card good reveal">
            <span className="good-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12.5 2.8 2.8L16.5 9.5" />
              </svg>
            </span>
            <div>
              <h3>Easier coordination</h3>
              <p>Teams, fleet and records stay in step.</p>
            </div>
          </article>
          <article className="point-card good reveal">
            <span className="good-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <div>
              <h3>Confident action</h3>
              <p>Clear next steps, without chasing calls.</p>
            </div>
          </article>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}
