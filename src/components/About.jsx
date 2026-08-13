import { company } from '../data/site'
import Ridgeline from './Ridgeline'
import { Check } from './Icons'

const promises = [
  ['Price first', 'You hear the number over the phone or at the curb. It does not move once the tools come out.'],
  ['Non-destructive first', 'Picking, bypassing and decoding before drilling. Most doors open without a mark.'],
  ['Licensed work', `Every job runs under ${company.license}, bonded and insured, with ID on request.`],
  ['Local dispatch', 'Vans staged around the metro, not routed from a call center three states away.'],
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <div className="about__copy" data-reveal>
          <p className="eyebrow eyebrow--onDark">About PNW Lock and Key</p>
          <h2 className="about__title">
            A shop on SW Oak St, and a phone that <em>actually gets answered</em>
          </h2>
          <p>
            We started {company.name} because too many people in this valley were calling a
            national number, waiting two hours, and then hearing a price they had never agreed to.
            That is not how a trade should work.
          </p>
          <p>
            Today we are a small crew of licensed locksmiths working out of Tigard, covering the
            west side, Portland, and the towns along the river. We cut and program car keys on site,
            rekey houses the same afternoon someone moves in, and keep commercial doors code
            compliant for property managers who cannot afford a stuck exit device.
          </p>
          <p>
            The rain does not stop, so neither do we. Call at noon or at three in the morning and
            you get a person, a time, and a price.
          </p>

          <dl className="about__facts">
            <div>
              <dt>Hours</dt>
              <dd>24 / 7 / 365</dd>
            </div>
            <div>
              <dt>License</dt>
              <dd>{company.license}</dd>
            </div>
            <div>
              <dt>Coverage</dt>
              <dd>20-mile radius</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Tigard, OR</dd>
            </div>
          </dl>
        </div>

        <ul className="about__promises" data-reveal>
          {promises.map(([title, body], i) => (
            <li key={title} style={{ '--d': `${i * 80}ms` }}>
              <span className="about__tick" aria-hidden="true">
                <Check size={15} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Ridgeline className="ridge--toPaper" />
    </section>
  )
}
