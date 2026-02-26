"use client";

import { useState } from "react";
import { ChevronDown, Award, Truck, Globe, BarChart, Users, HelpCircle, MapPin, Warehouse, Target, Eye, User } from "lucide-react";

export default function AboutClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stats = [
    { icon: <Award className="w-6 h-6 text-orange-500" />, value: "25+", label: "Years in Stainless Steel Trading" },
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

  const countries = [
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Selected African Markets", flag: "🌍" },
  ];

  return (
<div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
  {/* HERO SECTION */}
  <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/services-bg.jpg')"
      }}
    />

    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        About Gulf Inox Trading LLC
      </h1>

      <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
        Gulf Inox Trading LLC is a trusted stainless steel trading company, supplying high-quality stainless steel products to construction, fabrication, and industrial sectors across the UAE and beyond.
      </p>

      <div className="mt-8">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>




      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-medium text-gray-900">
                Our Story
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Founded with a vision to deliver reliable and consistent stainless steel supply, Gulf Inox Trading LLC has grown into a dependable partner for traders, contractors, and manufacturers.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our strength lies in quality sourcing, transparent dealings, and long-term client relationships.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-medium text-gray-900">
                Mission & Vision
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              <strong>Mission:</strong> To supply certified stainless steel products with consistent quality, competitive pricing, and timely delivery.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Vision:</strong> To become a preferred stainless steel trading partner across the Middle East and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Warehouse className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-medium text-gray-900">
                Warehouse & Logistics
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              We operate with a well-managed warehouse and strong logistics network, enabling us to handle bulk volumes, fast dispatch, and reliable delivery schedules for local and export orders.
            </p>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900">
              Countries We Supply
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {countries.map((country, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50"
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="text-sm font-medium text-gray-900">{country.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-orange-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50 group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                {s.value}
              </div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Title */}
    <div className="flex items-center gap-3 mb-12">
      <User className="w-8 h-8 text-orange-500" />
      <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
        Leadership
      </h2>
    </div>

    {/* Leadership Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Person 1 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start gap-5">

          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-gray-800 font-semibold text-sm">
              MM
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Manav Modi
            </h3>
            <p className="text-sm text-orange-500 font-medium mb-3">
              Founder & CEO
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With decades of experience in stainless steel trading, Manav Modi
              drives Gulf Inox Trading LLC with a strong focus on quality,
              reliability, and long-term partnerships.
            </p>
          </div>

        </div>
      </div>

      {/* Person 2 */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start gap-5">

          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-gray-800 font-semibold text-sm">
              JI
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Javed Iqbal
            </h3>
            <p className="text-sm text-orange-500 font-medium mb-3">
              Founder & CEO
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With deep industry expertise and leadership vision, Javed Iqbal
              ensures operational excellence, trusted partnerships, and
              consistent product quality across every project.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-medium text-gray-900 text-center">
              FAQs
            </h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl mb-4 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-sm font-medium hover:bg-orange-50 transition-colors group"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 group-hover:text-orange-500 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 bg-orange-50/50 animate-fade-in">
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