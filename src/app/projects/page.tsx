import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Enterprise Projects & Case Studies | Go2Ways",
  description:
    "Explore our proven track record delivering IBM Maximo Application Suite implementations, cloud migrations, Azure AD integrations, and global training programs.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-muted/40 text-foreground min-h-screen">
      {/* 1. Hero Header */}
      <PageHero
        badge="Proven Deliveries & Client Engagements"
        title="Enterprise Projects"
        subtitle="Explore our track record of mission-critical IBM Maximo implementations, MAS migrations on AWS & OpenShift, Azure AD integrations, and corporate enablement programs worldwide."
      />

      {/* 2. Projects Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-black/[0.08] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Visual Header Strip with Gradient */}
                  <div
                    className={`h-40 sm:h-44 bg-gradient-to-r ${project.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                        {project.tag}
                      </span>
                      <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <span className="text-xs text-white/80 font-medium">
                        Project Scope #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors font-heading mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.06] mb-5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded bg-muted border border-border text-[11px] font-semibold text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline tracking-wide group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Inquire about similar deployment</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
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
                Start Your Project
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Have a similar enterprise roadmap in mind?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Connect with our certified architects to audit your current EAM
                stack, plan zero-downtime migrations, or request custom
                integration scoping.
              </p>
            </div>

            <div className="shrink-0">
              <Button href="/contact" size="md" className="gap-2">
                <span>Schedule an Architecture Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

