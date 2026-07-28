"use client";

import { Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-padding border-border/50 border-t">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>cat testimonials.md</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What People Say</h2>
            <p className="text-muted-foreground max-w-2xl">
              Feedback from colleagues and leaders I've worked with.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="terminal-window flex h-full flex-col">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <Quote className="mb-3 h-5 w-5 text-primary/40" />
                  <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-3">
                    <div className="flex h-8 w-8 items-center justify-center border border-primary/30 font-mono text-xs text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-muted-foreground font-mono text-[10px]">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
