import { getMessages, type Locale } from "@/lib/i18n"

export function Marquee({ locale }: { locale: Locale }) {
  const marqueeItems = getMessages(locale).marquee
  return (
    <div className="border-y border-[#E9E7DD] py-3.5 overflow-hidden bg-card">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        {marqueeItems.map((item, i) => (
          <div
            key={`a-${i}`}
            className="whitespace-nowrap px-10 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-3"
          >
            {item}
            <span className="text-primary text-[8px]">✦</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeItems.map((item, i) => (
          <div
            key={`b-${i}`}
            className="whitespace-nowrap px-10 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-3"
          >
            {item}
            <span className="text-primary text-[8px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
