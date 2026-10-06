import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24 text-[#0B1F3A] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A45C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
              Contact Us
            </p>
          </div>

          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Let's Take Care
            <br />
            <span className="font-semibold">of Your Clothes.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#0B1F3A]/55 sm:text-base">
            Have a question about our services, pickup or garment care?
            Get in touch with the GolfDryClean team.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-[#0B1F3A] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Get In Touch
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              We’re here to help.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
              Reach out to us for pickup requests, service information,
              pricing or any other questions.
            </p>

            <div className="mt-10 space-y-7">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C]">
                  ☎
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Call Us
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C]">
                  W
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C]">
                  @
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    hello@golfdryclean.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C]">
                  ⌖
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Service Area
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Gurugram, Haryana
                  </p>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Business Hours
              </p>

              <p className="mt-2 text-sm text-white/70">
                Monday – Sunday · 8:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-[#0B1F3A]/10 bg-[#F5F8FC] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Send A Message
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              How can we help?
            </h3>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/60">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-[#0B1F3A]/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/60">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full border border-[#0B1F3A]/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/60">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-[#0B1F3A]/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1F3A]/60">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none border border-[#0B1F3A]/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#0B1F3A] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0B1F3A]"
              >
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
