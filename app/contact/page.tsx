"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Loader2, Instagram } from "lucide-react"
import { MatelabLogo } from "@/components/matelab-logo"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Replace with your actual API endpoint or form handler
      // const response = await fetch('/api/contact', {
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
                  Get in Touch
                </div>
                <h1 className="font-sans text-[clamp(28px,4vw,42px)] font-black tracking-[-0.02em] leading-[1.1] mb-4 text-foreground">
                  Book a Free Call
                </h1>
                <p className="text-sm text-muted-foreground max-w-[400px] mx-auto leading-[1.7]">
                  Ready to automate your business? Let&apos;s talk about how AI can transform your workflows. No commitment required.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    Full Name *
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
                    Email Address *
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
                    Phone Number *
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

                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    Company <span className="text-muted-foreground/50">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full bg-card border border-border px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2"
                  >
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project or what you'd like to discuss..."
                    className="w-full bg-card border border-border px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
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
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground tracking-[0.05em]">
                  We typically respond within 24 hours
                </p>
              </form>

              {/* What to Expect */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Quick response within 24 hours",
                    "Free 30-minute discovery call",
                    "Custom automation strategy for your business",
                    "No-obligation consultation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instagram */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-4">
                  Follow Us
                </h3>
                <a 
                  href="https://instagram.com/matelab.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-card border border-border group-hover:border-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </span>
                  @matelab.ai
                </a>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent border border-[rgba(0,229,160,0.3)] mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sans text-[clamp(24px,3.5vw,36px)] font-black tracking-[-0.02em] leading-[1.1] mb-4 text-foreground">
                Message Sent!
              </h2>
              <p className="text-sm text-muted-foreground max-w-[400px] mx-auto leading-[1.7] mb-8">
                Thanks for reaching out, <span className="text-foreground">{formData.name}</span>! 
                We&apos;ll get back to you at <span className="text-foreground">{formData.email}</span> within 24 hours to schedule your free call.
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
