function Footer() {
  return (
    <footer className="bg-[#061426] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block">
              <div className="text-xl font-semibold tracking-[0.18em]">
                GOLF
              </div>

              <div className="mt-1 text-[10px] font-medium tracking-[0.42em] text-[#C9A45C]">
                DRYCLEAN
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Premium dry cleaning and laundry care designed to keep your
              clothes looking fresh, elegant and new.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#C9A45C]">
              Where Clothes Feel New.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#home"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#services"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Services
              </a>

              <a
                href="#pricing"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#about"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
              Our Services
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-sm text-white/55">
                Dry Cleaning
              </p>

              <p className="text-sm text-white/55">
                Laundry Care
              </p>

              <p className="text-sm text-white/55">
                Steam Press
              </p>

              <p className="text-sm text-white/55">
                Shoe & Bag Care
              </p>

              <p className="text-sm text-white/55">
                Premium Garment Care
              </p>

              <p className="text-sm text-white/55">
                Pickup & Delivery
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Call Us
                </p>

                <p className="mt-2 text-sm text-white/65">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Email
                </p>

                <p className="mt-2 text-sm text-white/65">
                  hello@golfdryclean.com
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Service Area
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Gurugram, Haryana
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A45C] transition hover:gap-3"
              >
                Contact Us
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pickup CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-medium">
              Ready to give your clothes the care they deserve?
            </p>

            <p className="mt-2 text-sm text-white/40">
              Schedule a convenient doorstep pickup today.
            </p>
          </div>

          <a
            href="#book-pickup"
            className="inline-flex shrink-0 items-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:bg-white"
          >
            Book a Pickup
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} GolfDryClean. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
