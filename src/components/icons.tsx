import type { SVGProps } from 'react'

/**
 * Line-icon set in the Voxia platform house style (Tabler-like strokes,
 * rounded joins, currentColor). Replaces emoji throughout the marketing site
 * so the look reads clean and professional. Each icon inherits text color.
 */

type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const IconMic = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 5a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </Base>
)

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
)

export const IconBolt = (p: IconProps) => (
  <Base {...p}>
    <path d="M13 3 4 14h7l-1 7 9-11h-7z" />
  </Base>
)

export const IconGlobe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
  </Base>
)

export const IconPlug = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 7V3M15 7V3" />
    <path d="M7 7h10v3a5 5 0 0 1-10 0z" />
    <path d="M12 15v6" />
  </Base>
)

export const IconLock = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </Base>
)

export const IconChart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 16v-4M12 16v-7M16 16v-2" />
  </Base>
)

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
  </Base>
)

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 9h16M8 3v4M16 3v4" />
    <path d="M9 14h.01M13 14h.01M9 17h.01" />
  </Base>
)

export const IconCard = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </Base>
)

export const IconTrendUp = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 17l6-6 4 4 6-7" />
    <path d="M20 11V8h-3" />
  </Base>
)

export const IconTrendDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7l6 6 4-4 6 7" />
    <path d="M20 13v3h-3" />
  </Base>
)

export const IconSmile = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01" />
    <path d="M8.5 14a4 4 0 0 0 7 0" />
  </Base>
)

export const IconMoon = (p: IconProps) => (
  <Base {...p}>
    <path d="M19 13.5A8 8 0 0 1 10.5 5 7 7 0 1 0 19 13.5z" />
  </Base>
)

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12l5 5 9-11" />
  </Base>
)

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
)

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </Base>
)

export const IconHeadset = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="3" y="13" width="4" height="7" rx="1.5" />
    <rect x="17" y="13" width="4" height="7" rx="1.5" />
    <path d="M20 19a4 4 0 0 1-4 4h-2" />
  </Base>
)
