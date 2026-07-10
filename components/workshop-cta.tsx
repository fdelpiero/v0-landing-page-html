import Link from "next/link"
import { Reveal } from "./reveal"

export function WorkshopCTA() {
  return (
    <section id="workshop" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          {/* Inverted ink panel — the only dark moment on the page */}
          <div className="bg-[#14201A] rounded-2xl p-9 md:p-[72px_64px] flex flex-wrap gap-12 items-center justify-between">
            <div>
              <div className="inline-block bg-[#2BB673] text-[#06110B] font-mono text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-[5px] rounded mb-[22px]">
                Free · 45 min · No obligation
              </div>
              <h2 className="font-sans font-extrabold text-[clamp(32px,5vw,46px)] tracking-[-0.03em] leading-[1.05] mb-4 text-[#F7F6F0]">
                Book a free{" "}
                <em className="font-serif italic font-normal tracking-normal text-[#2BB673]">AI strategy</em>{" "}
                session
              </h2>
              <p className="text-[15px] text-[#A9B4AD] max-w-[480px] leading-[1.7]">
                Tell us about your business. We&apos;ll map out exactly where automation saves you time and money — and if we&apos;re not the right fit, we&apos;ll tell you that too.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <Link
                href="/contact"
                className="bg-[#2BB673] text-[#06110B] px-[30px] py-[15px] rounded-lg font-sans font-bold text-[15px] hover:bg-[#F7F6F0] hover:text-[#14201A] transition-colors"
              >
                Book a call &rarr;
              </Link>
              <p className="font-mono text-[11px] text-[#6E7A72] tracking-[0.05em]">
                Usually replies within 24h
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
