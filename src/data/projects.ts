import {
  Building,
  Cpu,
  Database,
  Layers,
  GraduationCap,
  Cloud,
  Globe2,
} from "lucide-react";

export const projects = [
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

