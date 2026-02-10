"use client";

import Image from "next/image";
import { useState } from "react";

export default function StainlessSteelBarsPage() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleInquiryClick = (type: string) => {
    setPrefilledMessage(`Inquiry for Stainless Steel ${type}`);
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ================= HERO ================= */}
      <section className="pt-36 md:pt-40 pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide leading-tight">
            Stainless Steel Bars Supplier
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed font-light">
            Gulf Inox TRD LLC supplies high-quality stainless steel bars designed for strength, durability, and precision. Our bars are suitable for structural, mechanical, and industrial applications.
          </p>
        </div>
      </section>

      {/* ================= FLAT BARS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Flat Bars */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 hover:shadow-2xl transition-shadow shadow-lg">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-wide">
              Stainless Steel Flat Bars
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed font-light">
              We supply stainless steel flat bars in the following grades:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Grades:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 font-light text-sm">
                  <li>Stainless Steel 304</li>
                  <li>Stainless Steel 316</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Applications:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 font-light text-sm">
                  <li>Structural fabrication</li>
                  <li>Industrial frameworks</li>
                  <li>Construction projects</li>
                  <li>Machinery components</li>
                </ul>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {["/images/bars/flat-304.jpg", "/images/bars/flat-316.jpg"].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <Image src={src} alt="Stainless Steel Flat Bar" fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>

            {/* Inquiry Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => handleInquiryClick("Flat Bars")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Send Inquiry
              </button>
            </div>
          </div>

          {/* Round Bars */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 hover:shadow-2xl transition-shadow shadow-lg">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-wide">
              Stainless Steel Round Bars
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Grade:</h3>
                <p className="text-gray-600 font-light text-sm">304 & 316</p>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4 mt-6">Sizes:</h3>
                <p className="text-gray-600 font-light text-sm">3mm to 100mm</p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Applications:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 font-light text-sm">
                  <li>Shafts & machinery parts</li>
                  <li>Industrial manufacturing</li>
                  <li>Engineering works</li>
                  <li>Structural supports</li>
                </ul>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {["/images/bars/round-304.jpg", "/images/bars/round-316.jpg"].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <Image src={src} alt="Stainless Steel Round Bar" fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>

            {/* Inquiry Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => handleInquiryClick("Round Bars")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-16 tracking-wide">
            Why Choose Gulf Inox TRD LLC for Bars?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Fast Delivery", desc: "Timely delivery for all orders to keep your operations on track.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Quality Assurance", desc: "All bars meet international standards with strict quality checks.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Competitive Pricing", desc: "Transparent pricing with bulk order discounts.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
              { title: "Expert Support", desc: "Personalized assistance and technical guidance for your requirements.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INQUIRY FORM ================= */}
      <section id="inquiry-form" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-wide">
            Send Your Inquiry
          </h2>

          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"/>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+971 XXX XXX XXX" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"/>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" id="company" placeholder="Your company name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"/>
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity / Requirement</label>
                <input type="text" id="quantity" placeholder="e.g. 20 Tons, Project-based, Monthly supply" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} value={prefilledMessage} onChange={(e) => setPrefilledMessage(e.target.value)} placeholder="Tell us about your stainless steel bar requirements..." className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all"/>
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 px-8 py-3 text-sm font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">Submit Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
