"use client"

import Link from "next/link"
import { useState } from "react"
import { MatelabLogoSmall } from "@/components/matelab-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getMessages, localizedPath, type Locale } from "@/lib/i18n"
import { LocalePreferenceRedirect } from "@/components/locale-preference-redirect"

// ─────────────────────────────────────────────────────────────
// GOOGLE FORM LINKING
// After adding "Phone number" and "How can we assist?" questions
// to your Google Form, replace the two placeholder IDs below with
// the real entry IDs (see UPDATE-INSTRUCTIONS.md for how to get them).
// Until replaced, those two answers are simply not sent — the form
// still submits the original four fields without errors.
// ─────────────────────────────────────────────────────────────
const ENTRY_PHONE = "entry.1329920861"
const ENTRY_ASSIST = "entry.829308819"

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

const countryCodes = [
  { code: "+61", label: "🇦🇺 Australia +61" },
  { code: "+64", label: "🇳🇿 New Zealand +64" },
  { code: "+1", label: "🇺🇸 USA / Canada +1" },
  { code: "+44", label: "🇬🇧 UK +44" },
  { code: "+353", label: "🇮🇪 Ireland +353" },
  { code: "+65", label: "🇸🇬 Singapore +65" },
  { code: "+852", label: "🇭🇰 Hong Kong +852" },
  { code: "+81", label: "🇯🇵 Japan +81" },
  { code: "+82", label: "🇰🇷 South Korea +82" },
  { code: "+86", label: "🇨🇳 China +86" },
  { code: "+91", label: "🇮🇳 India +91" },
  { code: "+62", label: "🇮🇩 Indonesia +62" },
  { code: "+60", label: "🇲🇾 Malaysia +60" },
  { code: "+63", label: "🇵🇭 Philippines +63" },
  { code: "+66", label: "🇹🇭 Thailand +66" },
  { code: "+84", label: "🇻🇳 Vietnam +84" },
  { code: "+971", label: "🇦🇪 UAE +971" },
  { code: "+966", label: "🇸🇦 Saudi Arabia +966" },
  { code: "+972", label: "🇮🇱 Israel +972" },
  { code: "+90", label: "🇹🇷 Turkey +90" },
  { code: "+27", label: "🇿🇦 South Africa +27" },
  { code: "+234", label: "🇳🇬 Nigeria +234" },
  { code: "+254", label: "🇰🇪 Kenya +254" },
  { code: "+20", label: "🇪🇬 Egypt +20" },
  { code: "+33", label: "🇫🇷 France +33" },
  { code: "+49", label: "🇩🇪 Germany +49" },
  { code: "+34", label: "🇪🇸 Spain +34" },
  { code: "+39", label: "🇮🇹 Italy +39" },
  { code: "+351", label: "🇵🇹 Portugal +351" },
  { code: "+31", label: "🇳🇱 Netherlands +31" },
  { code: "+32", label: "🇧🇪 Belgium +32" },
  { code: "+41", label: "🇨🇭 Switzerland +41" },
  { code: "+43", label: "🇦🇹 Austria +43" },
  { code: "+46", label: "🇸🇪 Sweden +46" },
  { code: "+47", label: "🇳🇴 Norway +47" },
  { code: "+45", label: "🇩🇰 Denmark +45" },
  { code: "+358", label: "🇫🇮 Finland +358" },
  { code: "+48", label: "🇵🇱 Poland +48" },
  { code: "+420", label: "🇨🇿 Czechia +420" },
  { code: "+30", label: "🇬🇷 Greece +30" },
  { code: "+40", label: "🇷🇴 Romania +40" },
  { code: "+36", label: "🇭🇺 Hungary +36" },
  { code: "+380", label: "🇺🇦 Ukraine +380" },
  { code: "+52", label: "🇲🇽 Mexico +52" },
  { code: "+55", label: "🇧🇷 Brazil +55" },
  { code: "+54", label: "🇦🇷 Argentina +54" },
  { code: "+56", label: "🇨🇱 Chile +56" },
  { code: "+57", label: "🇨🇴 Colombia +57" },
  { code: "+51", label: "🇵🇪 Peru +51" },
  { code: "+598", label: "🇺🇾 Uruguay +598" },
  { code: "+593", label: "🇪🇨 Ecuador +593" },
  { code: "+506", label: "🇨🇷 Costa Rica +506" },
]

const ASSIST_MAX = 400

const inputClass = (error: boolean) =>
  `w-full bg-card border rounded-lg text-foreground font-mono text-sm px-3.5 py-3 outline-none transition-colors focus:border-primary ${
    error ? "border-[#C0392B]" : "border-[#D4D2C6]"
  }`

const labelClass = "font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground"

export function RegisterPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const copy = messages.register
  const featureItems = [
    { icon: <IconBolt />, label: copy.features[0] },
    { icon: <IconWrench />, label: copy.features[1] },
    { icon: <IconCheck />, label: copy.features[2] },
  ]
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [assistText, setAssistText] = useState("")

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOw0Vu6Rnv41kIs67wgrxmrhNVngquBFID1m9_i-Ta9nT2WA/formResponse"

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = data.get("firstName") as string
    const lastName = data.get("lastName") as string
    const email = data.get("email") as string
    const countryCode = data.get("countryCode") as string
    const phone = (data.get("phone") as string) || ""
    const assist = (data.get("assist") as string) || ""

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

    // Optional fields — only sent once the real Google Form entry IDs are set
    if (phone.trim() && !ENTRY_PHONE.includes("REPLACE")) {
      params.append(ENTRY_PHONE, `${countryCode} ${phone.trim()}`)
    }
    if (assist.trim() && !ENTRY_ASSIST.includes("REPLACE")) {
      params.append(ENTRY_ASSIST, assist.trim().slice(0, ASSIST_MAX))
    }

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
      {locale === "en" && <LocalePreferenceRedirect />}

      {/* Grid bg */}
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Simple nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-3.5 md:px-12 bg-[rgba(247,246,240,0.88)] backdrop-blur-[20px] border-b border-[#E9E7DD]">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-2.5 no-underline">
          <MatelabLogoSmall size={28} />
          <div className="font-sans font-extrabold text-lg tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab&#8209;ai</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={localizedPath(locale, "/")} className="hidden sm:inline font-mono text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            ← {messages.common.backHome}
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <main className="flex-1 flex justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-[520px]">

          {!submitted ? (
            <div className="flex flex-col gap-[22px]">
              {/* Header */}
              <div className="flex flex-col gap-[18px] items-start">
                <div className="inline-block bg-primary text-white font-mono text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-[5px] rounded">
                  {copy.badge}
                </div>
                <h1 className="font-sans font-extrabold text-[clamp(28px,5vw,38px)] tracking-[-0.02em] leading-[1.1]">
                  {copy.title}{" "}
                  <em className="text-primary italic font-serif font-normal tracking-normal">{copy.accent}</em>
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
                    <label htmlFor="firstName" className={labelClass}>{copy.firstName} *</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Mick" className={inputClass(!!errors.firstName)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className={labelClass}>{copy.lastName} *</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Dundee" className={inputClass(!!errors.lastName)} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={labelClass}>{copy.email} *</label>
                  <input id="email" name="email" type="email" placeholder="hello@yourcompany.com" className={inputClass(!!errors.email)} />
                </div>

                {/* Phone (optional): country code + number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className={labelClass}>{copy.phone} <span className="normal-case text-[#B4B1A4]">({copy.optional})</span></label>
                  <div className="grid grid-cols-[200px_1fr] gap-3">
                    <select
                      id="countryCode"
                      name="countryCode"
                      defaultValue="+61"
                      aria-label={locale === "es" ? "Código de país" : "Country code"}
                      className={`${inputClass(false)} appearance-none pr-2`}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.label} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="412 345 678"
                      className={inputClass(false)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="type" className={labelClass}>{copy.type} *</label>
                  <select id="type" name="type" defaultValue="" className={`${inputClass(!!errors.type)} appearance-none`}>
                    <option value="">{copy.typePlaceholder}</option>
                    {copy.typeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>

                {/* How can we assist? (optional, 400 chars) */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="assist" className={labelClass}>{copy.assist} <span className="normal-case text-[#B4B1A4]">({copy.optional})</span></label>
                    <span className="font-mono text-[10px] text-[#B4B1A4]">{assistText.length}/{ASSIST_MAX}</span>
                  </div>
                  <textarea
                    id="assist"
                    name="assist"
                    rows={4}
                    maxLength={ASSIST_MAX}
                    value={assistText}
                    onChange={(e) => setAssistText(e.target.value)}
                    placeholder={copy.assistPlaceholder}
                    className={`${inputClass(false)} resize-none leading-[1.6]`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-primary text-white border-none cursor-pointer font-sans font-bold text-[15px] px-7 py-[15px] rounded-lg text-left hover:bg-foreground transition-colors disabled:opacity-60"
                >
                  {loading ? copy.submitting : `${copy.submit} →`}
                </button>
                {Object.keys(errors).length > 0 && (
                  <p role="alert" className="font-mono text-[11px] text-[#C0392B]">{copy.required}</p>
                )}
                <p className="font-mono text-[11px] tracking-[0.05em] text-[#B4B1A4]">
                  {copy.responseTime}
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
                {copy.successTitle}
              </h2>
              <p className="text-sm text-muted-foreground leading-[1.7] max-w-[360px]">
                {copy.successBody}
              </p>
              <Link
                href={localizedPath(locale, "/")}
                className="inline-block bg-primary text-white font-sans font-bold text-sm px-6 py-[13px] rounded-lg hover:bg-foreground transition-colors"
              >
                ← {copy.successHome}
              </Link>
            </div>
          )}

        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-[#E9E7DD] py-5 px-6 text-center relative z-10">
        <p className="font-mono text-[11px] text-[#B4B1A4] tracking-[0.05em]">
          © 2026 matelab-ai · Sydney, AU ·{" "}
          <Link href={localizedPath(locale, "/")} className="text-[#B4B1A4] hover:text-primary transition-colors">matelab-ai</Link>
        </p>
      </div>

    </div>
  )
}
