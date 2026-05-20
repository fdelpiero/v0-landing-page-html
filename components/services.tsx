"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { IconSchool, IconSettings, IconBuildingSkyscraper, IconUsers } from "@tabler/icons-react"

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

const services = [
  {
    icon: <IconSchool size={32} stroke={1.5} />,
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
    icon: <IconSettings size={32} stroke={1.5} />,
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
    icon: <IconBuildingSkyscraper size={32} stroke={1.5} />,
    title: "Corporate Upskilling",
    body: "Half-day and full-day workshops for teams of 10–50. We come to you — or run it remotely — and leave your team able to build and manage their own AI tools.",
    tags: [
      { label: "Team Workshops" },
      { label: "Custom Training" },
      { label: "On-site or Remote" }
    ]
  },
  {
    icon: <IconUsers size={32} stroke={1.5} />,
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
