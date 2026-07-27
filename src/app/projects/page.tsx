import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects spanning full-stack development, AI/ML, and data engineering.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
