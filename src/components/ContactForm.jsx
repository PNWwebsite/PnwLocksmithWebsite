import { useState } from 'react'
import { company } from '../data/site'
import { Check, Arrow } from './Icons'

const SERVICE_OPTIONS = [
  'Lockout — I need someone now',
  'Residential lock service',
  'Commercial lock service',
  'Car key or fob',
  'Rekey or new install',
  'Something else',
]

const empty = { name: '', phone: '', city: '', service: '', message: '' }

export default function ContactForm({ variant = 'full', id }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Add a name so we know who to ask for.'
    const digits = values.phone.replace(/\D/g, '')
    if (digits.length < 10) next.phone = 'Enter a 10-digit number we can call back.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Wire this up to your form handler (Formspree, Netlify Forms, your CRM).
    // For now the request is logged and the caller sees a confirmation.
    console.log('Callback request', values)
    setSent(true)
  }

  const fieldId = (n) => `${id || variant}-${n}`

  if (sent) {
    return (
      <div className={`form form--${variant} form--sent`} id={id}>
        <span className="form__tick" aria-hidden="true">
          <Check size={26} />
        </span>
        <h3>Request received</h3>
        <p>
          A locksmith will call {values.phone} shortly. If you are locked out right now, calling is
          faster.
        </p>
        <a className="btn btn--primary" href={company.phoneHref}>
          Call {company.phoneDisplay}
        </a>
        <button className="form__reset" type="button" onClick={() => { setValues(empty); setSent(false) }}>
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form className={`form form--${variant}`} id={id} onSubmit={submit} noValidate>
      <div className="form__head">
        <p className="eyebrow">Request a callback</p>
        <h3>
          {variant === 'bar'
            ? 'Tell us what happened and we will call you back'
            : variant === 'compact'
              ? 'Tell us what happened'
              : 'Send us the details'}
        </h3>
        {variant !== 'bar' && (
          <p className="form__sub">
            {variant === 'compact'
              ? 'We answer around the clock and give you a price before any work starts.'
              : 'Fill this in and a licensed locksmith calls you back.'}
          </p>
        )}
      </div>

      <div className="form__grid">
        <div className="field">
          <label htmlFor={fieldId('name')}>Name</label>
          <input
            id={fieldId('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            placeholder="Jordan Reyes"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="field__error">{errors.name}</p>}
        </div>

        <div className="field">
          <label htmlFor={fieldId('phone')}>Phone</label>
          <input
            id={fieldId('phone')}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="(503) 555-0142"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="field__error">{errors.phone}</p>}
        </div>

        {variant !== 'bar' && (
          <div className="field">
            <label htmlFor={fieldId('city')}>
              {variant === 'full' ? 'City or cross street' : 'City'}
            </label>
            <input
              id={fieldId('city')}
              type="text"
              value={values.city}
              onChange={set('city')}
              placeholder="Beaverton"
            />
          </div>
        )}

        <div className="field">
          <label htmlFor={fieldId('service')}>What do you need?</label>
          <select id={fieldId('service')} value={values.service} onChange={set('service')}>
            <option value="">Choose one</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {variant === 'full' && (
          <div className="field field--wide">
            <label htmlFor={fieldId('message')}>Details</label>
            <textarea
              id={fieldId('message')}
              rows="4"
              value={values.message}
              onChange={set('message')}
              placeholder="Year, make and model for car keys — or the brand of lock on your door."
            />
          </div>
        )}

        {variant === 'bar' && (
          <div className="field form__submit">
            <button className="btn btn--primary btn--block" type="submit">
              <span>Request a callback</span>
              <Arrow size={18} />
            </button>
          </div>
        )}
      </div>

      {variant !== 'bar' && (
        <button className="btn btn--primary btn--block" type="submit">
          <span>Request a callback</span>
          <Arrow size={18} />
        </button>
      )}

      <p className="form__note">
        Locked out right now? Call{' '}
        <a href={company.phoneHref}>{company.phoneDisplay}</a> — someone picks up at any hour.
      </p>
    </form>
  )
}
