import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Dry Cleaning",
    description:
      "Expert dry cleaning for suits, dresses, ethnic wear and delicate garments using fabric-safe processes.",
    tag: "Everyday Luxury",
  },
  {
    number: "02",
    title: "Laundry Care",
    description:
      "Deep cleaning and hygienic washing designed to keep your everyday clothes fresh and comfortable.",
    tag: "Fresh & Clean",
  },
  {
    number: "03",
    title: "Steam Press",
    description:
      "Professional steam pressing that gives your garments a crisp, polished and elegant finish.",
    tag: "Perfect Finish",
  },
  {
    number: "04",
    title: "Shoe & Bag Care",
    description:
      "Specialized cleaning and care for premium shoes, handbags and accessories.",
    tag: "Special Care",
  },
  {
    number: "05",
    title: "Premium Garment Care",
    description:
      "Carefully handled treatment for designer wear, silk, wool, bridal outfits and other delicate fabrics.",
    tag: "Delicate Fabrics",
  },
  {
    number: "06",
    title: "Pickup & Delivery",
    description:
      "Convenient doorstep pickup and delivery across selected areas of Gurugram.",
    tag: "Doorstep Service",
  },
];

function Services() {
  return (
    <main 
    id="services"
    className="min-h-screen bg-[#F5F8FC] text-[#0B1F3A]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F3A] px-6 pb-24 pt-36 lg:px-8">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9A45C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                Our Services
              </span>
            </div>

            <h1 className="text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
              Care That Goes
              <br />
              <span className="font-semibold">
                Beyond Cleaning.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              From everyday garments to your most delicate pieces, every item
              receives thoughtful care and a professional finish.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Professional garment care
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#0B1F3A]/60">
              Quality processes, careful handling and attention to detail —
              because every fabric deserves the right treatment.
            </p>
          </div>

          {/* Service Grid */}
          <div className="grid gap-px overflow-hidden border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group relative bg-white p-8 transition-all duration-500 hover:bg-[#0B1F3A] sm:p-10"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium tracking-[0.2em] text-[#C9A45C]">
                    {service.number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-[#0B1F3A]/40 transition-colors duration-500 group-hover:text-white/40">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-12 text-2xl font-semibold text-[#0B1F3A] transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-[#0B1F3A]/60 transition-colors duration-500 group-hover:text-white/60">
                  {service.description}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#0B1F3A] transition-all duration-500 group-hover:gap-5 group-hover:text-[#C9A45C]">
                  Explore Service
                  <span>→</span>
                </div>

                {/* Gold Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A45C]">
              Ready when you are
            </p>

            <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">
              Give your clothes the care
              <br />
              <span className="font-semibold">they deserve.</span>
            </h2>
          </div>

          <Link
            to="/book-pickup"
            className="group inline-flex items-center gap-3 bg-[#C9A45C] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B1F3A] transition-all duration-300 hover:bg-white"
          >
            Book a Pickup
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Services;