import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { educationSection } from '../../content/site.js'

export function EducationSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.25'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto mt-20 w-full max-w-6xl rounded-3xl bg-white px-5 py-12 shadow-sm md:px-10 md:py-14"
    >
      <div className="mb-10 text-center md:text-left">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {educationSection.label}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          <span className="text-[#4e383c]">{educationSection.titleHighlight}</span>{' '}
          <span className="text-slate-900">{educationSection.titleRest}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-500">{educationSection.intro}</p>
      </div>

      {/* Linha lateral + cards: trajetória preenchida pelo scroll */}
      <div className="relative pl-12 md:pl-16">
        <div
          className="absolute left-6 top-3 bottom-3 w-1.5 -translate-x-1/2 rounded-full bg-slate-200 md:left-8"
          aria-hidden
        />
        <motion.div
          className="absolute left-6 top-3 w-1.5 -translate-x-1/2 rounded-full bg-[#7a7892] md:left-8"
          style={{
            height: 'calc(100% - 24px)',
            scaleY: smoothProgress,
            transformOrigin: 'top',
          }}
          aria-hidden
        />

        <div className="space-y-14 md:space-y-20">
          {educationSection.items.map((item, index) => (
            <article key={item.id} className="relative">
              <div
                className="absolute -left-[2.35rem] top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#4e383c] shadow-md ring-2 ring-[#7a7892]/20 md:-left-[2.85rem] md:top-3"
                aria-hidden
              >
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/90 p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#4e383c]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-medium text-slate-600">{item.institution}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
