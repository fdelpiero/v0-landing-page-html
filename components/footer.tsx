import Link from "next/link"
import { MatelabLogoSmall } from "./matelab-logo"
import { getMessages, localizedPath, type Locale } from "@/lib/i18n"

export function Footer({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const copy = messages.footer
  const navLinks = messages.nav.links
  return (
    <footer className="border-t border-[#E9E7DD] py-12 relative z-10 bg-background">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-8 mb-10">

          {/* Logo */}
          <div className="flex flex-col gap-3.5">
            <Link href={localizedPath(locale, "/")} className="flex items-center gap-2.5 no-underline">
              <MatelabLogoSmall size={28} />
              <div className="font-sans font-extrabold text-[17px] tracking-[-0.04em]">
                <span className="text-foreground">mate</span>
                <span className="text-primary">lab.ai</span>
              </div>
            </Link>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-2.5 list-none">
            <li className="font-mono text-[10px] text-[#B4B1A4] tracking-[0.15em] uppercase mb-1">{copy.navigation}</li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localizedPath(locale, "/contact")} className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                {messages.nav.book}
              </Link>
            </li>
          </ul>

          {/* Connect */}
          <div className="flex flex-col gap-2.5">
            <div className="font-mono text-[10px] text-[#B4B1A4] tracking-[0.15em] uppercase mb-1">{copy.connect}</div>

            {/* Instagram */}
            <Link
              href="https://instagram.com/matelab.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 no-underline group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              <span className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                @matelab.ai
              </span>
            </Link>

            {/* Contact form */}
            <Link
              href={localizedPath(locale, "/register")}
              className="flex items-center gap-2.5 no-underline group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                {copy.contactForm}
              </span>
            </Link>

            {/* Book a call */}
            <Link
              href={localizedPath(locale, "/contact")}
              className="flex items-center gap-2.5 no-underline group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-mono text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                {copy.freeCall}
              </span>
            </Link>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-[#E9E7DD] pt-5 flex items-center justify-between flex-wrap gap-3">
          <div className="font-mono text-[11px] text-[#B4B1A4] tracking-[0.05em]">
            © 2026 matelab.ai
          </div>
          <div className="font-mono text-[11px] text-[#B4B1A4] tracking-[0.05em]">
            {copy.closing}
          </div>
        </div>

      </div>
    </footer>
  )
}
