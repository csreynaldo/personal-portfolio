"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { projects } from "@/data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export function ProjectsContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Portfolio
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              A collection of projects showcasing my skills in full-stack development, AI/ML, and
              system architecture.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-xl border py-2 pr-4 pl-10 text-sm focus:ring-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSort(sort === "newest" ? "oldest" : "newest")}
              >
                <ArrowUpDown className="mr-1 h-4 w-4" />
                {sort === "newest" ? "Newest" : "Oldest"}
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group glass-card flex h-full flex-col">
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
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
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

        {filtered.length === 0 && (
          <FadeIn>
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
