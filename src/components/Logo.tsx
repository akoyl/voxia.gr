interface Props {
  size?: number
  className?: string
}

/** Platform-identical wordmark: Syne 800, blue→cyan gradient, no icon. */
export default function Logo({ size = 22, className = '' }: Props) {
  return (
    <span
      className={`font-display font-extrabold ${className}`}
      style={{
        fontSize: size,
        letterSpacing: '-0.5px',
        background: 'linear-gradient(135deg, #4f92e6, #06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      VOXIA
    </span>
  )
}
