"use client";

import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { PRODUCTS, SERVICES, serviceBySlug, servicePath } from "@/content/services";
import { asset, link } from "@/lib/paths";

const Chevron = () => (
  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4.5 6 7.5 9 4.5" />
  </svg>
);

export default function SiteHeader() {
  const path = usePathname();
  const slug = path.match(/^\/service-([a-z-]+)$/)?.[1];
  const currentService = slug && serviceBySlug(slug) ? slug : undefined;
  const active =
    path === "/" ? "home" : path === "/industries" ? "company" : path === "/services" || currentService ? "services" : null;
  const cur = (key: string) => (active === key ? "page" : undefined);

  return (
    <header className="site-header">
      <div className="bar">
        <a className="brand" href={link("/")} aria-label="go2ways home"><img src={asset("/assets/img/logo.png")} alt="go2ways" width="125" height="35" /></a>
        <nav className="main-nav" aria-label="Main">
          <ul className="nav-list">
            <li><a href={link("/")} aria-current={cur("home")}>Software</a></li>
            <li><a href={link("/services#how-we-work")}>Consulting</a></li>
            <li><a href={link("/contact#faq")}>Support</a></li>
            <li><a href={link("/industries")} aria-current={cur("company")}>Company</a></li>
            <li className="has-menu">
              <button className="menu-btn" type="button" aria-expanded="false" aria-controls="menu-services" data-current={active === "services" ? "" : undefined}>Services<Chevron /></button>
              <div className="menu-panel menu-wide" id="menu-services">
                <div className="menu-inner">
                  <ul className="menu-grid">
                    {SERVICES.map((s, i) => (
                      <li key={s.slug} style={{ "--i": i }}>
                        <a className="menu-item" href={servicePath(s.slug)} aria-current={s.slug === currentService ? "page" : undefined}>
                          <span className="mi-icon"><Icon name={s.icon} /></span>
                          <span className="mi-text"><span className="mi-title">{s.name}</span><span className="mi-desc">{s.nav}</span></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a className="menu-foot" href={link("/services")}>See how we work <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </li>
            <li className="has-menu">
              <button className="menu-btn" type="button" aria-expanded="false" aria-controls="menu-products">Products<Chevron /></button>
              <div className="menu-panel" id="menu-products">
                <div className="menu-inner">
                  <ul className="menu-grid">
                    {PRODUCTS.map((p, i) => {
                      const inner = (
                        <>
                          <span className="mi-icon"><Icon name={p.icon} /></span>
                          <span className="mi-text">
                            <span className="mi-title">{p.name}{p.href ? <Icon name="external" className="ext" /> : <span className="soon-badge">Coming soon</span>}</span>
                            <span className="mi-desc">{p.desc}</span>
                          </span>
                        </>
                      );
                      return (
                        <li key={p.name} style={{ "--i": i }}>
                          {p.href ? (
                            <a className="menu-item" href={p.href} target="_blank" rel="noopener">{inner}<span className="sr-only">{" (opens in a new tab)"}</span></a>
                          ) : (
                            <span className="menu-item is-soon" aria-disabled="true">{inner}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="mobile-cta"><a href={link("/contact")}>Get In Touch</a></li>
          </ul>
        </nav>
        <a className="btn btn-primary header-cta" href={link("/contact")} aria-current={path === "/contact" ? "page" : undefined}>Get In Touch</a>
        <button className="nav-toggle" aria-label="Menu" aria-expanded="false"><span /><span /><span /></button>
      </div>
    </header>
  );
}
