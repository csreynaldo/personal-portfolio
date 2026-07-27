"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { siteConfig } from "@/data/site";

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formState.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // In production, this would send via Resend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="max-width">
          <div className="mx-auto max-w-lg text-center">
            <FadeIn>
              <div className="glass-card">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold">Message Sent!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out! I'll get back to you as soon as possible. In the
                  meantime, feel free to connect with me on social media.
                </p>
                <Button variant="gradient" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Contact
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="glass-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 font-semibold">Email</h3>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.links.find((l) => l.icon === "mail")?.url.replace("mailto:", "")}
                </p>
              </div>

              <div className="glass-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 font-semibold">Social</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.links
                    .filter((l) => l.icon !== "mail")
                    .map((link) => (
                      <Button key={link.name} variant="ghost" size="sm" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-xl border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-xl border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-xl border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full resize-none rounded-xl border px-4 py-2.5 text-sm focus:ring-2 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
