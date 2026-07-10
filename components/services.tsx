"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

interface ServiceCardProps {
  num: string
  badge?: string
  title: string
  body: string
  tags: { label: string }[]
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
      className={`p-8 rounded-xl cursor-pointer transition-colors self-start ${
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
            key={tag.label}
            className="font-mono text-[10px] px-2.5 py-[3px] tracking-[0.08em] border border-[#D4D2C6] rounded-full text-muted-foreground whitespace-nowrap"
          >
            {tag.label}
          </span>
        ))}
      </div>
      {/* Click payoff: active card reveals what's included */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          active ? 'max-h-[140px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-[18px] text-[12.5px] text-[#3D4A42] leading-[1.7] border-l-2 border-primary pl-3">
          {includes}
        </p>
      </div>
    </div>
  )
}

const services = [
  {
    num: "01",
    badge: "Most popular",
    title: "Custom AI Solutions",
    body: "We design and build automations for your business: chatbots, lead capture, calendar agents, CRM flows, internal tools. Scoped fixed, delivered fast, documented and handed over.",
    tags: [
      { label: "AI Chatbots" },
      { label: "Lead Flows" },
      { label: "Calendar Agents" },
      { label: "CRM Integrations" }
    ],
    includes: "Includes: scoping workshop, fixed quote, build & testing, documentation, handover training and 30 days of post-launch support."
  },
  {
    num: "02",
    title: "Consulting & Retainers",
    body: "An automation audit maps where AI saves you the most, with a prioritised roadmap. Monthly retainers keep us embedded as your automation stack grows with the business.",
    tags: [
      { label: "Automation Audit" },
      { label: "AI Strategy" },
      { label: "Monthly Retainers" }
    ],
    includes: "Includes: workflow audit, ROI-ranked roadmap, tool selection, monthly build hours and quarterly strategy reviews."
  },
  {
    num: "03",
    title: "Corporate Workshops",
    body: "Practical half-day or full-day hands-on sessions for teams — built inside your tools, tailored to your workflows, and designed to stick. On-site or remote. Your team leaves able to build and manage their own AI tools — no coding required.",
    tags: [
      { label: "Team Workshops" },
      { label: "Custom Training" },
      { label: "On-site or Remote" }
    ],
    includes: "Includes: pre-workshop skills survey, tailored curriculum, hands-on build session, take-home templates and a follow-up Q&A call."
  }
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">What we do</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Three ways to work <span className="text-primary">with us.</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            Start with a build, bring us in for strategy, or upskill your whole team. Tap a card for what&apos;s included.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
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
