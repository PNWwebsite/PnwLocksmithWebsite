import { areas } from '../data/site'
import van from '../assets/photos/van.png'

export default function Areas() {
  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <header className="sechead" data-reveal>
          <p className="eyebrow">Service areas</p>
          <h2 className="sechead__title">
            Areas we <em>serve</em>
          </h2>
          <p className="sechead__lede">
            We are mobile, so the work happens at your door. Our vans cover Tigard, Portland and
            the surrounding communities across five counties. If your town is not listed, call
            anyway and we will tell you straight whether we can get to you.
          </p>
        </header>

        <div className="areas__van" data-reveal>
          <img
            src={van}
            alt="PNW Lock and Key service van"
            width="1100"
            height="520"
            loading="lazy"
          />
        </div>

        <div className="areas__columns">
          {areas.map((group, i) => (
            <section className="areagroup" key={group.county} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <header className="areagroup__head">
                <h3>{group.county}</h3>
                <p>{group.note}</p>
              </header>
              <ul className="areagroup__list">
                {group.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
