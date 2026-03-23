import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { contactSection } from '../../content/site.js'
import { ToothCanvas } from '../three/ToothCanvas.jsx'

export function ContactSection() {
  const c = contactSection
  const waLink = `https://wa.me/${c.whatsappDigits}`

  return (
    <section className="mx-auto mt-20 w-full max-w-6xl rounded-3xl bg-white px-5 py-12 shadow-sm md:px-10 md:py-14">
      <div className="mb-10 text-center md:text-left">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {c.label}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          <span className="text-[#4e383c]">{c.titleHighlight}</span>{' '}
          <span>{c.titleRest}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-500">{c.intro}</p>
      </div>

      <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Consultório
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{c.clinicName}</p>
          </div>

          <a
            href={c.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/90 p-5 transition hover:border-[#7a7892]/40 hover:bg-[#eeffcd]/50"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4e383c] text-white shadow-sm">
              <FaMapMarkerAlt className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Endereço</p>
              <p className="mt-1 text-slate-600">{c.address.street}</p>
              <p className="text-slate-600">{c.address.district}</p>
              <p className="text-sm text-slate-500">CEP {c.address.zip}</p>
              <p className="mt-2 text-sm font-medium text-[#4e383c] group-hover:underline">
                Ver no mapa
              </p>
            </div>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${c.phoneTel}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-[#7a7892]/40"
            >
              <FaPhone className="h-4 w-4 text-[#4e383c]" aria-hidden />
              <span className="font-medium">{c.phoneDisplay}</span>
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-[#7a7892]/40 bg-[#eeffcd]/80 px-4 py-3 font-medium text-[#2d2533] transition hover:bg-[#eeffcd]"
            >
              <FaWhatsapp className="h-5 w-5 text-[#4e383c]" aria-hidden />
              {c.whatsappDisplay}
            </a>
          </div>

          <a
            href={`mailto:${c.email}`}
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-[#7a7892]/40"
          >
            <FaEnvelope className="h-4 w-4 text-[#4e383c]" aria-hidden />
            <span className="font-medium">{c.email}</span>
          </a>

          <div className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 p-5">
            <FaClock className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-slate-900">Horário</p>
              <p className="mt-1 text-slate-600">{c.hours}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-slate-400 lg:text-right">
            Visual 3D
          </p>
          <ToothCanvas key={c.model3d.modelPath} modelPath={c.model3d.modelPath} />
        </div>
      </div>
    </section>
  )
}
