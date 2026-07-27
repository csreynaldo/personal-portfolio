"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Box,
  Terminal,
  Brain,
  Wrench,
  BarChart3,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { skills } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-6 w-6" />,
  Backend: <Terminal className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  DevOps: <Box className="h-6 w-6" />,
  "Programming Languages": <Code2 className="h-6 w-6" />,
  Tools: <Wrench className="h-6 w-6" />,
  "Data Analytics": <BarChart3 className="h-6 w-6" />,
  "Data Visualization": <LineChart className="h-6 w-6" />,
};

export function SkillsPreview() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Expertise
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Technologies and tools I work with to build exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <StaggerItem key={category}>
              <div className="glass-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    {categoryIcons[category] || <Code2 className="h-6 w-6" />}
                  </div>
                  <h3 className="font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .slice(0, 5)
                    .map((skill) => (
                      <Badge key={skill.name} variant="glass" className="text-xs">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button variant="glass" size="lg" asChild>
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
