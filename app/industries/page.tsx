import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CtaSection from "@/components/CtaSection";
import SplitWords from "@/components/SplitWords";
import { asset, link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Industries — Go2Ways",
  description: "Go2Ways transforms physical assets across 8 mission-critical sectors.",
};

const ROW_1 = [
  { img: "/assets/img/logos/lti.png", alt: "LTI, a Larsen & Toubro Group company", h: "62px" },
  { img: "/assets/img/logos/briwo.png", alt: "BRIWO", h: "52px" },
  { img: "/assets/img/logos/asahi-kasei.png", alt: "Asahi Kasei", h: "42px" },
  { img: "/assets/img/logos/saudi-electricity.png", alt: "Saudi Electricity Company", h: "46px" },
];

const ROW_2 = [
  { img: "/assets/img/logos/mitsubishi-heavy-industries.png", alt: "Mitsubishi Heavy Industries", h: "34px" },
  { img: "/assets/img/logos/connixt.png", alt: "CONNIXT", h: "30px" },
  { img: "/assets/img/logos/quantum-strides.png", alt: "Quantum Strides", h: "48px" },
];

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
            <span className="label">Projects Delivered</span>
          </div>
          <div className="stat reveal">
            <b><span data-count="25">25</span>+</b>
            <span className="label">Team Advisors</span>
          </div>
          <div className="stat reveal">
            <b><span data-count="5">5</span>+</b>
            <span className="label">Years of Excellence</span>
          </div>
        </div>
      </section>
      <section className="clients container-wide center" id="clients">
        <div className="bg-lines" data-ribbon="" data-faint="" aria-hidden="true" />
        <h2 className="display-xl reveal">Services Provided To</h2>

        {/* Row 1: Rolling Right to Left */}
        <div className="logo-marquee" aria-label="Clients row 1">
          <div className="logo-marquee-track marquee-left">
            <ul className="logo-marquee-group">
              {[...ROW_1, ...ROW_1].map((c, i) => (
                <li className="logo-tile" key={i}>
                  <img src={asset(c.img)} alt={c.alt} style={{ "--logo-h": c.h } as CSSProperties} loading="lazy" />
                </li>
              ))}
            </ul>
            <ul className="logo-marquee-group" aria-hidden="true">
              {[...ROW_1, ...ROW_1].map((c, i) => (
                <li className="logo-tile" key={`dup-${i}`}>
                  <img src={asset(c.img)} alt="" style={{ "--logo-h": c.h } as CSSProperties} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Rolling Left to Right */}
        <div className="logo-marquee logo-row-2" aria-label="Clients row 2">
          <div className="logo-marquee-track marquee-right">
            <ul className="logo-marquee-group">
              {[...ROW_2, ...ROW_2, ...ROW_2].map((c, i) => (
                <li className="logo-tile" key={i}>
                  <img src={asset(c.img)} alt={c.alt} style={{ "--logo-h": c.h } as CSSProperties} loading="lazy" />
                </li>
              ))}
            </ul>
            <ul className="logo-marquee-group" aria-hidden="true">
              {[...ROW_2, ...ROW_2, ...ROW_2].map((c, i) => (
                <li className="logo-tile" key={`dup-${i}`}>
                  <img src={asset(c.img)} alt="" style={{ "--logo-h": c.h } as CSSProperties} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
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

