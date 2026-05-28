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
      <style>{`
        @keyframes heroFlowLine { to { stroke-dashoffset: -14; } }
        @keyframes heroNode1 { 0%,100% { opacity:1; } 50% { opacity:0.55; } }
        @keyframes heroNode2 { 0%,100% { opacity:0.6; } 50% { opacity:0.3; } }
        @keyframes heroNode3 { 0%,100% { opacity:0.35; } 50% { opacity:0.15; } }
        @keyframes heroSpin { to { transform: rotate(360deg); } }
        @keyframes heroSpinR { to { transform: rotate(-360deg); } }
        @keyframes heroBreath { 0%,100% { transform: scale(1); opacity:0.5; } 50% { transform: scale(1.06); opacity:0.8; } }
        .hero-flow { stroke-dasharray:4 3; animation:heroFlowLine 1.5s linear infinite; }
        .hero-n1 { animation:heroNode1 2s ease-in-out infinite 0s; }
        .hero-n2 { animation:heroNode2 2s ease-in-out infinite 0.4s; }
        .hero-n3 { animation:heroNode3 2s ease-in-out infinite 0.8s; }
        .hero-ring { transform-origin:240px 240px; animation:heroSpin 38s linear infinite; }
        .hero-ring2 { transform-origin:240px 240px; animation:heroSpinR 26s linear infinite; }
        .hero-breath { transform-origin:240px 240px; animation:heroBreath 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow, .hero-n1, .hero-n2, .hero-n3, .hero-ring, .hero-ring2, .hero-breath { animation: none; }
        }
      `}</style>

      {/* Breathing backdrop glow */}
      <circle className="hero-breath" cx="240" cy="240" r="180" fill="rgba(0,229,160,0.045)"/>

      {/* Rotating orbit rings */}
      <g className="hero-ring" opacity="0.18">
        <ellipse cx="240" cy="240" rx="195" ry="78" fill="none" stroke="#00E5A0" strokeWidth="1"/>
      </g>
      <g className="hero-ring2" opacity="0.12">
        <ellipse cx="240" cy="240" rx="78" ry="195" fill="none" stroke="#00E5A0" strokeWidth="1"/>
      </g>
      <circle cx="240" cy="240" r="180" fill="none" stroke="#1a2a25" strokeWidth="1"/>

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

      {/* Connecting lines */}
      <line x1="240" y1="100" x2="110" y2="340" stroke="#00E5A0" strokeWidth="1.5" opacity="0.6" className="hero-flow"/>
      <line x1="240" y1="100" x2="370" y2="340" stroke="#00E5A0" strokeWidth="1.5" opacity="0.35" className="hero-flow"/>
      <line x1="110" y1="340" x2="370" y2="340" stroke="#00E5A0" strokeWidth="1.5" opacity="0.2" className="hero-flow"/>

      {/* Data pulses travelling along the wires */}
      <circle r="3.5" fill="#7dffb0">
        <animateMotion dur="2s" repeatCount="indefinite" path="M240,100 L110,340"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle r="3" fill="#7dffb0">
        <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.5s" path="M110,340 L370,340"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle r="3" fill="#7dffb0">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1s" path="M370,340 L240,100"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="1s" repeatCount="indefinite"/>
      </circle>

      {/* TRIGGER with expanding pulse ring */}
      <circle cx="240" cy="100" r="28" fill="none" stroke="#00E5A0" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="28;46" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="240" cy="100" r="28" fill="#00E5A0" className="hero-n1"/>
      <circle cx="240" cy="100" r="11" fill="#0a0a0f"/>

      {/* AGENT */}
      <circle cx="110" cy="340" r="26" fill="#00E5A0" className="hero-n2"/>
      <circle cx="110" cy="340" r="10" fill="#0a0a0f"/>

      {/* OUTPUT */}
      <circle cx="370" cy="340" r="26" fill="#00E5A0" className="hero-n3"/>
      <circle cx="370" cy="340" r="10" fill="#0a0a0f"/>

      {/* Labels */}
      <text x="240" y="56" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11" fill="#00E5A0" opacity="0.9" letterSpacing="2">TRIGGER</text>
      <text x="110" y="392" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11" fill="#00E5A0" opacity="0.6" letterSpacing="2">AGENT</text>
      <text x="370" y="392" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11" fill="#00E5A0" opacity="0.35" letterSpacing="2">OUTPUT</text>
    </svg>
  )
}
