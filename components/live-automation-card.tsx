"use client"

import { useEffect, useState } from "react"
import { getMessages, type Locale } from "@/lib/i18n"

export function LiveAutomationCard({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).live
  const steps = copy.steps
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduced) {
      // Render the completed state statically
      setPhase(3)
      return
    }

    const timer = setInterval(() => {
      setPhase((p) => (p + 1) % 5)
    }, 1050)
    return () => clearInterval(timer)
  }, [])

  const dotStyle = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: 10,
      height: 10,
      borderRadius: "50%",
      marginTop: 6,
      boxSizing: "border-box",
      transition: "background 0.3s, border-color 0.3s",
      flex: "none",
    }
    if (phase > i) return { ...base, background: "#1E8A55" }
    if (phase === i)
      return {
        ...base,
        border: "2px solid #1E8A55",
        animation: "pulseDot 1.05s ease-out infinite",
      }
    return { ...base, border: "2px solid #D4D2C6" }
  }

  const titleColor = (i: number) => (phase >= i ? "#14201A" : "#B4B1A4")
  const subColor = (i: number) => (phase >= i ? "#8A887C" : "#D0CDC0")

  return (
    <div className="bg-card border border-border rounded-[14px] p-7 flex flex-col w-full max-w-[460px] shadow-[0_2px_16px_rgba(20,32,26,0.06)]">
      {/* Header */}
      <div className="flex justify-between items-center pb-5">
        <div className="font-mono text-[11px] tracking-[0.12em] text-[#8A887C]">{copy.title}</div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
          <div className="font-mono text-[11px] tracking-[0.08em] text-primary">{copy.running}</div>
        </div>
      </div>

      {/* Steps */}
      {steps.map((step, i) => (
        <div key={step.title} className="flex gap-3.5">
          <div className="flex flex-col items-center">
            <div style={dotStyle(i)} />
            {i < steps.length - 1 && <div className="w-px flex-1 bg-[#E4E2D8]" />}
          </div>
          <div className={i < steps.length - 1 ? "pb-[22px]" : ""}>
            <div
              className="font-sans text-[15px] font-bold"
              style={{ color: titleColor(i), transition: "color 0.35s" }}
            >
              {step.title}
            </div>
            <div
              className="font-mono text-[12.5px] mt-[3px]"
              style={{ color: subColor(i), transition: "color 0.35s" }}
            >
              {step.sub}
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-[#E9E7DD] flex justify-between items-center">
        <div className="text-[13px] font-medium text-muted-foreground">{copy.footer}</div>
        <div className="flex items-baseline gap-2.5">
          <div
            className="font-mono text-xs text-primary"
            style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.4s" }}
          >
            +14 min
          </div>
          <div className="font-sans font-extrabold text-[22px] text-foreground tracking-[-0.02em]">
            {phase >= 3 ? "11.7" : "11.5"} hrs{" "}
            <span className="text-[13px] text-[#8A887C] font-medium">{copy.back}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
