"use client";

import Image from "next/image";
import { useState } from "react";

const pipeImages: Record<string, string> = {
  "Schedule Pipes – SS 304": "/images/ss-pipes-304.jpg",
  "Schedule Pipes – SS 316L": "/images/ss-pipes-316l.jpg",
  "SMLS Pipes – SS 316L": "/images/ss-smls-pipes-316l.jpg",
};

export default function StainlessSteelPipesPage() {
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
    fields,
    remarks,
  }: {
    title: string;
    fields: { label: string; options: string[] }[];
    remarks?: string;
  }) => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleChange = (label: string, value: string) => {
      setSelectedOptions((prev) => ({ ...prev, [label]: value }));
    };

    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8">
        {pipeImages[title] && (
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={pipeImages[title]}
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
      title: "Schedule Pipes – SS 304",
      fields: [
        { label: "Size (NB)", options: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "5\"", "6\""] },
        { label: "Schedule", options: ["Sch 10", "Sch 40"] },
        { label: "OD × Thickness (mm)", options: ["21.34 × 2.11", "21.34 × 2.77", "26.67 × 2.11", "26.67 × 2.87", "33.40 × 2.77", "33.40 × 3.38", "42.16 × 2.77", "42.16 × 3.56", "48.26 × 2.77", "48.26 × 3.68", "60.33 × 2.77", "60.33 × 3.91", "73.03 × 3.05", "73.03 × 5.16", "88.90 × 3.05", "88.90 × 5.49", "114.30 × 3.05", "114.30 × 6.02", "141.30 × 3.40", "141.30 × 6.55", "168.25 × 3.40", "168.25 × 7.11"] },
      ],
    },
    {
      title: "Schedule Pipes – SS 316L",
      fields: [
        { label: "Size (NB)", options: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "3-1/2\"", "4\"", "5\"", "6\"", "8\"", "10\"", "12\""] },
        { label: "Schedule", options: ["Sch 10", "Sch 40"] },
        { label: "OD × Thickness (mm)", options: ["21.34 × 2.11", "21.34 × 2.77", "26.67 × 2.11", "26.67 × 2.87", "33.40 × 2.77", "33.40 × 3.38", "42.16 × 2.77", "42.16 × 3.56", "48.26 × 2.77", "48.26 × 3.68", "60.33 × 2.77", "60.33 × 3.91", "73.03 × 3.05", "73.03 × 5.16", "88.90 × 3.05", "88.90 × 5.49", "114.30 × 3.05", "114.30 × 6.02", "141.30 × 3.40", "141.30 × 6.55", "168.25 × 3.40", "168.25 × 7.11", "219.08 × 3.76", "219.08 × 8.18", "273.10 × 4.20", "273.10 × 9.28"] },
      ],
      remarks: "2 short lengths; 1 pc damaged; 2 pcs damaged; some sizes available."
    },
    {
      title: "SMLS Pipes – SS 316L",
      fields: [
        { label: "Brand / Origin", options: ["China", "Sandvik", "YC Inox"] },
        { label: "Size (NB)", options: ["1/2\"", "1\"", "1-1/4\"", "1-1/2\"", "6\""] },
        { label: "Schedule", options: ["Sch 10", "Sch 40"] },
        { label: "OD × Thickness (mm)", options: ["21.34 × 2.11", "42.16 × 3.56", "48.26 × 3.68", "168.25 × 3.40", "—"] },
        { label: "Finish", options: ["Mirror", "Brush", "—"] },
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
      Stainless Steel Pipes – Schedule & SMLS
    </h1>
    <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox Trading LLC supplies a comprehensive range of stainless steel pipes in SS 304 & 316L, available in Schedule 10 & 40, along with SMLS imported pipes from premium brands. Standard and short lengths available.
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
