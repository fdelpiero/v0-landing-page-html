"use client"

import Link from "next/link"
import { useState } from "react"
import { MatelabLogoSmall } from "@/components/matelab-logo"

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOw0Vu6Rnv41kIs67wgrxmrhNVngquBFID1m9_i-Ta9nT2WA/formResponse"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = data.get("firstName") as string
    const lastName = data.get("lastName") as string
    const email = data.get("email") as string

    const newErrors: Record<string, boolean> = {}
    if (!firstName.trim()) newErrors.firstName = true
    if (!lastName.trim()) newErrors.lastName = true
    if (!email.trim()) newErrors.email = true
    if (!data.get("type") || (data.get("type") as string).trim() === "") newErrors.type = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    const params = new URLSearchParams()
    params.append("entry.1145376415", firstName)
    params.append("entry.700943531", lastName)
    params.append("entry.355061805", email)
    params.append("entry.700825334", data.get("type") as string)

   try {
      const iframe = document.createElement("iframe")
      iframe.style.display = "none"
      document.body.appendChild(iframe)
      
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc) {
        const form = iframeDoc.createElement("form")
        form.method = "POST"
        form.action = GOOGLE_FORM_URL
        
        params.forEach((value, key) => {
          const input = iframeDoc.createElement("input")
          input.type = "hidden"
          input.name = key
          input.value = value
          form.appendChild(input)
        })
        
        iframeDoc.body.appendChild(form)
        form.submit()
      }
      
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 2000)
      
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
            <span className="text-primary text-lg opacity-100 tracking-[-0.04em]">.ai</span>
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
                <div className="inline-block bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
                  Free · Online · This Month
                </div>
                <h1 className="font-sans font-black text-[clamp(32px,5vw,52px)] tracking-[-0.03em] leading-[1.05] mb-4">
                  Join our next free<br />
                  <span className="text-primary italic font-serif font-normal">AI Automation</span> workshop
                </h1>
                <p className="text-sm text-muted-foreground leading-[1.7] max-w-md">
                  60 minutes. Live. We build a real automation from scratch — a chatbot, a calendar agent, or a lead capture flow. No code. No fluff. Just results.
                </p>

                {/* What to expect */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: "⚡", label: "60 min live" },
                    { icon: "🛠️", label: "Build something real" },
                    { icon: "🎓", label: "Zero tech skills" },
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
                    <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">First Name *</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Mick"
                      className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors placeholder:text-[#404055] ${errors.firstName ? "border-red-500" : "border-border focus:border-[rgba(0,229,160,0.3)]"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Last Name *</label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Dundee"
                      className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors placeholder:text-[#404055] ${errors.lastName ? "border-red-500" : "border-border focus:border-[rgba(0,229,160,0.3)]"}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="hello@yourcompany.com"
                    className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors placeholder:text-[#404055] ${errors.email ? "border-red-500" : "border-border focus:border-[rgba(0,229,160,0.3)]"}`}
                  />
                </div>
              <div className="flex flex-col gap-1.5">
               <label className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">I am a… *</label>
              <select
              name="type"
              className={`bg-[rgba(0,0,0,0.3)] border text-foreground font-mono text-sm px-3.5 py-3 outline-none focus:border-[rgba(0,229,160,0.3)] transition-colors appearance-none ${errors.type ? "border-red-500" : "border-border"}`}
               >
              <option value="">Select one</option>
                    <option>Business owner / Founder</option>
                    <option>Self Employed</option>
                    <option>Corporate team member</option>
                    <option>Freelancer / Consultant</option>
                    <option>Just curious</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-primary text-primary-foreground font-sans font-bold text-sm px-7 py-4 hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-left"
                >
                  {loading ? "Reserving your spot…" : "Reserve My Spot →"}
                </button>

                <p className="text-[11px] text-[#404055] tracking-[0.05em]">
                  Free · No credit card · 60 min · We&apos;ll email you the details
                </p>
              </form>
            </>
          ) : (
            /* Success state */
           <div className="text-center py-16">
  <div className="text-6xl mb-6">🎉</div>
  <h2 className="font-sans font-black text-3xl tracking-[-0.02em] mb-4">
    You&apos;re in!
  </h2>
  <p className="text-muted-foreground text-sm leading-[1.7] mb-8 max-w-sm mx-auto">
    Thanks for registering! We&apos;ll be in touch within 48 hours 
    with all the workshop details. See you there! 🤖
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
