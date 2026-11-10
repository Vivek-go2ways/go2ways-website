import {
  Database,
  Layers,
  Workflow,
  Cloud,
  ShieldCheck,
  Smartphone,
  Building2,
  Compass,
} from "lucide-react";

export const stats = [
  { value: "99.98%", label: "Operational Uptime" },
  { value: "40M+", label: "Tracked Enterprise Assets" },
  { value: "100%", label: "Zero-Downtime MAS Cutover" },
  { value: "24/7", label: "Global SLA Support" },
];

export const bigMetrics = [
  { value: "30+", label: "Active Clients" },
  { value: "50+", label: "Projects Done" },
  { value: "10+", label: "Team Advisors" },
  { value: "5+", label: "Glorious Years" },
];

export const servicesList = [
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

export const methodology = [
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

