"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { blogPosts } from "@/data/blog-posts";

const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

export function BlogContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Blog
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Latest Articles</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Thoughts on software engineering, AI/ML, and technology.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
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
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="glass-card group h-full">
                  <div className="text-muted-foreground mb-4 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h2 className="mb-3 text-xl font-semibold transition-colors group-hover:text-purple-500">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 text-sm">{post.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="glass" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-purple-500">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <FadeIn>
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-lg">No articles found.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
