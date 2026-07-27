import type { Metadata } from "next";
import { CertificatesContent } from "./certificates-content";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Professional certifications and credentials.",
};

export default function CertificatesPage() {
  return <CertificatesContent />;
}
