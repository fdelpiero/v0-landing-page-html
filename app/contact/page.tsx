import type { Metadata } from "next"
import { ContactPage } from "@/components/contact-page"

export const metadata: Metadata = { title: "Book a free AI strategy call | mateLab.ai" }

export default function Contact() {
  return <ContactPage locale="en" />
}
