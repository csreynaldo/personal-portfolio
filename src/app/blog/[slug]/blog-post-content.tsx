"use client";

import { FadeIn } from "@/components/ui/motion-wrapper";
import { blogPosts } from "@/data/blog-posts";

export function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return null;

  return (
    <FadeIn>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="glass-card">
          <h2 className="mb-4 text-2xl font-bold">Article Content</h2>
          <p className="text-muted-foreground">
            This article is a placeholder. In a production environment, this would contain the full
            MDX content with rich formatting, code snippets, and interactive elements.
          </p>

          <h3 className="mt-8 text-xl font-semibold">Key Topics Covered</h3>
          <ul className="mt-4 space-y-2">
            {post.tags.map((tag) => (
              <li key={tag} className="text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Summary</h3>
          <p className="text-muted-foreground mt-4">{post.description}</p>

          <div className="bg-muted/50 mt-8 rounded-lg p-6">
            <p className="text-muted-foreground text-sm">
              <strong>Note:</strong> This is a placeholder article. The full content with MDX
              support, syntax highlighting, and interactive examples will be available in a future
              update. The structure supports categories, tags, reading time, and SEO metadata.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
