import { createContext, useContext, useState, useEffect } from 'react'
import type { Lang, Translations } from '../i18n/types'
import { el } from '../i18n/el'
import { en } from '../i18n/en'

const STORAGE_KEY = 'voxia_lang'
const translations = { el, en } satisfies Record<Lang, Translations>

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'el'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string): string => {
    const keys = key.split('.')
    let val: unknown = translations[lang]
    for (const k of keys) {
      if (val && typeof val === 'object') val = (val as Record<string, unknown>)[k]
      else return key
    }
    return typeof val === 'string' ? val : key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
