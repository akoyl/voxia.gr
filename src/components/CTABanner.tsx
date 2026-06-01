import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { IconArrowRight } from './icons'

interface Props { headingKey: string; buttonKey: string }

export default function CTABanner({ headingKey, buttonKey }: Props) {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="absolute inset-0 mesh-light" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
          {t(headingKey)}
        </h2>
        <Link
          to="/contact"
          className="btn-gradient inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl"
        >
          {t(buttonKey)}
          <IconArrowRight width={18} height={18} />
        </Link>
      </div>
    </section>
  )
}
