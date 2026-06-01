import { describe, it, expect } from 'vitest'
import { validateForm } from './Contact'

const t = (key: string) => key  // identity — we test logic, not strings

describe('validateForm', () => {
  const valid = { name: 'John', company: 'ACME', phone: '6912345678', email: 'j@example.com', message: 'Hello' }

  it('returns no errors for valid data', () => {
    expect(validateForm(valid, t)).toEqual({})
  })

  it('requires name', () => {
    expect(validateForm({ ...valid, name: '' }, t)).toHaveProperty('name')
  })

  it('requires company', () => {
    expect(validateForm({ ...valid, company: '  ' }, t)).toHaveProperty('company')
  })

  it('requires phone', () => {
    expect(validateForm({ ...valid, phone: '' }, t)).toHaveProperty('phone')
  })

  it('rejects phone with letters', () => {
    const errs = validateForm({ ...valid, phone: 'abcdef' }, t)
    expect(errs).toHaveProperty('phone')
  })

  it('accepts phone with + prefix and spaces', () => {
    expect(validateForm({ ...valid, phone: '+30 691 234 5678' }, t)).toEqual({})
  })

  it('requires email', () => {
    expect(validateForm({ ...valid, email: '' }, t)).toHaveProperty('email')
  })

  it('rejects malformed email', () => {
    expect(validateForm({ ...valid, email: 'notanemail' }, t)).toHaveProperty('email')
  })

  it('requires message', () => {
    expect(validateForm({ ...valid, message: '' }, t)).toHaveProperty('message')
  })
})
