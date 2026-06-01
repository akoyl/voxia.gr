import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'
import CTABanner from '../components/CTABanner'
import WaveBars from '../components/WaveBars'
import { IconMic, IconClock, IconPlug, IconGlobe, IconShield, IconChart } from '../components/icons'

const integrations = [
  { name: 'Invio',           bg: '#f1fff9', color: '#168236', border: '#b7e8cb' },
  { name: 'HubSpot',         bg: '#fff1f2', color: '#e11d48', border: '#fecdd3' },
  { name: 'Salesforce',      bg: '#eef2ff', color: '#4f46e5', border: '#c7d2fe' },
  { name: 'Google Calendar', bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  { name: 'SIP / VoIP',      bg: '',        color: '',        border: '' },
  { name: 'REST API',        bg: '',        color: '',        border: '' },
]

const features = [
  { Icon: IconMic, titleKey: 'features.f1Title', bodyKey: 'features.f1Body' },
  { Icon: IconClock, titleKey: 'features.f2Title', bodyKey: 'features.f2Body' },
  { Icon: IconPlug, titleKey: 'features.f3Title', bodyKey: 'features.f3Body' },
  { Icon: IconGlobe, titleKey: 'features.f4Title', bodyKey: 'features.f4Body' },
  { Icon: IconShield, titleKey: 'features.f5Title', bodyKey: 'features.f5Body' },
  { Icon: IconChart, titleKey: 'features.f6Title', bodyKey: 'features.f6Body' },
]

export default function Features() {
  const { t } = useLanguage()

  return (
    <>
      <PageMeta titleKey="meta.featuresTitle" descriptionKey="meta.featuresDescription" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center rise">
          <WaveBars count={16} className="mb-8 opacity-75" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{t('features.heroHeading')}</h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">{t('features.heroBody')}</p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, titleKey, bodyKey }) => (
            <div key={titleKey} className="card-hover rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                <Icon width={24} height={24} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-900">{t(titleKey)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations ─────────────────────────────────── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t('features.integrationsHeading')}</h2>
          <p className="text-slate-600 mb-10">{t('features.integrationsSub')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map(({ name, bg, color, border }) => (
              <span
                key={name}
                className="rounded-lg px-4 py-2 text-sm font-semibold border"
                style={
                  bg
                    ? { background: bg, color, borderColor: border }
                    : { background: 'rgba(79,146,230,0.07)', color: '#2c6cab', borderColor: 'rgba(79,146,230,0.2)' }
                }
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headingKey="features.ctaHeading" buttonKey="features.ctaButton" />
    </>
  )
}
