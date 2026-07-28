"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
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

    if (!formState.name || !formState.email || !formState.message) {
      setError("Error: missing required fields");
      return;
    }

    if (!formState.email.includes("@")) {
      setError("Error: invalid email format");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="max-width">
          <div className="mx-auto max-w-lg text-center">
            <FadeIn>
              <div className="terminal-window border-primary/30">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                    success.log
                  </span>
                </div>
                <div className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center border border-primary/30">
                      <CheckCircle2 className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="mb-3 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
                    <span className="text-primary">~</span>
                    <span>$</span>
                    <span className="text-primary">echo $status</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold">Message Sent</h2>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    <span className="mr-2 font-mono text-xs text-muted-foreground">$</span>
                    send another
                  </Button>
                </div>
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
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">~</span>
              <span>$</span>
              <span>./contact.sh --help</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
            <p className="text-muted-foreground max-w-2xl">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="terminal-window">
                <div className="terminal-window-header">
                  <span className="terminal-window-dot red" />
                  <span className="terminal-window-dot yellow" />
                  <span className="terminal-window-dot green" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                    contact-info.json
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-primary/30">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-medium text-muted-foreground">email</h3>
                      <p className="font-mono text-sm">
                        {siteConfig.links.find((l) => l.icon === "mail")?.url.replace("mailto:", "")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-primary/30">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-medium text-muted-foreground">social</h3>
                      <div className="flex flex-wrap gap-1">
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
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="terminal-window"
            >
              <div className="terminal-window-header">
                <span className="terminal-window-dot red" />
                <span className="terminal-window-dot yellow" />
                <span className="terminal-window-dot green" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground/60">
                  message.txt
                </span>
              </div>
              <div className="space-y-5 p-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full border px-3 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full border px-3 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full border px-3 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full resize-none border px-3 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
                    placeholder="Your message here..."
                  />
                </div>

                {error && <p className="font-mono text-xs text-destructive">{error}</p>}

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
