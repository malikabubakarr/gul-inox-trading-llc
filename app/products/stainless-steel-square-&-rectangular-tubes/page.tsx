"use client";

import Image from "next/image";
import { useState } from "react";

// Example images for tubes
const productImages: Record<string, string> = {
  "304 Square Tubes": "/images/ss-304-square-tube.jpg",
  "304 Rectangular Tubes": "/images/ss-304-rect-tube.jpg",
  "201 Tubes": "/images/ss-201-tube.jpg",
  "316L Square Tubes": "/images/ss-316l-square-tube.jpg",
  "316L Rectangular Tubes": "/images/ss-316l-rect-tube.jpg",
  "#600 Finish Tubes": "/images/ss-600-tube.jpg",
};

export default function StainlessSteelTubesPage() {
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
    description: string;
    fields: { label: string; options: string[] }[];
    remarks?: string;
  }) => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const handleChange = (label: string, value: string) => {
      setSelectedOptions((prev) => ({ ...prev, [label]: value }));
    };

    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8">
        {/* Image Left */}
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

        {/* Content Right */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base font-light mb-6">{description}</p>

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
      title: "304 Square Tubes",
      description: "SS 304 Square Tubes with HL finish, standard 6-meter lengths, ideal for architectural and industrial frameworks.",
      fields: [
        { label: "Size", options: ["10×10 mm", "20×20 mm", "50×50 mm", "100×100 mm"] },
        { label: "Thickness", options: ["1.20 mm", "2.00 mm", "3.00 mm", "5.00 mm", "6.00 mm"] },
      ],
      remarks: "Limited quantities in short lengths. Some sizes marked damaged or cut pieces."
    },
    {
      title: "304 Rectangular Tubes",
      description: "SS 304 Rectangular Tubes with HL finish, 6-meter lengths, suitable for decorative, structural, and fabrication projects.",
      fields: [
        { label: "Size", options: ["20×10 mm", "50×25 mm", "100×50 mm"] },
        { label: "Thickness", options: ["1.20 mm", "2.00 mm", "3.00 mm", "5.00 mm"] },
      ],
      remarks: "Selected sizes sourced from Danube. Some items physically unavailable or short."
    },
    {
      title: "201 Tubes",
      description: "SS 201 Square & Rectangular Tubes with HL finish, economical solution for decorative and light structural applications.",
      fields: [
        { label: "Size", options: ["20×20 mm", "50×50 mm", "40×20 mm", "50×25 mm"] },
        { label: "Thickness", options: ["1.00 mm", "1.50 mm", "2.00 mm"] },
      ],
      remarks: "Some pieces marked damaged – can be supplied at competitive pricing."
    },
    {
      title: "316L Square Tubes",
      description: "Premium SS 316L Square Tubes with HL finish for marine, chemical, and food-grade applications.",
      fields: [
        { label: "Size", options: ["10×10 mm", "20×20 mm", "50×50 mm", "100×100 mm"] },
        { label: "Thickness", options: ["1.20 mm", "2.00 mm", "3.00 mm", "5.00 mm", "6.00 mm"] },
      ],
      remarks: "Some stock available in short lengths. Selected items as cut pieces."
    },
    {
      title: "316L Rectangular Tubes",
      description: "SS 316L Rectangular Tubes with HL finish, ideal for heavy fabrication, industrial, offshore, and architectural projects.",
      fields: [
        { label: "Size", options: ["20×10 mm", "50×25 mm", "100×50 mm"] },
        { label: "Thickness", options: ["1.20 mm", "2.00 mm", "3.00 mm", "5.00 mm"] },
      ]
    },
    {
      title: "#600 Finish Tubes",
      description: "Stainless Steel Tubes with #600 Finish in SS 304 and 316L grades, ideal for industrial fabrication and machine frames.",
      fields: [
        { label: "Grade", options: ["SS 304", "SS 316L"] },
        { label: "Size", options: ["Square: 10×10 mm to 50×50 mm", "Rectangular: 40×10 mm to 80×40 mm"] }
      ]
    }
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
      Stainless Steel Square & Rectangular Tubes
    </h1>
    <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox Trading LLC maintains a comprehensive inventory of stainless steel square and rectangular tubes in multiple grades, finishes, and thicknesses. Standard 6-meter lengths available, custom cut lengths on request.
    </p>
  </div>
</section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((prod) => (
            <ProductCard
              key={prod.title}
              title={prod.title}
              description={prod.description}
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
