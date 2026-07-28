"use client";

import { GraduationCap, Target, Code2, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/motion-wrapper";

export function AboutContent() {
  return (
    <div className="section-padding">
      <div className="max-width">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-12">
              <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <span className="text-primary">~</span>
                <span>$</span>
                <span>cat about.md</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                About Me
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                A passionate engineer building technology that makes a difference.
              </p>
            </div>
          </FadeIn>

          {/* Bio Section */}
          <FadeIn delay={0.1}>
            <div className="terminal-window mb-6">
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  biography.md
                </span>
              </div>
              <div className="p-5">
                <h2 className="mb-4 font-mono text-sm font-semibold text-primary"># Biography</h2>
                <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
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
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2}>
            <div className="terminal-window mb-6">
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  education.json
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <h2 className="font-mono text-sm font-semibold text-primary"># Education</h2>
                </div>
                <div className="space-y-5">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="font-semibold">M.S. in Computer Science</h3>
                    <p className="text-muted-foreground font-mono text-xs">Stanford University | 2016 - 2018</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Specialized in Machine Learning and Distributed Systems. Research focused on
                      scalable data processing pipelines.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h3 className="font-semibold">B.S. in Computer Science</h3>
                    <p className="text-muted-foreground font-mono text-xs">UC Berkeley | 2012 - 2016</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Graduated with honors. Dean's list all semesters. Led the university's web
                      development club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Career Goals */}
          <FadeIn delay={0.3}>
            <div className="terminal-window mb-6">
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  goals.md
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <h2 className="font-mono text-sm font-semibold text-primary"># Career Goals</h2>
                </div>
                <div className="text-muted-foreground space-y-3 text-sm">
                  <p>I'm looking to join a forward-thinking company where I can:</p>
                  <ul className="space-y-1.5">
                    {[
                      "Lead development of impactful products that solve real problems",
                      "Work with cutting-edge technologies in AI and cloud computing",
                      "Mentor and grow the next generation of engineers",
                      "Contribute to open source and the developer community",
                      "Build systems that are scalable, reliable, and performant",
                    ].map((goal, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 bg-primary" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tech Journey */}
          <FadeIn delay={0.4}>
            <div className="terminal-window mb-6">
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  timeline.log
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <h2 className="font-mono text-sm font-semibold text-primary"># Tech Journey</h2>
                </div>
                <div className="text-muted-foreground space-y-4 text-sm">
                  <p>
                    My tech journey started with building simple HTML websites in high school. Since
                    then, I've worked with startups and enterprises, building everything from MVPs to
                    platforms serving millions.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { year: "2016", text: "Started professional career as a junior developer" },
                      { year: "2018", text: "Transitioned to data engineering" },
                      { year: "2020", text: "Became a full-stack engineer" },
                      { year: "2022", text: "Promoted to senior engineer" },
                      { year: "2023", text: "Led platform architecture redesign" },
                      { year: "2024", text: "Started AI/ML specialization" },
                    ].map((item) => (
                      <div key={item.year} className="border border-border p-3 text-center">
                        <div className="font-mono text-lg font-bold text-primary">{item.year}</div>
                        <div className="text-muted-foreground text-xs">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Fun Facts */}
          <FadeIn delay={0.5}>
            <div className="terminal-window mb-6">
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  fun-facts.txt
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h2 className="font-mono text-sm font-semibold text-primary"># Fun Facts</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { emoji: "☕", fact: "I've tried over 50 coffee shops in SF" },
                    { emoji: "🎸", fact: "Played guitar in a band for 5 years" },
                    { emoji: "📚", fact: "Read 30+ books last year" },
                    { emoji: "🏃", fact: "Ran 3 marathons" },
                    { emoji: "✈️", fact: "Visited 25+ countries" },
                    { emoji: "🎮", fact: "Built a gaming PC from scratch" },
                  ].map((item) => (
                    <div key={item.fact} className="border border-border p-4 text-center">
                      <div className="mb-1 text-xl">{item.emoji}</div>
                      <div className="text-muted-foreground text-xs">{item.fact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Download Resume */}
          <FadeIn delay={0.6}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <span className="text-primary">~</span>
                <span>$</span>
                <span className="text-foreground">curl -O resume.pdf</span>
                <span className="animate-cursor-blink text-primary">▊</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
