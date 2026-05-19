import Link from "next/link"
import { MatelabLogoSmall } from "./matelab-logo"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <Link href="#" className="flex items-center gap-2.5 no-underline">
            <MatelabLogoSmall size={28} />
            <div className="font-sans font-extrabold text-[17px] tracking-[-0.04em]">
              <span className="text-foreground">mate</span>
              <span className="text-primary">lab</span>
            </div>
          </Link>

          <ul className="flex gap-6 list-none flex-wrap">
            <li>
              <Link href="#how" className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase hover:text-primary transition-colors">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#who" className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase hover:text-primary transition-colors">
                Who it&apos;s for
              </Link>
            </li>
            <li>
              <Link href="#workshop" className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase hover:text-primary transition-colors">
                Free Workshop
              </Link>
            </li>
          </ul>

          <div className="text-[11px] text-[#404055] tracking-[0.05em]">
            © 2026 Matelab AI · Sydney, AU · matelab.ai
          </div>
        </div>
      </div>
    </footer>
  )
}
