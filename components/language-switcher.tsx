"use client"

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
      className={`inline-flex items-center rounded-md border border-[#D4D2C6] bg-card p-0.5 font-mono font-semibold tracking-[0.08em] text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${compact ? "text-[11px]" : "text-[10px]"}`}
    >
      <span
        className={`rounded-[4px] px-2 py-1.5 transition-colors ${locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        EN
      </span>
      <span aria-hidden="true" className="mx-0.5 text-[#B8B5A8]">|</span>
      <span
        className={`rounded-[4px] px-2 py-1.5 transition-colors ${locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        ES
      </span>
    </button>
  )
}
