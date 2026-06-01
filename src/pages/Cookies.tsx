import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'

const sections = [
  { titleKey: 'cookies.s1Title', bodyKey: 'cookies.s1Body' },
  { titleKey: 'cookies.s2Title', bodyKey: 'cookies.s2Body' },
  { titleKey: 'cookies.s3Title', bodyKey: 'cookies.s3Body' },
  { titleKey: 'cookies.s4Title', bodyKey: 'cookies.s4Body' },
  { titleKey: 'cookies.s5Title', bodyKey: 'cookies.s5Body' },
]

export default function Cookies() {
  const { t } = useLanguage()
  return (
    <>
      <PageMeta titleKey="meta.cookiesTitle" descriptionKey="meta.cookiesDescription" />

      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center rise">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t('cookies.heroHeading')}
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">{t('cookies.heroSub')}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-slate-400 mb-10">{t('cookies.lastUpdated')}</p>
          <div className="space-y-10">
            {sections.map(({ titleKey, bodyKey }) => (
              <div key={titleKey}>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{t(titleKey)}</h2>
                <p className="text-slate-600 leading-relaxed">{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
