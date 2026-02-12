"use client";

import { useState } from "react";
import { ChevronDown, Award, Truck, Globe, BarChart, Users, HelpCircle } from "lucide-react";

export default function AboutClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stats = [
    { icon: <Award className="w-6 h-6 text-orange-500" />, value: "10+", label: "Years in Stainless Steel Trading" },
    { icon: <Users className="w-6 h-6 text-orange-500" />, value: "500+", label: "Active Clients" },
    { icon: <BarChart className="w-6 h-6 text-orange-500" />, value: "1,000+", label: "Tons Supplied Annually" },
    { icon: <Globe className="w-6 h-6 text-orange-500" />, value: "6+", label: "Countries Served" },
  ];

  const faqs = [
    {
      q: "What stainless steel grades do you supply?",
      a: "We supply SS 201, 304, and 316L in sheets, pipes, flat bars, and round bars for commercial and industrial use.",
    },
    {
      q: "Do you handle bulk and custom orders?",
      a: "Yes. We specialize in bulk supply and custom orders based on size, thickness, finish, and grade requirements.",
    },
    {
      q: "Which industries do you serve?",
      a: "Construction, fabrication, food processing, hospitality, manufacturing, and marine industries.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/services-bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Gulf Inox TRD LLC
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox TRD LLC is a trusted stainless steel trading company, supplying high-quality stainless steel products to construction, fabrication, and industrial sectors across the UAE and beyond.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Founded with a vision to deliver reliable and consistent stainless
              steel supply, Gulf Inox TRD LLC has grown into a dependable partner
              for traders, contractors, and manufacturers.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our strength lies in quality sourcing, transparent dealings, and
              long-term client relationships.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Mission & Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              <strong>Mission:</strong> To supply certified stainless steel
              products with consistent quality, competitive pricing, and timely
              delivery.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Vision:</strong> To become a preferred stainless steel
              trading partner across the Middle East and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Warehouse & Logistics
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
            We operate with a well-managed warehouse and strong logistics
            network, enabling us to handle bulk volumes, fast dispatch, and
            reliable delivery schedules for local and export orders.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Countries We Supply
          </h2>
          <p className="text-gray-600 text-sm">
            United Arab Emirates, Saudi Arabia, Oman, Qatar, Pakistan, and
            selected African markets.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">
                {s.value}
              </div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CEO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            Leadership
          </h2>
          <div className="border border-gray-200 rounded-2xl p-8 flex items-start gap-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gray-200" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Ahmed Al-Rashid
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Founder & CEO
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With decades of experience in stainless steel trading, Ahmed
                Al-Rashid leads Gulf Inox TRD LLC with a strong focus on quality,
                reliability, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
            FAQs
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl mb-4 shadow-md hover:shadow-lg transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-sm font-medium hover:bg-orange-50 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}