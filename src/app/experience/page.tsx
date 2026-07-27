import type { Metadata } from "next";
import { ExperienceContent } from "./experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience and career journey in software engineering.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
