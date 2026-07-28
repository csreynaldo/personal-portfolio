"use client";

import {
  Code2,
  Database,
  Cloud,
  Box,
  Terminal,
  Wrench,
  BarChart3,
  LineChart,
  Brain,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { skills } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Terminal className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  DevOps: <Box className="h-5 w-5" />,
  "Programming Languages": <Brain className="h-5 w-5" />,
  Tools: <Wrench className="h-5 w-5" />,
  "Data Analytics": <BarChart3 className="h-5 w-5" />,
  "Data Visualization": <LineChart className="h-5 w-5" />,
};

const categoryDescriptions: Record<string, string> = {
  Frontend: "Building beautiful, responsive user interfaces",
  Backend: "Designing scalable server-side architectures",
  Database: "Managing and optimizing data storage",
  Cloud: "Deploying and managing cloud infrastructure",
  DevOps: "Automating workflows and ensuring reliability",
  "Programming Languages": "Languages I code in daily",
  Tools: "Tools that boost my productivity",
  "Data Analytics": "Extracting insights from data",
  "Data Visualization": "Creating compelling data stories",
};

export function SkillsContent() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>cat skills.json</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Skills & Technologies
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Technologies and tools I use to build exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <FadeIn key={category} delay={catIndex * 0.05}>
              <div className="terminal-window">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                    {category.toLowerCase().replace(/\s+/g, "-")}.json
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="text-primary flex h-9 w-9 items-center justify-center border border-primary/30">
                      {categoryIcons[category] || <Code2 className="h-4 w-4" />}
                    </div>
                    <div>
                      <h2 className="font-mono text-base font-semibold text-primary">
                        # {category}
                      </h2>
                      <p className="text-muted-foreground text-xs">
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  </div>

                  <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <StaggerItem key={skill.name}>
                          <div className="border border-border p-3">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="font-mono text-sm font-medium">{skill.name}</h3>
                              <span className="font-mono text-[10px] text-muted-foreground">
                                {skill.yearsExperience}y
                              </span>
                            </div>
                            <div className="bg-muted relative h-1.5 overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <p className="text-muted-foreground mt-1 text-right font-mono text-[10px]">
                              {skill.level}%
                            </p>
                          </div>
                        </StaggerItem>
                      ))}
                  </StaggerContainer>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
