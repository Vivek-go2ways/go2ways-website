import { SERVICES, servicePath } from "@/content/services";
import { asset, link } from "@/lib/paths";

const FOOTER_SERVICES = ["ibm-maximo", "mas-migration", "managed-support", "consulting-advisory"];

export default function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href={link("/")} aria-label="Go2Ways home"><img src={asset("/assets/img/footer-logo.png")} alt="Go2Ways" width="144" height="30" /></a>
          <p>Intelligent AI assistants for modern businesses.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.filter((s) => FOOTER_SERVICES.includes(s.slug)).map((s) => (
                <li key={s.slug}><a href={servicePath(s.slug)}>{s.short}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="https://ordova.go2ways.com/" target="_blank" rel="noopener">Ordova</a></li>
              <li><a href={link("/#how")}>How it Works</a></li>
              <li><a href={link("/services#solution")}>Solution</a></li>
              <li><a href={link("/#features")}>Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#" data-soon="">Blog</a></li>
              <li><a href="#" data-soon="">Docs</a></li>
              <li><a href={link("/industries#sectors")}>Case studies</a></li>
              <li><a href={link("/contact#faq")}>Help center</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href={link("/industries")}>About</a></li>
              <li><a href="#" data-soon="">Careers</a></li>
              <li><a href={link("/contact")}>Contact</a></li>
              <li><a href="#" data-soon="">Press</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Go2Ways IT Services Private Limited. All rights reserved.</p>
        <ul>
          <li><a href="#" data-soon="">Privacy</a></li>
          <li><a href="#" data-soon="">Terms</a></li>
          <li><a href="#" data-soon="">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}
