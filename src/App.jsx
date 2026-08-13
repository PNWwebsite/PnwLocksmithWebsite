import Header from './components/Header'
import Hero from './components/Hero'
import CallbackBar from './components/CallbackBar'
import CtaBand from './components/CtaBand'
import Services from './components/Services'
import Emergency from './components/Emergency'
import Steps from './components/Steps'
import About from './components/About'
import Areas from './components/Areas'
import CtaCall from './components/CtaCall'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <CallbackBar />
        <CtaBand />
        <Services />
        <Emergency />
        <Steps />
        <About />
        <Areas />
        <CtaCall />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
