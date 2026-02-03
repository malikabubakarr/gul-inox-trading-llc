// app/services/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Services | Premium Stainless Steel Supply & Solutions – Gulf Inox TRD LLC",
  description: "Explore our services including industrial supply, custom fabrication, bulk delivery, and stock management for stainless steel products in UAE.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Premium Stainless Steel Supply & Solutions
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed font-light">
            Supplying top-quality stainless steel products for construction, industrial, and fabrication industries. From bulk orders to custom fabrication, we deliver reliable solutions tailored to your needs.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
        {/* Removed Background Image */}
      </section>

      {/* Services Grid / Overview */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12 tracking-tight">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏭",
                title: "Industrial Supply",
                description: "Stainless steel bars and sheets for factories and manufacturers, ensuring durability and performance.",
              },
              {
                icon: "🛠️",
                title: "Custom Fabrication",
                description: "Cut-to-size or pre-processed steel bars tailored to your project specifications.",
              },
              {
                icon: "🚚",
                title: "Bulk Delivery",
                description: "Reliable shipping across UAE and GCC with timely logistics for large orders.",
              },
              {
                icon: "📦",
                title: "Stock Management",
                description: "Flexible stock solutions for small traders, contractors, and ongoing projects.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 ease-out transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Industrial Supply */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Industrial Supply</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-6">
                We supply premium stainless steel bars (304 & 316) in various sizes for industrial applications, ensuring high strength and corrosion resistance. Our products are sourced from trusted manufacturers and undergo rigorous quality checks.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 font-light text-sm">
                <li>Grades: 201, 304, 316L</li>
                <li>Sizes: Sheets and bars up to 100mm</li>
                <li>Applications: Machinery, equipment, and structural components</li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/services/industrial-supply.jpg" // Placeholder: rows of stainless steel bars
                alt="Industrial Supply"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Custom Fabrication */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Custom Fabrication</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-6">
                Our team provides cut-to-size services, pre-polished finishes, and precision fabrication to meet your project requirements. We handle everything from small custom orders to large-scale industrial needs.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 font-light text-sm">
                <li>Custom cutting and shaping</li>
                <li>Polishing and finishing options</li>
                <li>Precision for construction and fabrication</li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/services/custom-fabrication.jpg" // Placeholder: worker cutting steel
                alt="Custom Fabrication"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Reliability Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-12 tracking-tight">
            Why Choose Gulf Inox TRD LLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✅",
                title: "Quality Stainless Steel",
                description: "Premium 304 & 316 grades with certifications.",
              },
              {
                icon: "⏰",
                title: "On-Time Delivery",
                description: "Reliable shipping across UAE & GCC.",
              },
              {
                icon: "🛠️",
                title: "Expert Support",
                description: "Dedicated team for industrial clients.",
              },
              {
                icon: "📏",
                title: "Flexible Order Sizes",
                description: "From small batches to bulk quantities.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 ease-out"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele / Industries Served */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-12 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We cater to a wide range of industries, providing tailored stainless steel solutions for every need.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Builders & Contractors", "Fabrication Units", "Industrial Manufacturers", "Traders & Suppliers"].map((industry, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:bg-orange-50 transition-colors duration-300 shadow-sm"
              >
                <p className="text-gray-900 font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry / CTA Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 py-16 md:py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-tight">
            Ready to Source Premium Stainless Steel?
          </h2>
          <p className="mb-8 font-light text-sm md:text-base">
            Contact us today for a custom quote or to discuss your project needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-700 px-8 py-3 rounded-full font-medium hover:scale-105 transition text-sm"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}