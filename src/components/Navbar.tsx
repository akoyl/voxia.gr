import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/features', label: t('nav.features'), end: false },
    { to: '/why-voxia', label: t('nav.whyVoxia'), end: false },
    { to: '/use-cases', label: t('nav.useCases'), end: false },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-900/5 shadow-[0_4px_24px_-12px_rgba(16,24,40,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="shrink-0" aria-label="Voxia">
          <Logo size={30} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => {
                const base = 'relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-500 after:transition-all'
                const light = scrolled || menuOpen
                if (isActive) return `${base} ${light ? 'text-brand-700' : 'text-white'} after:w-full`
                return `${base} ${light ? 'text-slate-600 hover:text-slate-900' : 'text-white/75 hover:text-white'} after:w-0 hover:after:w-full`
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            className="text-xs font-semibold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-brand-300 hover:text-brand-600 transition-colors"
            aria-label="Switch language"
          >
            {lang === 'el' ? 'EN' : 'GR'}
          </button>
          <Link
            to="/contact"
            className="btn-gradient text-xs font-semibold px-4 py-1.5 rounded-lg"
          >
            {t('nav.contact')}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-5 flex flex-col gap-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium ${isActive ? 'text-brand-700' : 'text-slate-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
              className="text-sm font-semibold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg"
              aria-label="Switch language"
            >
              {lang === 'el' ? 'EN' : 'GR'}
            </button>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gradient text-sm font-semibold px-5 py-2.5 rounded-xl"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
