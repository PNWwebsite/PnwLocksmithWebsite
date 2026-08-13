import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { company } from '../data/site'
import { Phone, Menu, Close } from './Icons'

const links = [
  ['Services', '#services'],
  ['About', '#about'],
  ['Service areas', '#areas'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="utilbar">
        <div className="wrap utilbar__row">
          <p className="utilbar__left">
            <span className="dot" aria-hidden="true" /> 24/7 emergency locksmith
          </p>
          <p className="utilbar__right">{company.license}</p>
        </div>
      </div>

      <header className={`masthead ${stuck ? 'is-stuck' : ''}`}>
        <div className="wrap masthead__row">
          <a className="masthead__brand" href="#top" aria-label={`${company.name} home`}>
            <img src={logo} alt="" width="900" height="424" />
          </a>

          <nav className="masthead__nav" aria-label="Primary">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="masthead__actions">
            <a className="btn btn--call" href={company.phoneHref}>
              <Phone size={17} />
              <span>{company.phoneDisplay}</span>
            </a>
            <button
              className="masthead__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <Close size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <nav className="drawer__inner" aria-label="Mobile">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="btn btn--primary drawer__call" href={company.phoneHref}>
              Call {company.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
