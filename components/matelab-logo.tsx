"use client"

export function MatelabLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo">
      <style>{`
        @keyframes flowLine {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulse1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes nodePulse2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes nodePulse3 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .flow-line {
          stroke-dasharray: 4 3;
          animation: flowLine 1.5s linear infinite;
        }
        .node-pulse-1 { animation: nodePulse1 2s ease-in-out infinite; }
        .node-pulse-2 { animation: nodePulse2 2s ease-in-out infinite 0.4s; }
        .node-pulse-3 { animation: nodePulse3 2s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Flow lines between nodes */}
      <line x1="19" y1="32" x2="26" y2="22" stroke="#00e5a0" strokeWidth="1.2" opacity="0.6" className="flow-line"/>
      <line x1="26" y1="22" x2="33" y2="32" stroke="#00e5a0" strokeWidth="1.2" opacity="0.6" className="flow-line"/>
      <line x1="19" y1="32" x2="33" y2="32" stroke="#00e5a0" strokeWidth="1.2" opacity="0.4" className="flow-line"/>
      {/* Nodes - donut style with center dot */}
      <circle cx="26" cy="22" r="3.5" fill="#00e5a0" className="node-pulse-1"/>
      <circle cx="19" cy="32" r="3.5" fill="#00e5a0" className="node-pulse-2"/>
      <circle cx="33" cy="32" r="3.5" fill="#00e5a0" className="node-pulse-3"/>
      {/* Center dots */}
      <circle cx="26" cy="22" r="1.2" fill="#0a0a0f"/>
      <circle cx="19" cy="32" r="1.2" fill="#0a0a0f"/>
      <circle cx="33" cy="32" r="1.2" fill="#0a0a0f"/>
    </svg>
  )
}

export function MatelabLogoLarge({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo-large">
      <style>{`
        @keyframes flowLineLg {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulseLg1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes nodePulseLg2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes nodePulseLg3 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .flow-line-lg {
          stroke-dasharray: 4 3;
          animation: flowLineLg 1.5s linear infinite;
        }
        .node-pulse-lg-1 { animation: nodePulseLg1 2s ease-in-out infinite; }
        .node-pulse-lg-2 { animation: nodePulseLg2 2s ease-in-out infinite 0.4s; }
        .node-pulse-lg-3 { animation: nodePulseLg3 2s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Flow lines between nodes */}
      <line x1="19" y1="33" x2="26" y2="21" stroke="#00e5a0" strokeWidth="1.5" opacity="0.7" className="flow-line-lg"/>
      <line x1="26" y1="21" x2="33" y2="33" stroke="#00e5a0" strokeWidth="1.5" opacity="0.7" className="flow-line-lg"/>
      <line x1="19" y1="33" x2="33" y2="33" stroke="#00e5a0" strokeWidth="1.5" opacity="0.5" className="flow-line-lg"/>
      {/* Nodes - donut style */}
      <circle cx="26" cy="21" r="4" fill="#00e5a0" className="node-pulse-lg-1"/>
      <circle cx="19" cy="33" r="4" fill="#00e5a0" className="node-pulse-lg-2"/>
      <circle cx="33" cy="33" r="4" fill="#00e5a0" className="node-pulse-lg-3"/>
      {/* Center dots */}
      <circle cx="26" cy="21" r="1.5" fill="#0a0a0f"/>
      <circle cx="19" cy="33" r="1.5" fill="#0a0a0f"/>
      <circle cx="33" cy="33" r="1.5" fill="#0a0a0f"/>
    </svg>
  )
}

export function MatelabLogoSmall({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo-small">
      <style>{`
        @keyframes flowLineSm {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulseSm1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes nodePulseSm2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes nodePulseSm3 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .flow-line-sm {
          stroke-dasharray: 4 3;
          animation: flowLineSm 1.5s linear infinite;
        }
        .node-pulse-sm-1 { animation: nodePulseSm1 2s ease-in-out infinite; }
        .node-pulse-sm-2 { animation: nodePulseSm2 2s ease-in-out infinite 0.4s; }
        .node-pulse-sm-3 { animation: nodePulseSm3 2s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Flow lines */}
      <line x1="19" y1="33" x2="26" y2="21" stroke="#00e5a0" strokeWidth="2.5" className="flow-line-sm"/>
      <line x1="26" y1="21" x2="33" y2="33" stroke="#00e5a0" strokeWidth="2.5" className="flow-line-sm"/>
      <line x1="19" y1="33" x2="33" y2="33" stroke="#00e5a0" strokeWidth="2.5" opacity="0.6" className="flow-line-sm"/>
      {/* Nodes */}
      <circle cx="26" cy="21" r="5" fill="#00e5a0" className="node-pulse-sm-1"/>
      <circle cx="19" cy="33" r="5" fill="#00e5a0" className="node-pulse-sm-2"/>
      <circle cx="33" cy="33" r="5" fill="#00e5a0" className="node-pulse-sm-3"/>
    </svg>
  )
}
