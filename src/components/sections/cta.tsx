"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion-wrapper";

export function CallToAction() {
  return (
    <section className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="terminal-window border-primary/30 px-8 py-12 text-center sm:px-16">
            <div className="terminal-window-header">
              <span className="terminal-window-dot red" />
              <span className="terminal-window-dot yellow" />
              <span className="terminal-window-dot green" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                contact.sh
              </span>
            </div>
            <div className="p-4 sm:p-8">
              <div className="mb-4 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
                <span className="text-primary">~</span>
                <span>$</span>
                <span className="text-primary">./contact.sh --init</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="default" size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
