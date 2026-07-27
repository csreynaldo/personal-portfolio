"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Career
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              My professional journey building products at scale.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-8 h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="bg-background absolute top-1 left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-500">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>

                  <div className="glass-card">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-muted-foreground text-sm">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium text-purple-500">Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start gap-2 text-sm"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button variant="glass" size="lg" asChild>
              <Link href="/experience">
                Full Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
