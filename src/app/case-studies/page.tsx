import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { metrics, caseStudies } from "@/data/case-studies";

export const metadata = {
  title: "Enterprise Case Studies & Operational Outcomes | Go2Ways",
  description:
    "Explore how global organizations partner with Go2Ways for IBM Maximo migrations, SAP ERP integrations, TRIRIGA IWMS, and SLA-backed 24x7 managed support.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen">
      {/* 1. Hero Header */}
      <PageHero
        badge="Measurable Enterprise Impact"
        title="Case Studies & Proven Outcomes"
        subtitle="Discover how leading global enterprises, municipal authorities, and industrial operators achieve asset reliability, zero-disruption cloud cutovers, and audit compliance with Go2Ways."
        metrics={metrics}
      />

      {/* 2. Case Studies List */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {caseStudies.map((cs) => {
              const Icon = cs.icon;
              return (
                <div
                  key={cs.id}
                  className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Visual Banner Left */}
                    <div
                      className={`lg:col-span-4 bg-gradient-to-br ${cs.gradient} p-8 text-white flex flex-col justify-between`}
                    >
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
                          <Icon className="h-3.5 w-3.5" />
                          <span>{cs.sector}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white/80">
                          Client / Scope
                        </h4>
                        <p className="text-base sm:text-lg font-bold text-white mt-1 font-heading">
                          {cs.client}
                        </p>
                      </div>

                      <div className="pt-8">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-2">
                          Core Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cs.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded bg-white/15 backdrop-blur-sm text-[11px] font-medium text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Content Right */}
                    <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-heading leading-snug mb-4">
                          {cs.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                              Operational Challenge
                            </span>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {cs.challenge}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                              Go2Ways Solution
                            </span>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {cs.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Measurable Impact */}
                      <div className="pt-4 border-t border-black/[0.06]">
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-3 font-heading">
                          Measurable Business Outcomes
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {cs.impact.map((imp, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-lg bg-muted/50 border border-black/[0.05] flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-xs text-foreground/80 font-medium leading-snug">
                                {imp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Link */}
                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline tracking-wide group"
                        >
                          <span>Request Detailed Architecture Brief</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-2xl bg-[#0A1120] p-8 sm:p-14 lg:p-16 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2 font-heading">
                Operational Evaluation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Ready to achieve similar operational benchmarks?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Connect with our certified architects for a zero-obligation EAM
                system health audit and migration readiness roadmap.
              </p>
            </div>

            <div className="shrink-0">
              <Button href="/contact" size="md" className="gap-2">
                <span>Schedule Discovery Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

