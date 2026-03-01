import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Slideshow state
  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  const desktopImages = [
    "/images/desktop-1.jpg",
    "/images/desktop-2.jpg",
    "/images/desktop-3.jpg",
  ];

  const mobileImages = [
    "/images/mobile-1.jpg",
    "/images/mobile-2.jpg",
    "/images/mobile-3.jpg",
  ];

  // Slide change every 3 seconds for faster slide
  useEffect(() => {
    const desktopInterval = setInterval(() => {
      setCurrentDesktop((prev) => (prev + 1) % desktopImages.length);
    }, 3000);

    const mobileInterval = setInterval(() => {
      setCurrentMobile((prev) => (prev + 1) % mobileImages.length);
    }, 3000);

    return () => {
      clearInterval(desktopInterval);
      clearInterval(mobileInterval);
    };
  }, []);

  // Determine current slide for desktop/mobile
  const isFirstDesktop = currentDesktop === 0;
  const isFirstMobile = currentMobile === 0;

  return (
    // Added z-20 to ensure this section sits above other content sections
    // Added overflow-visible so the dropdown doesn't get cut off
    <section
      className="relative z-20 h-screen flex items-end px-6 md:px-12 pb-24 md:pb-32 overflow-visible"
      style={{ marginTop: "120px" }}
    >
      {/* Desktop Slideshow */}
      <div className="absolute inset-0 hidden md:block z-0">
        {desktopImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentDesktop ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div className="absolute inset-0 md:hidden z-0">
        {mobileImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentMobile ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-center mx-auto w-full">
        {/* Show hero text only on first slide */}
        {(isFirstDesktop || isFirstMobile) && (
          <>
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
          </>
        )}

        {/* Buttons appear on all slides */}
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