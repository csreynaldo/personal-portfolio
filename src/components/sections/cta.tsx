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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 px-8 py-16 text-center text-white shadow-2xl shadow-purple-500/25 sm:px-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Work Together
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-white/90"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
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
