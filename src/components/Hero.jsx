import { useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y -= p.speed
        p.x += p.drift
        p.opacity += (Math.random() - 0.5) * 0.01
        p.opacity = Math.max(0.05, Math.min(0.6, p.opacity))
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <canvas className="hero-canvas" ref={canvasRef} />
      <div className="hero-bg-text">خط</div>

      <div className="hero-content">
        <p className="hero-tagline">
          <span className="ornament">✦</span>
          {t.hero.tagline}
          <span className="ornament">✦</span>
        </p>

        <h1 className="hero-heading">
          <span className="hero-heading-top">{t.hero.heading1}</span>
          <span className="hero-heading-main gold-text">{t.hero.heading2}</span>
        </h1>

        <p className="hero-sub">{t.hero.subheading}</p>

        <button className="btn-gold hero-cta" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
          {t.hero.cta}
          <span>→</span>
        </button>
      </div>

      <div className="hero-decor">
        <div className="decor-ring ring-1" />
        <div className="decor-ring ring-2" />
        <div className="decor-ring ring-3" />
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
