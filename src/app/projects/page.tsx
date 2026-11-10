import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  Database,
  Cloud,
  GraduationCap,
  Layers,
  Cpu,
  Building,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Projects & Case Studies | Go2Ways",
  description:
    "Explore our proven track record delivering IBM Maximo Application Suite implementations, cloud migrations, Azure AD integrations, and global training programs.",
};

const projects = [
  {
    title: "Beauma Services Inc. Maximo Implementation for Government",
    description:
      "Enterprise Maximo deployment supporting critical public infrastructure and government operations in Gabon, Africa.",
    tag: "Government & Public Infrastructure",
    icon: Building,
    gradient: "from-[#0A3560] to-[#0879D1]",
    tech: ["IBM Maximo", "Public Sector", "Africa Deployment"],
  },
  {
    title: "Maximo Integration & Azure AD Configuration",
    description:
      "Seamless integration with external enterprise systems and Azure AD single sign-on configuration for Maximo Anywhere mobile apps.",
    tag: "Enterprise Integration",
    icon: Cpu,
    gradient: "from-[#0A3560] to-[#0879D1]",
    tech: ["Azure AD", "Maximo Anywhere", "REST APIs"],
  },
  {
    title: "Maximo Support and Enhancement Change Management",
    description:
      "Comprehensive SLA-backed support, workflow optimization, automation script refactoring, and patch deployment for mission-critical operations.",
    tag: "Managed Support & AMS",
    icon: Database,
    gradient: "from-[#252052] to-[#7047C5]",
    tech: ["24x7 AMS", "Scripting", "Workflow Refactoring"],
  },
  {
    title: "Maximo Integration for POC Work",
    description:
      "Proof-of-concept enterprise architecture uniting operational SCADA telemetry, real-time IoT feeds, and automated work-order generation.",
    tag: "IoT & Telemetry Integration",
    icon: Layers,
    gradient: "from-[#0A4C39] to-[#28B968]",
    tech: ["IoT Streams", "SCADA", "POC Architecture"],
  },
  {
    title: "Corporate Trainings - Virtual & Classroom for Clients",
    description:
      "Tailored administrator, developer, and superuser training curriculums delivered globally to enhance internal EAM self-sufficiency.",
    tag: "Corporate Training & Enablement",
    icon: GraduationCap,
    gradient: "from-[#1C1C1D] to-[#008FAB]",
    tech: ["Maximo 7.6 / MAS", "Admin Training", "Global Delivery"],
  },
  {
    title: "Maximo & TRIRIGA Contractual Work (Quantum Strides)",
    description:
      "Turnkey contractual delivery optimizing commercial real estate facilities, lease compliance, and preventive asset maintenance.",
    tag: "Facilities & Real Estate",
    icon: Building,
    gradient: "from-[#2E2E2F] to-[#60C547]",
    tech: ["IBM TRIRIGA", "Maximo EAM", "IWMS Compliance"],
  },
  {
    title: "Maximo Application Suite Implementation in AWS Cloud",
    description:
      "End-to-end MAS deployment on AWS Red Hat OpenShift, including zero-downtime database migration, custom reporting, and interface pipelines.",
    tag: "Cloud Modernization & MAS",
    icon: Cloud,
    gradient: "from-[#252052] to-[#D81A1D]",
    tech: ["AWS Cloud", "Red Hat OpenShift", "MAS 8/9 Cutover"],
  },
  {
    title: "Maximo Integration with LTI (Mitsubishi Heavy Industries)",
    description:
      "Enterprise asset data orchestration, SAP ERP synchronization, and multi-facility compliance reporting for heavy industrial manufacturing.",
    tag: "Heavy Industry & Manufacturing",
    icon: Globe2,
    gradient: "from-[#06475A] to-[#13A8C4]",
    tech: ["SAP S/4HANA", "Heavy Industry", "Enterprise Sync"],
  },
  {
    title: "Corporate Trainings - Interactive Virtual Modules",
    description:
      "Virtual instructor-led workshops, live sandbox environments, and ongoing skill development for distributed engineering teams.",
    tag: "Workforce Enablement",
    icon: GraduationCap,
    gradient: "from-[#252052] to-[#C5479B]",
    tech: ["Virtual Labs", "Role-Based Learning", "Certification"],
  },
  {
    title: "Enterprise Maximo Application Rollout",
    description:
      "Turnkey multi-site asset lifecycle management rollout incorporating barcode/RFID tracking and mobile technician inspection workflows.",
    tag: "Full-Lifecycle Implementation",
    icon: Database,
    gradient: "from-[#252052] to-[#7047C5]",
    tech: ["Multi-Site", "Barcode/RFID", "Field Mobile"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF9F8] text-[#1B1A19] min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-white border-b border-black/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0067B8] block mb-3 font-heading">
              Proven Deliveries & Client Engagements
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1A19] font-heading leading-tight">
              Enterprise Projects
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#605E5C] leading-relaxed max-w-3xl">
              Explore our track record of mission-critical IBM Maximo
              implementations, MAS migrations on AWS & OpenShift, Azure AD
              integrations, and corporate enablement programs worldwide.
            </p>
          </div>
        </Container>
      </section>

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
                      <h3 className="text-lg sm:text-xl font-bold text-[#1B1A19] leading-snug group-hover:text-[#0067B8] transition-colors font-heading mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#605E5C] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.06] mb-5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded bg-[#F1F5F9] border border-[#E2E8F0] text-[11px] font-semibold text-[#334155]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0067B8] hover:underline tracking-wide group-hover:translate-x-0.5 transition-transform"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] block mb-2 font-heading">
                Start Your Project
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Have a similar enterprise roadmap in mind?
              </h2>
              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Connect with our certified architects to audit your current EAM
                stack, plan zero-downtime migrations, or request custom
                integration scoping.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0067B8] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors"
              >
                <span>Schedule an Architecture Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

