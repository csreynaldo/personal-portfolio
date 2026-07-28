import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Reynaldo Jr. Pahay",
  title: "Computer Science Graduate & Aspiring Backend Developer",
  description:
    "Passionate about building reliable backend systems and continuously improving my software engineering skills. I'm eager to contribute to real-world projects, collaborate with experienced developers, and grow into a backend engineering role.",
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
