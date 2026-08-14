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

const FORM_NAME = 'callback'

// Netlify Forms expects a URL-encoded POST to the site root.
const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k] ?? '')}`)
    .join('&')

export default function ContactForm({ variant = 'full', id }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  const [botField, setBotField] = useState('')

  const isBar = variant === 'bar'
  const fieldId = (n) => `${id || variant}-${n}`

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const reset = () => {
    setValues(empty)
    setSent(false)
    setFailed(false)
  }

  const submit = async (e) => {
    e.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Add a name so we know who to ask for.'
    if (values.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a 10-digit number we can call back.'
    }
    setErrors(next)
    if (Object.keys(next).length) return

    setBusy(true)
    setFailed(false)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          'bot-field': botField,
          source: variant,
          ...values,
        }),
      })
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`)
      setSent(true)
    } catch (err) {
      // Local dev has no Netlify form handler, so this path is expected there.
      console.error(err)
      setFailed(true)
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    return (
      <div className={`form form--${variant} form--sent`} id={id}>
        <span className="form__tick" aria-hidden="true">
          <Check size={isBar ? 22 : 26} />
        </span>
        <div className="form__sentBody">
          <h3>Request received</h3>
          <p>
            A locksmith will call {values.phone} shortly. If you are locked out right now, calling
            is faster.
          </p>
        </div>
        <a className="btn btn--primary" href={company.phoneHref}>
          Call {company.phoneDisplay}
        </a>
        <button className="form__reset" type="button" onClick={reset}>
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      className={`form form--${variant}`}
      id={id}
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="source" value={variant} />
      {!isBar && (
        <div className="form__head">
          <p className="eyebrow">Request a callback</p>
          <h3>{variant === 'compact' ? 'Tell us what happened' : 'Send us the details'}</h3>
          <p className="form__sub">
            {variant === 'compact'
              ? 'We answer around the clock and give you a price before any work starts.'
              : 'Fill this in and a licensed locksmith calls you back.'}
          </p>
        </div>
      )}

      <p className="form__hp" aria-hidden="true">
        <label>
          Do not fill this in
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </label>
      </p>

      <div className="form__grid">
        <div className="field">
          <label htmlFor={fieldId('name')}>Name</label>
          <input
            id={fieldId('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            placeholder="John Doe"
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

        {!isBar && (
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

        {isBar && (
          <div className="field field--submit">
            <button className="btn btn--primary" type="submit" disabled={busy}>
              <span>{busy ? 'Sending…' : 'Request a callback'}</span>
              <Arrow size={17} />
            </button>
          </div>
        )}
      </div>

      {!isBar && (
        <button className="btn btn--primary btn--block" type="submit" disabled={busy}>
          <span>{busy ? 'Sending…' : 'Request a callback'}</span>
          <Arrow size={18} />
        </button>
      )}

      {failed && (
        <p className="form__failed" role="alert">
          That did not send. Please call <a href={company.phoneHref}>{company.phoneDisplay}</a> —
          someone picks up at any hour.
        </p>
      )}

      <p className="form__note">
        Locked out right now? Call <a href={company.phoneHref}>{company.phoneDisplay}</a> — someone
        picks up at any hour.
      </p>
    </form>
  )
}
