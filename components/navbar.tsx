"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { MatelabLogo } from "./matelab-logo"
import { LanguageSwitcher } from "./language-switcher"
import { getMessages, localizedPath, type Locale } from "@/lib/i18n"

export function Navbar({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const navLinks = messages.nav.links
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-3.5 md:px-12 bg-[rgba(247,246,240,0.88)] backdrop-blur-[20px] transition-colors"
      style={{ borderBottom: `1px solid ${scrolled ? 'rgba(30,138,85,0.25)' : '#E9E7DD'}` }}
    >
      <Link href={localizedPath(locale, "/")} className="flex items-center gap-2.5 no-underline">
        <MatelabLogo size={32} />
        <div className="font-sans font-extrabold text-xl tracking-[-0.04em]">
          <span className="text-foreground">mate</span>
          <span className="text-primary">lab&#8209;ai</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-4 xl:gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-mono text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          </li>
        ))}
        <li><LanguageSwitcher locale={locale} /></li>
        <li>
          <Link
            href={localizedPath(locale, "/contact")}
            className="bg-foreground text-background font-mono text-xs tracking-[0.1em] uppercase px-[18px] py-2.5 rounded-md font-medium hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
          >
            {messages.nav.book} &rarr;
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger — three ink bars */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex flex-col gap-[5px] p-2.5 cursor-pointer bg-transparent border-none"
        aria-label={messages.nav.menu}
        aria-expanded={mobileMenuOpen}
      >
        <span className="block w-[22px] h-[2px] bg-foreground" />
        <span className="block w-[22px] h-[2px] bg-foreground" />
        <span className="block w-[22px] h-[2px] bg-foreground" />
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(247,246,240,0.98)] backdrop-blur-[20px] border-b border-[#E9E7DD] px-6 pt-5 pb-6 lg:hidden flex flex-col items-start gap-[18px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] tracking-[0.1em] uppercase text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} compact />
          <Link
            href={localizedPath(locale, "/contact")}
            className="bg-primary text-white font-mono text-[13px] tracking-[0.1em] uppercase px-5 py-3 rounded-md whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)}
          >
            {messages.nav.book} &rarr;
          </Link>
        </div>
      )}
    </nav>
  )
}
