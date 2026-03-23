import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

const NAV_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#7a7892]/20 bg-[#e7ecea]/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-16">
          <a href="#inicio" className="shrink-0" aria-label="Início">
            <img
              src="/logo-1.png"
              alt="Logo Dra. Isabela Piran"
              className="h-9 w-auto object-contain md:h-11"
            />
          </a>

          {/* Desktop/tablet grande */}
          <nav className="hidden items-center justify-end gap-2 md:flex md:gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-[#4e383c] transition hover:bg-[#eeffcd] hover:text-[#2d2533]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7a7892]/35 bg-white/70 text-[#4e383c] md:hidden"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuAberto ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-[#2d2533]/45 md:hidden"
              onClick={() => setMenuAberto(false)}
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[60] h-dvh w-[82%] max-w-[320px] border-l border-[#7a7892]/25 bg-[#e7ecea] p-5 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wide text-[#4e383c]">
                  Navegação
                </p>
                <button
                  type="button"
                  onClick={() => setMenuAberto(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7a7892]/35 bg-white/70 text-[#4e383c]"
                  aria-label="Fechar menu"
                >
                  <FaXmark className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuAberto(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#4e383c] transition hover:bg-[#eeffcd] hover:text-[#2d2533]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
