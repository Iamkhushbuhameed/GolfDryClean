import React from 'react'

const offers = [
  {
    badge: "WELCOME OFFER",
    title: "20% OFF",
    subtitle: "Your First Order",
    description:
      "Experience premium garment care with an exclusive discount on your first order.",
    button: "Book Your Pickup",
    featured: true,
  },
  {
    badge: "FAMILY CARE",
    title: "10% OFF",
    subtitle: "Family Orders",
    description:
      "Special savings when you send multiple garments for professional cleaning and care.",
    button: "Explore Services",
  },
  {
    badge: "REGULAR CARE",
    title: "SPECIAL",
    subtitle: "Monthly Pickup",
    description:
      "Enjoy convenient recurring pickups with exclusive benefits for regular customers.",
    button: "Get Started",
  },
];

function Offers() {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-[#0B1F3A] py-24 text-white sm:py-28"
    >
      {/* Background decoration */}
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#C9A45C]/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A45C]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A45C]">
              Exclusive Offers
            </p>
            <span className="h-px w-10 bg-[#C9A45C]" />
          </div>

          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Premium Care.
            <br />
            <span className="font-semibold">Better Value.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            Enjoy special offers designed to make professional garment care
            even more convenient and rewarding.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden border p-8 transition-all duration-500 hover:-translate-y-2 ${
                offer.featured
                  ? "border-[#C9A45C] bg-[#C9A45C] text-[#0B1F3A]"
                  : "border-white/10 bg-white/[0.04] text-white hover:border-[#C9A45C]/60 hover:bg-white/[0.07]"
              }`}
            >
              {/* Featured label */}
              {offer.featured && (
                <div className="absolute right-0 top-0 bg-[#0B1F3A] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                  Best Offer
                </div>
              )}

              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
                  offer.featured
                    ? "text-[#0B1F3A]/60"
                    : "text-[#C9A45C]"
                }`}
              >
                {offer.badge}
              </p>

              <div className="mt-8">
                <h3 className="text-4xl font-semibold tracking-tight">
                  {offer.title}
                </h3>

                <p
                  className={`mt-2 text-lg font-medium ${
                    offer.featured
                      ? "text-[#0B1F3A]/80"
                      : "text-white"
                  }`}
                >
                  {offer.subtitle}
                </p>
              </div>

              <p
                className={`mt-5 min-h-[72px] text-sm leading-6 ${
                  offer.featured
                    ? "text-[#0B1F3A]/65"
                    : "text-white/55"
                }`}
              >
                {offer.description}
              </p>

              <button
                type="button"
                className={`mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                  offer.featured
                    ? "text-[#0B1F3A] hover:gap-4"
                    : "text-[#C9A45C] hover:gap-4"
                }`}
              >
                {offer.button}
                <span>→</span>
              </button>

              {/* Decorative corner */}
              <div
                className={`absolute bottom-0 right-0 h-16 w-16 border-l border-t ${
                  offer.featured
                    ? "border-[#0B1F3A]/10"
                    : "border-white/10"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            Offers may vary. Terms & conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Offers;

