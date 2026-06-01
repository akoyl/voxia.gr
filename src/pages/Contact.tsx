import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageMeta from '../components/PageMeta'
import { IconCheck } from '../components/icons'

interface FormData {
  name: string; company: string; phone: string; email: string; message: string
}
type FormErrors = Partial<Record<keyof FormData, string>>

export function validateForm(data: FormData, t: (key: string) => string): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = t('contact.validationRequired')
  if (!data.company.trim()) errors.company = t('contact.validationRequired')
  if (!data.phone.trim()) errors.phone = t('contact.validationRequired')
  else if (!/^\+?[\d\s\-()+]+$/.test(data.phone.trim())) errors.phone = t('contact.validationPhone')
  if (!data.email.trim()) errors.email = t('contact.validationRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t('contact.validationEmail')
  if (!data.message.trim()) errors.message = t('contact.validationRequired')
  return errors
}

const EMPTY: FormData = { name: '', company: '', phone: '', email: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm(formData, t)
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mgodwvkq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: formData.name, company: formData.company, phone: formData.phone, email: formData.email, message: formData.message }),
      })
      if (!res.ok) throw new Error(`Formspree error ${res.status}`)
      setStatus('success')
    } catch (err) { console.error('Formspree send failed:', err); setStatus('error') }
  }

  const fields = [
    { name: 'name' as const, labelKey: 'contact.labelName', placeholderKey: 'contact.placeholderName', type: 'text' },
    { name: 'company' as const, labelKey: 'contact.labelCompany', placeholderKey: 'contact.placeholderCompany', type: 'text' },
    { name: 'phone' as const, labelKey: 'contact.labelPhone', placeholderKey: 'contact.placeholderPhone', type: 'tel' },
    { name: 'email' as const, labelKey: 'contact.labelEmail', placeholderKey: 'contact.placeholderEmail', type: 'email' },
  ]

  const inputBase =
    'w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-500/15 focus:border-brand-400'

  return (
    <>
      <PageMeta titleKey="meta.contactTitle" descriptionKey="meta.contactDescription" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink -mt-16 pt-16">
        <div className="absolute inset-0 mesh-dark" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg-dark opacity-50" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center rise">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{t('contact.heroHeading')}</h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">{t('contact.heroSub')}</p>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-50/50 to-transparent" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 rounded-3xl border border-slate-100 bg-white p-7 sm:p-9 shadow-[0_24px_60px_-30px_rgba(37,99,235,0.25)]">
            {status === 'success' ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-10 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <IconCheck width={28} height={28} strokeWidth={2.5} />
                </span>
                <p className="text-lg font-semibold text-emerald-800">{t('contact.successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.map(field => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                        {t(field.labelKey)}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={t(field.placeholderKey)}
                        className={`${inputBase} ${errors[field.name] ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                      />
                      {errors[field.name] && <p className="text-red-500 text-xs mt-1.5">{errors[field.name]}</p>}
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t('contact.labelMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.placeholderMessage')}
                    rows={5}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>
                {status === 'error' && <p className="text-red-600 text-sm">{t('contact.errorMessage')}</p>}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gradient self-start font-semibold px-7 py-3.5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? '…' : t('contact.submitButton')}
                </button>
              </form>
            )}
          </div>

          <div className="glass rounded-3xl p-7 self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-5">
              {t('contact.sidebarResponseTime')}
            </p>
            <ul className="space-y-4">
              {(['sidebarB1', 'sidebarB2', 'sidebarB3'] as const).map(key => (
                <li key={key} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <IconCheck width={13} height={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm">{t(`contact.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
