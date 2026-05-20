"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  body: string
  tags: { label: string }[]
  active: boolean
  onClick: () => void
}

function ServiceCard({ icon, title, body, tags, active, onClick }: ServiceCardProps) {
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
      <div className="mb-5 text-primary">
        {icon}
      </div>
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
    </div>
  )
}

const IconSchool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 9L12 5L2 9l10 4l10-4v6"/>
    <path d="M6 10.6V16a6 6 0 0 0 12 0v-5.4"/>
  </svg>
)

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)

const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/>
  </svg>
)

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/>
    <path d="M8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/>
    <path d="M8 13c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    <path d="M16 13c-.29 0-.62.02-.97.05C16.19 13.89 17 15.02 17 16.33V19h7v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

const services = [
  {
    icon: <IconSchool />,
    title: "Education & Courses",
    body: "Live cohorts, workshops and self-paced courses that take you from zero to building real AI automations. Designed for non-technical people in business.",
    tags: [
      { label: "Live Cohorts" },
      { label: "Online Courses" },
      { label: "Free Workshops" },
      { label: "Community" }
    ],
  },
  {
    icon: <IconSettings />,
    title: "Done-For-You Automation",
    body: "We build the flows for you. Chatbots, lead capture, calendar agents, CRM automations — custom-built for your business in days, not months.",
    tags: [
      { label: "AI Chatbots" },
      { label: "Lead Flows" },
      { label: "Calendar Agents" },
      { label: "CRM Integrations" }
    ]
  },
  {
    icon: <IconBuilding />,
    title: "Corporate Upskilling",
    body: "Half-day and full-day workshops for teams of 10–50. We come to you — or run it remotely — and leave your team able to build and manage their own AI tools.",
    tags: [
      { label: "Team Workshops" },
      { label: "Custom Training" },
      { label: "On-site or Remote" }
    ]
  },
  {
    icon: <IconUsers />,
    title: "Consulting & Retainers",
    body: "Ongoing automation strategy and implementation support. We embed with your team monthly to keep your AI stack evolving as your business grows.",
    tags: [
      { label: "Monthly Retainers" },
      { label: "AI Strategy" },
      { label: "Implementation" }
    ]
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
            Learn it. Build it.<br/><em className="font-serif italic text-primary font-normal">Scale it.</em>
          </h2>
          <p className="text-muted-foreground max-w-[500px] mb-16 text-[15px]">
            Three ways to work with Matelab — pick your level.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
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
