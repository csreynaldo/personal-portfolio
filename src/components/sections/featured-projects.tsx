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
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              A selection of my recent work that showcases my skills and experience in building
              modern, scalable applications.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group glass-card flex h-full flex-col">
                {/* Image placeholder */}
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-muted-foreground/30 text-4xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {project.featured && (
                    <Badge variant="gradient" className="absolute top-2 right-2">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
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
            <Button variant="glass" size="lg" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
