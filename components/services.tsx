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
      className={`p-10 relative overflow-hidden transition-colors cursor-pointer ${
        active
          ? 'bg-accent border border-[rgba(0,229,160,0.3)]'
          : 'bg-card hover:bg-secondary border border-transparent'
      }`}
    >
      <span className="absolute top-6 right-7 text-[11px] text-[#404055] tracking-[0.15em]">{num}</span>
      {badge && (
        <span className="inline-block bg-primary text-primary-foreground text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 mb-4 font-sans">
          {badge}
        </span>
      )}
      <div className="font-sans text-xl font-extrabold mb-2.5 tracking-[-0.01em]">
        {title}
      </div>
      <p className="text-[13px] text-muted-foreground leading-[1.75] mb-5">
        {body}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`text-[10px] px-2.5 py-0.5 tracking-[0.08em] ${
              active
                ? 'border border-[rgba(0,229,160,0.3)] text-primary bg-accent'
                : 'border border-border text-muted-foreground'
            }`}
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
        style={{ marginTop: active ? 18 : 0 }}
      >
        <p className="text-[12.5px] text-foreground/85 leading-[1.7] border-l-2 border-primary pl-3">
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
    body: "Practical half-day or full-day hands-on sessions for teams – built inside your tools, tailored to your workflows, and designed to stick. On-site or remote. Your team leaves able to build and manage their own AI tools — no coding required.",
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
    <section id="services" className="pb-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">What we do</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Three ways to work <em className="font-serif italic text-primary font-normal">with us.</em>
          </h2>
          <p className="text-muted-foreground max-w-[500px] mb-16 text-[15px]">
            Start with a build, bring us in for strategy, or upskill your whole team.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
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
