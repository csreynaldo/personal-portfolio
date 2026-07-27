import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex gap-3">
              {siteConfig.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg p-2 transition-colors"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
            © {currentYear} {siteConfig.name}. Built with
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
