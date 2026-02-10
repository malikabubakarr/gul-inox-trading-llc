"use client";

import Image from "next/image";
import { useState } from "react";

const productImages: Record<string, string> = {
  "Round Bars – SS 304": "/images/ss-round-bar-304.jpg",
  "Round Bars – SS 316L": "/images/ss-round-bar-316l.jpg",
  "Square Bars – SS 304": "/images/ss-square-bar-304.jpg",
  "Square Bars – SS 316L": "/images/ss-square-bar-316l.jpg",
  "Threaded Rods – SS 304": "/images/ss-threaded-rod-304.jpg",
  "Threaded Rods – SS 316L": "/images/ss-threaded-rod-316l.jpg",
};

export default function StainlessSteelRoundBarsPage() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleInquiryClick = (productName: string, options: Record<string, string>) => {
    let msg = `Inquiry for ${productName}`;
    for (const [key, value] of Object.entries(options)) {
      if (value && value !== `Select ${key}`) msg += `\n${key}: ${value}`;
    }
    setPrefilledMessage(msg);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const ProductCard = ({
    title,
    description,
    fields,
    remarks,
  }: {
    title: string;
    description?: string;
    fields: { label: string; options: string[] }[];
    remarks?: string;
  }) => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleChange = (label: string, value: string) => {
      setSelectedOptions((prev) => ({ ...prev, [label]: value }));
    };

    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8">
        {productImages[title] && (
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={productImages[title]}
              alt={title}
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-64 md:h-full"
            />
          </div>
        )}

        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-2">{title}</h3>
            {description && <p className="text-gray-600 text-sm md:text-base font-light mb-6">{description}</p>}

            <div className={`grid ${fields.length > 2 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6 mb-6`}>
              {fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  <select
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                    onChange={(e) => handleChange(field.label, e.target.value)}
                  >
                    <option>Select {field.label}</option>
                    {field.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {remarks && (
              <p className="text-sm md:text-base text-red-600 font-light mb-4">{remarks}</p>
            )}
          </div>

          <button
            onClick={() => handleInquiryClick(title, selectedOptions)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 mt-4 md:mt-auto"
          >
            Request Quote
          </button>
        </div>
      </div>
    );
  };

  const products = [
    {
      title: "Round Bars – SS 304",
      fields: [
        { label: "Size", options: ["3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "19 mm", "20 mm", "22 mm", "24 mm", "25 mm", "26 mm", "28 mm", "30 mm", "32 mm", "35 mm", "36 mm", "38 mm", "40 mm", "45 mm", "50 mm", "55 mm", "60 mm", "65 mm", "70 mm", "75 mm", "80 mm", "85 mm", "90 mm", "95 mm", "100 mm", "110 mm"] },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] },
      ],
      remarks: "10 mm – 26 pcs physically not available; 12 mm – 1 short length; 19 mm – short lengths."
    },
    {
      title: "Round Bars – SS 316L",
      fields: [
        { label: "Size", options: ["3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "17 mm", "18 mm", "19 mm", "20 mm", "22 mm", "24 mm", "25 mm", "26 mm", "28 mm", "30 mm", "32 mm", "34 mm", "35 mm", "36 mm", "38 mm", "40 mm", "42 mm", "45 mm", "50 mm", "55 mm", "60 mm", "65 mm", "70 mm", "75 mm", "80 mm", "85 mm", "90 mm", "95 mm", "100 mm"] },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] },
      ],
      remarks: "14 mm – 8 pcs short lengths; 18 mm – 4 pcs short lengths."
    },
    {
      title: "Square Bars – SS 304",
      fields: [
        { label: "Size", options: ["4×4 mm", "5×5 mm", "6×6 mm", "8×8 mm", "10×10 mm", "12×12 mm", "15×15 mm", "16×16 mm", "18×18 mm", "19×19 mm", "20×20 mm", "25×25 mm", "30×30 mm", "40×40 mm", "50×50 mm"] },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] },
      ],
      remarks: "12×12 mm – 1 cut piece."
    },
    {
      title: "Square Bars – SS 316L",
      fields: [
        { label: "Size", options: ["4×4 mm", "5×5 mm", "6×6 mm", "8×8 mm", "10×10 mm", "12×12 mm", "15×15 mm", "16×16 mm", "18×18 mm", "19×19 mm", "20×20 mm", "25×25 mm", "30×30 mm", "40×40 mm", "45×45 mm", "50×50 mm"] },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr", "1.5 Mtr"] },
      ],
    },
    {
      title: "Threaded Rods – SS 304",
      fields: [
        { label: "Size", options: ["16 mm"] },
        { label: "Length", options: ["2 Mtr", "4 Mtr", "6 Mtr"] },
      ],
    },
    {
      title: "Threaded Rods – SS 316L",
      fields: [
        { label: "Size", options: ["16 mm"] },
        { label: "Length", options: ["2 Mtr", "4 Mtr", "6 Mtr"] },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
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
      Stainless Steel Round Bars & Rods
    </h1>
    <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox Trading LLC supplies a wide range of stainless steel round bars, square bars, and threaded rods in SS 304 & 316L. Stock maintained in standard lengths; short lengths or cut pieces are available.
    </p>
  </div>
</section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((prod) => (
            <ProductCard
              key={prod.title}
              title={prod.title}
              fields={prod.fields}
              remarks={prod.remarks}
            />
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry-form" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-wide">
            Send Your Inquiry
          </h2>
          <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+971 XXX XXX XXX" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" placeholder="Your company name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity / Requirement</label>
                <input type="text" placeholder="e.g. 20 Tons, Project-based, Monthly supply" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={8} value={prefilledMessage} onChange={(e) => setPrefilledMessage(e.target.value)} placeholder="Your inquiry details..." className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all" />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 px-8 py-3 text-sm font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
