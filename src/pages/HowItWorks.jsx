import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Book a Pickup",
    description:
      "Choose a convenient pickup time and tell us what garments need professional care.",
  },
  {
    number: "02",
    title: "We Collect",
    description:
      "Our pickup team collects your clothes carefully from your doorstep.",
  },
  {
    number: "03",
    title: "We Clean",
    description:
      "Each garment is inspected and treated according to its fabric and care requirements.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Every item goes through a final quality check before being packed for delivery.",
  },
  {
    number: "05",
    title: "We Deliver",
    description:
      "Fresh, clean and carefully packed garments are delivered back to your doorstep.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#0B1F3A] px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background Detail */}
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C9A45C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A45C]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Simple Process.
            <br />
            <span className="font-semibold">
              Exceptional Care.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            From your doorstep to ours and back again, we make professional
            garment care effortless.
          </p>

        </div>

        {/* Process */}
        <div className="relative mt-20">

          {/* Connecting Line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-white/10 lg:left-0 lg:top-[38px] lg:h-px lg:w-full lg:block" />

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-6">

            {steps.map((step) => (
              <div key={step.number} className="relative">

                {/* Number Circle */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-[#C9A45C] bg-[#0B1F3A] text-xs font-semibold text-[#C9A45C]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-6">

                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">

          <div>
            <p className="text-sm text-white/50">
              Professional care, right at your doorstep.
            </p>
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

      </div>
    </section>
  );
}

export default HowItWorks;