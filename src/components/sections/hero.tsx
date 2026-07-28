"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { XLogo } from "@/components/ui/x-logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <XLogo className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Terminal grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,102,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Terminal welcome line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">┌</span> Welcome to my terminal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-6 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">~</span>
            <span>$</span>
            <span className="text-foreground">whoami</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-foreground">{siteConfig.name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">~</span>
            <span>$</span>
            <span className="text-muted-foreground">cat role.txt</span>
          </div>
          <p className="text-foreground/80 mx-auto mb-8 max-w-2xl font-mono text-base sm:text-lg">
            {siteConfig.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">~</span>
            <span>$</span>
            <span className="text-muted-foreground">cat about.txt</span>
          </div>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="default" size="lg" asChild>
            <Link href="/projects">
              <span className="mr-2 font-mono text-xs text-primary-foreground/70">$</span>
              cd projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              <span className="mr-2 font-mono text-xs text-muted-foreground">$</span>
              ./contact.sh
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          {siteConfig.links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.08 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex h-8 w-8 items-center justify-center transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-[10px] text-muted-foreground">scroll</span>
            <ArrowDown className="text-muted-foreground h-3 w-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
