import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { credentials, capabilities, industries } from "@/data/home";

export const metadata = {
  title: "Go2Ways | Trusted Enterprise Technology & EAM Solutions",
  description:
    "Modernize operations through IBM Maximo asset management, cloud infrastructure, automation, integrations, and 24x7 managed support.",
};

export default function HomePage() {
  return (
    <div className="bg-muted/40 text-foreground">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0A101D] text-white py-20 sm:py-28 lg:py-36">
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,103,184,0.35),rgba(255,255,255,0))]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-tight sm:leading-tight">
              Trusted enterprise technology for asset-driven businesses
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#E5E7EB] leading-relaxed max-w-2xl">
              Go2Ways helps organizations modernize operations through IBM Maximo
              asset management, cloud infrastructure, automation, integrations,
              and 24x7 managed support.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="md">
                Book a Consultation
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition-colors"
              >
                <span>Explore enterprise services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Credentials & Metrics Ribbon */}
      <section className="border-b border-black/[0.08] bg-white py-6">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3.5 group p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="h-10 w-10 rounded-md bg-black/[0.04] border border-black/[0.07] flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Core Capabilities Section */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Core Capabilities"
            title="Solutions built for mission-critical operations"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  cap.isPrimary
                    ? "bg-primary text-white border-transparent"
                    : "bg-white text-foreground border-black/[0.08] hover:border-black/20"
                }`}
              >
                <div className="p-6 sm:p-7">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block mb-3 ${
                      cap.isPrimary ? "text-white/80" : "text-primary"
                    }`}
                  >
                    {cap.badge}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl font-bold leading-snug mb-3 ${
                      cap.isPrimary ? "text-white" : "text-foreground"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      cap.isPrimary ? "text-white/90" : "text-muted-foreground"
                    }`}
                  >
                    {cap.description}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={cap.href}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold group ${
                      cap.isPrimary
                        ? "text-white hover:underline"
                        : "text-primary hover:underline"
                    }`}
                  >
                    <span>{cap.linkText}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Full-Width Editorial Banner (Dedicated Developers) */}
      <section className="py-6 sm:py-10">
        <Container>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#0F172A] p-8 sm:p-14 lg:p-16 text-white shadow-xl">
            {/* Ambient decorative elements */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300 block mb-3">
                Dedicated Engineering Teams
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
                Scale with full-time developers working exclusively for you
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#E5E7EB] leading-relaxed">
                We handle every practical aspect of hiring, onboarding, and
                hosting your dedicated engineering team—cutting your
                operational overhead in half while accelerating delivery.
              </p>

              <div className="mt-8">
                <Button href="/contact" size="md">
                  Build Your Dedicated Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bento Grid: 8 Industries Served */}
      <section id="industries" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Industries We Power"
            title="Transforming physical assets across 8 key sectors"
            subtitle="Tailored EAM, cloud, and automation blueprints designed for high-compliance, asset-intensive environments."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/industries"
                className="group relative rounded-xl overflow-hidden h-64 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-800/80 bg-slate-950 hover:-translate-y-1 block"
              >
                {/* Background gradient simulating photo card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${ind.bgGradient} transition-transform duration-500 group-hover:scale-105`}
                />

                {/* Subtle top icon */}
                <div className="relative z-10 self-start">
                  <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ind.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Text details at bottom */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-heading flex items-center justify-between">
                    <span>{ind.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">
                    {ind.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
