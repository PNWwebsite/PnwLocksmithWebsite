import { company } from '../data/site'
import shotA from '../assets/photos/van-tools-680.webp'
import shotB from '../assets/photos/lock-door-560.webp'
import { KeyIcon } from './Icons'

// A real sequence, so the numbering carries information rather than decoration.
const steps = [
  {
    title: 'Call and tell us what happened',
    body: 'A locksmith picks up, day or night. You describe the door, the lock or the vehicle, and you get a price and a realistic arrival window before anyone is dispatched.',
  },
  {
    title: 'A stocked van comes to you',
    body: 'We carry key blanks, cylinders, programming equipment and commercial hardware, so the job finishes on the first visit rather than getting booked for a second.',
  },
  {
    title: 'You are back in, at the price quoted',
    body: 'Non-destructive entry wherever the lock allows, then keys cut, locks rekeyed or new hardware fitted on the spot. The number does not move at the end.',
  },
]

export default function Steps() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <header className="sechead sechead--center" data-reveal>
          <p className="eyebrow">
            <KeyIcon size={16} />
            <span>How it works</span>
          </p>
          <h2 className="sechead__title">
            <em>3 simple steps</em> from locked out to back inside
          </h2>
        </header>

        <div className="process__grid">
          <div className="process__media" data-reveal>
            <span className="process__link" aria-hidden="true" />
            <figure className="process__shot process__shot--a">
              <img src={shotA} alt="Key programming equipment, blanks and picks laid out in the PNW Lock and Key van" loading="lazy" />
            </figure>
            <figure className="process__shot process__shot--b">
              <img src={shotB} alt="Close-up of a door lock cylinder being picked" loading="lazy" />
            </figure>
          </div>

          <ol className="process__list">
            {steps.map((s, i) => (
              <li className="pstep" key={s.title} data-reveal style={{ '--d': `${i * 110}ms` }}>
                <span className="pstep__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="process__foot" data-reveal>
          <a className="btn btn--primary btn--lg" href={company.phoneHref}>
            Start with a call — {company.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  )
}
