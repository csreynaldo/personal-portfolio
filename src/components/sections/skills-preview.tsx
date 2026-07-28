"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Box,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { skills } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Terminal className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  DevOps: <Box className="h-5 w-5" />,
  "Programming Languages": <Code2 className="h-5 w-5" />,
  Tools: <Box className="h-5 w-5" />,
  "Data Analytics": <Terminal className="h-5 w-5" />,
  "Data Visualization": <Terminal className="h-5 w-5" />,
};

export function SkillsPreview() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="section-padding border-border/50 border-t">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>cat skills.json | head -6</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Technologies and tools I work with daily.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <StaggerItem key={category}>
              <div className="terminal-window">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                    {category.toLowerCase().replace(/\s+/g, "-")}.json
                  </span>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-primary flex h-8 w-8 items-center justify-center border border-primary/30">
                      {categoryIcons[category] || <Code2 className="h-4 w-4" />}
                    </div>
                    <h3 className="font-mono text-sm font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills
                      .filter((s) => s.category === category)
                      .slice(0, 5)
                      .map((skill) => (
                        <span key={skill.name} className="terminal-tag text-[10px]">
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/skills">
                <span className="mr-2 font-mono text-xs text-muted-foreground">$</span>
                view all skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
