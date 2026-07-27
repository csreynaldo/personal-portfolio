import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperienceTimeline />
      <Testimonials />
      <CallToAction />
    </>
  );
}
