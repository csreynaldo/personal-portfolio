"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>ls ./projects/</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
            <p className="text-muted-foreground max-w-2xl">
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
                placeholder="grep -r 'search' ./projects/"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full border py-2 pr-4 pl-10 font-mono text-sm focus:ring-1 focus:outline-none"
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
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
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
                    <span className="font-mono text-[10px] text-muted-foreground">
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

        {filtered.length === 0 && (
          <FadeIn>
            <div className="py-20 text-center">
              <p className="text-muted-foreground font-mono text-sm">No projects found.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                clear filters
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
