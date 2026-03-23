import { useState } from 'react'
import { motion } from 'framer-motion'
import { hero, appointment, contactSection } from '../../content/site.js'

export function HeroSection({ blueCircleRef, appointmentRef }) {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    data: '',
    horario: '',
  })

  const [erro, setErro] = useState('')

  function atualizarCampo(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }))
  }

  function enviarAgendamentoWhatsApp(e) {
    e.preventDefault()

    const { nome, telefone, data, horario } = form

    if (!nome || !telefone || !data || !horario) {
      setErro('Preencha todos os campos para agendar pelo WhatsApp.')
      return
    }

    const numero = contactSection.whatsappDigits
    const dataFormatada = new Date(`${data}T00:00:00`).toLocaleDateString('pt-BR')

    const mensagem = [
      'Ola, Dra. Isabela! Gostaria de agendar uma consulta.',
      '',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Data desejada: ${dataFormatada}`,
      `Horario desejado: ${horario}`,
    ].join('\n')

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setErro('')
  }

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col pt-6 lg:min-h-[88vh]">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-x-10 lg:gap-y-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex min-h-0 flex-col justify-center"
        >
          <p className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow-sm">
            {hero.badge}
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
            {hero.titleBefore}
            <span className="text-[#4e383c]">{hero.titleHighlight}</span>
            {hero.titleAfter}
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-500 md:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#4e383c] px-8 py-3 font-semibold text-white shadow-lg shadow-[#4e383c]/25"
            >
              {hero.ctaPrimary}
            </motion.a>

            <button
              type="button"
              className="inline-flex items-center gap-3 font-semibold text-slate-700"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm shadow">
                ▶
              </span>
              {hero.ctaVideo}
            </button>
          </div>
        </motion.div>

        {/* Coluna da foto: sem motion no container — só o círculo azul tem animação GSAP */}
        <div className="relative mx-auto flex min-h-0 w-full max-w-md flex-col justify-end lg:mx-0 lg:max-w-lg">
          <div className="relative w-full shrink-0">
            <div
              ref={blueCircleRef}
              className="pointer-events-none absolute right-5 top-20 z-0 h-72 w-72 rounded-full bg-[#7a7892] md:h-80 md:w-80"
              aria-hidden
            />
            <img
              src="/doutora.png"
              alt={hero.heroImageAlt}
              className="relative z-10 ml-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      <form
        ref={appointmentRef}
        onSubmit={enviarAgendamentoWhatsApp}
        className="mt-0 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-5"
      >
        <div className="rounded-xl border border-slate-100 px-4 py-3">
          <label
            htmlFor="agendamento-nome"
            className="text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            {appointment.nameLabel}
          </label>
          <input
            id="agendamento-nome"
            type="text"
            value={form.nome}
            onChange={(e) => atualizarCampo('nome', e.target.value)}
            className="mt-1 w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
            placeholder={appointment.namePlaceholder}
          />
        </div>
        <div className="rounded-xl border border-slate-100 px-4 py-3">
          <label
            htmlFor="agendamento-telefone"
            className="text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            {appointment.phoneLabel}
          </label>
          <input
            id="agendamento-telefone"
            type="tel"
            value={form.telefone}
            onChange={(e) => atualizarCampo('telefone', e.target.value)}
            className="mt-1 w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
            placeholder={appointment.phonePlaceholder}
          />
        </div>
        <div className="rounded-xl border border-slate-100 px-4 py-3">
          <label
            htmlFor="agendamento-data"
            className="text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            {appointment.dateLabel}
          </label>
          <input
            id="agendamento-data"
            type="date"
            value={form.data}
            onChange={(e) => atualizarCampo('data', e.target.value)}
            className="mt-1 w-full bg-transparent text-slate-700 outline-none"
          />
        </div>
        <div className="rounded-xl border border-slate-100 px-4 py-3">
          <label
            htmlFor="agendamento-horario"
            className="text-xs font-semibold uppercase tracking-wide text-slate-400"
          >
            {appointment.timeLabel}
          </label>
          <input
            id="agendamento-horario"
            type="time"
            value={form.horario}
            onChange={(e) => atualizarCampo('horario', e.target.value)}
            className="mt-1 w-full bg-transparent text-slate-700 outline-none"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl bg-[#4e383c] px-5 py-3 font-semibold text-white shadow-md shadow-[#4e383c]/30"
        >
          {appointment.submit}
        </motion.button>
        {erro ? (
          <p className="md:col-span-2 lg:col-span-5 text-sm text-red-600">{erro}</p>
        ) : null}
      </form>
    </section>
  )
}
