import { useEffect, useRef } from 'react'

/**
 * Animated audio waveform — the Voxia signature visual (ported from the
 * platform login screen). Pure canvas, no deps. Sits behind dark hero
 * sections to evoke "voice" without any technical jargon.
 */

interface Props {
  count?: number
  speed?: number
}

type WavePhase = 'dormant' | 'fadein' | 'hold' | 'fadeout' | 'pause'

const CONFIGS = [
  { freq: 0.011, ampRatio: 0.18, travelSpeed: 0.016, phase: 0.0, rgb: [96, 165, 250] as const, maxAlpha: 0.55 },
  { freq: 0.019, ampRatio: 0.11, travelSpeed: 0.028, phase: 1.3, rgb: [6, 182, 212] as const, maxAlpha: 0.42 },
  { freq: 0.007, ampRatio: 0.26, travelSpeed: 0.009, phase: 2.6, rgb: [79, 146, 230] as const, maxAlpha: 0.26 },
  { freq: 0.027, ampRatio: 0.07, travelSpeed: 0.040, phase: 0.8, rgb: [71, 191, 255] as const, maxAlpha: 0.30 },
  { freq: 0.014, ampRatio: 0.15, travelSpeed: 0.020, phase: 3.9, rgb: [55, 134, 208] as const, maxAlpha: 0.22 },
]

export default function WaveCanvas({ count = 5, speed = 0.5 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FPS = 60
    let animId = 0
    let W = 0
    let H = 0
    let t = 0

    const waves = CONFIGS.slice(0, Math.min(count, CONFIGS.length)).map((c, i) => ({
      ...c,
      travelSpeed: c.travelSpeed * speed,
      alpha: 0,
      wavePhase: 'dormant' as WavePhase,
      timer: Math.floor(i * FPS * 1.2),
    }))

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      W = parent.clientWidth
      H = parent.clientHeight
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)
    resize()

    function advance(w: typeof waves[0]) {
      switch (w.wavePhase) {
        case 'dormant': w.wavePhase = 'fadein'; w.timer = 0; break
        case 'fadein': w.wavePhase = 'hold'; w.timer = Math.floor(FPS * (3 + Math.random() * 5)); break
        case 'hold': w.wavePhase = 'fadeout'; w.timer = 0; break
        case 'fadeout': w.wavePhase = 'pause'; w.timer = Math.floor(FPS * (1 + Math.random() * 3)); break
        case 'pause': w.wavePhase = 'fadein'; w.timer = 0; break
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      const cy = H / 2

      for (const w of waves) {
        w.timer--

        if (w.wavePhase === 'dormant') {
          if (w.timer <= 0) advance(w)
          continue
        }
        if (w.wavePhase === 'fadein') {
          w.alpha = Math.min(w.alpha + 0.008, w.maxAlpha)
          if (w.alpha >= w.maxAlpha) advance(w)
        } else if (w.wavePhase === 'hold') {
          if (w.timer <= 0) advance(w)
        } else if (w.wavePhase === 'fadeout') {
          w.alpha = Math.max(w.alpha - 0.006, 0)
          if (w.alpha <= 0) advance(w)
        } else if (w.wavePhase === 'pause') {
          w.alpha = 0
          if (w.timer <= 0) advance(w)
        }

        if (w.alpha <= 0.01) continue

        ctx!.beginPath()
        for (let x = 0; x <= W; x += 3) {
          const y = cy + Math.sin(x * w.freq + t * w.travelSpeed + w.phase) * H * w.ampRatio
          if (x === 0) ctx!.moveTo(x, y)
          else ctx!.lineTo(x, y)
        }
        ctx!.strokeStyle = `rgba(${w.rgb.join(',')},${w.alpha.toFixed(3)})`
        ctx!.lineWidth = 1.4
        ctx!.stroke()
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [count, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
