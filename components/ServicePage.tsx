import { Fragment, type ReactNode } from "react";
import Icon from "./Icon";
import SplitWords from "./SplitWords";
import { isGroup, serviceBySlug, servicePath, type Service, type ServiceEntry } from "@/content/services";
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

function Hero({ s, children }: { s: ServiceEntry; children?: ReactNode }) {
  return (
    <section className="hero svc-hero">
      <div className="silk-wave" data-wave="hero" aria-hidden="true" />
      <div className="hero-copy">
        <span className="pill-tag hero-sub crumb"><Icon name={s.icon} />{s.name}</span>
        <SplitWords as="h1" className="display-xl split-words" lines={s.h1} />
        <p className="body-l hero-sub">{s.sub}</p>
        {children}
      </div>
    </section>
  );
}

function Body({ s, prefix = "" }: { s: Service; prefix?: string }) {
  return (
    <>
      <section className="section container" id={`${prefix}overview`}>
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

      <section className="section container" id={`${prefix}included`}>
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

      <section className="section container" id={`${prefix}process`}>
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

      <section className="section container" id={`${prefix}related`}>
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
    </>
  );
}

function Cta({ short, topic }: { short: string; topic: string }) {
  return (
    <section className="cta container">
      <div className="cta-card reveal-scale">
        <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
        <h2 className="heading-l">Let’s talk about<br />{short}</h2>
        <p className="body-l">Tell us where you are today and we’ll suggest a practical next step.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={topic}>Talk to Our Team</a>
          {" "}
          <a className="btn btn-secondary" href="tel:+918826949739">Explore Our Services</a>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ s }: { s: ServiceEntry }) {
  const topic = link(`/contact?topic=${s.slug}#contact-form`);

  if (isGroup(s)) {
    return (
      <main>
        <Hero s={s}>
          <div className="svc-switch hero-sub" role="tablist" aria-label="Choose a service" data-tabs="">
            {s.tabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-controls={`panel-${t.id}`}
                aria-selected={i === 0}
                tabIndex={i === 0 ? 0 : -1}
                data-tab={t.id}
              >
                <Icon name={t.service.icon} />
                {t.label}
              </button>
            ))}
          </div>
          <div className="hero-actions hero-sub">
            <a className="btn btn-primary" href={topic}>Talk to Our Team</a>
          </div>
        </Hero>
        {s.tabs.map((t, i) => (
          <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={i !== 0}>
            <Body s={t.service} prefix={`${t.id}-`} />
          </div>
        ))}
        <Cta short={s.short} topic={topic} />
      </main>
    );
  }

  return (
    <main>
      <Hero s={s}>
        <div className="hero-actions hero-sub">
          <a className="btn btn-primary" href={topic}>Talk to Our Team</a>
          {" "}
          <a className="btn btn-secondary" href="#included">Explore Our Services</a>
        </div>
      </Hero>
      <Body s={s} />
      <Cta short={s.short} topic={topic} />
    </main>
  );
}
