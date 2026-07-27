"use client";

import Link from "next/link";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { certificates } from "@/data/certificates";

export function CertificatesContent() {
  return (
    <div className="section-padding">
      <div className="max-width">
        <FadeIn>
          <div className="mb-12 text-center">
            <Badge variant="gradient" className="mb-4">
              Credentials
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Certifications</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Professional certifications that validate my expertise across various technologies and
              platforms.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id}>
              <div className="glass-card flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{cert.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{cert.issuer}</p>
                <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  {new Date(cert.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </div>
                <div className="mt-auto">
                  {cert.credentialUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Credential
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
