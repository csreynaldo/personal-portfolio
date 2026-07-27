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
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { skills } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-6 w-6" />,
  Backend: <Terminal className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  DevOps: <Box className="h-6 w-6" />,
  "Programming Languages": <Brain className="h-6 w-6" />,
  Tools: <Wrench className="h-6 w-6" />,
  "Data Analytics": <BarChart3 className="h-6 w-6" />,
  "Data Visualization": <LineChart className="h-6 w-6" />,
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
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Expertise
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Skills & Technologies
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Technologies and tools I use to build exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <FadeIn key={category} delay={catIndex * 0.1}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                    {categoryIcons[category] || <Code2 className="h-6 w-6" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category}</h2>
                    <p className="text-muted-foreground text-sm">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                </div>

                <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <StaggerItem key={skill.name}>
                        <div className="glass-card">
                          <div className="mb-3 flex items-center justify-between">
                            <h3 className="font-semibold">{skill.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {skill.yearsExperience}y
                            </Badge>
                          </div>
                          <div className="bg-muted relative h-2 overflow-hidden rounded-full">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <p className="text-muted-foreground mt-1 text-right text-xs">
                            {skill.level}%
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
