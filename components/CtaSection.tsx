export default function CtaSection({ formAnchor = false }: { formAnchor?: boolean }) {
  const hash = formAnchor ? "#contact-form" : "";
  return (
    <section className="cta container">
      <div className="cta-card reveal-scale">
        <div className="silk-wave" data-wave="cta" data-speed="0.8" aria-hidden="true" />
        <h2 className="heading-l">Ready to put your support<br />on autopilot?</h2>
        <p className="body-l">Join 2,000+ businesses using go2ways to answer faster and scale smarter.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={`/contact?topic=trial${hash}`}>Start free trial</a>
          {" "}
          <a className="btn btn-secondary" href={`/contact?topic=demo${hash}`}>Book a demo</a>
        </div>
      </div>
    </section>
  );
}
