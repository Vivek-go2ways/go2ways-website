import { Fragment } from "react";
import Icon from "./Icon";
import SplitWords from "./SplitWords";
import { serviceBySlug, servicePath, type Service } from "@/content/services";
import { asset, link } from "@/lib/paths";

const pad2 = (n: number) => String(n).padStart(2, "0");

function Lines({ lines }: { lines: string[] }) {
  return lines.map((l, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {l}
    </Fragment>
  ));
}

function Photo({ folder, slot, alt, w, h, lazy = true }: { folder: string; slot: string; alt: string; w: number; h: number; lazy?: boolean }) {
  return <img src={asset(`/assets/img/services/${folder}/${slot}.jpg`)} alt={alt} width={w} height={h} loading={lazy ? "lazy" : undefined} />;
}

export default function ServicePage({ s }: { s: Service }) {
  const topic = link(`/contact?topic=${s.slug}#contact-form`);
  return (
    <main>
      <section className="hero svc-hero">
        <div className="silk-wave" data-wave="hero" aria-hidden="true" />
        <div className="hero-copy">
          <a className="pill-tag hero-sub crumb" href={link("/services")}><Icon name={s.icon} />{s.name}</a>
          <SplitWords as="h1" className="display-xl split-words" lines={s.h1} />
          <p className="body-l hero-sub">{s.sub}</p>
          <div className="hero-actions hero-sub">
            <a className="btn btn-primary" href={topic}>Talk to an expert</a>
            {" "}
            <a className="btn btn-secondary" href="#included">What’s included</a>
          </div>
        </div>
      </section>

      <section className="section container" id="overview">
        <div className="split">
          <div className="split-copy">
            <span className="pill-tag reveal">Overview</span>
            <h2 className="heading-l reveal" style={{ "--stagger": 1 }}><Lines lines={s.overviewTitle} /></h2>
            <p className="body-l reveal" style={{ "--stagger": 2 }}>{s.overviewBody}</p>
            <ul className="checklist reveal" style={{ "--stagger": 3 }}>
              {s.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div className="svc-gallery reveal-scale" data-slider="" aria-roledescription="carousel" aria-label={`${s.name} in practice`}>
            <div className="slides-viewport">
              <div className="slides">
                {s.gallery.map((alt, i) => (
                  <figure className="slide" key={i}><Photo folder={s.imageFolder ?? s.slug} slot={`g${i + 1}`} alt={alt} w={1200} h={900} lazy={i > 0} /></figure>
                ))}
              </div>
            </div>
            <div className="slider-dots" aria-label="Choose a photo" />
          </div>
        </div>
        <div className="svc-details reveal">
          <div>
            <h3 className="details-label">Works with</h3>
            <ul className="chip-list">{s.worksWith.map((w) => <li className="chip" key={w}>{w}</li>)}</ul>
          </div>
          <div>
            <h3 className="details-label">Typical engagements</h3>
            <ul className="engage-list">{s.engagements.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section container" id="included">
        <div className="section-header">
          <span className="pill-tag reveal">What we deliver</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Everything you need,<br />from one team</h2>
        </div>
        <div className="card-grid" data-stagger-children="">
          {s.capabilities.map((c, i) => (
            <article className="cap-card reveal" key={c.title}>
              <div className="cap-photo"><Photo folder={s.imageFolder ?? s.slug} slot={`c${i + 1}`} alt={c.photoAlt} w={800} h={520} /></div>
              <div className="cap-text">
                <h3 className="heading-s">{c.title}</h3>
                <p className="body-m">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="process">
        <div className="section-header">
          <span className="pill-tag reveal">How we deliver</span>
          <h2 className="heading-l reveal" style={{ "--stagger": 1 }}>Four steps, no surprises</h2>
          <p className="body-l reveal" style={{ "--stagger": 2 }}>Clear stages, regular demos and a named lead from start to finish.</p>
        </div>
        <div className="card-grid cols-4" data-stagger-children="">
          {s.steps.map((st, i) => (
            <article className="step-card reveal" key={st.title}>
              <span className="step-num">{pad2(i + 1)}</span>
              <h3 className="heading-s">{st.title}</h3>
              <p className="body-m">{st.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="related">
        <div className="section-header" style={{ marginBottom: "32px" }}>
          <span className="pill-tag reveal">Related services</span>
        </div>
        <div className="related-grid" data-stagger-children="">
          {s.related.map((slug, i) => {
            const r = serviceBySlug(slug)!;
            return (
              <Fragment key={slug}>
                {i > 0 && " "}
                <a className="related-card reveal" href={servicePath(slug)}>
                  <span className="mi-icon"><Icon name={r.icon} /></span>
                  {" "}
                  <span className="mi-text"><span className="mi-title">{r.name}</span><span className="mi-desc">{r.nav}</span></span>
                  {" "}
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </Fragment>
            );
          })}
        </div>
      </section>

      <section className="cta container">
        <div className="cta-card reveal-scale">
          <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
          <h2 className="heading-l">Let’s talk about<br />{s.short}</h2>
          <p className="body-l">Tell us where you are today and we’ll suggest a practical next step.</p>
          <div className="cta-actions">
            <a className="btn btn-primary" href={topic}>Talk to an expert</a>
            {" "}
            <a className="btn btn-secondary" href="tel:+918826949739">Call +91 88269 49739</a>
          </div>
        </div>
      </section>
    </main>
  );
}
