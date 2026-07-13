"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { getMessages, type Locale } from "@/lib/i18n"

interface ServiceCardProps {
  num: string
  badge?: string
  title: string
  body: string
  tags: readonly string[]
  includes: string
  active: boolean
  onClick: () => void
}

function ServiceCard({ num, badge, title, body, tags, includes, active, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      aria-pressed={active}
      className={`p-8 rounded-xl cursor-pointer transition-colors h-full flex flex-col ${
        active
          ? 'bg-accent border border-[rgba(30,138,85,0.45)]'
          : 'bg-card hover:border-[rgba(30,138,85,0.4)] border border-border'
      }`}
    >
      <div className={`flex ${badge ? 'justify-between' : 'justify-end'} items-center mb-4 min-h-[20px]`}>
        {badge && (
          <span className="bg-primary text-white font-mono text-[9px] font-medium tracking-[0.15em] uppercase px-2 py-[3px] rounded">
            {badge}
          </span>
        )}
        <span className="font-mono text-[11px] tracking-[0.15em] text-[#B4B1A4]">{num}</span>
      </div>
      <div className="font-sans text-xl font-extrabold mb-2.5 tracking-[-0.01em]">
        {title}
      </div>
      <p className="text-[13.5px] text-muted-foreground leading-[1.75] mb-[18px]">
        {body}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-[3px] tracking-[0.08em] border border-[#D4D2C6] rounded-full text-muted-foreground whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Reserve this space on every card so clicking never changes card height */}
      <div
        aria-hidden={!active}
        className={`mt-auto pt-[18px] transition-opacity duration-300 ease-in-out ${
          active ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <p className="text-[12.5px] text-[#3D4A42] leading-[1.7] border-l-2 border-primary pl-3">
          {includes}
        </p>
      </div>
    </div>
  )
}

export function Services({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).services
  const services = copy.items
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">{copy.eyebrow}</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            {copy.title} <span className="text-primary">{copy.accent}</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            {copy.intro}
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
