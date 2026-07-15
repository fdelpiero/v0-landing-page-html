import type { Metadata } from "next"
import { RegisterPage } from "@/components/register-page"

export const metadata: Metadata = {
  title: "Contáctanos | matelab‑ai",
  alternates: { canonical: "/es/register", languages: { en: "/register", "es-419": "/es/register" } },
}

export default function SpanishRegister() {
  return <RegisterPage locale="es" />
}
