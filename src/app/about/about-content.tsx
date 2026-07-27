"use client";

import Link from "next/link";
import { Download, GraduationCap, Target, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/motion-wrapper";

export function AboutContent() {
  return (
    <div className="section-padding">
      <div className="max-width">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <Badge variant="gradient" className="mb-4">
                About Me
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Learn About My Journey
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                A passionate engineer building technology that makes a difference.
              </p>
            </div>
          </FadeIn>

          {/* Bio Section */}
          <FadeIn delay={0.1}>
            <div className="glass-card mb-8">
              <h2 className="mb-4 text-2xl font-bold">Biography</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  I'm a full-stack software engineer and AI enthusiast with over 8 years of
                  experience building modern web applications and data-driven solutions. My journey
                  in tech started with curiosity about how websites work and has evolved into a
                  career building scalable systems that serve millions.
                </p>
                <p>
                  I specialize in React, Next.js, TypeScript, and Python, with deep expertise in
                  cloud infrastructure, databases, and machine learning integration. I believe in
                  writing clean, maintainable code and building products that provide exceptional
                  user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open source, writing technical blog posts, or mentoring aspiring developers.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2}>
            <div className="glass-card mb-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">M.S. in Computer Science</h3>
                  <p className="text-muted-foreground text-sm">Stanford University | 2016 - 2018</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Specialized in Machine Learning and Distributed Systems. Research focused on
                    scalable data processing pipelines.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">B.S. in Computer Science</h3>
                  <p className="text-muted-foreground text-sm">UC Berkeley | 2012 - 2016</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Graduated with honors. Dean's list all semesters. Led the university's web
                    development club.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Career Goals */}
          <FadeIn delay={0.3}>
            <div className="glass-card mb-8">
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Career Goals</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>I'm looking to join a forward-thinking company where I can:</p>
                <ul className="space-y-2">
                  {[
                    "Lead development of impactful products that solve real problems",
                    "Work with cutting-edge technologies in AI and cloud computing",
                    "Mentor and grow the next generation of engineers",
                    "Contribute to open source and the developer community",
                    "Build systems that are scalable, reliable, and performant",
                  ].map((goal, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Tech Journey */}
          <FadeIn delay={0.4}>
            <div className="glass-card mb-8">
              <div className="mb-4 flex items-center gap-3">
                <Code2 className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Tech Journey</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  My tech journey started with building simple HTML websites in high school. Since
                  then, I've worked with startups and enterprises, building everything from MVPs to
                  platforms serving millions.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { year: "2016", text: "Started professional career as a junior developer" },
                    { year: "2018", text: "Transitioned to data engineering" },
                    { year: "2020", text: "Became a full-stack engineer" },
                    { year: "2022", text: "Promoted to senior engineer" },
                    { year: "2023", text: "Led platform architecture redesign" },
                    { year: "2024", text: "Started AI/ML specialization" },
                  ].map((item) => (
                    <div key={item.year} className="bg-muted/50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-500">{item.year}</div>
                      <div className="text-xs">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Fun Facts */}
          <FadeIn delay={0.5}>
            <div className="glass-card mb-8">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Fun Facts</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { emoji: "☕", fact: "I've tried over 50 coffee shops in SF" },
                  { emoji: "🎸", fact: "Played guitar in a band for 5 years" },
                  { emoji: "📚", fact: "Read 30+ books last year" },
                  { emoji: "🏃", fact: "Ran 3 marathons" },
                  { emoji: "✈️", fact: "Visited 25+ countries" },
                  { emoji: "🎮", fact: "Built a gaming PC from scratch" },
                ].map((item) => (
                  <div key={item.fact} className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="mb-1 text-2xl">{item.emoji}</div>
                    <div className="text-muted-foreground text-sm">{item.fact}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Download Resume */}
          <FadeIn delay={0.6}>
            <div className="text-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
