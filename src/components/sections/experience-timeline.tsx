"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding border-border/50 border-t">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>cat experience.log</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey building products at scale.
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
                    <div className="p-4">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold">{exp.role}</h3>
                          <p className="text-muted-foreground font-mono text-xs">{exp.company}</p>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-mono text-xs font-medium text-muted-foreground">
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

                      {exp.achievements.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <h4 className="font-mono text-xs font-medium text-primary">
                            # achievements
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
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/experience">
                <span className="mr-2 font-mono text-xs text-muted-foreground">$</span>
                full experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
