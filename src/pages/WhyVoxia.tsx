import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'
import CTABanner from '../components/CTABanner'
import { IconTrendDown, IconTrendUp, IconBolt, IconSmile, IconMoon } from '../components/icons'

const outcomes = [
  { Icon: IconTrendDown, titleKey: 'whyVoxia.outcome1Title', bodyKey: 'whyVoxia.outcome1Body' },
  { Icon: IconTrendUp, titleKey: 'whyVoxia.outcome2Title', bodyKey: 'whyVoxia.outcome2Body' },
  { Icon: IconBolt, titleKey: 'whyVoxia.outcome3Title', bodyKey: 'whyVoxia.outcome3Body' },
  { Icon: IconSmile, titleKey: 'whyVoxia.outcome4Title', bodyKey: 'whyVoxia.outcome4Body' },
  { Icon: IconMoon, titleKey: 'whyVoxia.outcome5Title', bodyKey: 'whyVoxia.outcome5Body' },
]

const stats = [
  { valueKey: 'whyVoxia.stat1Value', labelKey: 'whyVoxia.stat1Label' },
  { valueKey: 'whyVoxia.stat2Value', labelKey: 'whyVoxia.stat2Label' },
  { valueKey: 'whyVoxia.stat3Value', labelKey: 'whyVoxia.stat3Label' },
]

const scenarios = [
  { industryKey: 'whyVoxia.scenario1Industry', beforeKey: 'whyVoxia.scenario1Before', afterKey: 'whyVoxia.scenario1After' },
  { industryKey: 'whyVoxia.scenario2Industry', beforeKey: 'whyVoxia.scenario2Before', afterKey: 'whyVoxia.scenario2After' },
  { industryKey: 'whyVoxia.scenario3Industry', beforeKey: 'whyVoxia.scenario3Before', afterKey: 'whyVoxia.scenario3After' },
]

export default function WhyVoxia() {
  const { t } = useLanguage()

  return (
    <>
      <PageMeta titleKey="meta.whyVoxiaTitle" descriptionKey="meta.whyVoxiaDescription" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center rise">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{t('whyVoxia.heroHeading')}</h1>
          <p className="mt-5 text-xl text-slate-300/90 italic">{t('whyVoxia.heroSub')}</p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map(({ Icon, titleKey, bodyKey }) => (
              <div key={titleKey} className="card-hover rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                  <Icon width={24} height={24} />
                </span>
                <h2 className="mt-5 text-lg font-bold text-slate-900">{t(titleKey)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-ink py-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-3 gap-8 text-center">
          {stats.map(s => (
            <div key={s.valueKey}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient">{t(s.valueKey)}</div>
              <div className="mt-2 text-sm text-slate-300">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After scenarios */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-14">{t('whyVoxia.scenariosHeading')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map(s => (
              <div key={s.industryKey} className="glass rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-5 py-3.5 font-semibold text-sm">
                  {t(s.industryKey)}
                </div>
                <div className="p-6 flex flex-col gap-5">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-rose-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {t('whyVoxia.labelBefore')}
                    </span>
                    <p className="mt-1.5 text-sm text-slate-500">{t(s.beforeKey)}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {t('whyVoxia.labelAfter')}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-slate-800">{t(s.afterKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headingKey="whyVoxia.ctaHeading" buttonKey="whyVoxia.ctaButton" />
    </>
  )
}
