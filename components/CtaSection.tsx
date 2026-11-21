import { link } from "@/lib/paths";

export default function CtaSection({ formAnchor = false }: { formAnchor?: boolean }) {
  const hash = formAnchor ? "#contact-form" : "";
  return (
    <section className="cta container">
      <div className="cta-card reveal-scale">
        <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
<h2 className="heading-l">Planning Your Next Enterprise<br />Modernisation or MAS Migration?</h2>
<p className="body-l">Speak with our certified architects to assess your systems, roadmap your upgrade, or discuss your technology goals.</p>
<div className="cta-actions">
  <a className="btn btn-primary" href={link(`/contact?topic=demo${hash}`)}>Talk to Our Team</a>
  {" "}
  <a className="btn btn-secondary" href={link(`/contact${hash}`)}>Explore Our Services</a>
</div>
      </div>
    </section>
  );
}
