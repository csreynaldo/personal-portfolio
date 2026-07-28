"use client";

import { FadeIn } from "@/components/ui/motion-wrapper";
import { blogPosts } from "@/data/blog-posts";

export function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return null;

  return (
    <FadeIn>
        <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="terminal-window">
          <div className="terminal-window-header">
            <span className="terminal-window-dot red" />
            <span className="terminal-window-dot yellow" />
            <span className="terminal-window-dot green" />
            <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
              {slug}.md
            </span>
          </div>
          <div className="p-5">
            <h2 className="mb-4 font-mono text-sm font-semibold text-primary"># Article Content</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This article is a placeholder. In a production environment, this would contain the full
              MDX content with rich formatting, code snippets, and interactive elements.
            </p>

            <h3 className="mt-8 font-mono text-xs font-medium text-muted-foreground">## Key Topics Covered</h3>
            <ul className="mt-3 space-y-1">
              {post.tags.map((tag) => (
                <li key={tag} className="text-muted-foreground font-mono text-sm">
                  <span className="text-primary">-</span> {tag}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-mono text-xs font-medium text-muted-foreground">## Summary</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{post.description}</p>

            <div className="mt-8 border border-border p-4">
              <p className="text-muted-foreground font-mono text-xs leading-relaxed">
                <span className="text-primary">Note:</span> This is a placeholder article. The full content with MDX
                support, syntax highlighting, and interactive examples will be available in a future
                update. The structure supports categories, tags, reading time, and SEO metadata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
