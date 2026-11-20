export type BlogBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "list" | "checklist"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  titleLines: string[];
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "maximo-application-suite-9-1",
    title: "Maximo Application Suite 9.1: Transforming Asset Management in the AI Era",
    titleLines: ["Maximo Application Suite 9.1:", "Transforming Asset Management", "in the AI Era"],
    excerpt: "Discover how IBM Maximo helps enterprises manage assets, optimize operations, and reduce costs.",
    date: "2025-09-25",
    readTime: "5 min read",
    image: "/assets/img/blog/maximo-application-suite-9-1.jpg",
    imageAlt: "Illustration of cloud-connected enterprise systems",
    body: [
      { type: "p", text: "In today’s fast-paced, data-driven world, managing complex assets across industries requires more than spreadsheets and manual processes. Businesses are turning to smarter, integrated solutions that not only streamline operations but also help predict, prevent, and optimize asset performance. That’s where IBM’s Maximo Application Suite (MAS) 9.1 steps in - a cutting-edge, AI-infused platform designed to revolutionize enterprise asset management (EAM)." },
      { type: "p", text: "Let’s explore what Maximo 9.1 brings to the table and why it’s becoming a game-changer for asset-intensive organizations." },

      { type: "h2", text: "What is Maximo Application Suite 9.1?" },
      { type: "p", text: "Maximo Application Suite (MAS) is IBM’s comprehensive solution for asset monitoring, maintenance, and reliability. Version 9.1, released as part of the modern Maximo platform, offers significant improvements over its predecessors. Built on Red Hat OpenShift, it leverages hybrid cloud, AI, and IoT technologies to provide a unified platform for EAM, predictive maintenance, and operational optimization." },
      { type: "p", text: "This release marks a major leap from the legacy Maximo 7.6.x environment, bringing together all asset management tools into a single, integrated suite." },

      { type: "h2", text: "Key Features of Maximo 9.1" },
      { type: "h3", text: "1. Cloud-Native & Containerized Architecture" },
      { type: "p", text: "Maximo 9.1 is designed for deployment on Red Hat OpenShift, making it cloud-native and fully containerized. This architecture ensures:" },
      { type: "list", items: ["Scalability across cloud or on-prem environments", "Faster deployments and updates", "Better resource optimization and reduced downtime"] },
      { type: "p", text: "This shift helps IT teams reduce operational overhead while increasing flexibility and responsiveness." },

      { type: "h3", text: "2. Unified Suite with Modular Capabilities" },
      { type: "p", text: "MAS 9.1 consolidates several applications under one suite:" },
      {
        type: "list",
        items: [
          "Manage – Traditional asset management (formerly Maximo Classic)",
          "Monitor – Real-time asset condition monitoring",
          "Health – Asset health scoring using condition and performance data",
          "Predict – AI-based failure prediction models",
          "Visual Inspection – AI-driven image recognition for visual inspections",
          "Safety – Worker safety monitoring through wearables and sensors",
        ],
      },
      { type: "p", text: "These modules share a common platform, allowing seamless data flow and better insights." },

      { type: "h3", text: "3. AI & Analytics at the Core" },
      { type: "p", text: "IBM has embedded AI and machine learning capabilities into MAS 9.1. These tools help organizations move from reactive to predictive maintenance models, reducing unplanned downtime and extending asset life. With features like predictive scoring, automated work orders, and root cause analysis, maintenance becomes smarter and more efficient." },

      { type: "h3", text: "4. User Experience Overhaul" },
      { type: "p", text: "Maximo 9.1 introduces a more modern, intuitive user interface that enhances usability. The new UI is designed with user roles in mind, offering tailored dashboards, drag-and-drop features, and easier navigation. This makes it easier for both new users and experienced technicians to get work done faster and with fewer clicks." },

      { type: "h3", text: "5. Subscription-Based Licensing" },
      { type: "p", text: "IBM has moved to a simplified, consumption-based licensing model in MAS 9.1. This offers greater flexibility and cost control, allowing organizations to scale their usage based on actual needs rather than fixed licenses." },

      { type: "h2", text: "Benefits of Upgrading to Maximo 9.1" },
      {
        type: "checklist",
        items: [
          "Improved operational efficiency through automation and AI",
          "Lower total cost of ownership with containerized deployment",
          "Enhanced decision-making with real-time data and predictive insights",
          "Future-proof architecture ready for hybrid cloud environments",
          "Unified experience for asset management, IoT, and analytics",
        ],
      },
      { type: "p", text: "For businesses running legacy versions of Maximo, the upgrade to 9.1 isn’t just a technical step — it’s a strategic move towards digital transformation." },

      { type: "h2", text: "Use Cases Across Industries" },
      { type: "p", text: "Maximo 9.1 is widely adopted across sectors:" },
      {
        type: "list",
        items: [
          "Manufacturing – Monitor machinery and predict failures before they cause downtime",
          "Energy & Utilities – Optimize the lifecycle of critical infrastructure like transformers and pipelines",
          "Transportation – Manage fleets, track usage, and ensure compliance with safety regulations",
          "Oil & Gas – Increase equipment reliability and reduce the risk of hazardous failures",
          "Facilities Management – Centralize asset data, streamline maintenance, and improve service delivery",
        ],
      },

      { type: "h2", text: "Final Thoughts" },
      { type: "p", text: "IBM Maximo Application Suite 9.1 is more than just an upgrade — it’s a reimagined platform that puts AI, cloud, and IoT at the heart of asset management. It enables organizations to go from reactive maintenance to proactive, predictive strategies that drive performance and reduce costs." },
      { type: "p", text: "Whether you’re currently using Maximo 7.6 or exploring asset management platforms for the first time, MAS 9.1 offers a future-ready solution designed to scale with your business and adapt to evolving industry demands." },
      { type: "p", text: "The future of asset management is intelligent, integrated, and insight-driven — and with Maximo 9.1, that future is here." },
    ],
  },
];

export const blogBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const blogPath = (slug: string) => `/blogs/${slug}`;

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
