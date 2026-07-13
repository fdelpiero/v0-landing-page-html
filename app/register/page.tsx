import type { Metadata } from "next"
import { RegisterPage } from "@/components/register-page"

export const metadata: Metadata = { title: "Contact mateLab.ai" }

export default function Register() {
  return <RegisterPage locale="en" />
}
