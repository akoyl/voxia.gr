import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'
import CTABanner from '../components/CTABanner'
import { IconPhone, IconCalendar, IconCard, IconShield, IconCheck } from '../components/icons'

const cases = [
  {
    Icon: IconPhone,
    titleKey: 'useCases.case1Title',
    scenarioKey: 'useCases.case1Scenario',
    benefitKeys: ['useCases.case1B1', 'useCases.case1B2', 'useCases.case1B3', 'useCases.case1B4'],
    callerKey: 'useCases.case1DialogueCaller',
    agentKey: 'useCases.case1DialogueAgent',
  },
  {
    Icon: IconCalendar,
    titleKey: 'useCases.case2Title',
    scenarioKey: 'useCases.case2Scenario',
    benefitKeys: ['useCases.case2B1', 'useCases.case2B2', 'useCases.case2B3', 'useCases.case2B4'],
    callerKey: 'useCases.case2DialogueCaller',
    agentKey: 'useCases.case2DialogueAgent',
  },
  {
    Icon: IconCard,
    titleKey: 'useCases.case3Title',
    scenarioKey: 'useCases.case3Scenario',
    benefitKeys: ['useCases.case3B1', 'useCases.case3B2', 'useCases.case3B3', 'useCases.case3B4'],
    callerKey: 'useCases.case3DialogueCaller',
    agentKey: 'useCases.case3DialogueAgent',
  },
  {
    Icon: IconShield,
    titleKey: 'useCases.case4Title',
    scenarioKey: 'useCases.case4Scenario',
    benefitKeys: ['useCases.case4B1', 'useCases.case4B2', 'useCases.case4B3', 'useCases.case4B4'],
    callerKey: 'useCases.case4DialogueCaller',
    agentKey: 'useCases.case4DialogueAgent',
  },
]

export default function UseCases() {
  const { t } = useLanguage()

  return (
    <>
      <PageMeta titleKey="meta.useCasesTitle" descriptionKey="meta.useCasesDescription" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center rise">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{t('useCases.heroHeading')}</h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">{t('useCases.heroSub')}</p>
        </div>
      </section>

      {cases.map((uc, i) => (
        <section key={uc.titleKey} className={`py-20 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-50/40'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                  <uc.Icon width={28} height={28} />
                </span>
                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-slate-900">{t(uc.titleKey)}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{t(uc.scenarioKey)}</p>
                <ul className="mt-6 space-y-3">
                  {uc.benefitKeys.map(key => (
                    <li key={key} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <IconCheck width={13} height={13} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conversation card */}
              <div className="glass rounded-3xl p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('useCases.sampleLabel')}</p>
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-2xl rounded-tr-sm bg-slate-100 px-4 py-3">
                    <p className="text-sm text-slate-700">{t(uc.callerKey)}</p>
                    <p className="mt-1 text-right text-xs text-slate-400">{t('useCases.callerLabel')}</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-2xl rounded-tl-sm bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-3">
                    <p className="text-sm text-white">{t(uc.agentKey)}</p>
                    <p className="mt-1 text-xs text-brand-100">{t('useCases.agentLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner headingKey="useCases.ctaHeading" buttonKey="useCases.ctaButton" />
    </>
  )
}
