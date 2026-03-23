import { motion } from 'framer-motion'
import {
  FaBolt,
  FaTeethOpen,
  FaTooth,
  FaTriangleExclamation,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import { servicesCards, servicesSection } from '../../content/site.js'
import { atualizarBordaCard } from '../../utils/serviceCardBorder.js'

const ICONS = {
  tooth: FaTooth,
  teethOpen: FaTeethOpen,
  wand: FaWandMagicSparkles,
  sparkles: FaWandMagicSparkles,
  alert: FaTriangleExclamation,
  bolt: FaBolt,
}

export function ServicesSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <div className="mb-10 text-center md:text-left">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {servicesSection.label}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          <span className="text-[#4e383c]">{servicesSection.titleHighlight}</span>{' '}
          <span className="text-slate-900">{servicesSection.titleRest}</span>
        </h2>
      </div>

      <div className="grid auto-rows-fr gap-10 md:grid-cols-3 md:items-stretch">
        {servicesCards.map(({ id, titulo, descricao, imagem, icon }) => {
          const Icon = ICONS[icon]
          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group service-card-motion flex h-full min-h-0 flex-col"
              onMouseMove={(e) => atualizarBordaCard(e, false)}
              onMouseLeave={(e) => atualizarBordaCard(e, true)}
            >
              <div className="service-card-frame flex h-full min-h-0 w-full flex-col rounded-2xl p-1 shadow-md shadow-slate-300/60 transition-shadow duration-300 ease-out group-hover:shadow-2xl">
                <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-white">
                  <div className="flex flex-1 flex-col items-center px-5 pb-7 pt-6 text-center">
                    <div className="relative w-full max-w-[220px] shrink-0">
                      <div className="aspect-square w-full overflow-hidden rounded-full bg-slate-100 shadow-inner ring-1 ring-slate-100">
                        <img
                          src={imagem}
                          alt={titulo}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 z-10 flex -translate-x-1/2 justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4e383c] text-white shadow-lg ring-4 ring-white">
                          <Icon className="h-8 w-8" aria-hidden />
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-12 shrink-0 text-lg font-bold text-slate-900">
                      {titulo}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {descricao}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
