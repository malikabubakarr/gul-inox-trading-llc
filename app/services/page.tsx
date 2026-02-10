// app/services/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Services | Stainless Steel Supply & Trading – Gulf Inox TRD LLC",
  description:
    "Professional stainless steel supply services including bulk trading, custom cutting, logistics, and certified material sourcing across UAE & GCC.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
<section className="relative pt-44 pb-28 md:pt-52 md:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-[0.06]"
    style={{ backgroundImage: "url('/services-bg.jpg')" }}
  />

  {/* Content */}
<div className="relative max-w-6xl mx-auto px-6 text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
    Gulf Inox TRD LLC Services
  </h1>
  <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
    Gulf Inox TRD LLC provides reliable stainless steel trading and supply
    services for construction, fabrication, and industrial clients — from
    single orders to long-term supply contracts.
  </p>
</div>
</section>


      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
            We specialize in sourcing, stocking, and supplying certified
            stainless steel materials with consistent quality, competitive
            pricing, and dependable delivery schedules.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 text-center mb-12">
            Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industrial Supply",
                desc: "Certified stainless steel sheets and bars for manufacturing and industrial use.",
              },
              {
                title: "Custom Fabrication",
                desc: "Cut-to-size and finish-based supply to meet project specifications.",
              },
              {
                title: "Bulk & Project Supply",
                desc: "Reliable volume supply for contractors and long-term projects.",
              },
              {
                title: "Stock Management",
                desc: "Flexible stock solutions for traders and recurring requirements.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-10">
            How Our Service Process Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Requirement Analysis",
              "Material & Grade Selection",
              "Quotation & Confirmation",
              "Dispatch & Delivery",
            ].map((step, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 text-sm text-gray-700"
              >
                <span className="block text-xs text-gray-500 mb-2">
                  Step {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* Industrial Supply */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Industrial Stainless Steel Supply
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We supply premium stainless steel grades suitable for industrial,
                mechanical, and structural applications. All materials are
                sourced from trusted mills and supplied with proper certification.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Grades: 201, 304, 316L</li>
                <li>Sheets, flat bars & round bars</li>
                <li>Industrial & fabrication use</li>
              </ul>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/services/industrial-supply.jpg"
                alt="Industrial stainless steel supply"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Custom Fabrication */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Custom Cutting & Fabrication Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We offer cut-to-length and finish-based supply services to reduce
                on-site processing and improve project efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Custom cutting</li>
                <li>Polished & brushed finishes</li>
                <li>Project-specific preparation</li>
              </ul>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 md:order-1">
              <Image
                src="/images/services/custom-fabrication.jpg"
                alt="Custom stainless steel fabrication"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Quality & Compliance
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
            All supplied materials comply with international standards and are
            delivered with Material Test Certificates (MTC), ensuring traceability,
            performance, and peace of mind for industrial buyers.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Construction & Contracting",
              "Fabrication Units",
              "Industrial Manufacturing",
              "Trading & Distribution",
            ].map((i, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 text-sm"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-10 text-center">
            Why Choose Gulf Inox TRD LLC
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Consistent material quality",
              "Transparent pricing",
              "Reliable delivery timelines",
              "Long-term supply support",
            ].map((v, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 text-sm text-gray-700"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-4">
            Need a Reliable Stainless Steel Supplier?
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Contact our team to discuss your material requirements or request a quotation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-medium"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
