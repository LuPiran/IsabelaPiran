import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useHomeAnimations } from './hooks/useHomeAnimations.js'
import { SiteFooter } from './components/layout/SiteFooter.jsx'
import { SiteHeader } from './components/layout/SiteHeader.jsx'
import {
  AboutSection,
  HeroSection,
  MarqueeBar,
  ServicesSection,
  TestimonialsSection,
  WhyChooseSection,
} from './components/sections/index.js'

const ContactSection = lazy(() =>
  import('./components/sections/ContactSection.jsx').then((m) => ({
    default: m.ContactSection,
  })),
)

function App() {
  const blueCircleRef = useRef(null)
  const appointmentRef = useRef(null)
  const aboutRef = useRef(null)
  const starLargeRef = useRef(null)
  const starSmallRef = useRef(null)
  const contactTriggerRef = useRef(null)
  const [canLoadContact, setCanLoadContact] = useState(false)

  useHomeAnimations({
    blueCircleRef,
    appointmentRef,
    aboutRef,
    starLargeRef,
    starSmallRef,
  })

  useEffect(() => {
    const target = contactTriggerRef.current
    if (!target || canLoadContact) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setCanLoadContact(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [canLoadContact])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#e7ecea] px-6 pb-16 pt-28 text-[#2d2533] md:px-10 lg:px-16">
        <section id="inicio" className="scroll-mt-28">
          <HeroSection blueCircleRef={blueCircleRef} appointmentRef={appointmentRef} />
        </section>

        <section id="sobre" className="scroll-mt-28">
          <AboutSection
            aboutRef={aboutRef}
            starLargeRef={starLargeRef}
            starSmallRef={starSmallRef}
          />
        </section>

        <section id="servicos" className="scroll-mt-28">
          <MarqueeBar />
          <ServicesSection />
        </section>

        <section id="depoimentos" className="scroll-mt-28">
          <TestimonialsSection />
        </section>

        <section id="diferenciais" className="scroll-mt-28">
          <WhyChooseSection />
        </section>

        <section id="contato" className="scroll-mt-28">
          <div ref={contactTriggerRef}>
            {canLoadContact ? (
              <Suspense
                fallback={
                  <div
                    className="mx-auto mt-20 h-[min(520px,70vh)] w-full max-w-6xl animate-pulse rounded-3xl bg-[#7a7892]/20"
                    aria-hidden
                  />
                }
              >
                <ContactSection />
              </Suspense>
            ) : (
              <div
                className="mx-auto mt-20 h-[min(520px,70vh)] w-full max-w-6xl rounded-3xl bg-[#7a7892]/10"
                aria-hidden
              />
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default App
