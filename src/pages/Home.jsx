const formatPrice = (villa) =>
  `${villa.currency}${villa.pricePerNight.toLocaleString()} / night`

export default function Home({ data }) {
  const { hero, search, villas, destinations, services, testimonials } = data

  return (
    <main className="bg-[#f7f5ef] text-[#0e1a2b]">
      <section
        id="home"
        className="relative min-h-[88vh] overflow-hidden bg-cover bg-center pt-28 text-white"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-[#07111f]/65" />
        <div className="relative mx-auto flex min-h-[calc(88vh-7rem)] max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl pb-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c46d]">
              {hero.eyebrow}
            </p>
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#villas"
                className="inline-flex h-12 items-center bg-[#f2c46d] px-6 text-sm font-bold text-[#07111f] transition hover:bg-white"
              >
                {hero.primaryAction}
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center border border-white/50 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#07111f]"
              >
                {hero.secondaryAction}
              </a>
            </div>
          </div>

          <div className="grid gap-4 border-y border-white/20 py-5 sm:grid-cols-3">
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-semibold text-[#f2c46d]">{metric.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-slate-200">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8d1bf] bg-white">
        <form className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-5 lg:px-8">
          <label className="booking-field">
            <span>Destination</span>
            <select defaultValue={search.destinations[0]}>
              {search.destinations.map((destination) => (
                <option key={destination}>{destination}</option>
              ))}
            </select>
          </label>

          <label className="booking-field">
            <span>Check In</span>
            <input type="date" />
          </label>

          <label className="booking-field">
            <span>Check Out</span>
            <input type="date" />
          </label>

          <label className="booking-field">
            <span>Guests</span>
            <select defaultValue={search.guestOptions[1]}>
              {search.guestOptions.map((guests) => (
                <option key={guests}>{guests}</option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="h-full min-h-16 bg-[#0e6156] px-6 text-sm font-bold text-white transition hover:bg-[#093d37]"
          >
            Search Villas
          </button>
        </form>
      </section>

      <section id="villas" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Featured Stays</p>
            <h2 className="section-title">Private villas ready for your next escape</h2>
          </div>
          <label className="booking-field max-w-xs bg-white">
            <span>Budget</span>
            <select defaultValue={search.budgetOptions[0]}>
              {search.budgetOptions.map((budget) => (
                <option key={budget}>{budget}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {villas.map((villa) => (
            <article key={villa.id} className="villa-card">
              <img src={villa.image} alt={villa.name} className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{villa.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{villa.location}</p>
                  </div>
                  <p className="shrink-0 bg-[#0e1a2b] px-3 py-1 text-sm font-semibold text-white">
                    {villa.rating}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 border-y border-[#e3ddcf] py-4 text-sm text-slate-700">
                  <p>{villa.guests} guests</p>
                  <p>{villa.bedrooms} beds</p>
                  <p>{villa.bathrooms} baths</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {villa.features.map((feature) => (
                    <span key={feature} className="bg-[#edf3ef] px-3 py-1 text-xs font-semibold text-[#0e6156]">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="font-semibold">{formatPrice(villa)}</p>
                  <a href="#contact" className="text-sm font-bold text-[#0e6156] hover:text-[#093d37]">
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-[#0e1a2b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow text-[#f2c46d]">Destinations</p>
          <h2 className="section-title max-w-2xl text-white">Choose the setting, we handle the stay</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.name} className="destination-tile">
                <img src={destination.image} alt={destination.name} className="h-80 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-2xl font-semibold">{destination.name}</h3>
                  <p className="mt-1 text-sm text-slate-200">{destination.count}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-eyebrow">Guest Services</p>
          <h2 className="section-title">Everything important is arranged before arrival</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Each stay can include transfers, dining, wellness, family support,
            and local experiences. These service blocks now come from JSON and
            can be replaced with API data later.
          </p>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <article key={service.title} className="border-l-4 border-[#0e6156] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="border border-[#e3ddcf] p-7">
              <blockquote className="text-xl leading-9 text-[#0e1a2b]">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-[#0e6156]">
                {testimonial.name} | {testimonial.stay}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
