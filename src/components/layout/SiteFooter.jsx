import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { doctor } from '../../content/site.js'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#7a7892]/25 bg-[#2d2533] px-6 py-10 text-center text-[#e7ecea] md:px-10 lg:px-16">
      <p className="text-sm md:text-base">
        Todos os direitos reservados. {doctor.fullName}
      </p>

      <div className="mt-5 flex items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/isabelapiran/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7a7892] text-white transition hover:bg-[#4e383c]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/isabela-piran-21b879296/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7a7892] text-white transition hover:bg-[#4e383c]"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <p className="mt-5 text-xs text-[#e7ecea]/85">
        desenvolvido por{' '}
        <a
          href="https://portfolio-lucas-piran.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#eeffcd] underline decoration-transparent transition hover:decoration-[#eeffcd]"
        >
          Lucas Piran
        </a>
      </p>
    </footer>
  )
}
