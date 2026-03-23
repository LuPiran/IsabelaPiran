import { useState } from 'react'
import { motion } from 'framer-motion'
import { about } from '../../content/site.js'

export function AboutSection({
  aboutRef,
  starLargeRef,
  starSmallRef,
}) {
  const [fotoConsulta2, setFotoConsulta2] = useState('/consulta2.jpg')

  return (
    <section
      ref={aboutRef}
      className="mx-auto mt-14 grid w-full max-w-6xl gap-12 pb-10 mb-12 md:mb-16 lg:grid-cols-2 lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        <div
          ref={starLargeRef}
          className="absolute -left-3 top-6 text-5xl text-[#7a7892]"
        >
          ✦
        </div>
        <div
          ref={starSmallRef}
          className="absolute left-8 top-16 text-2xl text-[#7a7892]"
        >
          ✦
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full bg-slate-200 shadow-lg">
          <img
            src="/consulta1.jpg"
            alt={about.imageMainAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          whileHover={{ rotate: -3, scale: 1.02 }}
          className="absolute -bottom-10 left-8 z-10 h-44 w-44 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl md:h-52 md:w-52"
        >
          <img
            src={fotoConsulta2}
            alt={about.imageSecondaryAlt}
            className="h-full w-full object-cover"
            onError={() => setFotoConsulta2('/consulta1.jpg')}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
          {about.sectionLabel}
        </p>
        <h2 className="mt-3 max-w-lg text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          <span className="text-[#4e383c]">{about.titleHighlight}</span>{' '}
          {about.titleRest}
        </h2>
        <p className="mt-5 max-w-xl text-slate-500">{about.paragraph}</p>

        <ul className="mt-7 space-y-3 text-slate-700">
          {about.bullets.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4e383c] text-sm text-white">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full bg-[#4e383c] px-8 py-3 font-semibold text-white shadow-lg shadow-[#4e383c]/25"
        >
          {about.cta}
        </motion.button>
      </motion.div>
    </section>
  )
}
