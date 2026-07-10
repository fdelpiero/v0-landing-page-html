"use client"

import Link from "next/link"
import { useState } from "react"
import { MatelabLogoSmall } from "@/components/matelab-logo"

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const IconWrench = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const featureItems = [
  { icon: <IconBolt />, label: "Ask us anything" },
  { icon: <IconWrench />, label: "Start automating now" },
  { icon: <IconCheck />, label: "We're here to help" },
]

const inputClass = (error: boolean) =>
  `w-full bg-card border rounded-lg text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors focus:border-primary ${
    error ? "border-[#C0392B]" : "border-[#D4D2C6]"
  }`

const labelClass = "font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground"

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
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-3.5 md:px-12 bg-[rgba(247,246,240,0.88)] backdrop-blur-[20px] border-b border-[#E9E7DD]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <MatelabLogoSmall size={28} />
          <div className="font-sans font-extrabold text-lg tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab.ai</span>
          </div>
        </Link>
        <Link href="/" className="font-mono text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
          ← Back to home
        </Link>
      </nav>

      {/* Main Container */}
      <main className="flex-1 flex justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-[520px]">

          {!submitted ? (
            <div className="flex flex-col gap-[22px]">
              {/* Header */}
              <div className="flex flex-col gap-[18px] items-start">
                <div className="inline-block bg-primary text-white font-mono text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-[5px] rounded">
                  Contact us
                </div>
                <h1 className="font-sans font-extrabold text-[clamp(28px,5vw,38px)] tracking-[-0.02em] leading-[1.1]">
                  Tell us what you&apos;re{" "}
                  <em className="text-primary italic font-serif font-normal tracking-normal">trying to automate.</em>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                  {featureItems.map((item) => (
                    <div key={item.label} className="bg-card border border-border rounded-[10px] p-3.5 text-center">
                      <div className="text-primary flex justify-center mb-2">
                        {item.icon}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className={labelClass}>First Name *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Mick" className={inputClass(!!errors.firstName)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Dundee" className={inputClass(!!errors.lastName)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input id="email" name="email" type="email" placeholder="hello@yourcompany.com" className={inputClass(!!errors.email)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="type" className={labelClass}>I am a… *</label>
                  <select id="type" name="type" defaultValue="" className={`${inputClass(!!errors.type)} appearance-none`}>
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
                  className="mt-2 bg-primary text-white border-none cursor-pointer font-sans font-bold text-[15px] px-7 py-[15px] rounded-lg text-left hover:bg-foreground transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Submit my query →"}
                </button>
                <p className="font-mono text-[11px] tracking-[0.05em] text-[#B4B1A4]">
                  We will contact you within 48 hours
                </p>
              </form>
            </div>
          ) : (
            /* Success state */
            <div className="text-center py-16 flex flex-col items-center gap-5">
              <div className="text-primary">
                <IconStar />
              </div>
              <h2 className="font-sans font-extrabold text-[30px] tracking-[-0.02em]">
                We&apos;ve got you!
              </h2>
              <p className="text-sm text-muted-foreground leading-[1.7] max-w-[360px]">
                Thanks for submitting your query! We&apos;ll be in touch within 48 hours.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-white font-sans font-bold text-sm px-6 py-[13px] rounded-lg hover:bg-foreground transition-colors"
              >
                ← Back to Matelab.ai
              </Link>
            </div>
          )}

        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-[#E9E7DD] py-5 px-6 text-center relative z-10">
        <p className="font-mono text-[11px] text-[#B4B1A4] tracking-[0.05em]">
          © 2026 Matelab AI · Sydney, AU ·{" "}
          <Link href="/" className="text-[#B4B1A4] hover:text-primary transition-colors">matelab.ai</Link>
        </p>
      </div>

    </div>
  )
}
