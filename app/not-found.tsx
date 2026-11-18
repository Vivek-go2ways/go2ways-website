import type { Metadata } from "next";
import SplitWords from "@/components/SplitWords";
import { link } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Page not found — go2ways",
  description: "This page doesn’t exist. Find go2ways services, products and contact details.",
};

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="silk-wave" data-wave="hero" data-parallax="" aria-hidden="true" />
        <div className="hero-copy">
          <span className="pill-tag hero-sub">404</span>
          <SplitWords as="h1" className="display-xl split-words" lines={["This page took", "a wrong turn"]} />
          <p className="body-l hero-sub">The link may be old or mistyped. Here are some good places to start.</p>
          <div className="hero-actions hero-sub">
            <a className="btn btn-primary" href={link("/")}>Go to the homepage</a>
            {" "}
            <a className="btn btn-secondary" href={link("/services")}>See our services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
