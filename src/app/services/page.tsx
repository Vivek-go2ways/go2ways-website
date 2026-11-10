import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";
import { stats, bigMetrics, servicesList, methodology } from "@/data/services";

export const metadata = {
  title: "Enterprise Services & Solutions | Go2Ways",
  description:
    "Explore our proven track record delivering IBM Maximo Application Suite (MAS), TRIRIGA IWMS, IoT field automation, and hybrid-cloud infrastructure for global organizations.",
};

export default function ServicesPage() {
  return (
    <div className="bg-muted/40 text-foreground">
      {/* 1. Hero Header */}
      <PageHero
        badge="Enterprise Portfolio • 150+ Deployments Worldwide"
        badgePill
        title="Transforming physical assets across 8 mission-critical sectors"
        subtitle="Explore our proven track record delivering IBM Maximo Application Suite (MAS), TRIRIGA IWMS, IoT field automation, and hybrid-cloud infrastructure for global organizations."
        metrics={stats}
      />

      {/* 2. Metrics Gradient Banner */}
      <section className="bg-gradient-to-r from-[#12AF68] to-[#094AD6] py-10 sm:py-14 text-white shadow-inner">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left items-center">
            {bigMetrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <div className="text-4xl sm:text-6xl font-black font-heading tracking-tight">
                  {m.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-white/90">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. The 8 Core Services Detail Sections */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-20 sm:space-y-28">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    service.reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      service.reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-heading">
                        {service.number} • {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground font-heading leading-snug">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Checklist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.checklist.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-foreground/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badge Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.techPills.map((pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1 rounded bg-muted border border-border text-xs font-semibold text-foreground/80"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2">
                      <Link
                        href={service.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline tracking-wide group"
                      >
                        <span>{service.ctaText}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Preview Card Column */}
                  <div
                    className={`lg:col-span-5 ${
                      service.reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 shadow-lg border border-border bg-gradient-to-br from-slate-900 to-[#0F172A] p-8 flex flex-col justify-between group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.imageBg} opacity-80 group-hover:opacity-90 transition-opacity`}
                      />

                      {/* Top Icon Badge */}
                      <div className="relative z-10 self-start">
                        <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="relative z-10 text-white">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block mb-1">
                          {service.category}
                        </span>
                        <h3 className="text-lg font-bold font-heading">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                          Enterprise implementation, architecture, and 24x7
                          managed engineering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. The Go2Ways Methodology (Delivery Framework Strip) */}
      <section className="bg-white border-y border-border py-16 sm:py-24">
        <Container>
          <SectionHeading
            badge="The Go2Ways Methodology"
            title="Predictable, agile delivery at every stage"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="rounded-xl border border-border bg-muted/50 p-6 hover:shadow-md transition-shadow relative"
              >
                <div className="h-8 w-8 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-primary mb-4">
                  {m.step}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 font-heading">
                  {m.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Dedicated Engineering Banner */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="rounded-2xl bg-[#0A1120] p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-3 font-heading">
                Dedicated Engineering Teams
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading leading-tight">
                Scale with full-time developers working exclusively for you
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                We handle every practical aspect of hiring, onboarding, and
                hosting your dedicated engineering team—cutting your operational
                overhead in half while accelerating delivery.
              </p>

              <div className="mt-8">
                <Button href="/contact" size="md" className="gap-2">
                  <span>Build Your Dedicated Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
