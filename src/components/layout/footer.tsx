import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/50 bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>/{siteConfig.name.toLowerCase().replace(/\s+/g, "-")}
            </Link>
            <span className="text-muted-foreground">|</span>
            <p className="text-muted-foreground font-mono text-xs">
              © {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {siteConfig.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
