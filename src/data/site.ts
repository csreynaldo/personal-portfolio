import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Reynaldo Jr. Pahay",
  title: "Full-Stack Software Engineer & AI Enthusiast",
  description:
    "I build exceptional digital experiences that are fast, accessible, and beautiful. Specializing in modern web technologies, AI integration, and scalable architectures.",
  url: "https://johndoe.com",
  ogImage: "https://johndoe.com/og.jpg",
  links: [
    { name: "GitHub", url: "https://github.com/johndoe", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://twitter.com/johndoe", icon: "twitter" },
    { name: "Email", url: "mailto:hello@johndoe.com", icon: "mail" },
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/certificates", label: "Certificates" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};
