import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

export default function Footer() {
  const { t, lang, setLang } = useLanguage()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/features', label: t('nav.features') },
    { to: '/why-voxia', label: t('nav.whyVoxia') },
    { to: '/use-cases', label: t('nav.useCases') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink text-slate-400">
      <div className="absolute inset-0 mesh-dark opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dark opacity-40" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-5">
          <div className="max-w-xs">
            <Logo size={30} className="mb-4" />
            <p className="text-sm leading-relaxed text-slate-400">{t('footer.tagline')}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
              {t('footer.navTitle')}
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-4">
              {t('footer.legalTitle')}
            </p>
            <nav className="flex flex-col gap-3 mb-8">
              <Link
                to="/privacy"
                className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
              >
                {t('footer.cookiePolicy')}
              </Link>
            </nav>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
                {t('footer.contactTitle')}
              </p>
              <a
                href="mailto:info@voxia.gr"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                info@voxia.gr
              </a>
            </div>
            {/* <button
              onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
              className="text-sm text-slate-300 border border-white/15 px-4 py-2 rounded-lg hover:border-brand-400 hover:text-white transition-colors"
              aria-label="Switch language"
            >
              {lang === 'el' ? 'English' : 'Ελληνικά'}
            </button> */}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
