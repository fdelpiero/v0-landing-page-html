"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { MatelabLogo } from "./matelab-logo"

const navLinks = [
  { href: "#services", label: "What we do" },
  { href: "#how", label: "How it works" },
  { href: "#usecases", label: "What we build" },
  { href: "#workshops", label: "Workshops" },
]

export function Navbar() {
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
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] transition-colors"
      style={{ borderBottom: `1px solid ${scrolled ? 'rgba(0,229,160,0.15)' : '#1e1e2e'}` }}
    >
      <Link href="#" className="flex items-center gap-2.5 no-underline">
        <MatelabLogo size={32} />
        <div className="font-sans font-extrabold text-xl tracking-[-0.04em]">
          <span className="text-foreground">mate</span>
          <span className="text-primary">lab</span>
          <span className="text-primary text-xl opacity-100 tracking-[-0.02em]">.ai</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground text-xs tracking-[0.1em] uppercase px-4 py-2 font-medium hover:opacity-85 transition-opacity"
          >
            Book a Call &rarr;
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(10,10,15,0.95)] backdrop-blur-[20px] border-b border-border p-6 md:hidden">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground text-sm tracking-[0.1em] uppercase px-4 py-2 font-medium hover:opacity-85 transition-opacity mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call &rarr;
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
