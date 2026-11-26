import { SERVICES, servicePath } from "@/content/services";
import { asset, link } from "@/lib/paths";

export default function SiteFooter() {
  return (
    <footer className="site-footer container">
      {/* 4. Footer branding section */}
      <div className="footer-brand-section">
        <a href={link("/")} aria-label="Go2Ways home" className="footer-logo">
          <img src={asset("/assets/img/footer-logo.png")} alt="Go2Ways" width="144" height="30" />
        </a>
        <p className="footer-brand-motto">Our Mission · Our Vision · Our Philosophy · Our Strategy.</p>
      </div>

      {/* 3. Multi-Column Information Architecture */}
      <div className="footer-cols">
        {/* Column 1 — Enterprise Services */}
        <div className="footer-col">
          <h4>Enterprise Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={servicePath(s.slug)}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Products */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="https://ordova.go2ways.com/" target="_blank" rel="noopener">
                Ordova <span className="footer-ext-icon" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <span className="footer-muted-item">
                Emp AI <span className="soon-badge">Coming soon</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3 — Solutions */}
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li>
              <a href={link("/#features")}>Enterprise Technology Solutions</a>
            </li>
            <li>
              <a href={servicePath("ai-solutions")}>AI &amp; Web Solutions</a>
            </li>
            <li>
              <a href={servicePath("consulting-advisory")}>Digital Modernisation</a>
            </li>
          </ul>
        </div>

        {/* Column 4 — Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href={link("/about")}>About Go2Ways</a>
            </li>
            <li>
              <a href={link("/industries#sectors")}>Industries</a>
            </li>
            <li>
              <a href={link("/blogs")}>Blogs</a>
            </li>
            <li>
              <a href="#" data-soon="">Careers</a>
            </li>
          </ul>
        </div>

        {/* Column 5 — Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href={link("/contact")}>Get in Touch</a>
            </li>
            <li>
              <a href={link("/contact#faq")}>FAQs</a>
            </li>
            <li>
              <a href={link("/service-managed-support")}>Technical Support</a>
            </li>
          </ul>
        </div>

        {/* Column 6 — Contact / Our Offices */}
        <div className="footer-col footer-col-contact">
          <h4>Our Offices</h4>
          <address className="footer-address">
            <p className="footer-addr-line">
              <strong>India Office:</strong><br />
              <a href="https://www.google.com/maps/search/?api=1&query=314a+Sector+102+Gurugram+Haryana" target="_blank" rel="noopener">
                314a Sector 102,<br />
                Gurugram, Haryana
              </a>
            </p>
            <p className="footer-contact-line">
              <span className="footer-contact-label">Email:</span>{" "}
              <a href="mailto:support@go2ways.com">support@go2ways.com</a>
            </p>
            <p className="footer-contact-line">
              <span className="footer-contact-label">Phone:</span>{" "}
              <a href="tel:+918826949739">+91 88269 49739</a>
            </p>
            <p className="footer-hours-line">
              <span className="footer-contact-label">Hours:</span> Mon – Sat, 9:00 AM – 6:00 PM
            </p>
          </address>
        </div>
      </div>

      {/* 5. Footer bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Go2Ways IT Services Private Limited. All rights reserved.</p>
        <ul className="footer-legal-links">
          <li><a href="#" data-soon="">Privacy Policy</a></li>
          <li><a href="#" data-soon="">Terms &amp; Conditions</a></li>
          <li><a href="#" data-soon="">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}
