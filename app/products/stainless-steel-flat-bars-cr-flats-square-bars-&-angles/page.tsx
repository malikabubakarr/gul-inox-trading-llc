"use client";

import Image from "next/image";
import { useState } from "react";

// Make sure these images exist in /public/images folder
const productImages: Record<string, string> = {
  "304 Flat Bars": "/images/ss-304-flat-bar.jpg",
  "304 CR Flats": "/images/ss-304-cr-flat.jpg",
  "316L Flat Bars": "/images/ss-316l-flat-bar.jpg",
  "316L CR Flats": "/images/ss-316l-cr-flat.jpg",
  "Square Bars": "/images/ss-square-bar.jpg",
  "Bended Angles": "/images/ss-angles.jpg",
  "Heavy Sections": "/images/ss-heavy-section.jpg",
};

export default function StainlessSteelBarsPage() {
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
        {/* Product Image */}
        {productImages[title] && (
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={productImages[title]}
              alt={title}
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-64 md:h-full"
              priority
            />
          </div>
        )}

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
      title: "304 Flat Bars",
      description: "SS 304 Flat Bars, 15–150 mm width, 3–12 mm thickness, 6-meter lengths, Mill / HR finish, ideal for structural & fabrication work.",
      fields: [
        { label: "Width", options: ["15 mm", "50 mm", "100 mm", "150 mm"] },
        { label: "Thickness", options: ["3 mm", "6 mm", "10 mm", "12 mm"] },
        { label: "Finish", options: ["Mill", "HR (Hot Rolled – India)"] },
      ],
      remarks: "Some items marked short or damaged – suitable for cost-effective supply."
    },
    {
      title: "304 CR Flats",
      description: "Cold Rolled (CR) Flats SS 304, 5×3 mm up to 25×6 mm, 3–6 m lengths, CR / Brush / Mirror finishes, suitable for precision fabrication & decorative applications.",
      fields: [
        { label: "Size", options: ["5×3 mm", "10×5 mm", "25×6 mm"] },
        { label: "Length", options: ["3 m", "4 m", "6 m"] },
        { label: "Finish", options: ["CR", "Brush", "Mirror"] },
      ],
      remarks: "Bulk quantities available. Certain lots directly from mill."
    },
    {
      title: "316L Flat Bars",
      description: "SS 316L Flat Bars, 20–150 mm width, 3–12 mm thickness, 6-meter lengths, ideal for marine, chemical, and food-grade environments.",
      fields: [
        { label: "Width", options: ["20 mm", "50 mm", "100 mm", "150 mm"] },
        { label: "Thickness", options: ["3 mm", "6 mm", "10 mm", "12 mm"] },
        { label: "Origin", options: ["Viraj", "HR-India", "Danube", "China"] },
      ],
      remarks: "Selected sizes include short lengths and limited availability."
    },
    {
      title: "316L CR Flats",
      description: "SS 316L CR Flats, 5×3 mm up to 25×10 mm, Brush / CR / Mirror finishes, premium mirror finish available in selected widths.",
      fields: [
        { label: "Size", options: ["5×3 mm", "10×5 mm", "25×10 mm"] },
        { label: "Finish", options: ["Brush", "CR", "Mirror"] },
      ],
      remarks: "Some sizes physically unavailable or short lengths."
    },
    {
      title: "Square Bars",
      description: "SS 304 & 316L Square Bars, 20×20 mm to 100×100 mm, thickness 3–10 mm, 6-meter lengths, for structural & industrial frameworks.",
      fields: [
        { label: "Size", options: ["20×20 mm", "50×50 mm", "100×100 mm"] },
        { label: "Thickness", options: ["3 mm", "6 mm", "10 mm"] },
      ],
    },
    {
      title: "Bended Angles",
      description: "SS 316L Bended Angles, factory-bended for high precision structural and industrial applications.",
      fields: [
        { label: "Size", options: ["40×40×6 mm", "50×50×3 mm", "50×50×4 mm", "100×100×6 mm", "100×100×10 mm"] },
      ],
    },
    {
      title: "Heavy Sections",
      description: "Heavy Sections & Rectangular Profiles from Viraj / China, 80×40 mm to 150×75 mm, thickness up to 6 mm, Grades 304 & 316L, ideal for structural & industrial installations.",
      fields: [
        { label: "Size", options: ["80×40 mm", "100×50 mm", "150×75 mm"] },
        { label: "Thickness", options: ["3 mm", "4 mm", "6 mm"] },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
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
      Stainless Steel Flat Bars, CR Flats, Square Bars & Angles Supplier
    </h1>

    <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox TRD LLC supplies high-quality stainless steel flat bars, CR flats, square bars, and angles in various grades and sizes for fabrication, construction, and industrial applications across the UAE. Our products meet international quality standards and are sourced from reliable mills.
    </p>
  </div>
</section>



      {/* Products Section */}
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

      {/* Inquiry Form */}
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
