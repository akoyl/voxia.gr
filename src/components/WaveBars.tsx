interface WaveBarsProps {
  count?: number
  className?: string
}

export default function WaveBars({ count = 16, className = '' }: WaveBarsProps) {
  return (
    <div className={`flex items-end justify-center gap-[3px] h-[72px] ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="wave-bar" />
      ))}
    </div>
  )
}
