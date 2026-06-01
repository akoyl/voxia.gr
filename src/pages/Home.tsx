import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'
import CTABanner from '../components/CTABanner'
import WaveCanvas from '../components/WaveCanvas'
import WaveBars from '../components/WaveBars'
import { IconMic, IconGlobe, IconPlug, IconPhone, IconCalendar, IconCard, IconArrowRight } from '../components/icons'

const crmBadges = [
  { name: 'Invio',      bg: '#f1fff9',               color: '#168236', border: '#b7e8cb' },
  { name: 'HubSpot',    bg: '#fff1f2',               color: '#e11d48', border: '#fecdd3' },
  { name: 'Salesforce', bg: '#eef2ff',               color: '#4f46e5', border: '#c7d2fe' },
  { name: 'REST API',   bg: 'rgba(79,146,230,0.07)', color: '#2c6cab', border: 'rgba(79,146,230,0.2)' },
]
const calBooked = new Set([9, 15])

function Ring247() {
  return (
    <div className="mt-5 flex justify-center" aria-hidden="true">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="url(#ring247grad)" strokeWidth="8"
            strokeLinecap="round" strokeDasharray="327" strokeDashoffset="0" />
          <defs>
            <linearGradient id="ring247grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold text-slate-900 leading-none">24</span>
          <span className="text-slate-500 text-xs font-medium">/ 7</span>
        </div>
      </div>
    </div>
  )
}

function CrmBadges() {
  return (
    <div className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
      {crmBadges.map(({ name, bg, color, border }) => (
        <span key={name} className="rounded-lg px-2.5 py-1 text-xs font-semibold border"
          style={{ background: bg, color, borderColor: border }}>
          {name}
        </span>
      ))}
    </div>
  )
}

const calWeekend = new Set([6, 7, 13, 14])
const calPast = new Set([1, 2, 3])

function MiniCalendar() {
  const { lang } = useLanguage()
  const dayLabels = lang === 'el'
    ? ['Δ', 'Τ', 'Τ', 'Π', 'Π', 'Σ', 'Κ']
    : ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const monthLabel = lang === 'el' ? 'Ιούνιος 2026' : 'June 2026'

  return (
    <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 p-3" aria-hidden="true">
      <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider text-center mb-2">
        {monthLabel}
      </p>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] text-slate-400 mb-1 font-medium">
        {dayLabels.map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {Array.from({ length: 17 }, (_, i) => i + 1).map(d => (
          <span
            key={d}
            className={`rounded py-0.5 text-[10px] font-medium ${
              calBooked.has(d)
                ? 'bg-blue-100 text-blue-700'
                : calWeekend.has(d) || calPast.has(d)
                ? 'text-slate-300'
                : 'text-slate-500'
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}

function VoiceWave() {
  return <WaveBars count={7} className="mt-2" />
}

const whatCards = [
  { Icon: IconMic,   titleKey: 'home.card1Title', bodyKey: 'home.card1Body', Extra: VoiceWave },
  { Icon: IconGlobe, titleKey: 'home.card2Title', bodyKey: 'home.card2Body', Extra: Ring247 },
  { Icon: IconPlug,  titleKey: 'home.card3Title', bodyKey: 'home.card3Body', Extra: CrmBadges },
]

const caseCards = [
  { Icon: IconPhone,    titleKey: 'home.case1Title', bodyKey: 'home.case1Body', Extra: null },
  { Icon: IconCalendar, titleKey: 'home.case2Title', bodyKey: 'home.case2Body', Extra: MiniCalendar },
  { Icon: IconCard,     titleKey: 'home.case3Title', bodyKey: 'home.case3Body', Extra: null },
]

const howSteps = [
  { step: '01', titleKey: 'home.how1Title', bodyKey: 'home.how1Body' },
  { step: '02', titleKey: 'home.how2Title', bodyKey: 'home.how2Body' },
  { step: '03', titleKey: 'home.how3Title', bodyKey: 'home.how3Body' },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <PageMeta titleKey="meta.homeTitle" descriptionKey="meta.homeDescription" />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 opacity-90" aria-hidden="true">
          <WaveCanvas />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <span className="status-dot" />
              {t('home.heroBadge')}
            </span>
            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-[1.05] text-white">
              {t('home.heroHeading')}
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">{t('home.heroSub')}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl">
                {t('home.heroCta')}
                <IconArrowRight width={18} height={18} />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                {t('home.heroSecondary')}
              </Link>
            </div>
          </div>

          {/* Conversation mockup */}
          <div className="hidden md:block rise" style={{ animationDelay: '0.12s' }}>
            <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                  <IconPhone width={20} height={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t('home.mockTitle')}</p>
                  <p className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="status-dot" /> {t('home.mockStatus')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <div className="self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5">
                  <p className="text-sm text-slate-100">{t('home.mockCaller')}</p>
                </div>
                <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-2.5">
                  <p className="text-sm text-white">{t('home.mockAgent')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is Voxia ──────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.whatHeading')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatCards.map(({ Icon, titleKey, bodyKey, Extra }) => (
              <div key={titleKey} className="card-hover rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{t(titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(bodyKey)}</p>
                {Extra && <Extra />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.howHeading')}</h2>
          </div>
          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" aria-hidden="true" />
            {howSteps.map(({ step, titleKey, bodyKey }) => (
              <div key={step} className="relative z-10 card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
                <span className="block text-5xl font-extrabold text-gradient leading-none mb-5">{step}</span>
                <h3 className="text-lg font-bold text-slate-900">{t(titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use-case teasers ───────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.solutionsHeading')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseCards.map(({ Icon, titleKey, bodyKey, Extra }) => (
              <Link
                key={titleKey}
                to="/use-cases"
                className="card-hover group glass rounded-2xl p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                  {t(titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(bodyKey)}</p>
                {Extra && <Extra />}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  {t('home.learnMore')}
                  <IconArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headingKey="home.ctaHeading" buttonKey="home.ctaButton" />
    </>
  )
}
