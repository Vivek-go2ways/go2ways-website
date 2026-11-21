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
    path === "/industries" ? "company" : currentService ? "services" : null;

  return (
    <header className="site-header">
      <div className="bar">
        <a className="brand" href={link("/")} aria-label="Go2Ways home"><img src={asset("/assets/img/logo.png")} alt="Go2Ways" width="125" height="35" /></a>
        <nav className="main-nav" aria-label="Main">
          <ul className="nav-list">
            {/* 1. Services */}
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
                </div>
              </div>
            </li>

            {/* 2. Products */}
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

            {/* 3. Company */}
            <li className="has-menu">
              <button className="menu-btn" type="button" aria-expanded="false" aria-controls="menu-company" data-current={active === "company" ? "" : undefined}>Company<Chevron /></button>
              <div className="menu-panel" id="menu-company">
                <div className="menu-inner">
                  <ul className="menu-grid">
                    <li style={{ "--i": 0 }}>
                      <a className="menu-item" href={link("/industries")} aria-current={path === "/industries" ? "page" : undefined}>
                        <span className="mi-icon"><Icon name="building" /></span>
                        <span className="mi-text"><span className="mi-title">Industries</span><span className="mi-desc">Sectors we serve and operational expertise</span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li><a href={link("/blogs")} aria-current={path.startsWith("/blogs") ? "page" : undefined}>Blogs</a></li>
            <li><a href={link("/about")} aria-current={path === "/about" ? "page" : undefined}>About Us</a></li>

            {/* 4. FAQ */}
            <li><a href={link("/contact#faq")}>FAQ</a></li>

            {/* 6. Get In Touch (mobile CTA) */}
            <li className="mobile-cta"><a href={link("/contact")}>Talk to Our Team</a></li>
          </ul>
        </nav>

        {/* 6. Get In Touch (primary header CTA) */}
        <a className="btn btn-primary header-cta" href={link("/contact")} aria-current={path === "/contact" ? "page" : undefined}>Talk to Our Team</a>
        <button className="nav-toggle" aria-label="Menu" aria-expanded="false"><span /><span /><span /></button>
      </div>
    </header>
  );
}
