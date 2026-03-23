import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6'
import { testimonialsSection } from '../../content/site.js'

const items = testimonialsSection.items
const len = items.length

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
}

export function TestimonialsSection() {
  const [[index, direction], setSlide] = useState([0, 0])

  const goTo = useCallback((newIndex, dir) => {
    const next = ((newIndex % len) + len) % len
    setSlide([next, dir])
  }, [])

  const prev = useCallback(() => {
    goTo(index - 1, -1)
  }, [goTo, index])

  const next = useCallback(() => {
    goTo(index + 1, 1)
  }, [goTo, index])

  const current = items[index]

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <div className="mb-10 text-center md:text-left">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {testimonialsSection.label}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          <span className="text-[#4e383c]">{testimonialsSection.titleHighlight}</span>{' '}
          <span className="text-slate-900">{testimonialsSection.titleRest}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4 lg:gap-6">
        {/* Navegação mobile/tablet — setas + nome do depoimento */}
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white p-2 md:hidden">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#7a7892]/50 hover:bg-[#eeffcd] hover:text-[#4e383c]"
            aria-label="Depoimento anterior"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="min-w-0 flex-1 rounded-xl px-3 py-2 text-center transition hover:bg-slate-50"
            aria-label="Próximo depoimento"
          >
            <span className="block truncate font-semibold text-slate-900">{current.name}</span>
            <span className="block truncate text-xs text-slate-500">{current.hint}</span>
          </button>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#7a7892]/50 hover:bg-[#eeffcd] hover:text-[#4e383c]"
            aria-label="Próximo depoimento"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Lista lateral — índice dos depoimentos */}
        <aside className="hidden shrink-0 flex-row justify-center gap-2 md:w-44 md:flex-col md:justify-center md:border-r md:border-slate-200 md:pr-4 lg:flex lg:w-52">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (i === index) return
                goTo(i, i > index ? 1 : -1)
              }}
              className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-all md:px-4 ${
                i === index
                  ? 'border-[#4e383c] bg-[#eeffcd] font-semibold text-[#2d2533] shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="block truncate font-medium text-slate-900">
                {item.name}
              </span>
              <span className="block truncate text-xs text-slate-500">{item.hint}</span>
            </button>
          ))}
        </aside>

        {/* Carrossel com setas */}
        <div className="relative flex min-h-0 flex-1 items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={prev}
            className="z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-[#7a7892]/50 hover:bg-[#eeffcd] hover:text-[#4e383c] md:flex"
            aria-label="Comentário anterior"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative min-h-[260px] flex-1 overflow-hidden md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 380, damping: 35 },
                  opacity: { duration: 0.25 },
                }}
                className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 md:p-8"
              >
                <div className="mb-4 flex gap-0.5 text-amber-400" aria-hidden>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" />
                  ))}
                </div>

                <blockquote className="relative flex-1 pl-1 text-base leading-relaxed text-slate-600 md:text-lg">
                  <span
                    className="absolute -left-1 -top-1 font-serif text-5xl leading-none text-[#7a7892]/30 md:text-6xl"
                    aria-hidden
                  >
                    “
                  </span>
                  <span className="relative z-0">{current.text}</span>
                </blockquote>

                <footer className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">{current.name}</p>
                  <p className="text-sm text-slate-400">{current.hint}</p>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            className="z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-[#7a7892]/50 hover:bg-[#eeffcd] hover:text-[#4e383c] md:flex"
            aria-label="Próximo comentário"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-slate-400 md:text-left">
        {index + 1} / {len}
      </p>
    </section>
  )
}
