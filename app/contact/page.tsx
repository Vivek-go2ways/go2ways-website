import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import SplitWords from "@/components/SplitWords";

export const metadata: Metadata = {
  title: "Get in Touch — Go2Ways",
  description: "Talk to Go2Ways. Share your requirements, ask questions, or book a demo.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero contact-hero">
        <div className="ribbon" data-ribbon="" aria-hidden="true" />
        <div className="hero-copy">
          <SplitWords as="h1" className="display-xl split-words" lines={["Get in Touch"]} />
          <p className="body-l hero-sub">Let’s start a conversation. Share your requirements, ask questions.</p>
        </div>
        <div className="container">
          <div className="info-cards" data-stagger-children="">
            <a className="info-card reveal" href="mailto:support@go2ways.com">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5 12 13l8.5-6.5" />
              </svg>
              <h2>Email Us</h2>
              <span style={{ fontSize: "14px", color: "#1f66cc" }}>support@go2ways.com</span>
              {" "}
            </a>
            {" "}
            <a className="info-card reveal" href="tel:+918826949739">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <h2>Call Us</h2>
              <p>+91 8826949739</p>
            </a>
            {" "}
            <a className="info-card reveal" href="https://www.google.com/maps/search/?api=1&query=314a+Sector+102+Gurugram+Haryana" target="_blank" rel="noopener">
              {" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h2>Our Office</h2>
              <p>314a Sector 102, Gurugram, Haryana</p>
            </a>
            <div className="info-card reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9.5" />
                <path d="M12 6.5V12l3.5 2" />
              </svg>
              <h2>Business Hours</h2>
              <p>Mon – Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="contact-grid">
          <div className="contact-intro reveal" data-inview="">
            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
            <span className="grad-rule" aria-hidden="true" />
          </div>
          <div className="form-card reveal-scale">
            <form id="contact-form" noValidate data-endpoint="/api/contact">
              <div className="hp" aria-hidden="true">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="form-grid">
                <div className="field">
                  <input id="f-name" name="name" type="text" autoComplete="name" placeholder=" " required />
                  {" "}
                  <label htmlFor="f-name">Name *</label>
                  {" "}
                  <span className="err" aria-live="polite" />
                </div>
                <div className="field">
                  <input id="f-email" name="email" type="email" autoComplete="email" placeholder=" " required />
                  {" "}
                  <label htmlFor="f-email">Work Email *</label>
                  {" "}
                  <span className="err" aria-live="polite" />
                </div>
                <div className="field">
                  <input id="f-company" name="company" type="text" autoComplete="organization" placeholder=" " />
                  {" "}
                  <label htmlFor="f-company">Company</label>
                </div>
                <div className="field">
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder=" " />
                  {" "}
                  <label htmlFor="f-phone">Phone Number</label>
                  {" "}
                  <span className="err" aria-live="polite" />
                </div>
                <div className="field full">
                  <textarea id="f-message" name="message" rows={4} placeholder=" " required />
                  {" "}
                  <label htmlFor="f-message">Your Message *</label>
                  {" "}
                  <span className="err" aria-live="polite" />
                </div>
              </div>
              <button className="btn btn-gradient" type="submit"><span className="spinner" aria-hidden="true" />Send Message</button>
            </form>
            <div className="form-success" role="status" aria-live="polite">
              <div>
                <svg className="tick" viewBox="0 0 72 72" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="36" cy="36" r="33" stroke="#a9cb32" />
                  <path d="M22 37l9 9 19-20" stroke="#2f6aa6" />
                </svg>
                <h3>Thanks, <span data-name="">there</span>!</h3>
                <p>Your message is on its way. We’ll reply within 24 hours on business days.</p>
                <button className="btn btn-secondary" type="button" data-send-another="">Send another message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="faq">
        <div className="section-header" style={{ maxWidth: "820px", marginBottom: "24px", gap: "16px" }}>
          <p className="faq-eyebrow reveal">FAQ</p>
          <h2 className="faq-title reveal" style={{ "--stagger": 1 }}>Common Questions</h2>
          <p className="faq-sub reveal" style={{ "--stagger": 2, marginTop: "16px" }}>Find answers to frequently asked questions about our products, services and more.</p>
        </div>
        <div className="faq-grid">
          <div className="faq-col" data-stagger-children="">
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-1">How can I get started with Go2Ways?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-1">
                <div>
                  <p>Send us a message using the form above or book a demo. We’ll set up a short call to understand your operation, then propose a pilot scoped to your assets and teams.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-3">Do you offer custom solutions?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-3">
                <div>
                  <p>Yes. Every operation is different, so we tailor workflows, integrations and dashboards to your systems, whether that’s IBM Maximo, TRIRIGA, spreadsheets or in-house tools.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-5">What kind of support do you provide?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-5">
                <div>
                  <p>From onboarding and training to ongoing optimisation, our team stays with you. You get a named point of contact plus help-desk support during business hours.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-col" data-stagger-children="">
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-2">Where are you located?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-2">
                <div>
                  <p>Our office is at 314a Sector 102, Gurugram, Haryana. We work with clients across India and internationally, on-site and remotely.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-4">Can I speak to someone directly?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-4">
                <div>
                  <p>Of course. Call us on +91 8826949739, Monday to Saturday, 9:00 AM – 6:00 PM, or email support@go2ways.com.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <button className="faq-q" aria-expanded="false" aria-controls="faq-6">How can I partner with Go2Ways?<span className="plus" aria-hidden="true" /></button>
              <div className="faq-a" id="faq-6">
                <div>
                  <p>We partner with system integrators, consultancies and technology vendors. <a href="/contact?topic=partner#contact-form" style={{ color: "#2e6ad6", textDecoration: "underline" }}>Tell us about your company</a> and we’ll be in touch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection formAnchor />
    </main>
  );
}
