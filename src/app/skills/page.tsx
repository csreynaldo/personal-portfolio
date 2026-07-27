import type { Metadata } from "next";
import { SkillsContent } from "./skills-content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore my technical skills and expertise across various domains.",
};

export default function SkillsPage() {
  return <SkillsContent />;
}
