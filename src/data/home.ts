import {
  ShieldCheck,
  Cloud,
  Layers,
  Users,
  Clock,
  Globe2,
  Factory,
  Zap,
  Flame,
  Landmark,
  Activity,
  HardHat,
  Train,
  Building2,
} from "lucide-react";

export const credentials = [
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

export const capabilities = [
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

export const industries = [
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

