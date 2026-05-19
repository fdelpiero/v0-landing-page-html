"use client"

import Link from "next/link"
import { useState } from "react"
import { MatelabLogoSmall } from "@/components/matelab-logo"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const GOOGLE_FORM_URL = "YOUR_GOOGLE_FORM_ACTION_URL_HERE"
  // Replace entry IDs below with your real Google Form entry IDs

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name") as string
    const email = data.get("email") as string

    const newErrors: Record<string, boolean> = {}
    if (!name.trim()) newErrors.name = true
    if (!email.trim()) newErrors.email = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    const params = new URLSearchParams()
    params.append("entry.XXXXXXXXX", name)                              // ← replace
    params.append("entry.XXXXXXXXX", data.get("company") as string)    // ← replace
    params.append("entry.XXXXXXXXX", email)                             // ← replace
    params.append("entry.XXXXXXXXX", data.get("need") as string)       // ← replace
    params.append("entry.XXXXXXXXX", data.get("message") as string)    // ← replace

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      })
    } catch (_) {}

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Grid bg */}
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Simple nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <MatelabLogoSmall size={28} />
          <div className="font-sans font-extrabold text-lg tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab</span>
          </div>
        </Link>
        <Link href="/" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
          ← Back to home
        </Link>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-lg">

          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-10">
                <div className="inline-block border border-border text-muted-foreground text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
                  Consulting · Corporate · Partnerships
                </div>
                <h1 className="font-sans font-black text-[clamp(32px,5vw,52px)] tracking-[-0.03em] leading-[1.05] mb-4">
                  Book a free<br />
                  <span className="text-primary italic font-serif font-normal">AI Strategy</span> Call
                </h1>
                <p className="text-sm text-muted-foreground leading-[1.7] max-w-md">
                  Tell us about your business. We&apos;ll map out exactly where AI automation can save you time and money — no obligation, no sales pressure.
                </p>

                {/* What to expect */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: "📞", label: "30 min call" },
                    { icon: "🗺️", label: "Custom roadmap" },
                    { icon: "💸", label: "No obligation" },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border p-3 text-center">
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-[10px] text-muted-foreground tracking-[0.08em] uppercase">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Name *</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors placeholder:text-[#404055] ${errors.name ? "border-red-500" : "border-border focus:border-[rgba(0,229,160,0.3)]"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Company</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="bg-[rgba(0,0,0,0.3)] border border-border text-foreground font-mono text-sm px-3.5 py-3 outline-none focus:border-[rgba(0,229,160,0.3)] transition-colors placeholder:text-[#404055]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors placeholder:text-[#404055] ${errors.email ? "border-red-500" : "border-border focus:border-[rgba(0,229,160,0.3)]"}`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">What do you need help with?</label>
                  <select
                    name="need"
                    className="bg-[rgba(0,0,0,0.3)] border border-border text-foreground font-mono text-sm px-3.5 py-3 outline-none focus:border-[rgba(0,229,160,0.3)] transition-colors appearance-none"
                  >
                    <option value="">Select one</option>
                    <option>Build a chatbot for my business</option>
                    <option>Automate my workflows</option>
                    <option>Corporate team training / workshop</option>
                    <option>Ongoing consulting / retainer</option>
                    <option>Not sure — just exploring</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Tell us more (optional)</label>
                  <textarea
                    name="message"
                    placeholder="What's your biggest time drain right now? What does your team spend hours doing manually?"
                    rows={4}
                    className="bg-[rgba(0,0,0,0.3)] border border-border text-foreground font-mono text-sm px-3.5 py-3 outline-none focus:border-[rgba(0,229,160,0.3)] transition-colors placeholder:text-[#404055] resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-transparent border border-border text-foreground font-sans font-bold text-sm px-7 py-4 hover:border-[rgba(0,229,160,0.3)] hover:text-primary hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-left"
                >
                  {loading ? "Sending…" : "Book My Free Call →"}
                </button>

                <p className="text-[11px] text-[#404055] tracking-[0.05em]">
                  No obligation · 30 min · We&apos;ll reach out within 24 hours
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="font-sans font-black text-3xl tracking-[-0.02em] mb-4">Got it!</h2>
              <p className="text-muted-foreground text-sm leading-[1.7] mb-8 max-w-sm mx-auto">
                Thanks for reaching out. We&apos;ll be in touch within 24 hours to book your strategy call.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-primary-foreground font-sans font-bold text-sm px-6 py-3 hover:opacity-90 transition-opacity"
              >
                ← Back to Matelab
              </Link>
            </div>
          )}

        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-border py-5 px-6 text-center relative z-10">
        <p className="text-[11px] text-[#404055] tracking-[0.05em]">
          © 2026 Matelab AI · Sydney, AU ·{" "}
          <Link href="/" className="hover:text-primary transition-colors">matelab.ai</Link>
        </p>
      </div>

    </div>
  )
}

