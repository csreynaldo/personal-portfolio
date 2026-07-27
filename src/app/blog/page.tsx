import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, AI/ML, and technology.",
};

export default function BlogPage() {
  return <BlogContent />;
}
