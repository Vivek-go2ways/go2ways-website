import {
  Factory,
  Zap,
  Flame,
  Landmark,
  Activity,
  HardHat,
  Train,
  Building2,
} from "lucide-react";

export const industriesDetailed = [
  {
    name: "Manufacturing",
    tag: "Plant Reliability",
    description:
      "Modernize factory operations with predictive maintenance, asset health insights, and SCADA integration on IBM Maximo.",
    icon: Factory,
    gradient: "from-blue-900 to-slate-900",
    features: [
      "Zero unplanned line stoppage",
      "OEE and scrap reduction tracking",
      "Automated work order dispatch",
      "Connected worker mobile tablets",
    ],
  },
  {
    name: "Utilities & Power",
    tag: "Grid Resilience",
    description:
      "Manage substations, transmission lines, smart metering systems, and renewable generation assets with linear asset tracking.",
    icon: Zap,
    gradient: "from-amber-950 to-slate-900",
    features: [
      "Linear asset segmentation",
      "Field workforce GPS dispatching",
      "Regulatory audit readiness",
      "Vegetation management workflows",
    ],
  },
  {
    name: "Oil & Gas",
    tag: "Safety & Compliance",
    description:
      "Ensure asset integrity, hazardous zone tracking, permit-to-work compliance, and remote offshore telematics.",
    icon: Flame,
    gradient: "from-rose-950 to-slate-900",
    features: [
      "Permit to Work (PTW) automation",
      "Hazardous area inspections",
      "Turnaround & shutdown scheduling",
      "Critical spares inventory optimization",
    ],
  },
  {
    name: "Government & Public Sector",
    tag: "Municipal Stewardship",
    description:
      "Deliver transparent, audit-ready municipal asset accounting, fleet lifecycle management, and citizen facility repairs.",
    icon: Landmark,
    gradient: "from-indigo-950 to-slate-900",
    features: [
      "GASB 34/35 capital compliance",
      "Fleet telematics & electrification",
      "Public work order portals",
      "Grant & capital expenditure tracking",
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    tag: "Validation & Uptime",
    description:
      "Maintain strict FDA 21 CFR Part 11 validation, clinical equipment calibration, and sterile facility environmental controls.",
    icon: Activity,
    gradient: "from-emerald-950 to-slate-900",
    features: [
      "FDA 21 CFR Part 11 audit trails",
      "Biomedical device calibration",
      "Cleanroom HVAC environmental logs",
      "Vendor SLA verification",
    ],
  },
  {
    name: "Infrastructure & Heavy Industry",
    tag: "Capital Engineering",
    description:
      "Execute large-scale civil works, mining operations, port equipment maintenance, and mega-project asset handovers.",
    icon: HardHat,
    gradient: "from-cyan-950 to-slate-900",
    features: [
      "Heavy equipment telematics",
      "Contractor timesheet verification",
      "Capital project commissioning",
      "Spares replenishment logistics",
    ],
  },
  {
    name: "Transportation & Rail",
    tag: "Transit Operations",
    description:
      "Drive rolling stock reliability, track maintenance scheduling, signaling compliance, and intermodal yard efficiency.",
    icon: Train,
    gradient: "from-sky-950 to-slate-900",
    features: [
      "Rolling stock mileage overhauls",
      "Track defect repair logging",
      "Positive Train Control (PTC) logs",
      "Intermodal terminal scheduling",
    ],
  },
  {
    name: "Real Estate & Facilities",
    tag: "Space & Energy",
    description:
      "Optimize enterprise real estate with IBM TRIRIGA IWMS, lease accounting (IFRS 16 / ASC 842), and space utilization IoT.",
    icon: Building2,
    gradient: "from-purple-950 to-slate-900",
    features: [
      "IFRS 16 & ASC 842 lease compliance",
      "Dynamic hot-desking sensor maps",
      "Energy & carbon footprint monitoring",
      "Automated tenant move-in workflows",
    ],
  },
];

