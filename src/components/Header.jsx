import { useState } from 'react'

export default function Header({ brand, navigation }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/88 text-white backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={brand.logo} alt="" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <span className="block text-lg font-semibold text-[#f2c46d]">{brand.name}</span>
            <span className="hidden text-xs text-slate-300 sm:block">{brand.tagline}</span>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-[#f2c46d]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#villas"
          className="hidden h-11 items-center bg-[#f2c46d] px-5 text-sm font-semibold text-[#07111f] transition hover:bg-white md:inline-flex"
        >
          Book Now
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white md:hidden"
        >
          <span className="text-2xl leading-none">{isOpen ? 'x' : '='}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#07111f] px-4 pb-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-2 py-3 text-sm font-medium text-slate-200 transition hover:text-[#f2c46d]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
