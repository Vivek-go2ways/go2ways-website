import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Industries — Go2Ways",
  description: "Go2Ways transforms physical assets across 8 mission-critical sectors.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="hero industries-hero">
        <div className="wave-bottom-clip" aria-hidden="true">
          <div className="silk-wave" data-wave="hero" />
        </div>
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Transforming physical assets", "across 8 mission-critical sectors"]} />
          <p className="body-l hero-sub">Connecting data, assets, people and workflows into one intelligent operational view.</p>
        </div>
        <div className="stat-row" data-stagger-children="">
          <div className="stat reveal">
            <b><span data-count="30">30</span>+</b>
            <span className="label">Active Clients</span>
          </div>
          <div className="stat reveal">
            <b><span data-count="50">50</span>+</b>
            <span className="label">Projects Done</span>
          </div>
          <div className="stat reveal">
            <b><span data-count="25">25</span>+</b>
            <span className="label">Team Advisors</span>
          </div>
          <div className="stat reveal">
            <b><span data-count="5">5</span>+</b>
            <span className="label">Glorious Years</span>
          </div>
        </div>
      </section>
      <section className="clients container-wide center" id="clients">
        <div className="bg-lines" data-ribbon="" data-faint="" aria-hidden="true" />
        <h2 className="display-xl reveal">Services Provided To</h2>
        <ul className="logo-grid" data-stagger-children="">
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/lti.png")} alt="LTI, a Larsen & Toubro Group company" style={{ "--logo-h": "62px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/briwo.png")} alt="BRIWO" style={{ "--logo-h": "52px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/ibm-maximo.png")} alt="IBM Maximo" style={{ "--logo-h": "60px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/asahi-kasei.png")} alt="Asahi Kasei" style={{ "--logo-h": "42px" }} loading="lazy" />
          </li>
        </ul>
        <ul className="logo-grid logo-row-2" data-stagger-children="">
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/saudi-electricity.png")} alt="Saudi Electricity Company" style={{ "--logo-h": "46px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/connixt.png")} alt="CONNIXT" style={{ "--logo-h": "30px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/mitsubishi-heavy-industries.png")} alt="Mitsubishi Heavy Industries" style={{ "--logo-h": "34px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <img src={asset("/assets/img/logos/quantum-strides.png")} alt="Quantum Strides LLC" style={{ "--logo-h": "48px" }} loading="lazy" />
          </li>
          <li className="logo-tile reveal-scale">
            <span className="wm more">&amp; more....</span>
          </li>
        </ul>
      </section>
      <section className="section container" id="sectors">
        <h2 className="display-xl center reveal" style={{ marginBottom: "56px" }}>Sectors We Work In</h2>
        <div className="sector-grid last-two" data-stagger-children="">
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/manufacturing.jpg")} alt="CNC machines on a modern factory floor" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Manufacturing</h3>
              <p className="muted">Predictive maintenance &amp; plant automation</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/utilities.jpg")} alt="Electrical substation with transformers and power lines" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Utilities</h3>
              <p className="muted">Grid reliability &amp; field workforce mobility</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/oil-gas.jpg")} alt="Oil refinery with storage tanks at sunset" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Oil &amp; Gas</h3>
              <p className="muted">Upstream &amp; downstream safety compliance</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/government.jpg")} alt="Aerial view of a city highway interchange" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Government</h3>
              <p className="muted">Public infrastructure &amp; municipal asset lifecycle</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/healthcare.jpg")} alt="Hospital operating room with medical equipment" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Healthcare</h3>
              <p className="muted">Biomedical equipment &amp; hospital facility uptime</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/infrastructure.jpg")} alt="Crane lifting a bridge section into place" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Infrastructure</h3>
              <p className="muted">Large-scale capital projects &amp; civil engineering</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/transportation.jpg")} alt="City buses parked at a depot" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Transportation</h3>
              <p className="muted">Rail, transit &amp; fleet maintenance intelligence</p>
            </div>
          </article>
          <article className="feature-card sector reveal">
            <div className="media" data-tilt="">
              <div className="media-inner">
                <img className="photo-fill" src={asset("/assets/img/photos/real-estate.jpg")} alt="Modern glass office building" width="880" height="1010" loading="lazy" />
              </div>
            </div>
            <div className="text">
              <h3 className="heading-s">Real Estate</h3>
              <p className="muted">TRIRIGA space planning &amp; portfolio operations</p>
            </div>
          </article>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}
