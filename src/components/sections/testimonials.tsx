"use client";

import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What People Say</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Feedback from colleagues and leaders I've worked with.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="glass-card relative">
                <Quote className="mb-4 h-8 w-8 text-purple-500/40" />
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role} at {testimonial.company}
                    </p>
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
