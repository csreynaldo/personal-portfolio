import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and journey in technology.",
};

export default function AboutPage() {
  return <AboutContent />;
}
