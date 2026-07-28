import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site";
import { BlogPostContent } from "./blog-post-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="section-padding">
      <div className="max-width">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-4">
              <div className="mb-4 flex flex-wrap gap-1.5">
                <span className="terminal-tag text-[10px]">{post.category}</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="terminal-tag text-[10px]">#{tag}</span>
                ))}
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>

              <div className="text-muted-foreground mb-6 flex items-center gap-4 text-sm">
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

              <p className="text-muted-foreground text-lg">{post.description}</p>
            </div>
          </div>

          <BlogPostContent slug={slug} />
        </article>
      </div>
    </div>
  );
}
