"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>ls ./projects/ --featured</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of recent work showcasing my skills and experience.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <div className="terminal-window group flex h-full flex-col">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-[10px] text-primary">● featured</span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="terminal-tag text-[10px]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="terminal-tag text-[10px]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          src
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                <span className="mr-2 font-mono text-xs text-muted-foreground">$</span>
                view all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
