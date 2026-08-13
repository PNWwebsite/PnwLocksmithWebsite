import { company } from '../data/site'
import { Phone } from './Icons'

// A real sequence, so the numbering carries information rather than decoration.
const steps = [
  {
    title: 'Call and tell us what happened',
    body: 'A locksmith picks up, day or night. You describe the door, the lock or the vehicle, and you get a price and a realistic arrival window before anyone is dispatched.',
  },
  {
    title: 'A stocked van comes to you',
    body: 'We carry key blanks, cylinders, programming equipment and commercial hardware, so the job is finished on the first visit rather than scheduled for a second one.',
  },
  {
    title: 'You are back in, and back to your day',
    body: 'Non-destructive entry wherever the lock allows. Then keys cut, locks rekeyed or new hardware fitted on the spot, and the price you were quoted at the start.',
  },
]

export default function Steps() {
  return (
    <section className="steps" aria-label="How it works">
      <div className="wrap">
        <header className="sechead sechead--center" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="sechead__title">
            Three steps, <em>no surprises</em>
          </h2>
        </header>

        <ol className="steps__list">
          {steps.map((s, i) => (
            <li className="step" key={s.title} data-reveal style={{ '--d': `${i * 110}ms` }}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="steps__foot" data-reveal>
          <a className="btn btn--primary btn--lg" href={company.phoneHref}>
            <Phone size={19} />
            <span>Call {company.phoneDisplay}</span>
          </a>
        </p>
      </div>
    </section>
  )
}
