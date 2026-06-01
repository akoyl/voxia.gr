import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext'

function TestConsumer({ tKey }: { tKey: string }) {
  const { t, lang, setLang } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="value">{t(tKey)}</span>
      <button onClick={() => setLang(lang === 'el' ? 'en' : 'el')}>toggle</button>
    </div>
  )
}

beforeEach(() => localStorage.clear())

describe('useLanguage', () => {
  it('defaults to Greek', () => {
    render(<LanguageProvider><TestConsumer tKey="nav.home" /></LanguageProvider>)
    expect(screen.getByTestId('lang').textContent).toBe('el')
    expect(screen.getByTestId('value').textContent).toBe('Αρχική')
  })

  it('switches to English on toggle', async () => {
    render(<LanguageProvider><TestConsumer tKey="nav.home" /></LanguageProvider>)
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('lang').textContent).toBe('en')
    expect(screen.getByTestId('value').textContent).toBe('Home')
  })

  it('persists language to localStorage', async () => {
    render(<LanguageProvider><TestConsumer tKey="nav.home" /></LanguageProvider>)
    await userEvent.click(screen.getByRole('button'))
    expect(localStorage.getItem('voxia_lang')).toBe('en')
  })

  it('reads language from localStorage on mount', () => {
    localStorage.setItem('voxia_lang', 'en')
    render(<LanguageProvider><TestConsumer tKey="nav.home" /></LanguageProvider>)
    expect(screen.getByTestId('value').textContent).toBe('Home')
  })

  it('falls back to key for unknown translation', () => {
    render(<LanguageProvider><TestConsumer tKey="nav.nonexistent" /></LanguageProvider>)
    expect(screen.getByTestId('value').textContent).toBe('nav.nonexistent')
  })

  it('throws when used outside provider', () => {
    const original = console.error
    console.error = () => {}
    expect(() => render(<TestConsumer tKey="nav.home" />)).toThrow('useLanguage must be used within LanguageProvider')
    console.error = original
  })
})
