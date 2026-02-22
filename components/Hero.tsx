import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      className="relative h-screen flex items-end px-6 md:px-12 pb-24 md:pb-32"
      style={{
        backgroundImage: "url('/images/hrdkk-desktopp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        marginTop: "120px",
      }}
    >
      {/* Mobile Background */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-image: url('/images/heromb-mobile.png') !important;
            background-size: cover !important;
            background-position: center !important;
            margin-top: 96px;
          }
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          <span className="block text-white/60">GULF INOX TRADING LLC</span>
          <span className="block text-orange-500/70 mt-2">
             Stainless Steel Trading Company
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-l md:text-base text-white/70 mx-auto">
          Gulf Inox Trading LLC is a trusted stainless steel trading company,
          supplying premium-grade sheets, coils, and industrial steel products
          across multiple sectors.
        </p>

        <div className="mt-8 flex gap-4 justify-center relative">
          {/* Our Products Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium transition hover:scale-105 flex items-center gap-2"
            >
              Our Products
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

{/* Dropdown Menu */}
{isDropdownOpen && (
  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-72 z-50 max-h-80 overflow-y-auto">

    <Link
      href="/products/stainless-steel-sheets"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Sheets
    </Link>

    <Link
      href="/products/stainless-steel-pipes"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Pipes
    </Link>

    <Link
      href="/products/stainless-steel-round-bars-&-rods"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Round Bars & Rods
    </Link>

    <Link
      href="/products/stainless-steel-square-&-rectangular-tubes"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Square & Rectangular Tubes
    </Link>

    <Link
      href="/products/stainless-steel-flat-bars-cr-flats-square-bars-&-angles"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Flat Bars, CR Flats, Square Bars & Angles
    </Link>

    <Link
      href="/products/stainless-steel-pipes-schedule-&-SMLS"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Stainless Steel Pipes - Schedule & Seamless
    </Link>

    <Link
      href="/products/aluminium-sheets-&-plates"
      className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
      onClick={() => setIsDropdownOpen(false)}
    >
      Aluminium Sheets & Plates
    </Link>

  </div>
)}

          </div>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-full text-sm hover:border-orange-500 hover:text-orange-500 transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}