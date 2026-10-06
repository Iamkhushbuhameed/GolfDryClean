import Navbar from "../components/Navbar";
import Services from "./Services";
import Pricing from "./Pricing";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Offers from "./Offers";
import Contact from "./Contact";
import BookPickup from "./BookPickup";
import Footer from "../components/Footer";

// import heroVideo from "../assets/hero-video.mp4";
import serviceVideo from "../assets/service.mp4"

function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={serviceVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/90 via-[#0B1F3A]/55 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
          <div className="max-w-3xl">
            {/* Small Heading */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                Premium Garment Care
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Premium Care
              <br />
              <span className="font-semibold">
                for Every Fabric.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Professional dry cleaning and laundry services in Gurugram,
              crafted to keep your clothes looking fresh, elegant and new.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#book-pickup"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B1F3A] transition-all duration-300 hover:bg-white"
              >
                Book a Pickup

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#C9A45C] hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            {/* Highlights */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.15em] text-white/55">
              <span>Premium Care</span>

              <span className="h-1 w-1 rounded-full bg-[#C9A45C]" />

              <span>Pickup & Delivery</span>

              <span className="h-1 w-1 rounded-full bg-[#C9A45C]" />

              <span>Gurugram</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#services"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 transition hover:text-white sm:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <span className="h-10 w-px bg-white/30" />
        </a>
      </section>

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= PRICING ================= */}
      <Pricing />

      {/* ================= HOW IT WORKS ================= */}
      <HowItWorks />

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= OFFERS ================= */}
      <Offers />

      {/* ================= REVIEWS ================= */}


      {/* ================= CONTACT ================= */}
      <Contact />

      {/* ================= BOOK PICKUP ================= */}
      <BookPickup />

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}

export default Home;

