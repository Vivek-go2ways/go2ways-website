import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Industries", href: "/industries" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
];

export const footerNavItems = {
  enterpriseServices: [
    { title: "IBM Maximo Implementation", href: "/services#maximo" },
    { title: "MAS Migration", href: "/services#mas-migration" },
    { title: "IBM TRIRIGA Services", href: "/services#tririga" },
    { title: "24x7 Managed Support", href: "/services#support" },
  ],
  cloudIntegration: [
    { title: "SAP & Oracle Integrations", href: "/services#integrations" },
    { title: "AWS Cloud Deployment", href: "/services#aws" },
    { title: "Microsoft Azure Administration", href: "/services#azure" },
    { title: "Azure AD & Middleware", href: "/services#middleware" },
  ],
  company: [
    { title: "About Go2Ways", href: "/about" },
    { title: "Leadership & Certifications", href: "/about#leadership" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Careers", href: "/careers" },
  ],
  legal: [
    { title: "Privacy & Cookies", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
    { title: "Security & Compliance", href: "/security" },
  ],
};
