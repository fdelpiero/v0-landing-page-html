"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"
import { MatelabLogo } from "@/components/matelab-logo"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Simulate form submission - replace with your actual API endpoint or Google Form integration
    try {
      // Example: Send to your API route
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background relative">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <MatelabLogo size={32} />
          <div className="font-sans font-extrabold text-xl tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab</span>
          </div>
        </Link>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Form Section */}
      <section className="relative z-10 flex items-center justify-center px-6 py-12 md:py-24">
        <div className="w-full max-w-[520px]">
          {!isSubmitted ? (
            <>
              {/* Form Header */}
              <div className="text-center mb-10">
                <div className="inline-block bg-accent border border-[rgba(0,229,160,0.3)] text-accent-foreground text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
                  Free Workshop Registration
                </div>
                <h1 className="font-sans text-[clamp(28px,4vw,42px)] font-black tracking-[-0.02em] leading-[1.1] mb-4 text-foreground">
                  Reserve Your Spot
                </h1>
                <p className="text-sm text-muted-foreground max-w-[400px] mx-auto leading-[1.7]">
                  Join our next free AI Automation Workshop. 60 minutes of hands-on learning with real results.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-card border border-border px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-card border border-border px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-card border border-border px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-7 py-4 font-sans font-bold text-sm tracking-[0.05em] uppercase hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register Now"
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground tracking-[0.05em]">
                  Free · No credit card · 60 min workshop
                </p>
              </form>

              {/* Workshop Details */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-4">
                  What you&apos;ll get
                </h3>
                <ul className="space-y-3">
                  {[
                    "Live 60-minute hands-on session",
                    "Build a real automation from scratch",
                    "No coding experience required",
                    "Recording sent to your email",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent border border-[rgba(0,229,160,0.3)] mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sans text-[clamp(24px,3.5vw,36px)] font-black tracking-[-0.02em] leading-[1.1] mb-4 text-foreground">
                You&apos;re Registered!
              </h2>
              <p className="text-sm text-muted-foreground max-w-[400px] mx-auto leading-[1.7] mb-8">
                Thanks for signing up, <span className="text-foreground">{formData.name}</span>! 
                We&apos;ve sent a confirmation email to <span className="text-foreground">{formData.email}</span> with 
                all the workshop details.
              </p>
              <Link 
                href="/"
                className="inline-block bg-primary text-primary-foreground px-7 py-3.5 font-sans font-bold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 md:px-12 border-t border-border mt-auto">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <MatelabLogo size={24} />
            <span className="font-sans font-bold text-sm">
              <span className="text-foreground">mate</span>
              <span className="text-primary">lab</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Matelab AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
