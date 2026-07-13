import Link from "next/link"
import { Reveal } from "./reveal"
import { getMessages, localizedPath, type Locale } from "@/lib/i18n"

export function WorkshopCTA({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).cta
  return (
    <section id="workshop" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          {/* Inverted ink panel — the only dark moment on the page */}
          <div className="bg-[#14201A] rounded-2xl p-9 md:p-[72px_64px] flex flex-wrap gap-12 items-center justify-between">
            <div>
              <div className="inline-block bg-[#2BB673] text-[#06110B] font-mono text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-[5px] rounded mb-[22px]">
                {copy.badge}
              </div>
              <h2 className="font-sans font-extrabold text-[clamp(32px,5vw,46px)] tracking-[-0.03em] leading-[1.05] mb-4 text-[#F7F6F0]">
                {copy.title}{" "}
                <em className="font-serif italic font-normal tracking-normal text-[#2BB673]">{copy.accent}</em>{" "}
                {copy.titleEnd}
              </h2>
              <p className="text-[15px] text-[#A9B4AD] max-w-[480px] leading-[1.7]">
                {copy.body}
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <Link
                href={localizedPath(locale, "/contact")}
                className="bg-[#2BB673] text-[#06110B] px-[30px] py-[15px] rounded-lg font-sans font-bold text-[15px] hover:bg-[#F7F6F0] hover:text-[#14201A] transition-colors"
              >
                {copy.button} &rarr;
              </Link>
              <p className="font-mono text-[11px] text-[#6E7A72] tracking-[0.05em]">
                {copy.response}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
