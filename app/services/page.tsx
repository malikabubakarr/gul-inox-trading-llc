// app/services/page.tsx
import Image from "next/image";
import { Truck, Scissors, Package, ClipboardCheck, CheckCircle, Users, Award, Zap, Target, Shield, Cog, Star } from "lucide-react";

export const metadata = {
  title: "Services | Stainless Steel Supply & Trading – Gulf Inox Trading LLC",
  description:
    "Professional stainless steel supply services including bulk trading, custom cutting, logistics, and certified material sourcing across UAE & GCC.",
};

export default function ServicesPage() {
  return (
 <div className="bg-white min-h-screen">
  {/* HERO SECTION */}
  <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
    
    {/* Full HD Background with Parallax */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/services-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Gulf Inox Trading Services
      </h1>
      <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
        Gulf Inox Trading LLC provides reliable stainless steel trading and supply services for construction, fabrication, and industrial clients — from single orders to long-term supply contracts.
      </p>
      <div className="mt-8">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1"
        >
          Get Started
        </a>
      </div>
    </div>

  </section>


      {/* What We Do */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Target className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900 text-center">
              What We Do
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl mx-auto text-center">
            We specialize in sourcing, stocking, and supplying certified stainless steel materials with consistent quality, competitive pricing, and dependable delivery schedules.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Cog className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900 text-center">
              Core Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Package className="w-8 h-8 text-orange-500" />,
                title: "Industrial Supply",
                desc: "Certified stainless steel sheets and bars for manufacturing and industrial use.",
              },
              {
                icon: <Scissors className="w-8 h-8 text-orange-500" />,
                title: "Custom Fabrication",
                desc: "Cut-to-size and finish-based supply to meet project specifications.",
              },
              {
                icon: <Truck className="w-8 h-8 text-orange-500" />,
                title: "Bulk & Project Supply",
                desc: "Reliable volume supply for contractors and long-term projects.",
              },
              {
                icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
                title: "Stock Management",
                desc: "Flexible stock solutions for traders and recurring requirements.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-base font-medium text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
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
      <section className="py-20 bg-gradient-to-r from-orange-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Zap className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900 text-center">
              How Our Service Process Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-6 h-6 text-orange-500" />, step: "Requirement Analysis" },
              { icon: <CheckCircle className="w-6 h-6 text-orange-500" />, step: "Material & Grade Selection" },
              { icon: <Award className="w-6 h-6 text-orange-500" />, step: "Quotation & Confirmation" },
              { icon: <Truck className="w-6 h-6 text-orange-500" />, step: "Dispatch & Delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-orange-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 group"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <span className="block text-xs text-gray-500 mb-2">
                  Step {i + 1}
                </span>
                <p className="text-gray-700 font-medium text-sm group-hover:text-orange-600 transition-colors">{item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Industrial Supply */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-medium text-gray-900">
                  Industrial Stainless Steel Supply
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We supply premium stainless steel grades suitable for industrial, mechanical, and structural applications. All materials are sourced from trusted mills and supplied with proper certification.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Grades: 201, 304, 316L</li>
                <li>Sheets, flat bars & round bars</li>
                <li>Industrial & fabrication use</li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/services/industrial-supply.jpg"
                alt="Industrial stainless steel supply"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Custom Fabrication */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-4">
              <div className="flex items-center gap-3">
                <Scissors className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-medium text-gray-900">
                  Custom Cutting & Fabrication Support
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We offer cut-to-length and finish-based supply services to reduce on-site processing and improve project efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Custom cutting</li>
                <li>Polished & brushed finishes</li>
                <li>Project-specific preparation</li>
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg md:order-1 hover:shadow-xl transition-all duration-300">
              <Image
                src="/images/services/custom-fabrication.jpg"
                alt="Custom stainless steel fabrication"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-medium text-gray-900">
                Quality & Compliance
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              All supplied materials comply with international standards and are delivered with Material Test Certificates (MTC), ensuring traceability, performance, and peace of mind for industrial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Star className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Construction & Contracting",
              "Fabrication Units",
              "Industrial Manufacturing",
              "Trading & Distribution",
            ].map((i, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Award className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900 text-center">
              Why Choose Gulf Inox Trading LLC
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Consistent material quality",
              "Transparent pricing",
              "Reliable delivery timelines",
              "Long-term supply support",
            ].map((v, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 text-sm text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-4">
            Need a Reliable Stainless Steel Supplier?
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Contact our team to discuss your material requirements or request a quotation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}