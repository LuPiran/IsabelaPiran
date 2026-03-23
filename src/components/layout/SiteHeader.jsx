import { useState } from 'react'
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
          {menuAberto ? <FaXmark className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {menuAberto ? (
        <nav className="border-t border-[#7a7892]/20 bg-[#e7ecea] px-4 py-3 shadow-lg md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[#4e383c] transition hover:bg-[#eeffcd] hover:text-[#2d2533]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
