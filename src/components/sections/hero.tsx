"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl dark:from-purple-500/10 dark:to-blue-500/10" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile photo placeholder */}
          <div className="mx-auto mb-8 h-28 w-28 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 shadow-xl shadow-purple-500/25">
            <div className="bg-background text-foreground flex h-full w-full items-center justify-center rounded-full text-3xl font-bold">
              {siteConfig.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">{siteConfig.name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 text-lg sm:text-xl md:text-2xl">
            {siteConfig.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg">
            {siteConfig.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {siteConfig.links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-accent hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
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
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="text-muted-foreground h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
