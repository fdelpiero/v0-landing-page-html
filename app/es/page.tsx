import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "matelab‑ai | Automatización con IA para tu negocio",
  description: "Agentes de IA, chatbots, automatizaciones y talleres prácticos diseñados para tu negocio.",
  alternates: { canonical: "/es", languages: { en: "/", "es-419": "/es" } },
}

export default function SpanishHome() {
  return <HomePage locale="es" />
}
