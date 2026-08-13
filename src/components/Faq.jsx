import { useState } from 'react'
import { company } from '../data/site'
import photo from '../assets/photos/tech-keypad.jpg'
import { KeyIcon, Phone, Arrow } from './Icons'

const faqs = [
  {
    q: 'How fast can you reach me?',
    a: 'It depends on where you are and what the traffic is doing, so we give you an honest arrival window on the phone rather than a number designed to win the call. Our vans work across the metro, and emergencies are dispatched ahead of scheduled work.',
  },
  {
    q: 'Do you really answer 24/7?',
    a: 'Yes, including nights, weekends and holidays. You reach a locksmith who can quote the job, not an answering service that takes a message and passes it on.',
  },
  {
    q: 'Can you make a new key if I lost all of mine?',
    a: 'For most makes and model years, yes. We cut and program replacement keys on site, including transponder and push-to-start smart keys, so there is no need to tow the vehicle anywhere.',
  },
  {
    q: 'Will your work damage my lock or door?',
    a: 'Most doors open without a mark. We pick, bypass and decode before we ever consider drilling. If a lock genuinely has to be drilled, we tell you first and price the replacement before starting.',
  },
  {
    q: 'Are you licensed and insured?',
    a: `We work under Oregon license ${company.license}, bonded and insured, and every locksmith carries ID you are welcome to ask for at the door.`,
  },
  {
    q: 'How do you price the work?',
    a: 'You hear the number before the tools come out, either on the phone or at the curb once we can see the lock. That price is what you pay at the end.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="wrap faq__grid">
        <div className="faq__media" data-reveal>
          <figure className="faq__shot">
            <img src={photo} alt="A PNW Lock and Key locksmith at a customer's front door" loading="lazy" />
          </figure>
          <div className="faq__help">
            <span className="faq__helpIco" aria-hidden="true">
              <Phone size={20} />
            </span>
            <h3>Still need help?</h3>
            <p>Call and speak to a locksmith. No hold queue, no answering service.</p>
            <a className="btn btn--primary btn--pillArrow" href={company.phoneHref}>
              <span>{company.phoneDisplay}</span>
              <span className="btn__arrow" aria-hidden="true">
                <Arrow size={15} />
              </span>
            </a>
          </div>
        </div>

        <div className="faq__body" data-reveal>
          <p className="eyebrow">
            <KeyIcon size={16} />
            <span>FAQs</span>
          </p>
          <h2 className="faq__title">
            Questions about our work? <em>Quick answers here.</em>
          </h2>
          <p className="faq__lede">
            The things people ask most before they book. If yours is not here, the phone is
            answered around the clock.
          </p>

          <div className="acc">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div className={`acc__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                  <h3>
                    <button
                      type="button"
                      className="acc__btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className="acc__chev" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="acc__panel"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
