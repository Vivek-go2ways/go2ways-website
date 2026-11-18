import type { IconName } from "./icons";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
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

export type Product = { name: string; href: string | null; icon: IconName; desc: string };

export const SERVICES: Service[] = [
  {
    slug: "ibm-maximo",
    name: "IBM Maximo Services",
    short: "IBM Maximo",
    icon: "wrench",
    nav: "Implementation, upgrades, scripting and support",
    h1: [
      "IBM Maximo,",
      "set up to run your assets"
    ],
    sub: "Implementation, configuration, upgrades, automation scripting and integrations for IBM Maximo, delivered by certified consultants.",
    overviewTitle: [
      "One system of record",
      "for every asset"
    ],
    overviewBody: "IBM Maximo holds your assets, work orders, inventory and maintenance history in one place. We configure it around how your teams already work, then keep it fast and dependable as you grow.",
    highlights: [
      "New implementations and re-implementations",
      "Upgrades without losing your customisations",
      "Automation scripts instead of fragile Java code",
      "Reports and KPIs your managers actually use"
    ],
    worksWith: [
      "Maximo Manage",
      "Maximo Health",
      "Maximo Monitor",
      "Maximo Predict",
      "Maximo Spatial",
      "BIRT",
      "Db2",
      "Oracle",
      "SQL Server"
    ],
    engagements: [
      "New Maximo rollout",
      "Upgrade or re-platform",
      "Ongoing enhancements"
    ],
    capabilities: [
      {
        icon: "wrench",
        title: "Implementation & configuration",
        text: "Asset hierarchies, locations, work management, inventory and purchasing set up for your operation.",
        photoAlt: "Operator running industrial machinery"
      },
      {
        icon: "refresh",
        title: "Upgrades",
        text: "Version upgrades planned and rehearsed, with customisations reviewed and carried forward.",
        photoAlt: "Person working on a laptop"
      },
      {
        icon: "code",
        title: "Automation scripting",
        text: "Business rules written as Maximo automation scripts, easier to maintain than custom Java.",
        photoAlt: "Code on a monitor"
      },
      {
        icon: "flow",
        title: "Workflows & applications",
        text: "Approval workflows, escalations, Application Designer screens and Start Centers.",
        photoAlt: "Two people mapping a workflow on a whiteboard"
      },
      {
        icon: "chart",
        title: "Reporting & KPIs",
        text: "BIRT reports, KPIs and dashboards for maintenance, cost and reliability.",
        photoAlt: "Reports and charts on a laptop"
      },
      {
        icon: "database",
        title: "Data migration & loading",
        text: "Clean, validated loads of assets, locations, PMs and history from legacy systems.",
        photoAlt: "Network cabling in a data center"
      }
    ],
    gallery: [
      "Engineer in a hard hat reviewing plans on site",
      "Technician working on industrial equipment",
      "Warehouse with stocked shelves"
    ],
    steps: [
      {
        title: "Assess",
        text: "We review your processes, data and current setup to agree scope and priorities."
      },
      {
        title: "Design",
        text: "We map requirements to Maximo applications, workflows and integrations."
      },
      {
        title: "Build & test",
        text: "We configure, script and load data in sprints, with your users testing as we go."
      },
      {
        title: "Go live & support",
        text: "We train your teams, run cutover and stay on for hypercare."
      }
    ],
    related: [
      "mas-migration",
      "enterprise-integration",
      "managed-support"
    ]
  },
  {
    slug: "mas-migration",
    name: "MAS Migration",
    short: "MAS Migration",
    icon: "migrate",
    nav: "Move from Maximo 7.6 to Maximo Application Suite",
    h1: [
      "Move to Maximo",
      "Application Suite with confidence"
    ],
    sub: "A planned, rehearsed migration from Maximo 7.6 to IBM Maximo Application Suite (MAS), on the cloud or platform you choose.",
    overviewTitle: [
      "Maximo 7.6 is behind you.",
      "MAS is next."
    ],
    overviewBody: "IBM base support for Maximo 7.6.1 ended in September 2025. MAS brings Maximo Manage together with Health, Monitor, Predict and Mobile on Red Hat OpenShift, licensed with AppPoints. We plan the move so your operations keep running throughout.",
    highlights: [
      "Readiness assessment of customisations and integrations",
      "AppPoints licensing planned up front",
      "Full rehearsal in a non-production environment",
      "Cutover plan with rollback and hypercare"
    ],
    worksWith: [
      "MAS 9",
      "Maximo Manage",
      "Red Hat OpenShift",
      "AWS",
      "Azure",
      "IBM Cloud",
      "Db2",
      "Kafka"
    ],
    engagements: [
      "Migration readiness assessment",
      "End-to-end MAS migration",
      "MAS upgrade (8.x to 9.x)"
    ],
    capabilities: [
      {
        icon: "search",
        title: "Readiness assessment",
        text: "An inventory of customisations, integrations, reports and licences, with effort and risk for each.",
        photoAlt: "Checking items off a list"
      },
      {
        icon: "calendar",
        title: "AppPoints planning",
        text: "Map your current users and modules to the AppPoints model, so there are no licensing surprises.",
        photoAlt: "Open planner on a desk"
      },
      {
        icon: "layers",
        title: "OpenShift platform setup",
        text: "Install and configure MAS on OpenShift, on-premises or on AWS, Azure or IBM Cloud.",
        photoAlt: "Rack of servers"
      },
      {
        icon: "code",
        title: "Customisation rework",
        text: "Java customisations rewritten as automation scripts, and outdated changes retired.",
        photoAlt: "Code on a laptop screen"
      },
      {
        icon: "link",
        title: "Integration modernisation",
        text: "Move legacy interfaces to REST APIs and Kafka, and update security to API keys and OAuth.",
        photoAlt: "Network cables"
      },
      {
        icon: "database",
        title: "Data migration & cutover",
        text: "Database upgrade, validation and a timed cutover with a tested rollback plan.",
        photoAlt: "Server room aisle"
      }
    ],
    gallery: [
      "Modern data center with rows of server cabinets",
      "Cloud computing concept",
      "Team planning around laptops"
    ],
    steps: [
      {
        title: "Assess",
        text: "We audit your Maximo 7.6 estate and produce a migration plan with timelines and costs."
      },
      {
        title: "Prepare",
        text: "We stand up OpenShift and MAS, and rework customisations and integrations."
      },
      {
        title: "Rehearse",
        text: "We run the full migration in a test environment and fix what we find."
      },
      {
        title: "Cut over",
        text: "We migrate production in a planned window, then support users through hypercare."
      }
    ],
    related: [
      "ibm-maximo",
      "cloud-infrastructure",
      "consulting-advisory"
    ]
  },
  {
    slug: "enterprise-integration",
    name: "Enterprise Integration",
    short: "Integration",
    icon: "link",
    nav: "Connect Maximo with SAP, Oracle and more",
    h1: [
      "Connect Maximo to",
      "the rest of your business"
    ],
    sub: "Reliable integrations between Maximo and your ERP, finance, identity, GIS and IoT systems, so data is entered once and stays in sync.",
    overviewTitle: [
      "Enter data once.",
      "Trust it everywhere."
    ],
    overviewBody: "When maintenance, purchasing and finance run in separate systems, teams re-key data and lose time reconciling it. We build integrations on the Maximo Integration Framework and modern APIs that are monitored, documented and easy to change.",
    highlights: [
      "ERP integration for purchasing, inventory and finance",
      "REST APIs and event-driven messaging",
      "Single sign-on with Azure AD / Entra ID",
      "Error handling and monitoring built in"
    ],
    worksWith: [
      "SAP",
      "Oracle",
      "REST / JSON",
      "Maximo Integration Framework",
      "Kafka",
      "IBM App Connect",
      "Azure AD",
      "Esri ArcGIS"
    ],
    engagements: [
      "Single interface build",
      "Integration programme",
      "Integration health check"
    ],
    capabilities: [
      {
        icon: "box",
        title: "ERP integration",
        text: "Purchase orders, receipts, inventory, GL and cost data exchanged with SAP or Oracle.",
        photoAlt: "Reviewing purchasing documents with a calculator and laptop"
      },
      {
        icon: "code",
        title: "REST & API development",
        text: "Object structures, publish channels and REST APIs built on the Maximo Integration Framework.",
        photoAlt: "Code on a computer screen"
      },
      {
        icon: "flow",
        title: "Middleware & messaging",
        text: "Event-driven flows with Kafka, JMS or your existing middleware.",
        photoAlt: "Fibre optic cables in a network switch"
      },
      {
        icon: "refresh",
        title: "Data sync & master data",
        text: "Assets, locations, vendors and employees kept consistent across systems.",
        photoAlt: "Data on a computer screen"
      },
      {
        icon: "lock",
        title: "Identity & single sign-on",
        text: "Azure AD / Entra ID, LDAP and SAML sign-on, with role-based access.",
        photoAlt: "Padlock on a keyboard"
      },
      {
        icon: "pin",
        title: "GIS & IoT feeds",
        text: "Esri maps, sensor readings and telematics brought into Maximo.",
        photoAlt: "Aerial view of a city's streets at night"
      }
    ],
    gallery: [
      "Abstract network of connected points",
      "Logistics warehouse with stacked crates",
      "Team working together on laptops"
    ],
    steps: [
      {
        title: "Map",
        text: "We document each system, data object and business event that needs to flow."
      },
      {
        title: "Design",
        text: "We choose the pattern (API, messaging or batch) and define error handling."
      },
      {
        title: "Build & test",
        text: "We build, then test with real data volumes and failure scenarios."
      },
      {
        title: "Monitor",
        text: "We hand over with monitoring, alerts and clear runbooks."
      }
    ],
    related: [
      "ibm-maximo",
      "cloud-infrastructure",
      "mobile-development"
    ]
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    short: "Cloud & Infra",
    icon: "cloud",
    nav: "AWS, Azure, OpenShift, backup and monitoring",
    h1: [
      "Cloud and infrastructure",
      "that stays up"
    ],
    sub: "Deployment, administration, backup and monitoring for your enterprise applications on AWS, Azure and Red Hat OpenShift.",
    overviewTitle: [
      "The platform under",
      "your operations"
    ],
    overviewBody: "Asset management systems are only as reliable as the infrastructure they run on. We design, deploy and run that infrastructure, and keep it patched, backed up and watched around the clock.",
    highlights: [
      "AWS and Azure deployments built to best practice",
      "Red Hat OpenShift for MAS and containers",
      "Tested backup and disaster recovery",
      "24/7 monitoring and alerting"
    ],
    worksWith: [
      "AWS",
      "Microsoft Azure",
      "Red Hat OpenShift",
      "VMware",
      "Linux",
      "Windows Server",
      "Terraform",
      "Prometheus / Grafana"
    ],
    engagements: [
      "Cloud migration",
      "Managed infrastructure",
      "Backup & DR setup"
    ],
    capabilities: [
      {
        icon: "cloud",
        title: "AWS & Azure deployment",
        text: "Landing zones, networking and environments designed for security and cost.",
        photoAlt: "Cloud icon with floating data charts"
      },
      {
        icon: "layers",
        title: "OpenShift & containers",
        text: "Red Hat OpenShift clusters sized and configured for MAS and other workloads.",
        photoAlt: "Stacked shipping containers"
      },
      {
        icon: "database",
        title: "Backup & disaster recovery",
        text: "Automated backups, restore testing and documented recovery targets.",
        photoAlt: "Internal hard drive"
      },
      {
        icon: "pulse",
        title: "Monitoring & alerting",
        text: "Health, performance and capacity tracked, with alerts routed to the right people.",
        photoAlt: "Wall of monitoring screens"
      },
      {
        icon: "server",
        title: "Virtualisation & servers",
        text: "VMware and on-premises servers administered, patched and right-sized.",
        photoAlt: "Cables connected to a server"
      },
      {
        icon: "shield",
        title: "Security & compliance",
        text: "Patching, access control, network hardening and audit-ready configuration.",
        photoAlt: "Glowing security panel"
      }
    ],
    gallery: [
      "Server rack with status lights",
      "Data center corridor with glass doors",
      "Cabled server rack"
    ],
    steps: [
      {
        title: "Assess",
        text: "We review your current environment, costs and risks."
      },
      {
        title: "Design",
        text: "We plan the target architecture, security model and migration path."
      },
      {
        title: "Deploy",
        text: "We build environments as code and migrate workloads with minimal downtime."
      },
      {
        title: "Operate",
        text: "We monitor, patch and optimise, with regular reports on cost and health."
      }
    ],
    related: [
      "mas-migration",
      "managed-support",
      "enterprise-integration"
    ]
  },
  {
    slug: "managed-support",
    name: "Managed Support",
    short: "Managed Support",
    icon: "headset",
    nav: "L2/L3 support, AMS and 24/7 monitoring",
    h1: [
      "Support that keeps",
      "your systems running"
    ],
    sub: "L2/L3 application support, application management services (AMS), 24/7 monitoring and incident management for Maximo and the systems around it.",
    overviewTitle: [
      "One team that knows",
      "your setup"
    ],
    overviewBody: "Instead of chasing different vendors when something breaks, you get one team that knows your configuration, integrations and infrastructure. We fix issues quickly, then work on the root causes so they stop coming back.",
    highlights: [
      "L2/L3 support with agreed response times",
      "Small enhancements and releases included",
      "24/7 monitoring of applications and integrations",
      "Monthly reporting on tickets, trends and fixes"
    ],
    worksWith: [
      "IBM Maximo",
      "MAS",
      "IBM TRIRIGA",
      "Integrations",
      "AWS",
      "Azure",
      "ServiceNow",
      "Jira"
    ],
    engagements: [
      "Support retainer",
      "Full AMS contract",
      "Out-of-hours cover"
    ],
    capabilities: [
      {
        icon: "headset",
        title: "L2/L3 application support",
        text: "Functional and technical issues diagnosed and resolved by consultants who know Maximo.",
        photoAlt: "Support engineer wearing a headset"
      },
      {
        icon: "wrench",
        title: "Application management (AMS)",
        text: "Ongoing enhancements, configuration changes and release management.",
        photoAlt: "Developer working on a laptop"
      },
      {
        icon: "pulse",
        title: "24/7 monitoring",
        text: "Applications, integrations and infrastructure watched around the clock.",
        photoAlt: "Monitor and laptop showing live data"
      },
      {
        icon: "search",
        title: "Incident & problem management",
        text: "Fast restore of service, followed by root-cause analysis to prevent repeats.",
        photoAlt: "Technician fixing wiring"
      },
      {
        icon: "gauge",
        title: "Performance & health checks",
        text: "Regular tuning of queries, crons, escalations and database performance.",
        photoAlt: "Performance gauge"
      },
      {
        icon: "refresh",
        title: "Patches & upgrades",
        text: "Fix packs and minor upgrades planned, tested and applied for you.",
        photoAlt: "Laptop installing an update"
      }
    ],
    gallery: [
      "Support headset beside a laptop",
      "Support team working at computers",
      "Engineer working at an operations desk"
    ],
    steps: [
      {
        title: "Onboard",
        text: "We document your environment, access and escalation paths."
      },
      {
        title: "Stabilise",
        text: "We clear the backlog and fix recurring issues first."
      },
      {
        title: "Run",
        text: "We handle tickets within agreed service levels and report monthly."
      },
      {
        title: "Improve",
        text: "We suggest and deliver improvements that reduce tickets over time."
      }
    ],
    related: [
      "ibm-maximo",
      "cloud-infrastructure",
      "consulting-advisory"
    ]
  },
  {
    slug: "tririga",
    name: "TRIRIGA Services",
    short: "TRIRIGA",
    icon: "building",
    nav: "Space, lease and facility management",
    h1: [
      "Run your real estate",
      "and facilities with TRIRIGA"
    ],
    sub: "Implementation, upgrades and support for IBM TRIRIGA (now IBM Maximo Real Estate and Facilities): space, leases, maintenance and capital projects in one platform.",
    overviewTitle: [
      "Every building, lease",
      "and floor in one view"
    ],
    overviewBody: "IBM TRIRIGA is an integrated workplace management system (IWMS) for real estate and facilities. We set it up so you can see how space is used, stay compliant on leases and keep buildings maintained.",
    highlights: [
      "Space planning from CAD and BIM floor plans",
      "Lease administration and accounting compliance",
      "Facility maintenance and work orders",
      "Integration with Maximo and your ERP"
    ],
    worksWith: [
      "IBM TRIRIGA",
      "Maximo Real Estate and Facilities",
      "AutoCAD",
      "BIM",
      "IFRS 16",
      "ASC 842",
      "SAP",
      "Oracle"
    ],
    engagements: [
      "New TRIRIGA rollout",
      "Upgrade or migration",
      "Lease data abstraction"
    ],
    capabilities: [
      {
        icon: "floor",
        title: "Space management",
        text: "Floor plans, occupancy and allocation tracked so you can plan moves and reduce empty space.",
        photoAlt: "Open-plan office with rows of desks"
      },
      {
        icon: "doc",
        title: "Lease administration",
        text: "Lease terms, critical dates and payments in one register, with accounting to IFRS 16 and ASC 842.",
        photoAlt: "Signing a lease document"
      },
      {
        icon: "wrench",
        title: "Facility maintenance",
        text: "Work orders, preventive maintenance and service requests for every building.",
        photoAlt: "Worker installing ceiling components"
      },
      {
        icon: "chart",
        title: "Capital projects",
        text: "Budgets, schedules and costs tracked for building and refurbishment projects.",
        photoAlt: "Construction worker on a building frame"
      },
      {
        icon: "calendar",
        title: "Workplace services",
        text: "Room and desk reservations, visitor management and service requests.",
        photoAlt: "Glass-walled meeting rooms"
      },
      {
        icon: "link",
        title: "Upgrades & integration",
        text: "Platform upgrades and integrations with Maximo, ERP and HR systems.",
        photoAlt: "Spiral staircase in a glass building"
      }
    ],
    gallery: [
      "Modern office lobby with a reception desk",
      "Modern office building",
      "People reviewing architectural plans"
    ],
    steps: [
      {
        title: "Discover",
        text: "We map your portfolio, leases, floor plans and processes."
      },
      {
        title: "Configure",
        text: "We set up TRIRIGA modules, workflows and reports around them."
      },
      {
        title: "Load data",
        text: "We abstract leases and load buildings, floors and people."
      },
      {
        title: "Launch",
        text: "We train users, go live and support adoption."
      }
    ],
    related: [
      "ibm-maximo",
      "enterprise-integration",
      "managed-support"
    ]
  },
  {
    slug: "mobile-development",
    name: "Mobile Development & Enablement",
    short: "Mobile",
    icon: "mobile",
    nav: "Maximo Mobile and custom field apps",
    h1: [
      "Put the right information",
      "in technicians' hands"
    ],
    sub: "Maximo Mobile rollouts and custom mobile apps that let field teams see, update and close work, even without a signal.",
    overviewTitle: [
      "Close work where",
      "it happens"
    ],
    overviewBody: "When technicians write notes on paper and enter them later, data arrives late and incomplete. We roll out Maximo Mobile and build custom apps so work orders, inspections and asset details are on the device, online or offline.",
    highlights: [
      "Maximo Mobile configured for your workflows",
      "Offline-first work for remote sites",
      "Inspections, photos and signatures in the field",
      "Custom iOS and Android apps where needed"
    ],
    worksWith: [
      "Maximo Mobile",
      "iOS",
      "Android",
      "React Native",
      "Esri ArcGIS",
      "Barcode / RFID",
      "REST APIs"
    ],
    engagements: [
      "Maximo Mobile rollout",
      "Custom field app",
      "Mobile UX review"
    ],
    capabilities: [
      {
        icon: "mobile",
        title: "Maximo Mobile rollout",
        text: "Maximo Mobile apps for technicians, inspectors and storeroom staff, configured and deployed.",
        photoAlt: "Technician recording work on a tablet"
      },
      {
        icon: "code",
        title: "Custom app development",
        text: "Native and cross-platform apps built for workflows that standard apps do not cover.",
        photoAlt: "Phone app beside a laptop"
      },
      {
        icon: "offline",
        title: "Offline-first field work",
        text: "Work that keeps going without a connection and syncs when the signal returns.",
        photoAlt: "Field engineer on site"
      },
      {
        icon: "clipboard",
        title: "Inspections & forms",
        text: "Digital checklists with photos, readings and signatures.",
        photoAlt: "Filling in an inspection checklist"
      },
      {
        icon: "pin",
        title: "Maps & location",
        text: "Assets and work shown on maps, with directions to the job.",
        photoAlt: "Phone showing a navigation map"
      },
      {
        icon: "scan",
        title: "Barcode & RFID",
        text: "Scan assets, parts and locations to find records and record usage quickly.",
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
        text: "We ride along with field teams to see how work really happens."
      },
      {
        title: "Prototype",
        text: "We design screens and test them with technicians early."
      },
      {
        title: "Build",
        text: "We configure Maximo Mobile or build the app, and integrate it."
      },
      {
        title: "Roll out",
        text: "We deploy to devices, train crews and support adoption."
      }
    ],
    related: [
      "ibm-maximo",
      "enterprise-integration",
      "managed-support"
    ]
  },
  {
    slug: "consulting-advisory",
    name: "Consulting & Architectural Advisory",
    short: "Consulting",
    icon: "bulb",
    nav: "EAM strategy, architecture and health checks",
    h1: [
      "Make the right calls",
      "before you build"
    ],
    sub: "Independent advice on asset management strategy, solution architecture and roadmaps, from consultants who have delivered Maximo and TRIRIGA projects.",
    overviewTitle: [
      "A clear plan",
      "for your asset systems"
    ],
    overviewBody: "Big decisions like migrating to MAS, replacing a system or integrating new tools are hard to undo. We help you weigh the options, design an architecture that fits, and set a realistic roadmap your teams can deliver.",
    highlights: [
      "EAM strategy and multi-year roadmaps",
      "Solution and integration architecture",
      "Maximo health checks and audits",
      "Dedicated remote teams when you need capacity"
    ],
    worksWith: [
      "IBM Maximo",
      "MAS",
      "IBM TRIRIGA",
      "AWS",
      "Azure",
      "Red Hat OpenShift",
      "ISO 55000"
    ],
    engagements: [
      "Health check",
      "Strategy & roadmap",
      "Architecture review"
    ],
    capabilities: [
      {
        icon: "target",
        title: "EAM strategy & roadmap",
        text: "A prioritised roadmap tied to your business goals and budget.",
        photoAlt: "Two people building a project roadmap"
      },
      {
        icon: "layers",
        title: "Solution architecture",
        text: "Target architectures for applications, data, integrations and infrastructure.",
        photoAlt: "Architectural blueprints"
      },
      {
        icon: "search",
        title: "Health checks & audits",
        text: "A review of configuration, performance, data quality and security, with clear fixes.",
        photoAlt: "Reviewing a report over a laptop"
      },
      {
        icon: "flow",
        title: "Process design",
        text: "Work management, inventory and reliability processes aligned with good practice.",
        photoAlt: "Mapping a process flowchart on a whiteboard"
      },
      {
        icon: "doc",
        title: "Licensing advisory",
        text: "Guidance on Maximo licensing and AppPoints, so you pay for what you use.",
        photoAlt: "Reviewing licence paperwork"
      },
      {
        icon: "users",
        title: "Dedicated remote teams",
        text: "Experienced consultants and developers who work as part of your team.",
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
        title: "Listen",
        text: "We interview stakeholders and review your systems and data."
      },
      {
        title: "Analyse",
        text: "We find the gaps, risks and quick wins."
      },
      {
        title: "Recommend",
        text: "We present options with costs, trade-offs and a recommendation."
      },
      {
        title: "Plan",
        text: "We turn the recommendation into a delivery roadmap."
      }
    ],
    related: [
      "mas-migration",
      "ibm-maximo",
      "tririga"
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
export const servicePath = (slug: string) => `/service-${slug}`;
