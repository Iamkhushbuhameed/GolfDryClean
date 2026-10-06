


import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
  { name: "Offers", href: "#offers" },
//   { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061426]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="group shrink-0"
        >
          <div className="text-xl font-semibold tracking-[0.18em] text-white">
            GOLF
          </div>

          <div className="mt-0.5 text-[9px] font-medium tracking-[0.42em] text-[#C9A45C]">
            DRYCLEAN
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.12em] text-white/70 transition duration-300 hover:text-[#C9A45C]"
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#book-pickup"
            className="ml-2 inline-flex items-center gap-2 bg-[#C9A45C] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0B1F3A] transition duration-300 hover:bg-white"
          >
            Book a Pickup
            <span>→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#061426]/95 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="border-b border-white/10 py-4 text-xs font-medium  tracking-[0.15em] text-white/75 transition hover:text-[#C9A45C]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#book-pickup"
              onClick={handleNavClick}
              className="mt-5 inline-flex items-center justify-center gap-2 bg-[#C9A45C] px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B1F3A]"
            >
              Book a Pickup
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
