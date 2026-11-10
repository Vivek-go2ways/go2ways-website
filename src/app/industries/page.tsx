import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { industriesDetailed as industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries | Go2Ways",
  description:
    "Tailored EAM, IBM Maximo, TRIRIGA, and cloud architecture for asset-intensive and regulated industries worldwide.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen">
      {/* 1. Hero Header */}
      <PageHero
        badge="Sectors We Transform"
        title="Industries We Power"
        subtitle="From regulated life sciences and offshore energy rigs to municipal infrastructure and automated manufacturing plants, our certified architects deliver mission-critical asset solutions built for compliance and zero downtime."
      />

      {/* 2. Industries Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  {/* Top Banner */}
                  <div
                    className={`bg-gradient-to-r ${ind.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                        {ind.tag}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {ind.name}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {ind.description}
                      </p>

                      <div className="space-y-2.5 mb-6 pt-4 border-t border-black/[0.06]">
                        {ind.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/[0.06]">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline tracking-wide group"
                      >
                        <span>Consult an industry specialist</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-2xl bg-[#0A1120] p-8 sm:p-14 lg:p-16 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2 font-heading">
                Domain Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Need a custom compliance architecture for your sector?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our certified engineers combine industry domain knowledge with
                deep IBM Maximo and cloud architecture experience to design
                compliant, high-availability deployments.
              </p>
            </div>

            <div className="shrink-0">
              <Button href="/contact" size="md" className="gap-2">
                <span>Request an Industry Discovery Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

