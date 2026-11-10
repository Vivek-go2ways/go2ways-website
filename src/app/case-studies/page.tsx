import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Factory,
  Zap,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Case Studies & Operational Outcomes | Go2Ways",
  description:
    "Explore how global organizations partner with Go2Ways for IBM Maximo migrations, SAP ERP integrations, TRIRIGA IWMS, and SLA-backed 24x7 managed support.",
};

const metrics = [
  { value: "99.98%", label: "Average Production Uptime" },
  { value: "35%", label: "Maintenance Cost Reduction" },
  { value: "40M+", label: "Assets Actively Tracked" },
  { value: "100%", label: "Zero-Disruption MAS Cutovers" },
];

const caseStudies = [
  {
    id: "gabon-government-beauma",
    sector: "Government & Public Infrastructure",
    client: "Beauma Services Inc. / Government of Gabon",
    title: "National Infrastructure EAM Modernization Across Gabon",
    challenge:
      "Legacy decentralized maintenance led to fragmented asset tracking, delayed municipal work orders, and lack of unified capital expenditure visibility across nationwide public facilities.",
    solution:
      "Engineered an end-to-end IBM Maximo 7.6 deployment with custom bilingual French-English workflows, automated preventative scheduling, and mobile field inspection dispatch.",
    impact: [
      "Unified 180,000+ public infrastructure assets on a single dashboard",
      "42% faster citizen and municipal work order resolution times",
      "100% compliance with international public asset accounting standards",
    ],
    tech: ["IBM Maximo 7.6", "Bilingual Workflows", "Field Mobility", "BIRT Analytics"],
    icon: Building,
    gradient: "from-[#0A3560] to-[#0879D1]",
  },
  {
    id: "mitsubishi-lti-manufacturing",
    sector: "Heavy Industrial Manufacturing",
    client: "Mitsubishi Heavy Industries & LTI Partnership",
    title: "Real-Time SAP S/4HANA & IBM Maximo Bi-Directional Integration",
    challenge:
      "Plant engineers and financial controllers operated in disconnected silos. MRO parts purchases in Maximo caused reconciliation delays and inventory discrepancies inside SAP S/4HANA.",
    solution:
      "Architected event-driven enterprise middleware utilizing Maximo Integration Framework (MIF) and Apache Kafka to sync work orders, general ledger codes, and inventory levels in real time.",
    impact: [
      "Zero manual data re-entry across plant procurement teams",
      "Real-time parts inventory visibility reducing emergency stockouts by 28%",
      "Sub-second sync latency across multi-site global manufacturing facilities",
    ],
    tech: ["SAP S/4HANA", "Maximo MIF", "Apache Kafka", "REST/SOAP Gateways"],
    icon: Factory,
    gradient: "from-[#06475A] to-[#13A8C4]",
  },
  {
    id: "aws-mas-migration",
    sector: "Energy & Utilities",
    client: "Major Regional Power & Grid Operator",
    title: "Zero-Downtime Migration to IBM Maximo Application Suite (MAS 8) on AWS",
    challenge:
      "Approaching end-of-support on legacy Maximo 7.6 on-premise hardware with escalating infrastructure maintenance costs and strict regulatory uptime mandates.",
    solution:
      "Designed and executed a full containerized migration to Red Hat OpenShift on AWS Cloud, refactoring Jython automation scripts and executing zero-downtime database cutovers.",
    impact: [
      "Cut operational hosting costs by 45% through dynamic OpenShift autoscaling",
      "Achieved zero seconds of unscheduled production downtime during cutover",
      "Optimized licensing expenditures using IBM AppPoints allocation modeling",
    ],
    tech: ["IBM MAS 8", "Red Hat OpenShift", "AWS Cloud", "AppPoints Modeling"],
    icon: Zap,
    gradient: "from-[#252052] to-[#D81A1D]",
  },
  {
    id: "quantum-strides-tririga",
    sector: "Commercial Real Estate & Facilities",
    client: "Corporate Real Estate Portfolio / Quantum Strides",
    title: "Portfolio Space Optimization & IFRS 16 Lease Audit Automation",
    challenge:
      "Managing thousands of commercial leases across diverse locations resulted in manual compliance audits and underutilized office footprints post-hybrid transition.",
    solution:
      "Deployed IBM TRIRIGA IWMS with automated lease accounting modules, CAD building diagram integrators, and real-time badge sensor utilization analytics.",
    impact: [
      "Saved $1.4M annually by consolidating underutilized leased real estate",
      "Automated 100% of ASC 842 / IFRS 16 audit compliance schedules",
      "Streamlined desk booking and tenant service requests onto mobile apps",
    ],
    tech: ["IBM TRIRIGA 11.x", "IFRS 16 Lease Module", "CAD Integrator", "IoT Sensors"],
    icon: Building,
    gradient: "from-[#2E2E2F] to-[#60C547]",
  },
  {
    id: "transit-fleet-mobility",
    sector: "Transportation & Urban Rail",
    client: "Metropolitan Transit Authority",
    title: "Offline-First Mobile Inspection & Rolling Stock Maintenance",
    challenge:
      "Track and rolling stock maintenance technicians working in underground subway tunnels lacked connectivity, leading to delayed paperwork and delayed safety sign-offs.",
    solution:
      "Implemented IBM Maximo Mobile with robust offline database synchronization, barcode asset scanning, and automated safety checklist validation upon reconnecting.",
    impact: [
      "Reduced track inspection reporting cycle from 48 hours to instant upload",
      "100% offline functionality in underground and dead-zone transit sectors",
      "31% improvement in mean-time-to-repair (MTTR) across rolling stock fleet",
    ],
    tech: ["IBM Maximo Mobile", "Offline Sync", "Barcode/RFID", "Safety Workflows"],
    icon: Globe2,
    gradient: "from-[#252052] to-[#7047C5]",
  },
  {
    id: "ams-managed-support",
    sector: "Pharmaceutical & Life Sciences",
    client: "Global Bio-Manufacturing Enterprise",
    title: "24×7 Mission-Critical AMS Support with 15-Minute Response SLA",
    challenge:
      "Cleanroom sterilization and calibration failures carry millions of dollars in compliance penalties. The client needed round-the-clock specialized L2/L3 support pods.",
    solution:
      "Established dedicated 24×7 follow-the-sun AMS pods staffed by certified IBM Maximo engineers, with proactive database indexing, continuous patch management, and strict SLAs.",
    impact: [
      "Average critical incident response time of under 11 minutes (exceeding SLA)",
      "Zero FDA/GMP audit non-conformances related to calibration logging",
      "99.99% system availability sustained across 4 consecutive years",
    ],
    tech: ["24×7 AMS", "ITIL Tier 1-3", "Database Indexing", "GMP Validation"],
    icon: ShieldCheck,
    gradient: "from-[#0A4C39] to-[#28B968]",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#FAF9F8] text-[#1B1A19] min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-white border-b border-black/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0067B8] block mb-3 font-heading">
              Measurable Enterprise Impact
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1A19] font-heading leading-tight">
              Case Studies & Proven Outcomes
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#605E5C] leading-relaxed max-w-3xl">
              Discover how leading global enterprises, municipal authorities,
              and industrial operators achieve asset reliability, zero-disruption
              cloud cutovers, and audit compliance with Go2Ways.
            </p>

            {/* Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0067B8] font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[#605E5C] mt-1 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
                        <h2 className="text-xl sm:text-2xl font-bold text-[#1B1A19] font-heading leading-snug mb-4">
                          {cs.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#605E5C] block">
                              Operational Challenge
                            </span>
                            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                              {cs.challenge}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0067B8] block">
                              Go2Ways Solution
                            </span>
                            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                              {cs.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Measurable Impact */}
                      <div className="pt-4 border-t border-black/[0.06]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1B1A19] block mb-3 font-heading">
                          Measurable Business Outcomes
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {cs.impact.map((imp, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-lg bg-[#FAF9F8] border border-black/[0.05] flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#0067B8] shrink-0 mt-0.5" />
                              <span className="text-xs text-[#334155] font-medium leading-snug">
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
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0067B8] hover:underline tracking-wide group"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] block mb-2 font-heading">
                Operational Evaluation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">
                Ready to achieve similar operational benchmarks?
              </h2>
              <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                Connect with our certified architects for a zero-obligation EAM
                system health audit and migration readiness roadmap.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0067B8] hover:bg-[#005a9e] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors"
              >
                <span>Schedule Discovery Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

