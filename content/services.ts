import type { IconName } from "./icons";
import { link } from "@/lib/paths";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  imageFolder?: string;
  nav: string;
  h1: string[];
  sub: string;
  overviewTitle: string[];
  overviewBody: string;
  highlights: string[];
  worksWith: string[];
  engagements: string[];
  capabilities: { icon: IconName; title: string; text: string; photoAlt: string }[];
  gallery: string[];
  steps: { title: string; text: string }[];
  related: string[];
};

export type ServiceGroup = Pick<Service, "slug" | "name" | "short" | "icon" | "nav" | "h1" | "sub"> & {
  tabs: { id: string; label: string; service: Service }[];
};

export type ServiceEntry = Service | ServiceGroup;

export const isGroup = (s: ServiceEntry): s is ServiceGroup => "tabs" in s;

export type Product = { name: string; href: string | null; icon: IconName; desc: string };

const ENTERPRISE_INTEGRATION: Service = {
  slug: "enterprise-integration",
  name: "Enterprise Integration",
  short: "Integration",
  icon: "link",
  nav: "Connect Maximo with SAP, Oracle and more",
  h1: [
    "Connect Maximo with",
    "the rest of your business"
  ],
  sub: "Robust integrations between IBM Maximo, ERP, identity, GIS and IoT systems, built with standard APIs and monitored around the clock.",
  overviewTitle: [
    "No more double entry.",
    "No more blind spots."
  ],
  overviewBody: "When maintenance, finance and operations run in silos, teams waste time re-entering data and chasing updates. We connect IBM Maximo to SAP, Oracle, GIS, identity providers and field devices so information flows automatically.",
  highlights: [
    "Two-way sync for purchasing, inventory and GL",
    "Single sign-on via Azure AD / Entra ID, LDAP or SAML",
    "Real-time sensor and IoT data into Maximo",
    "Built on standard APIs, not fragile point-to-point code"
  ],
  worksWith: [
    "SAP",
    "Oracle EBS & Cloud",
    "Azure AD / Entra ID",
    "Esri ArcGIS",
    "IBM App Connect",
    "Apache Kafka",
    "REST APIs",
    "Maximo Integration Framework"
  ],
  engagements: [
    "New ERP integration",
    "SSO rollout",
    "Integration modernisation"
  ],
  capabilities: [
    {
      icon: "link",
      title: "ERP integration",
      text: "Two-way sync of purchase orders, receipts, inventory and costs between Maximo and SAP or Oracle.",
      photoAlt: "Network cabling in a server rack"
    },
    {
      icon: "lock",
      title: "Single sign-on & identity",
      text: "SAML and OpenID Connect with Azure AD, Entra ID or Okta for secure, audited access.",
      photoAlt: "Server rack in a data centre"
    },
    {
      icon: "pin",
      title: "GIS & spatial",
      text: "Bi-directional sync with Esri ArcGIS: assets and work orders plotted on maps.",
      photoAlt: "Digital map on a tablet"
    },
    {
      icon: "pulse",
      title: "IoT & sensor feeds",
      text: "Condition monitoring, meter readings and alarms fed straight from assets into Maximo.",
      photoAlt: "Circuit board with sensors"
    },
    {
      icon: "layers",
      title: "Middleware & APIs",
      text: "REST APIs, Kafka topics and MIF messaging designed to scale without breaking.",
      photoAlt: "Abstract data flow"
    },
    {
      icon: "shield",
      title: "Monitoring & runbooks",
      text: "Every integration delivered with alerts, retry queues, health dashboards and runbooks.",
      photoAlt: "Control room with monitoring screens"
    }
  ],
  gallery: [
    "Server room with blue lighting",
    "Network engineer at work",
    "Data cables connected to switches"
  ],
  steps: [
    {
      title: "Discover",
      text: "We map source and target fields, error scenarios and transaction volumes."
    },
    {
      title: "Design",
      text: "We design message flows, authentication, retry logic and monitoring."
    },
    {
      title: "Build & test",
      text: "We build integrations and test with mock and real data through edge cases."
    },
    {
      title: "Deploy",
      text: "We hand over with monitoring, alerts and clear runbooks."
    }
  ],
  related: [
    "ibm-maximo-mas",
    "cloud-infrastructure",
    "mobile-development"
  ]
};

const TRIRIGA: Service = {
  slug: "tririga",
  name: "TRIRIGA Services",
  short: "TRIRIGA",
  icon: "building",
  nav: "Space, lease and facility management",
  h1: [
    "Run your real estate",
    "and facilities with TRIRIGA"
  ],
  sub: "Implementation, lease accounting (IFRS 16 / ASC 842), space management and facilities maintenance for IBM TRIRIGA and IBM Maximo Real Estate and Facilities.",
  overviewTitle: [
    "Every building, lease",
    "and workspace in one view"
  ],
  overviewBody: "IBM TRIRIGA is an integrated workplace management system (IWMS) for real estate and facilities. We set it up so you can see how space is used, stay compliant on leases and keep buildings maintained.",
  highlights: [
    "Lease accounting compliant with IFRS 16 and ASC 842",
    "Space management from CAD and BIM floor plans",
    "Work orders and preventive maintenance for facilities",
    "Integrations with ERP, HR and building systems"
  ],
  worksWith: [
    "IBM TRIRIGA",
    "TRIRIGA Application Platform",
    "AutoCAD & Revit",
    "SAP",
    "Oracle",
    "Db2 & Oracle DB",
    "REST APIs"
  ],
  engagements: [
    "New TRIRIGA rollout",
    "Lease accounting upgrade",
    "Space management overhaul"
  ],
  capabilities: [
    {
      icon: "floor",
      title: "Space & occupancy",
      text: "CAD and BIM floor plans loaded so you can track departments, desks and utilisation.",
      photoAlt: "Architect reviewing plans"
    },
    {
      icon: "doc",
      title: "Lease administration & accounting",
      text: "Leases abstracted, payments scheduled, and accounting handled for IFRS 16 and ASC 842.",
      photoAlt: "Reviewing lease contracts"
    },
    {
      icon: "wrench",
      title: "Facility maintenance",
      text: "Work orders, preventive maintenance and service requests for every building.",
      photoAlt: "Technician inspecting HVAC unit"
    },
    {
      icon: "chart",
      title: "Capital projects",
      text: "Budgets, schedules and costs tracked for building and refurbishment projects.",
      photoAlt: "Construction worker on a building frame"
    },
    {
      icon: "refresh",
      title: "Upgrades & platform migrations",
      text: "Upgrades to the latest TRIRIGA platform and migration to containerised MAS environments.",
      photoAlt: "Spiral staircase in a glass building"
    },
    {
      icon: "link",
      title: "Integrations",
      text: "Two-way links with SAP, Oracle, identity systems and IoT environmental sensors.",
      photoAlt: "Networking hardware"
    }
  ],
  gallery: [
    "Modern office building",
    "Open-plan office with desks",
    "Architectural blueprint on a desk"
  ],
  steps: [
    {
      title: "Discover",
      text: "We review your portfolio, leases, CAD drawings and reporting requirements."
    },
    {
      title: "Configure",
      text: "We set up portfolios, workflows, accounting rules and security roles."
    },
    {
      title: "Migrate",
      text: "We abstract leases and load buildings, floors and people."
    },
    {
      title: "Launch",
      text: "We train users, go live and support adoption."
    }
  ],
  related: [
    "ibm-maximo-mas",
    "cloud-infrastructure",
    "managed-support"
  ]
};

const AI_SERVICES: Service = {
  slug: "ai-services",
  name: "AI Solutions",
  short: "AI Solutions",
  icon: "sparkle",
  nav: "Generative AI, AI agents, document intelligence and ML",
  h1: [
    "AI that works",
    "on your real data"
  ],
  sub: "Generative AI, AI agents, document intelligence and custom machine learning, designed around your goals and deployed securely.",
  overviewTitle: [
    "From AI idea",
    "to production value"
  ],
  overviewBody: "At Go2Ways, we turn AI innovation into measurable business value. We develop Generative AI solutions, intelligent AI agents, Retrieval-Augmented Generation (RAG) systems, document intelligence solutions, and custom machine learning models tailored to your business needs. From predictive analytics and anomaly detection to computer vision, natural language processing, and workflow automation, we build scalable, secure, and production-ready AI solutions that solve real-world challenges, improve efficiency, and accelerate business growth.",
  highlights: [
    "Generative AI assistants and RAG knowledge systems grounded in your own data",
    "AI agents and automation built into the workflows your teams already use",
    "Document intelligence that reads, checks and routes paperwork automatically",
    "Custom ML models for forecasting, anomaly detection, computer vision and NLP",
    "Security, privacy and human review built in from day one"
  ],
  worksWith: [
    "Generative AI & LLMs",
    "RAG & Vector Databases",
    "AI Agents & Orchestration",
    "Machine Learning & MLOps",
    "Computer Vision & NLP",
    "Python & AI Frameworks",
    "AWS, Azure & Google Cloud AI",
    "IBM Maximo & ERP Data",
    "Your Existing Stack"
  ],
  engagements: [
    "AI readiness workshop and use-case discovery",
    "Proof of concept or pilot in a few weeks",
    "Generative AI assistant or AI agent build",
    "Model monitoring, MLOps and continuous improvement"
  ],
  capabilities: [
    {
      icon: "sparkle",
      title: "Generative AI & RAG solutions",
      text: "Custom Generative AI applications, RAG-based knowledge systems, AI chatbots and virtual assistants, plus LLM integration and fine-tuning.",
      photoAlt: "Chat message bubbles on a translucent screen"
    },
    {
      icon: "flow",
      title: "AI agents & workflow automation",
      text: "Custom AI agents and multi-agent systems, intelligent business process automation and AI-powered decision support, integrated into enterprise workflows.",
      photoAlt: "Row of AI robots working on laptops"
    },
    {
      icon: "doc",
      title: "AI document intelligence",
      text: "Intelligent document processing (IDP), document analysis and verification, and AI-powered report generation.",
      photoAlt: "Paper invoice held next to a laptop showing a digital form"
    },
    {
      icon: "chart",
      title: "Custom machine learning models",
      text: "Business-specific ML models for predictive analytics and forecasting, classification, regression, anomaly detection, computer vision and NLP, trained, optimised and deployed.",
      photoAlt: "Glowing neural network of connected points"
    },
    {
      icon: "server",
      title: "AI strategy & MLOps",
      text: "AI strategy, use-case prioritisation and solution architecture, plus model deployment, monitoring, retraining and governance so results stay accurate over time.",
      photoAlt: "AI processor chip on a circuit board"
    }
  ],
  gallery: [
    "Circuit board shaped like a human brain",
    "Team collaborating around a computer",
    "Robot and human hands reaching toward glowing AI letters"
  ],
  steps: [
    {
      title: "Discover & Assess",
      text: "We understand your goals, review your data and systems, and pick the AI use cases with the clearest business value."
    },
    {
      title: "Prove the Value",
      text: "We build a focused proof of concept on your real data, so you see results and accuracy before you commit further."
    },
    {
      title: "Build & Integrate",
      text: "We harden the solution, train and evaluate models, and integrate AI into your applications, workflows and security model."
    },
    {
      title: "Deploy & Improve",
      text: "We launch to production, monitor accuracy, cost and usage, and keep retraining and improving the solution."
    }
  ],
  related: [
    "erp-enterprise-applications",
    "cloud-infrastructure",
    "consulting-advisory"
  ]
};

const WEB_DEVELOPMENT: Service = {
  slug: "web-development",
  name: "Web Development",
  short: "Web Development",
  icon: "globe",
  nav: "Websites, web apps, SaaS platforms and portals",
  h1: [
    "Enterprise Web Applications",
    "Built to Perform"
  ],
  sub: "Responsive enterprise websites, custom web applications, operations portals and SaaS platforms on the technology that fits you best.",
  overviewTitle: [
    "Enterprise web applications",
    "built to perform"
  ],
  overviewBody: "From corporate digital experiences to complex operations portals and SaaS platforms, Go2Ways designs and builds fast, secure and scalable web applications. Our full-stack engineering team works with your existing technology stack or recommends the right architecture, integrates seamlessly with enterprise systems and APIs, and provides reliable ongoing support.",
  highlights: [
    "Responsive corporate websites and portals that reflect your brand on every device",
    "Custom enterprise web applications, operations dashboards and employee portals",
    "Full-stack engineering on React, Next.js, Node.js, Python, Java, .NET and more",
    "Secure transactional workflows, role-based access control and system integrations",
    "Maintenance, performance tuning and security updates after go-live"
  ],
  worksWith: [
    "React & Next.js",
    "Angular & Vue",
    "Node.js & Python",
    "Java & .NET",
    "REST & GraphQL APIs",
    "SQL & NoSQL Databases",
    "Enterprise SaaS Platforms",
    "Identity & SSO",
    "AWS, Azure & Google Cloud",
    "Docker, Kubernetes & CI/CD",
    "Your Existing Stack"
  ],
  engagements: [
    "Corporate website or digital platform modernisation",
    "Custom enterprise web application, portal or dashboard",
    "Operations software build or replatforming",
    "Ongoing maintenance and technical support"
  ],
  capabilities: [
    {
      icon: "globe",
      title: "Corporate digital platforms",
      text: "Professional, responsive corporate websites, customer portals and platform redesigns that represent your brand and deliver seamless performance across devices.",
      photoAlt: "Laptop, tablet and smartphone side by side on a wooden desk"
    },
    {
      icon: "layers",
      title: "Operations & SaaS applications",
      text: "Custom web applications, SaaS platforms, administrative command centres, operational dashboards and employee portals, with AI built in where it adds value.",
      photoAlt: "Performance analytics dashboard on a laptop screen"
    },
    {
      icon: "code",
      title: "Full-stack & API engineering",
      text: "Interactive front ends, secure back ends, database design and API development and integration, using React, Next.js, Python, Node.js, Java, .NET or the stack you already run.",
      photoAlt: "Code editor on a laptop screen"
    },
    {
      icon: "shield",
      title: "Secure transaction & billing portals",
      text: "Enterprise transaction workflows, self-service portals, customer billing interfaces and automated finance integrations built with rigorous security and compliance.",
      photoAlt: "Person managing secure digital transactions on a laptop"
    },
    {
      icon: "wrench",
      title: "Maintenance & support",
      text: "Application maintenance, performance optimisation, security patching, cloud hosting support and a dedicated technical help desk to ensure continuous uptime.",
      photoAlt: "Laptop on a white desk"
    }
  ],
  gallery: [
    "Website shown on a laptop, tablet and smartphone",
    "Watercolour wireframe sketches of website layouts",
    "Two developers writing code at their monitors"
  ],
  steps: [
    {
      title: "Discover & Plan",
      text: "We understand your goals, audience and current systems, then agree the scope, stack, timeline and success measures."
    },
    {
      title: "Design & Prototype",
      text: "We design the user experience and interface, and share a clickable prototype so you can see it before we build."
    },
    {
      title: "Build & Test",
      text: "We develop in short sprints with regular demos, integrate your systems and APIs, and test speed, security and every device."
    },
    {
      title: "Launch & Support",
      text: "We go live with zero fuss, then keep the site or app fast, secure and up to date with ongoing support."
    }
  ],
  related: [
    "mobile-development",
    "cloud-infrastructure",
    "managed-support"
  ]
};

export const SERVICES: ServiceEntry[] = [
  {
    slug: "ibm-maximo-mas",
    name: "IBM Maximo Application Suite (MAS)",
    short: "IBM Maximo & MAS",
    icon: "wrench",
    imageFolder: "ibm-maximo",
    nav: "Implementation, MAS migration, scripting and support",
    h1: [
      "Manage, Maintain & Optimise",
      "Your Enterprise Assets"
    ],
    sub: "End-to-end IBM Maximo implementation, configuration, upgrades, automation scripting, system integration, and migration to MAS.",
    overviewTitle: [
      "Modernise, migrate and manage",
      "every critical asset"
    ],
    overviewBody: "From established Maximo deployments to modern MAS environments, Go2Ways helps organisations manage asset lifecycles, maintenance operations, and enterprise workflows. We deliver structured implementations, configuration, automation scripting, and planned MAS migrations on Red Hat OpenShift across hybrid and cloud platforms.",
    highlights: [
      "New Maximo implementations, configurations and re-platforming",
      "Planned, rehearsed migrations from Maximo 7.6 to MAS (Manage, Health, Monitor, Predict)",
      "Automation scripts and modern REST/Kafka integrations replacing fragile Java code",
      "AppPoints licensing advisory, OpenShift deployment and post-migration hypercare"
    ],
    worksWith: [
      "Maximo Manage",
      "Maximo Health",
      "Maximo Monitor",
      "Maximo Predict",
      "MAS 9",
      "Red Hat OpenShift",
      "AWS",
      "Azure",
      "Db2",
      "Oracle",
      "BIRT",
      "Kafka"
    ],
    engagements: [
      "Maximo implementation or rollout",
      "Maximo 7.6 to MAS migration",
      "MAS upgrades & enhancement support"
    ],
    capabilities: [
      {
        icon: "chart",
        title: "AppPoints & Licensing Advisory",
        text: "User role assessment, application entitlement mapping and AppPoints licensing guidance to help organisations plan their Maximo deployment.",
        photoAlt: "Reports and charts on a laptop"
      },
      {
        icon: "wrench",
        title: "Implementation & Configuration",
        text: "Asset hierarchies, work management, inventory, purchasing and Application Designer configurations tailored to your operational requirements.",
        photoAlt: "Industrial plant with stainless steel pipes and pumps"
      },
      {
        icon: "migrate",
        title: "MAS Migration & Upgrades",
        text: "Structured and rehearsed migration from Maximo 7.6 to MAS on Red Hat OpenShift, with compatibility assessments and upgrade planning to protect existing customisations.",
        photoAlt: "Network cabling in a data centre"
      },
      {
        icon: "database",
        title: "Data Migration & Validation",
        text: "Data extraction, cleansing, mapping, validation and controlled cutover execution, supported by rehearsed rollback procedures and post-migration hypercare.",
        photoAlt: "Two people mapping a workflow on a whiteboard"
      },
      {
        icon: "code",
        title: "Automation Scripting",
        text: "Developing Maximo automation scripts for business rules, validations and operational logic, reducing reliance on certain Java customisations and simplifying maintenance.",
        photoAlt: "Code on a monitor"
      },
      {
        icon: "link",
        title: "Integration Modernisation",
        text: "Modernising enterprise interfaces using REST APIs, Maximo Integration Framework (MIF), Apache Kafka and secure authentication mechanisms such as API keys and OAuth.",
        photoAlt: "Fibre optic cables in a network switch"
      }
    ],
    gallery: [
      "Engineer in a hard hat reviewing plans on site",
      "Technician working on industrial equipment",
      "Warehouse with stocked shelves"
    ],
    steps: [
      {
        title: "Assess & Plan",
        text: "We audit your Maximo estate, review customisations, and define scope, licensing, and timelines."
      },
      {
        title: "Design & Prepare",
        text: "We map workflows, configure MAS on OpenShift, and modernise automation scripts and integrations."
      },
      {
        title: "Build & Rehearse",
        text: "We migrate data in sprints and run full end-to-end rehearsal cycles in non-production environments."
      },
      {
        title: "Cutover & Support",
        text: "We execute cutover within a planned window, train teams, and provide dedicated hypercare."
      }
    ],
    related: [
      "erp-enterprise-applications",
      "cloud-infrastructure",
      "managed-support"
    ]
  },
  {
    slug: "ai-solutions",
    name: "AI & Web Solutions",
    short: "AI & Web Solutions",
    icon: "sparkle",
    nav: "AI, machine learning, enterprise web apps and portals on any stack",
    h1: [
      "Intelligent Web & AI Solutions,",
      "Built on Any Stack"
    ],
    sub: "We design, build and run AI solutions, enterprise portals and web applications around your business goals: from Generative AI, AI agents and custom ML models to SaaS platforms, operations portals and dashboards, on the technology that fits you best.",
    tabs: [
      { id: "ai", label: "AI Solutions", service: AI_SERVICES },
      { id: "web", label: "Web Applications", service: WEB_DEVELOPMENT }
    ]
  },
  {
    slug: "erp-enterprise-applications",
    name: "Enterprise Solutions",
    short: "Enterprise Solutions",
    icon: "layers",
    nav: "SAP & Oracle integration and IBM TRIRIGA",
    h1: [
      "Enterprise Solutions,",
      "Connected and Running as One"
    ],
    sub: "Connect IBM Maximo with SAP, Oracle and the rest of your enterprise systems, and run your real estate and facilities on IBM TRIRIGA, delivered by one team.",
    tabs: [
      { id: "integration", label: "Enterprise Integration", service: ENTERPRISE_INTEGRATION },
      { id: "tririga", label: "TRIRIGA Services", service: TRIRIGA }
    ]
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    short: "Cloud & Infrastructure",
    icon: "cloud",
    nav: "AWS, Azure, OpenShift, backup and monitoring",
    h1: [
      "Cloud infrastructure,",
      "sized and run for reliability"
    ],
    sub: "Secure, monitored hosting for IBM Maximo, MAS, TRIRIGA and your wider estate on AWS, Microsoft Azure or Red Hat OpenShift.",
    overviewTitle: [
      "The foundation",
      "your operations depend on"
    ],
    overviewBody: "A slow or brittle infrastructure slows down every technician, dispatcher and manager who relies on it. We design, build and run cloud and hybrid environments sized for performance, hardened against threats, and backed by 24/7 monitoring.",
    highlights: [
      "Architectures designed around real user and asset volumes",
      "Red Hat OpenShift deployments for Maximo Application Suite (MAS)",
      "Tested backup, disaster recovery and RPO / RTO targets",
      "Cost visibility so you don't overpay for idle capacity"
    ],
    worksWith: [
      "AWS",
      "Microsoft Azure",
      "Red Hat OpenShift",
      "IBM Cloud",
      "Linux",
      "Windows Server",
      "Terraform",
      "Docker / Containers"
    ],
    engagements: [
      "Cloud migration",
      "OpenShift for MAS",
      "Disaster recovery review"
    ],
    capabilities: [
      {
        icon: "cloud",
        title: "Cloud migration & hosting",
        text: "Lift-and-shift or re-platform to AWS or Azure, with landing zones and networking set up right.",
        photoAlt: "Data centre server aisle"
      },
      {
        icon: "layers",
        title: "OpenShift for MAS",
        text: "OpenShift clusters designed and deployed specifically for MAS workloads.",
        photoAlt: "Network hardware closeup"
      },
      {
        icon: "shield",
        title: "Backup & disaster recovery",
        text: "Automated backups, replication and rehearsed recovery so an outage doesn't stop operations.",
        photoAlt: "Server room with green indicators"
      },
      {
        icon: "pulse",
        title: "24/7 monitoring & alerting",
        text: "Infrastructure, container and application monitoring with alerts that reach on-call engineers fast.",
        photoAlt: "Monitoring dashboard on a monitor"
      },
      {
        icon: "lock",
        title: "Security hardening & patching",
        text: "OS, database and container patching routines that keep systems secure without surprise downtime.",
        photoAlt: "Cyber security padlock graphic"
      },
      {
        icon: "chart",
        title: "Performance & cost tuning",
        text: "Right-sizing, reserved instances and database tuning so you only pay for what you use.",
        photoAlt: "Laptop with performance graphs"
      }
    ],
    gallery: [
      "Rows of high-density server racks",
      "Cloud infrastructure visualization",
      "Engineer checking server hardware"
    ],
    steps: [
      {
        title: "Assess",
        text: "We review your current workloads, licensing, compliance needs and DR goals."
      },
      {
        title: "Design",
        text: "We produce an architecture with networking, security and cost models."
      },
      {
        title: "Build",
        text: "We build environments as code and migrate workloads with minimal downtime."
      },
      {
        title: "Operate",
        text: "We monitor, patch and optimise, with regular reports on cost and health."
      }
    ],
    related: [
      "ibm-maximo-mas",
      "managed-support",
      "erp-enterprise-applications"
    ]
  },
  {
    slug: "managed-support",
    name: "Managed Support",
    short: "Managed Support",
    icon: "headset",
    nav: "SLA-backed support, AMS and proactive maintenance",
    h1: [
      "Support that keeps",
      "your operations running"
    ],
    sub: "SLA-backed application support, AMS, continuous improvements and proactive health checks for IBM Maximo, MAS, TRIRIGA and connected systems.",
    overviewTitle: [
      "A dependable team",
      "behind your systems"
    ],
    overviewBody: "When an asset system goes down, work stops and revenue slips. Our managed support gives you named, certified specialists who know your configuration, resolve incidents fast, and steadily improve the system so fewer things break.",
    highlights: [
      "L2 and L3 support with agreed response and resolution SLAs",
      "Named technical lead who knows your setup inside out",
      "Application Management Services (AMS) for ongoing changes",
      "Monthly service reviews with transparent metrics"
    ],
    worksWith: [
      "IBM Maximo",
      "MAS",
      "IBM TRIRIGA",
      "Red Hat OpenShift",
      "Db2 & Oracle",
      "Jira & ServiceNow",
      "AWS & Azure"
    ],
    engagements: [
      "24/7 application support",
      "Business-hours AMS",
      "Hybrid tier-2 / tier-3 cover"
    ],
    capabilities: [
      {
        icon: "headset",
        title: "L2 & L3 application support",
        text: "Fast, SLA-backed resolution of user issues, errors and data problems from experienced specialists.",
        photoAlt: "Support engineer on a headset"
      },
      {
        icon: "refresh",
        title: "Application management (AMS)",
        text: "Ongoing configuration, screen changes, report updates and small enhancements delivered in sprints.",
        photoAlt: "Team in a stand-up meeting"
      },
      {
        icon: "pulse",
        title: "Proactive health checks",
        text: "Regular reviews of logs, queues, database indexes and memory to catch issues before users notice.",
        photoAlt: "Diagnostic dashboard"
      },
      {
        icon: "shield",
        title: "Patching & minor upgrades",
        text: "Security fixes, fix packs and minor versions applied in non-prod first, then deployed cleanly.",
        photoAlt: "Hand typing on a laptop keyboard"
      },
      {
        icon: "users",
        title: "Root-cause analysis",
        text: "Every major incident investigated to the root cause, with fixes to stop it happening again.",
        photoAlt: "Two engineers reviewing data"
      },
      {
        icon: "chart",
        title: "Service reporting",
        text: "Monthly reviews covering ticket volumes, SLA performance, recurring themes and recommendations.",
        photoAlt: "Reports and charts on a desk"
      }
    ],
    gallery: [
      "Operations centre with live monitors",
      "Support consultant on a client call",
      "Engineers working in an office"
    ],
    steps: [
      {
        title: "Transition",
        text: "We review your systems, document customisations and shadow your team."
      },
      {
        title: "Baseline",
        text: "We set up ticketing, agree SLAs, and take over day-to-day support."
      },
      {
        title: "Stabilise",
        text: "We clear backlogs, tune alert thresholds and patch known issues."
      },
      {
        title: "Improve",
        text: "We suggest and deliver improvements that reduce tickets over time."
      }
    ],
    related: [
      "ibm-maximo-mas",
      "cloud-infrastructure",
      "consulting-advisory"
    ]
  },
  {
    slug: "mobile-development",
    name: "Mobile Solutions",
    short: "Mobile Solutions",
    icon: "mobile",
    nav: "Connected field apps and mobile solutions",
    h1: [
      "Connect Your People,",
      "Systems and Operations"
    ],
    sub: "Mobile solutions that connect field teams with business systems, operational data and workflows, helping employees access information and complete tasks wherever work happens.",
    overviewTitle: [
      "Empower your workforce",
      "wherever work happens"
    ],
    overviewBody: "Paper processes and delayed data entry slow down operations and lead to incomplete records. Go2Ways develops connected enterprise mobile applications and deploys field platforms like Maximo Mobile, giving teams instant access to work orders, assets, digital forms, and operational insights whether online or offline.",
    highlights: [
      "Mobile workforce enablement across field and facility operations",
      "Offline-first architectures with reliable bidirectional data sync",
      "Digital inspections, work orders, photos, and electronic signatures",
      "Integration with enterprise platforms including IBM Maximo, ERP, and GIS"
    ],
    worksWith: [
      "iOS",
      "Android",
      "React Native",
      "Maximo Mobile",
      "REST APIs",
      "Esri ArcGIS",
      "Barcode / RFID"
    ],
    engagements: [
      "Mobile solution rollout",
      "Custom field operations app",
      "Mobile experience & workflow review"
    ],
    capabilities: [
      {
        icon: "mobile",
        title: "Enterprise mobile enablement",
        text: "Role-based mobile applications for technicians, inspectors, and operational staff, configured for fast adoption.",
        photoAlt: "Technician recording work on a tablet"
      },
      {
        icon: "code",
        title: "Custom app development",
        text: "Native and cross-platform enterprise mobile applications tailored to specific business processes and workflows.",
        photoAlt: "Phone app beside a laptop"
      },
      {
        icon: "offline",
        title: "Offline-first field work",
        text: "Robust offline capabilities that allow field teams to complete tasks in remote locations and sync automatically when connected.",
        photoAlt: "Field engineer on site"
      },
      {
        icon: "clipboard",
        title: "Digital inspections & forms",
        text: "Standardised mobile forms, guided inspection checklists, photo capture, and digital signatures for compliance.",
        photoAlt: "Filling in an inspection checklist"
      },
      {
        icon: "pin",
        title: "Spatial & location awareness",
        text: "Map-based asset visualisation, route guidance, and work order dispatch integrated with GIS systems.",
        photoAlt: "Phone showing a navigation map"
      },
      {
        icon: "scan",
        title: "Barcode, QR & RFID capture",
        text: "Rapid asset identification, parts scanning, and inventory tracking directly from mobile device cameras or scanners.",
        photoAlt: "Phone scanning a code"
      }
    ],
    gallery: [
      "Field worker in a safety helmet",
      "Phone showing a dashboard app",
      "Engineer in a hard hat on site"
    ],
    steps: [
      {
        title: "Observe",
        text: "We review operational processes with field teams to understand practical workflows."
      },
      {
        title: "Prototype",
        text: "We design intuitive mobile interfaces and validate them with end users early."
      },
      {
        title: "Build",
        text: "We configure enterprise mobile platforms or engineer custom applications with robust sync."
      },
      {
        title: "Roll out",
        text: "We deploy to devices, support team onboarding, and ensure operational readiness."
      }
    ],
    related: [
      "ibm-maximo-mas",
      "erp-enterprise-applications",
      "managed-support"
    ]
  },
  {
    slug: "consulting-advisory",
    name: "Enterprise Technology Consulting & Architecture",
    short: "Consulting & Architecture",
    icon: "bulb",
    nav: "Technology consulting, solution architecture and roadmaps",
    h1: [
      "Turn Technology Decisions",
      "Into a Clear Direction"
    ],
    sub: "Technology consulting and solution architecture that help organisations assess their technology landscape, plan modernisation and design scalable solutions aligned with business objectives.",
    overviewTitle: [
      "Architecting scalable systems",
      "for modern business"
    ],
    overviewBody: "Complex technology decisions require clear architectural direction. Go2Ways partners with business and technology leaders to assess current systems, evaluate platforms, and design practical solution architectures. We build actionable technology roadmaps that align digital investments with strategic business outcomes.",
    highlights: [
      "Enterprise technology consulting and digital modernisation roadmaps",
      "End-to-end solution and system architecture design",
      "Technology landscape assessments and architecture reviews",
      "Enterprise integration, cloud architecture and technical governance"
    ],
    worksWith: [
      "Enterprise Systems",
      "Cloud Platforms (AWS, Azure, OpenShift)",
      "Integration Frameworks",
      "Modern APIs",
      "IBM Maximo",
      "IBM TRIRIGA"
    ],
    engagements: [
      "Technology assessment & review",
      "Solution architecture design",
      "Modernisation roadmap & strategy"
    ],
    capabilities: [
      {
        icon: "target",
        title: "Technology strategy & roadmaps",
        text: "Comprehensive modernisation strategies aligned with business goals, operational priorities, and investment plans.",
        photoAlt: "Two people building a project roadmap"
      },
      {
        icon: "layers",
        title: "Solution & system architecture",
        text: "Scalable target architectures spanning enterprise applications, data flows, integration frameworks, and infrastructure.",
        photoAlt: "Architectural blueprints"
      },
      {
        icon: "search",
        title: "Technology assessments & reviews",
        text: "Detailed reviews of system architecture, performance, configuration, and data integrity with actionable recommendations.",
        photoAlt: "Reviewing a report over a laptop"
      },
      {
        icon: "flow",
        title: "Integration & workflow architecture",
        text: "Connected enterprise workflows, API strategies, and data exchange patterns that eliminate operational silos.",
        photoAlt: "Mapping a process flowchart on a whiteboard"
      },
      {
        icon: "doc",
        title: "Platform evaluation & planning",
        text: "Objective evaluation of technology platforms, cloud readiness, and migration feasibility tailored to operational needs.",
        photoAlt: "Reviewing licence paperwork"
      },
      {
        icon: "users",
        title: "Technical leadership & advisory",
        text: "Advisory support and technical leadership to guide internal teams through complex implementation cycles.",
        photoAlt: "Remote team member on a video call"
      }
    ],
    gallery: [
      "Strategy meeting around a laptop",
      "Consultant presenting to a team",
      "Team planning with sticky notes"
    ],
    steps: [
      {
        title: "Assess",
        text: "We review your technology landscape, stakeholder requirements, and architectural baseline."
      },
      {
        title: "Analyse",
        text: "We evaluate system dependencies, technical debt, risks, and modernisation opportunities."
      },
      {
        title: "Architect",
        text: "We formulate scalable target architectures, technical patterns, and platform recommendations."
      },
      {
        title: "Roadmap",
        text: "We deliver an actionable, phased implementation roadmap with clear milestones."
      }
    ],
    related: [
      "ibm-maximo-mas",
      "erp-enterprise-applications",
      "managed-support"
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    name: "Ordova",
    href: "https://ordova.go2ways.com/",
    icon: "bus",
    desc: "Intelligent transport management for bus operators"
  },
  {
    name: "Emp AI",
    href: null,
    icon: "sparkle",
    desc: "In development"
  }
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const servicePath = (slug: string) => link(`/service-${slug}`);
