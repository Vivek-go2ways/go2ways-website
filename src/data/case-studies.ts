import {
  Building,
  Factory,
  Zap,
  Globe2,
  ShieldCheck,
} from "lucide-react";

export const metrics = [
  { value: "99.98%", label: "Average Production Uptime" },
  { value: "35%", label: "Maintenance Cost Reduction" },
  { value: "40M+", label: "Assets Actively Tracked" },
  { value: "100%", label: "Zero-Disruption MAS Cutovers" },
];

export const caseStudies = [
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

