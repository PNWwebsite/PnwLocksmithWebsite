import ContactForm from './ContactForm'

export default function CallbackBar() {
  return (
    <section className="cbbar" aria-label="Request a callback">
      <div className="wrap">
        <div className="cbbar__card" data-reveal>
          <div className="cbbar__head">
            <p className="eyebrow">Not an emergency?</p>
            <h2>Request a callback</h2>
            <p>
              Leave your details and a licensed locksmith calls you back. If you are locked out
              right now, calling is always faster.
            </p>
          </div>
          <ContactForm variant="bar" id="quick" />
        </div>
      </div>
    </section>
  )
}
