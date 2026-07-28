"use client";

import { Award } from "lucide-react";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { experiences } from "@/data/experience";

export function ExperienceContent() {
  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>cat experience.log</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Work Experience</h1>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey building products and leading teams.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative pl-8">
                  <div className="bg-background absolute top-1 left-[-3.5px] flex h-2 w-2 items-center justify-center border border-primary" />

                  <div className="terminal-window">
                    <div className="terminal-window-header">
                      <span className="terminal-window-dot red" />
                      <span className="terminal-window-dot yellow" />
                      <span className="terminal-window-dot green" />
                      <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                        {exp.company.toLowerCase().replace(/\s+/g, "-")}/README.md
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="text-muted-foreground font-mono text-xs">{exp.company}</p>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-5">
                        <h4 className="mb-2 flex items-center gap-2 font-mono text-xs font-medium text-muted-foreground">
                          # responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start gap-2 text-sm"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 bg-primary/50" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 flex items-center gap-2 font-mono text-xs font-medium text-primary">
                          <Award className="h-3 w-3" />
                          achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start gap-2 text-sm"
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 bg-primary" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
