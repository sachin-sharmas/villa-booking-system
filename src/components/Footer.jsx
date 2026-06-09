export default function Footer({ brand, navigation, services, footerLinks }) {
  return (
    <footer id="contact" className="border-t bg-[#07111f] py-12 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#f2c46d]">{brand.name}</h3>
            <p>{brand.tagline}</p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-[#f2c46d]">FB</a>
              <a href="#" className="transition-colors hover:text-[#f2c46d]">TW</a>
              <a href="#" className="transition-colors hover:text-[#f2c46d]">IG</a>
              <a href="#" className="transition-colors hover:text-[#f2c46d]">LI</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <a key={item.label} href={item.href} className="block transition-colors hover:text-[#f2c46d]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <a key={service.title} href="#services" className="block transition-colors hover:text-[#f2c46d]">
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <p>{brand.address}</p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm">(c) 2025 {brand.name}. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 md:mt-0">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm transition-colors hover:text-[#f2c46d]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
