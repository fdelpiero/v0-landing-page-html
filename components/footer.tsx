import Link from "next/link"
import { MatelabLogoSmall } from "./matelab-logo"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-8 mb-10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="flex items-center gap-2.5 no-underline">
              <MatelabLogoSmall size={28} />
              <div className="font-sans font-extrabold text-[17px] tracking-[-0.04em]">
                <span className="text-foreground">mate</span>
                <span className="text-primary">lab</span>
                <span className="text-primary text-[13px] opacity-70 tracking-[0.02em]">.ai</span>
              </div>
            </Link>
            <p className="text-[11px] text-muted-foreground tracking-[0.05em] max-w-[200px] leading-[1.7]">
              AI Automation · Education · Consulting<br />
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col gap-3 list-none">
            <li className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-1">Navigation</li>
            <li>
              <Link href="#how" className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#who" className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                Who it&apos;s for
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                Free Workshop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[11px] text-muted-foreground tracking-[0.08em] uppercase hover:text-primary transition-colors">
                Book a Call
              </Link>
            </li>
          </ul>

          {/* Contact + Social */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-1">Connect</div>

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
              <span className="text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                @matelabai
              </span>
            </Link>

            {/* Email / Contact */}
            <Link
              href="/contact"
              className="flex items-center gap-2.5 no-underline group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                matelab.ai
              </span>
            </Link>

            {/* Book a call */}
            <Link
              href="/contact"
              className="flex items-center gap-2.5 no-underline group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="text-[11px] text-muted-foreground tracking-[0.08em] group-hover:text-primary transition-colors">
                Book a free call
              </span>
            </Link>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="text-[11px] text-[#404055] tracking-[0.05em]">
            © 2026 Matelab AI · Sydney, AU
          </div>
          <div className="text-[11px] text-[#404055] tracking-[0.05em]">
            No code. No excuses. Just automation.
          </div>
        </div>

      </div>
    </footer>
  )
}

