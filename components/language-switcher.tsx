"use client"

import { Globe2 } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import type { Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/i18n"

export function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const messages = getMessages(locale)
  const targetLocale: Locale = locale === "en" ? "es" : "en"

  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es-419" : "en"
  }, [locale])

  function switchLanguage() {
    const withoutSpanish = pathname.replace(/^\/es(?=\/|$)/, "") || "/"
    const target = targetLocale === "es"
      ? withoutSpanish === "/" ? "/es" : `/es${withoutSpanish}`
      : withoutSpanish
    window.localStorage.setItem("matelab-locale", targetLocale)
    router.push(`${target}${window.location.hash}`)
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={messages.language.switchTo}
      title={messages.language.switchTo}
      className={`inline-flex items-center justify-center gap-1.5 rounded-md border border-[#D4D2C6] bg-card font-mono font-semibold tracking-[0.08em] text-foreground hover:border-primary hover:text-primary transition-colors ${compact ? "px-3 py-2.5 text-[11px]" : "px-3 py-2 text-[10px]"}`}
    >
      <Globe2 aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
      <span>{locale === "en" ? "ES" : "EN"}</span>
    </button>
  )
}
