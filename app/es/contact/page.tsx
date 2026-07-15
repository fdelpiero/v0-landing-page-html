import type { Metadata } from "next"
import { ContactPage } from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Agenda una sesión estratégica de IA | matelab‑ai",
  alternates: { canonical: "/es/contact", languages: { en: "/contact", "es-419": "/es/contact" } },
}

export default function SpanishContact() {
  return <ContactPage locale="es" />
}
