export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  yearsExperience: number;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "Programming Languages"
  | "Tools"
  | "Data Analytics"
  | "Data Visualization";

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  image?: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: SocialLink[];
  navLinks: NavLink[];
}
