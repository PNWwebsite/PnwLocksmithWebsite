import ContactForm from './ContactForm'

export default function CallbackBar() {
  return (
    <section className="cbbar" aria-label="Request a callback">
      <div className="wrap">
        <div className="cbbar__card" data-reveal>
          <ContactForm variant="bar" id="quick" />
        </div>
      </div>
    </section>
  )
}
