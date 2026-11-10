export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

