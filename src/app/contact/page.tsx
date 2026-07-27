import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me. I'm always open to discussing new projects and opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
