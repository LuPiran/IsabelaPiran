const NAV_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#7a7892]/20 bg-[#e7ecea]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a href="#inicio" className="shrink-0" aria-label="Início">
          <img
            src="/logo-1.png"
            alt="Logo Dra. Isabela Piran"
            className="h-10 w-auto object-contain md:h-11"
          />
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
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
      </div>
    </header>
  )
}
