import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface Props { titleKey: string; descriptionKey: string }

export default function PageMeta({ titleKey, descriptionKey }: Props) {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = t(titleKey)
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', t(descriptionKey))
  }, [titleKey, descriptionKey, t])
  return null
}
