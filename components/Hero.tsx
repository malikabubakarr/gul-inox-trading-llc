import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-desktop.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile Background */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-image: url('/images/hero-mobile.jpg') !important;
          }
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

{/* Content - Bottom aligned */}
<div className="relative z-10 max-w-4xl text-center mx-auto">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
    <span className="block text-white/50">
      Stainless Steel
    </span>
    <span className="block text-orange-500/50 mt-2">
      Trading Company
    </span>
  </h1>

  <p className="mt-6 max-w-2xl text-sm md:text-base text-gray-200/50 leading-relaxed mx-auto">
    Gulf Inox TRD LLC is a trusted stainless steel trading company,
    supplying premium-grade sheets, coils, and industrial steel products
    across multiple sectors.
  </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Our Products
          </Link>

          <Link
            href="/contact"
            className="border-2 border-white text-white hover:border-orange-500 hover:text-orange-500 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}