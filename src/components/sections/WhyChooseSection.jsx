import { motion } from 'framer-motion'
import { whyChoose } from '../../content/site.js'
import { scrollToTop } from '../../utils/scrollToTop.js'

export function WhyChooseSection() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl rounded-3xl bg-white px-5 py-12 shadow-sm md:px-10 md:py-14">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {whyChoose.label}
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          <span className="text-slate-900">{whyChoose.titleLine1}</span>{' '}
          <span className="text-[#4e383c]">{whyChoose.titleLine2}</span>
        </h2>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Coluna visual */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -left-1 bottom-8 text-2xl text-[#7a7892] md:bottom-12 md:text-3xl">
            ✦
          </div>
          <div className="absolute bottom-14 left-4 text-lg text-[#7a7892] md:bottom-20">
            ✦
          </div>

          {/* Arco tracejado decorativo */}
          <svg
            className="pointer-events-none absolute -right-4 top-0 h-28 w-28 text-[#7a7892] opacity-90 md:-right-2 md:top-2"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            <path
              d="M 78 12 A 42 42 0 0 1 88 78"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative mx-auto aspect-square w-[85%] max-w-[320px]">
            {/* Anéis brancos concêntricos */}
            <div className="absolute inset-0 rounded-full bg-white p-3 shadow-lg shadow-slate-200/80 ring-1 ring-slate-100">
              <div className="h-full w-full rounded-full bg-white p-2 ring-2 ring-white">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100">
                  <img
                    src="/doutora.png"
                    alt={whyChoose.imageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#4e383c] shadow-lg ring-2 ring-white/80 transition hover:scale-105"
                    aria-label="Assistir vídeo de apresentação"
                  >
                    <span className="ml-1 text-2xl">▶</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coluna texto */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left"
        >
          <p className="text-base leading-relaxed text-slate-500">
            {whyChoose.paragraph}
          </p>

          <div className="mt-8 flex flex-col divide-y divide-slate-200 border-y border-slate-200 md:flex-row md:divide-x md:divide-y-0 md:divide-slate-200">
            {whyChoose.stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-1 flex-col items-center px-2 py-6 text-center md:items-start md:px-8 md:py-10 md:text-left"
              >
                <span className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {item.value}
                </span>
                <span className="mt-1 max-w-[10rem] text-sm text-slate-500 md:max-w-none">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-4 text-slate-700">
            {whyChoose.features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#4e383c] text-sm text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 rounded-full bg-[#4e383c] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#4e383c]/25"
            onClick={() => scrollToTop()}
          >
            {whyChoose.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
