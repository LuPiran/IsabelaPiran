import { FaTooth } from 'react-icons/fa6'
import { marqueeServices } from '../../content/site.js'

export function MarqueeBar() {
  return (
    <div className="relative z-0 w-full overflow-hidden rounded-2xl bg-[#4e383c] py-3.5 text-white shadow-md">
      <div className="marquee-track items-center">
        {[0, 1].map((loop) => (
          <div
            key={loop}
            className={`flex shrink-0 items-center gap-10 md:gap-14 ${loop === 1 ? 'pl-10 md:pl-14' : ''}`}
          >
            {marqueeServices.map((titulo) => (
              <div
                key={`${loop}-${titulo}`}
                className="flex items-center gap-4 md:gap-5"
              >
                <FaTooth
                  className="h-6 w-6 shrink-0 text-white md:h-7 md:w-7"
                  aria-hidden
                />
                <span className="whitespace-nowrap text-sm font-bold uppercase tracking-wide md:text-base">
                  {titulo}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
