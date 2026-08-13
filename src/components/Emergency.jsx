import { company, emergencies } from '../data/site'
import photo from '../assets/photos/night-call.jpg'
import { Phone, Clock, Check } from './Icons'

export default function Emergency() {
  return (
    <section className="emerg" id="emergency">
      <div className="wrap emerg__grid">
        <div className="emerg__media" data-reveal>
          <img
            src={photo}
            alt="A PNW Lock and Key locksmith arriving at a home after dark with tools in hand"
            width="1200"
            height="675"
            loading="lazy"
          />
          <p className="emerg__stamp">
            <Clock size={18} />
            <span>
              <strong>24/7</strong>
              Always open
            </span>
          </p>
        </div>

        <div className="emerg__copy" data-reveal>
          <p className="eyebrow">Emergency locksmith</p>
          <h2 className="emerg__title">
            Lock trouble does not wait for <em>business hours</em>
          </h2>
          <p className="emerg__lede">
            Keys get left on the kitchen counter at midnight. A lock seizes on a Sunday. A key
            snaps off in the cylinder on the coldest morning of the year. We keep a phone staffed
            every hour of every day, including holidays, because those are exactly the hours people
            need a locksmith most.
          </p>
          <p className="emerg__lede">
            Call and you speak to a locksmith, not an answering service. You get a realistic arrival
            window and a price before anyone touches your door.
          </p>

          <ul className="emerg__list">
            {emergencies.map((item) => (
              <li key={item}>
                <Check size={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a className="btn btn--primary btn--lg" href={company.phoneHref}>
            <Phone size={19} />
            <span>{company.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
