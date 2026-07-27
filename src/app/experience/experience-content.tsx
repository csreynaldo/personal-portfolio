"use client";

import { Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { experiences } from "@/data/experience";

export function ExperienceContent() {
  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Career
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Work Experience</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              My professional journey building products and leading teams.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-8 h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative pl-20">
                  <div className="bg-background absolute top-1 left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-500">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>

                  <div className="glass-card">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>

                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-muted-foreground mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
                        <Briefcase className="h-4 w-4" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-3 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider text-purple-500 uppercase">
                        <Award className="h-4 w-4" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-3 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
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
