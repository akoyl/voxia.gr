import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'

const sections = [
  { titleKey: 'privacy.s1Title', bodyKey: 'privacy.s1Body' },
  { titleKey: 'privacy.s2Title', bodyKey: 'privacy.s2Body' },
  { titleKey: 'privacy.s3Title', bodyKey: 'privacy.s3Body' },
  { titleKey: 'privacy.s4Title', bodyKey: 'privacy.s4Body' },
  { titleKey: 'privacy.s5Title', bodyKey: 'privacy.s5Body' },
  { titleKey: 'privacy.s6Title', bodyKey: 'privacy.s6Body' },
  { titleKey: 'privacy.s7Title', bodyKey: 'privacy.s7Body' },
]

export default function Privacy() {
  const { t } = useLanguage()
  return (
    <>
      <PageMeta titleKey="meta.privacyTitle" descriptionKey="meta.privacyDescription" />

      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center rise">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t('privacy.heroHeading')}
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">{t('privacy.heroSub')}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-slate-400 mb-10">{t('privacy.lastUpdated')}</p>
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
