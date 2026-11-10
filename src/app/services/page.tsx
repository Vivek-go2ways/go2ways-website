import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Check,
  ArrowRight,
  Database,
  Cloud,
  Layers,
  Smartphone,
  Building2,
  Workflow,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Services & Solutions | Go2Ways",
  description:
    "Explore our proven track record delivering IBM Maximo Application Suite (MAS), TRIRIGA IWMS, IoT field automation, and hybrid-cloud infrastructure for global organizations.",
};

const stats = [
  { value: "99.98%", label: "Operational Uptime" },
  { value: "40M+", label: "Tracked Enterprise Assets" },
  { value: "100%", label: "Zero-Downtime MAS Cutover" },
  { value: "24/7", label: "Global SLA Support" },
];

const bigMetrics = [
  { value: "30+", label: "Active Clients" },
  { value: "50+", label: "Projects Done" },
  { value: "10+", label: "Team Advisors" },
  { value: "5+", label: "Glorious Years" },
];

const servicesList = [
  {
    id: "maximo",
    number: "Service 01",
    category: "Asset Management",
    title: "IBM Maximo Services",
    icon: Database,
    description:
      "We provide full lifecycle IBM Maximo deployments, custom module development, and preventive maintenance automation that optimizes operational health, inventory carrying costs, and asset lifecycles.",
    checklist: [
      "End-to-End Implementation",
      "Automation Scripting & Workflows",
      "MRO Inventory & Stock Optimization",
      "Performance Tuning & Auditing",
    ],
    techPills: ["IBM Maximo 7.6.x", "BIRT / Cognos Analytics", "Jython Scripting"],
    ctaText: "Engage IBM Maximo Specialists →",
    ctaHref: "/contact",
    imageBg: "from-blue-900/90 to-slate-900/95",
  },
  {
    id: "mas-migration",
    number: "Service 02",
    category: "Modernization",
    title: "MAS Migration (Maximo Application Suite)",
    icon: Layers,
    description:
      "Transition smoothly from on-premise Maximo 7.6 to containerized IBM Maximo Application Suite (MAS 8 & 9) on Red Hat OpenShift with zero operational disruption and comprehensive database migration.",
    checklist: [
      "Red Hat OpenShift Containerization",
      "AppPoints License Modeling",
      "Custom Code & Script Refactoring",
      "Zero-Downtime Data Cutover",
    ],
    techPills: ["IBM MAS 8.x / 9.x", "Red Hat OpenShift", "IBM Suite Admin"],
    ctaText: "Plan Your MAS Migration Roadmap →",
    ctaHref: "/contact",
    imageBg: "from-indigo-900/90 to-slate-900/95",
    reverse: true,
  },
  {
    id: "integrations",
    number: "Service 03",
    category: "Connected Systems",
    title: "Enterprise Integration",
    icon: Workflow,
    description:
      "Eliminate operational data silos by connecting Maximo and TRIRIGA directly to your enterprise ecosystem, including ERPs (SAP, Oracle), GIS mapping, SCADA systems, and IoT telemetry streams.",
    checklist: [
      "SAP S/4HANA & Oracle ERP Sync",
      "Esri ArcGIS Spatial Mapping",
      "REST & SOAP API Architecture",
      "Kafka Event-Driven Pipelines",
    ],
    techPills: [
      "Maximo Integration Framework (MIF)",
      "Apache Kafka",
      "Azure API Gateway",
    ],
    ctaText: "Discuss Middleware & Integration →",
    ctaHref: "/contact",
    imageBg: "from-sky-900/90 to-slate-900/95",
  },
  {
    id: "cloud",
    number: "Service 04",
    category: "Cloud Scale",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description:
      "Enterprise AWS and Microsoft Azure cloud hosting designed specifically for mission-critical EAM workloads, incorporating multi-zone high availability, automated backup, and strict ISO compliance.",
    checklist: [
      "AWS & Azure Hybrid Deployments",
      "Automated Disaster Recovery (DR)",
      "Database Clustering (Db2, Oracle, SQL)",
      "DevSecOps & CI/CD Pipelines",
    ],
    techPills: [
      "AWS Advanced Partner",
      "Microsoft Azure",
      "Terraform / Kubernetes",
    ],
    ctaText: "Explore Cloud Infrastructure Hosting →",
    ctaHref: "/contact",
    imageBg: "from-cyan-900/90 to-slate-900/95",
    reverse: true,
  },
  {
    id: "support",
    number: "Service 05",
    category: "24x7 Operations",
    title: "Managed Support (AMS & DevOps)",
    icon: ShieldCheck,
    description:
      "Ensure maximum uptime with dedicated 24×7 L1, L2, and L3 technical support backed by strict response SLAs, ongoing performance auditing, user administration, and routine patch applications.",
    checklist: [
      "Guaranteed 15-Minute Critical SLA",
      "Database Index & Cache Tuning",
      "Proactive Security Patching",
      "Quarterly Business Health Reviews",
    ],
    techPills: ["24×7 L1–L3 SLA", "ITIL-Compliant", "Dedicated Pods"],
    ctaText: "Review Support Packages & SLAs →",
    ctaHref: "/contact",
    imageBg: "from-emerald-900/90 to-slate-900/95",
  },
  {
    id: "mobile",
    number: "Service 06",
    category: "Field Mobility",
    title: "Mobile Development & Enablement",
    icon: Smartphone,
    description:
      "Equip field technicians and plant operators with responsive, offline-first mobile solutions. We implement native IBM Maximo Mobile, custom cross-platform applications, barcode/RFID scanning, and inspection forms.",
    checklist: [
      "IBM Maximo Mobile Deployment",
      "Offline Sync & Conflict Resolution",
      "Barcode & RFID Asset Scanning",
      "Custom Electronic Work Orders",
    ],
    techPills: ["Maximo Mobile (MAS)", "React Native / Flutter", "Anywhere Migration"],
    ctaText: "Mobilize Your Field Engineering Workforce →",
    ctaHref: "/contact",
    imageBg: "from-teal-900/90 to-slate-900/95",
    reverse: true,
  },
  {
    id: "tririga",
    number: "Service 07",
    category: "Facilities & IWMS",
    title: "TRIRIGA Services (IWMS)",
    icon: Building2,
    description:
      "Optimize your corporate real estate portfolio, simplify ASC 842 / IFRS 16 lease accounting audits, and streamline workspace utilization through intelligent Integrated Workplace Management Systems.",
    checklist: [
      "ASC 842 & IFRS 16 Lease Accounting",
      "Dynamic Space & Desk Planning",
      "Capital Project Management",
      "Facility Work Order Automation",
    ],
    techPills: ["IBM TRIRIGA 11.x", "CAD Integrator", "IoT Workplace Beacons"],
    ctaText: "Request TRIRIGA Advisory →",
    ctaHref: "/contact",
    imageBg: "from-purple-900/90 to-slate-900/95",
  },
  {
    id: "advisory",
    number: "Service 08",
    category: "Strategic Advisory",
    title: "Consulting & Architectural Advisory",
    icon: Compass,
    description:
      "Work with senior IBM Champions and certified architects to define multi-year asset management roadmaps, perform technical audits, ensure compliance, and streamline licensing costs.",
    checklist: [
      "Enterprise Architecture Health Checks",
      "IBM License Audit Optimization",
      "Business Process Re-Engineering",
      "Change Management & User Training",
    ],
    techPills: ["ISO 55000 Alignment", "License Advisory", "Digital Transformation"],
    ctaText: "Book Executive Architecture Consultation →",
    ctaHref: "/contact",
    imageBg: "from-slate-900/90 to-black/95",
    reverse: true,
  },
];

const methodology = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "Comprehensive review of legacy assets, licenses, and custom workflows.",
  },
  {
    step: "02",
    title: "Target Architecture",
    description:
      "Designing containerized OpenShift environments and interface pipelines.",
  },
  {
    step: "03",
    title: "Agile Sprint Delivery",
    description:
      "Iterative development, mobile sandbox testing, and zero-loss cutover rehearsal.",
  },
  {
    step: "04",
    title: "24×7 Managed Care",
    description:
      "Production go-live hypercare transitioning seamlessly to SLA-backed AMS support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F8] text-[#1B1A19]">
      {/* 1. Hero Header */}
      <section className="bg-white border-b border-black/[0.08] pt-16 pb-12 sm:pt-20 sm:pb-16">
        <Container>
          <div className="max-w-4xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-bold text-[#0072CE] uppercase tracking-wide mb-6">
              <span>Enterprise Portfolio</span>
              <span>•</span>
              <span>150+ Deployments Worldwide</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] font-heading leading-tight">
              Transforming physical assets across 8 mission-critical sectors
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl">
              Explore our proven track record delivering IBM Maximo Application
              Suite (MAS), TRIRIGA IWMS, IoT field automation, and hybrid-cloud
              infrastructure for global organizations.
            </p>

            {/* Stats Bar */}
            <div className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] block mb-2 font-heading">
                        {service.number} • {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] font-heading leading-snug">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Checklist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.checklist.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center text-[#0072CE] shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#334155]">
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
                          className="px-3 py-1 rounded bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold text-[#334155]"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2">
                      <Link
                        href={service.ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0072CE] hover:underline tracking-wide group"
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
                    <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 shadow-lg border border-[#E2E8F0] bg-gradient-to-br from-slate-900 to-[#0F172A] p-8 flex flex-col justify-between group">
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
      <section className="bg-white border-y border-[#E2E8F0] py-16 sm:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072CE] block mb-2 font-heading">
              The Go2Ways Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
              Predictable, agile delivery at every stage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:shadow-md transition-shadow relative"
              >
                <div className="h-8 w-8 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-[#0072CE] mb-4">
                  {m.step}
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading">
                  {m.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
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
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8] block mb-3 font-heading">
                Dedicated Engineering Teams
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading leading-tight">
                Scale with full-time developers working exclusively for you
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                We handle every practical aspect of hiring, onboarding, and
                hosting your dedicated engineering team—cutting your operational
                overhead in half while accelerating delivery.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0072CE] hover:bg-[#005fa8] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors"
                >
                  <span>Build Your Dedicated Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
