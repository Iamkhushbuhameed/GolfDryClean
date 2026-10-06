import { useState } from "react";
import { Link } from "react-router-dom";

const pricingData = [
  {
    id: "men",
    name: "Men",
    description: "Shirts, trousers, suits & more",
    items: [
      ["Shirt", "₹80"],
      ["T-Shirt", "₹70"],
      ["Trouser", "₹100"],
      ["Jeans", "₹100"],
      ["Kurta", "₹100"],
      ["Blazer", "₹220"],
      ["Suit - 2 Piece", "₹350"],
      ["Suit - 3 Piece", "₹450"],
      ["Jacket", "₹200"],
      ["Waistcoat", "₹150"],
      ["Sherwani", "₹500"],
    ],
  },

  {
    id: "women",
    name: "Women",
    description: "Dresses, sarees, suits & more",
    items: [
      ["Saree", "₹250"],
      ["Blouse", "₹100"],
      ["Kurti", "₹100"],
      ["Ladies Suit", "₹180"],
      ["Dress", "₹250"],
      ["Gown", "₹350"],
      ["Lehenga", "₹600"],
      ["Anarkali", "₹300"],
      ["Dupatta", "₹100"],
      ["Jacket", "₹200"],
    ],
  },

  {
    id: "kids",
    name: "Kids",
    description: "Gentle care for little ones",
    items: [
      ["Kids Shirt", "₹60"],
      ["Kids T-Shirt", "₹50"],
      ["Kids Trouser", "₹70"],
      ["Kids Dress", "₹120"],
      ["Kids Suit", "₹180"],
      ["Kids Jacket", "₹150"],
      ["Kids Lehenga", "₹300"],
    ],
  },

  {
    id: "household",
    name: "Household",
    description: "Home linen & furnishing care",
    items: [
      ["Single Bedsheet", "₹120"],
      ["Double Bedsheet", "₹180"],
      ["Pillow Cover", "₹40"],
      ["Blanket - Single", "₹250"],
      ["Blanket - Double", "₹350"],
      ["Quilt / Razai", "₹400"],
      ["Curtain", "₹25/sq.ft"],
      ["Sofa Cover", "₹100+"],
      ["Carpet", "₹30/sq.ft"],
      ["Cushion Cover", "₹50"],
    ],
  },

  {
    id: "woollen",
    name: "Woollen",
    description: "Winter & delicate woollen care",
    items: [
      ["Sweater", "₹150"],
      ["Cardigan", "₹150"],
      ["Woollen Trouser", "₹120"],
      ["Woollen Jacket", "₹250"],
      ["Woollen Coat", "₹300"],
      ["Shawl", "₹250"],
      ["Stole", "₹150"],
      ["Woollen Blanket", "₹350"],
    ],
  },

  {
    id: "shoes-bags",
    name: "Shoes & Bags",
    description: "Professional cleaning & restoration",
    items: [
      ["Sneakers", "₹250"],
      ["Sports Shoes", "₹250"],
      ["Leather Shoes", "₹300"],
      ["Boots", "₹350"],
      ["Handbag", "₹400"],
      ["Backpack", "₹250"],
      ["Premium Bag", "₹600+"],
    ],
  },

  {
    id: "leather",
    name: "Leather",
    description: "Specialized leather treatment",
    items: [
      ["Leather Jacket", "₹500"],
      ["Leather Coat", "₹700"],
      ["Leather Shoes", "₹350"],
      ["Leather Bag", "₹500"],
      ["Leather Wallet", "₹200"],
      ["Leather Belt", "₹150"],
    ],
  },

  {
    id: "premium",
    name: "Premium Care",
    description: "Luxury & special garment care",
    items: [
      ["Bridal Wear", "₹800+"],
      ["Designer Dress", "₹500+"],
      ["Designer Saree", "₹500+"],
      ["Heavy Lehenga", "₹1000+"],
      ["Silk Garment", "₹300+"],
      ["Premium Suit", "₹500+"],
      ["Wedding Sherwani", "₹700+"],
    ],
  },
];

function Pricing() {
  const [activeCategory, setActiveCategory] = useState("men");

  const activeData = pricingData.find(
    (category) => category.id === activeCategory
  );

  return (
    <main 
    id="pricing"
    className="min-h-screen bg-[#F5F8FC] text-[#0B1F3A]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1F3A] px-6 pb-24 pt-36 lg:px-8">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9A45C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                Pricing
              </span>
            </div>

            <h1 className="text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
              Premium Care.
              <br />
              <span className="font-semibold">
                Transparent Pricing.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Explore our garment care prices by category. Every item is
              handled with the care it deserves.
            </p>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
              Our Price List
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find your garment
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#0B1F3A]/55">
              Select a category to view the starting prices for our cleaning
              and care services.
            </p>

          </div>

          {/* CATEGORY TABS */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3">

            {pricingData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border-[#0B1F3A] bg-[#0B1F3A] text-white"
                    : "border-[#0B1F3A]/15 bg-white text-[#0B1F3A]/70 hover:border-[#C9A45C] hover:text-[#0B1F3A]"
                }`}
              >
                {category.name}
              </button>
            ))}

          </div>

          {/* ACTIVE CATEGORY */}
          <div className="overflow-hidden border border-[#0B1F3A]/10 bg-white">

            {/* Category Header */}
            <div className="border-b border-[#0B1F3A]/10 bg-[#0B1F3A] p-7 sm:p-9">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C]">
                    {activeData.name}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    {activeData.name} Collection
                  </h3>
                </div>

                <p className="text-sm text-white/50">
                  {activeData.description}
                </p>

              </div>

            </div>

            {/* Price Items */}
            <div className="grid sm:grid-cols-2">

              {activeData.items.map(([item, price], index) => (
                <div
                  key={item}
                  className={`group flex items-center justify-between px-6 py-5 transition-colors duration-300 hover:bg-[#F5F8FC] sm:px-8 ${
                    index % 2 === 0
                      ? "sm:border-r border-[#0B1F3A]/10"
                      : ""
                  } border-b border-[#0B1F3A]/10`}
                >

                  <div className="flex items-center gap-4">

                    <span className="text-xs text-[#C9A45C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-[#0B1F3A]/75">
                      {item}
                    </span>

                  </div>

                  <span className="text-sm font-semibold text-[#0B1F3A]">
                    {price}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* NOTE */}
          <div className="mt-8 flex gap-4 border border-[#0B1F3A]/10 bg-white p-6">

            <span className="mt-0.5 text-[#C9A45C]">
              ✦
            </span>

            <div>
              <h4 className="text-sm font-semibold">
                Please note
              </h4>

              <p className="mt-1 text-sm leading-6 text-[#0B1F3A]/55">
                Prices shown are starting prices. Final pricing may vary
                depending on fabric, size, brand, stains, condition and
                special treatment required.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] px-6 py-20 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Need a quotation?
            </p>

            <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">
              Have something special?
              <br />
              <span className="font-semibold">
                Talk to our team.
              </span>
            </h2>

          </div>

          <Link
            to="/book-pickup"
            className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B1F3A] transition-all duration-300 hover:bg-white"
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

export default Pricing;