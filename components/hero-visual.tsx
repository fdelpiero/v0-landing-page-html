export function HeroVisual() {
  return (
    <svg
      width="480"
      height="460"
      viewBox="0 0 480 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[480px] h-auto"
    >
      {/* Backdrop glow */}
      <circle cx="240" cy="240" r="180" fill="rgba(0,229,160,0.04)"/>
      <circle cx="240" cy="240" r="180" fill="none" stroke="#1a2a25" strokeWidth="1"/>

      {/* ── NODE POSITIONS ──────────────────────────
          Top (TRIGGER):    cx=240 cy=100
          Bottom-left (AGENT):  cx=110 cy=340
          Bottom-right (OUTPUT): cx=370 cy=340
      */}

      {/* Peripheral faint lines */}
      <line x1="240" y1="100" x2="60" y2="60" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.1">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="5s" repeatCount="indefinite"/>
      </line>
      <line x1="370" y1="340" x2="430" y2="420" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.08">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="6s" repeatCount="indefinite"/>
      </line>
      <line x1="110" y1="340" x2="50" y2="420" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.08">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="4.5s" repeatCount="indefinite"/>
      </line>

      {/* Peripheral tiny dots */}
      <circle cx="60" cy="60" r="4" fill="#00E5A0" opacity="0.1">
        <animate attributeName="opacity" values="0.1;0.05;0.1" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="430" cy="420" r="4" fill="#00E5A0" opacity="0.08">
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="420" r="4" fill="#00E5A0" opacity="0.08">
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="6s" repeatCount="indefinite"/>
      </circle>

      {/* ── CONNECTING LINES (triangle) ──────────── */}

      {/* Top → Bottom-left */}
      <line x1="240" y1="100" x2="110" y2="340" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite"/>
      </line>

      {/* Top → Bottom-right */}
      <line x1="240" y1="100" x2="370" y2="340" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.4s" repeatCount="indefinite"/>
      </line>

      {/* Bottom-left → Bottom-right */}
      <line x1="110" y1="340" x2="370" y2="340" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite"/>
      </line>

      {/* ── MAIN NODES ───────────────────────────── */}

      {/* TOP — TRIGGER: 100% active */}
      <circle cx="240" cy="100" r="28" fill="#00E5A0">
        <animate attributeName="opacity" values="1;0.75;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="240" cy="100" r="11" fill="#0a0a0f"/>

      {/* BOTTOM-LEFT — AGENT: 60% in transit */}
      <circle cx="110" cy="340" r="26" fill="#00E5A0" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.35;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="340" r="10" fill="#0a0a0f" opacity="0.6"/>

      {/* BOTTOM-RIGHT — OUTPUT: 30% fading */}
      <circle cx="370" cy="340" r="26" fill="#00E5A0" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.15;0.3" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="370" cy="340" r="10" fill="#0a0a0f" opacity="0.3"/>

      {/* ── LABELS ───────────────────────────────── */}

      <text
        x="240" y="56"
        textAnchor="middle"
        fontFamily="DM Mono, monospace"
        fontSize="11"
        fill="#00E5A0"
        opacity="0.9"
        letterSpacing="2"
      >
        TRIGGER
      </text>

      <text
        x="110" y="392"
        textAnchor="middle"
        fontFamily="DM Mono, monospace"
        fontSize="11"
        fill="#00E5A0"
        opacity="0.6"
        letterSpacing="2"
      >
        AGENT
      </text>

      <text
        x="370" y="392"
        textAnchor="middle"
        fontFamily="DM Mono, monospace"
        fontSize="11"
        fill="#00E5A0"
        opacity="0.35"
        letterSpacing="2"
      >
        OUTPUT
      </text>
    </svg>
  )
}
