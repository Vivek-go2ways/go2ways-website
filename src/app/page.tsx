import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Users,
  Clock,
  Globe2,
  Layers,
  Building2,
  Factory,
  Zap,
  Flame,
  Landmark,
  Activity,
  HardHat,
  Train,
} from "lucide-react";

export const metadata = {
  title: "Go2Ways | Trusted Enterprise Technology & EAM Solutions",
  description:
    "Modernize operations through IBM Maximo asset management, cloud infrastructure, automation, integrations, and 24x7 managed support.",
};

const credentials = [
  {
    icon: ShieldCheck,
    title: "Silver Partner",
    subtitle: "IBM Maximo & TRIRIGA",
  },
  {
    icon: Cloud,
    title: "Advanced Tier",
    subtitle: "AWS Cloud Partnership",
  },
  {
    icon: Layers,
    title: "Red Hat",
    subtitle: "Certified Enterprise Partner",
  },
  {
    icon: Users,
    title: "70+ Experts",
    subtitle: "Certified Professionals",
  },
  {
    icon: Clock,
    title: "15+ Years",
    subtitle: "Enterprise EAM Experience",
  },
  {
    icon: Globe2,
    title: "8+ Sectors",
    subtitle: "Global Industries Served",
  },
];

const capabilities = [
  {
    badge: "Asset Management",
    title: "IBM Maximo & MAS Migration",
    description:
      "End-to-end Maximo implementation, seamless MAS 8/9 migration, automation scripting, mobile enablement, and workflow optimization.",
    linkText: "Explore Maximo services",
    href: "/services#maximo",
    isPrimary: true,
  },
  {
    badge: "Connected Systems",
    title: "Enterprise Integration",
    description:
      "Unify your data across SAP, Oracle, REST APIs, middleware solutions, real-time data sync, and Microsoft Azure AD integrations.",
    linkText: "Explore integrations",
    href: "/services#integrations",
    isPrimary: false,
  },
  {
    badge: "Cloud Scale",
    title: "Cloud & Infrastructure",
    description:
      "Resilient AWS deployments, Azure administration, disaster backup & recovery, virtualization, and full-stack monitoring solutions.",
    linkText: "Explore cloud solutions",
    href: "/services#cloud",
    isPrimary: false,
  },
  {
    badge: "Facilities & 24x7 Ops",
    title: "TRIRIGA & Managed Support",
    description:
      "Intelligent facility management, lease accounting, and space optimization backed by 24x7 L2/L3 and AMS incident monitoring.",
    linkText: "Explore TRIRIGA & support",
    href: "/services#tririga",
    isPrimary: false,
  },
];

const industries = [
  {
    name: "Manufacturing",
    description: "Predictive maintenance & plant automation",
    icon: Factory,
    bgGradient: "from-blue-900/90 via-slate-900/90 to-black/95",
  },
  {
    name: "Utilities",
    description: "Grid reliability & field workforce mobility",
    icon: Zap,
    bgGradient: "from-amber-900/80 via-slate-900/90 to-black/95",
  },
  {
    name: "Oil & Gas",
    description: "Upstream & downstream safety compliance",
    icon: Flame,
    bgGradient: "from-rose-950/85 via-slate-900/90 to-black/95",
  },
  {
    name: "Government",
    description: "Public infrastructure & municipal asset lifecycle",
    icon: Landmark,
    bgGradient: "from-indigo-950/85 via-slate-900/90 to-black/95",
  },
  {
    name: "Healthcare",
    description: "Biomedical equipment & hospital facility uptime",
    icon: Activity,
    bgGradient: "from-emerald-950/85 via-slate-900/90 to-black/95",
  },
  {
    name: "Infrastructure",
    description: "Large-scale capital projects & civil engineering",
    icon: HardHat,
    bgGradient: "from-cyan-950/85 via-slate-900/90 to-black/95",
  },
  {
    name: "Transportation",
    description: "Rail, transit & fleet maintenance intelligence",
    icon: Train,
    bgGradient: "from-sky-950/85 via-slate-900/90 to-black/95",
  },
  {
    name: "Real Estate",
    description: "TRIRIGA space planning & portfolio operations",
    icon: Building2,
    bgGradient: "from-purple-950/85 via-slate-900/90 to-black/95",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#FAF9F8] text-[#1B1A19]">
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-[#0067B8] hover:bg-[#005a9e] text-white text-sm font-semibold tracking-wide shadow-md transition-all"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#60CDFF] hover:text-white transition-colors"
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
                <div className="h-10 w-10 rounded-md bg-black/[0.04] border border-black/[0.07] flex items-center justify-center text-[#1B1A19] group-hover:bg-[#0067B8] group-hover:text-white group-hover:border-[#0067B8] transition-all shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B1A19] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#605E5C] leading-snug mt-0.5">
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
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0067B8] block mb-2 font-heading">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1B1A19] font-heading">
              Solutions built for mission-critical operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  cap.isPrimary
                    ? "bg-[#2664BC] text-white border-transparent"
                    : "bg-white text-[#1B1A19] border-black/[0.08] hover:border-black/20"
                }`}
              >
                <div className="p-6 sm:p-7">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block mb-3 ${
                      cap.isPrimary ? "text-white/80" : "text-[#0067B8]"
                    }`}
                  >
                    {cap.badge}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl font-bold leading-snug mb-3 ${
                      cap.isPrimary ? "text-white" : "text-[#1B1A19]"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      cap.isPrimary ? "text-white/90" : "text-[#605E5C]"
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
                        : "text-[#0067B8] hover:underline"
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
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#0067B8]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#60CDFF] block mb-3">
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
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-[#0067B8] hover:bg-[#005a9e] text-white text-sm font-semibold shadow-md transition-all"
                >
                  Build Your Dedicated Team
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bento Grid: 8 Industries Served */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0067B8] block mb-2 font-heading">
                Industries We Power
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1B1A19] font-heading">
                Transforming physical assets across 8 key sectors
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#605E5C] max-w-md leading-relaxed">
              Tailored EAM, cloud, and automation blueprints designed for
              high-compliance, asset-intensive environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group relative rounded-xl overflow-hidden h-64 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 border border-black/[0.08]"
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
                  <h3 className="text-lg font-bold text-white group-hover:text-[#60CDFF] transition-colors font-heading">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#E5E7EB] mt-1 leading-snug">
                    {ind.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
