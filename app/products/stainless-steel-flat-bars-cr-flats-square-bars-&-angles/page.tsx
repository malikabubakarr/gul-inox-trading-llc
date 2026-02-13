"use client";

import Image from "next/image";
import { useState } from "react";

/* ========================= */
/* PRODUCT IMAGES */
/* ========================= */
const productImages: Record<string, string> = {
  "Flat Bars": "/images/ss-304-flat-bar.png",
  "CR Flats": "/images/ss-304-cr-flat.png",
  "316L Flat Bars": "/images/ss-316l-flat-bar.png",
  "316L CR Flats": "/images/ss-316l-cr-flat.png",
  "Square Bars": "/images/ss-square-bar.png",
  "Angles & Heavy Sections": "/images/ss-angles.png",
  "Heavy Sections": "/images/ss-heavy-section.png",
};

/* ========================= */
/* TYPES */
/* ========================= */

type Field = {
  label: string;
  options: string[];
};

type Product = {
  title: string;
  description: string;
  fields: Field[];
  remarks?: string;
};

/* ========================= */
/* PAGE */
/* ========================= */

export default function StainlessSteelPipesPage() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  /* ========================= */
  /* INQUIRY BUILDER */
  /* ========================= */

  const handleInquiryClick = (
    productName: string,
    options: Record<string, string>
  ) => {
    let msg = `Inquiry for ${productName}`;

    Object.entries(options).forEach(([key, value]) => {
      if (value) msg += `\n${key}: ${value}`;
    });

    setPrefilledMessage(msg);

    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /* ========================= */
  /* PRODUCT CARD */
  /* ========================= */

  const ProductCard = ({ title, description, fields, remarks }: Product) => {
    const [selectedOptions, setSelectedOptions] =
      useState<Record<string, string>>({});

    const handleChange = (label: string, value: string) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [label]: value,
      }));
    };

    const isAnySelected = Object.values(selectedOptions).some(Boolean);

    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-8">
        
        {/* IMAGE */}
        {productImages[title] && (
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={productImages[title]}
              alt={title}
              width={400}
              height={400}
              className="rounded-xl object-cover w-full h-64 md:h-full hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-2">
              {title}
            </h3>

            <p className="text-gray-600 text-sm md:text-base font-light mb-6">
              {description}
            </p>

            <div
              className={`grid ${
                fields.length > 2 ? "md:grid-cols-2" : "md:grid-cols-1"
              } gap-6 mb-6`}
            >
              {fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>

                  <select
                    value={selectedOptions[field.label] || ""}
                    onChange={(e) =>
                      handleChange(field.label, e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {remarks && (
              <p className="text-sm md:text-base text-red-600 font-light mb-4">
                {remarks}
              </p>
            )}
          </div>

          <button
            disabled={!isAnySelected}
            onClick={() => handleInquiryClick(title, selectedOptions)}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 mt-4 md:mt-auto"
          >
            Request Quote
          </button>
        </div>
      </div>
    );
  };

  /* ========================= */
  /* PRODUCTS DATA */
  /* ========================= */
 const products: Product[] = [
  {
    title: "Flat Bars",
    description: "Premium stainless steel flat bars for construction, fabrication, and industrial applications.",
    fields: [
      {
        label: "Finish",
        options: ["Hot Rolled", "Cold Rolled", "2B Finish", "Brush", "Mirror"],
      },
      {
        label: "Thickness",
        options: [
          "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "15 mm",
          "20 mm", "25 mm", "30 mm", "40 mm", "50 mm", "60 mm", "65 mm",
          "70 mm", "75 mm", "80 mm", "100 mm", "120 mm", "150 mm"
        ],
      },
      {
        label: "Width",
        options: [
          "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "15 mm", "20 mm"
        ],
      },
      {
        label: "Length",
        options: ["3 m", "4 m", "6 m", "12 m", "2440 mm"],
      },
      {
        label: "Origin",
        options: ["China", "HR-India", "Viraj", "DANUBE"],
      },
      {
        label: "Grade",
        options: ["304", "316L", "304 CR", "316L CR", "316L Brush", "316L Mirror"],
      },
      {
        label: "Notes",
        options: ["1 short", "Bended", "Physically Not Found", "Short Lths", "3 Cut Pcs"],
      },
    ],
  },
  {
    title: "CR Flats",
    description: "Cold rolled flats suitable for industrial and fabrication uses.",
    fields: [
      {
        label: "Finish",
        options: ["2B Finish", "CR"],
      },
      {
        label: "Thickness",
        options: ["3 mm", "5 mm", "6 mm", "10 mm", "15 mm", "20 mm", "25 mm"],
      },
      {
        label: "Width",
        options: ["25 mm", "50 mm"],
      },
      {
        label: "Length",
        options: ["3 m", "6 m", "12 m"],
      },
      {
        label: "Origin",
        options: ["China", "India", "HR-India", "Viraj", "DANUBE"],
      },
      {
        label: "Grade",
        options: ["304 CR", "316L CR"],
      },
      {
        label: "Notes",
        options: ["Short Lths", "Physically Not Found"],
      },
    ],
  },
  {
    title: "Square Bars",
    description: "High-quality stainless steel square bars for structural and industrial applications.",
    fields: [
      { label: "Finish", options: ["Hot Rolled", "Cold Rolled"] },
      { label: "Size", options: [
          "10x10 mm", "20x20 mm", "25x25 mm", "30x30 mm", "40x40 mm",
          "50x50 mm", "60x60 mm", "65x65 mm", "75x75 mm", "80x80 mm",
          "100x100 mm", "120x120 mm", "150x150 mm"
      ] },
      { label: "Length", options: ["3 m", "6 m"] },
      { label: "Origin", options: ["China", "HR-India", "Viraj", "DANUBE"] },
      { label: "Grade", options: ["304", "316L"] },
      { label: "Notes", options: ["Bended", "Short Lths", "1 short", "3 Cut Pcs"] },
    ],
  },
  {
    title: "Angles & Heavy Sections",
    description: "Durable angles and heavy sections for industrial and construction needs.",
    fields: [
      { label: "Finish", options: ["Hot Rolled"] },
      { label: "Size", options: [
          "25x25 mm", "40x40 mm", "50x50 mm", "75x75 mm", "80x40 mm",
          "100x50 mm", "120x60 mm", "150x75 mm"
      ] },
      { label: "Length", options: ["6 m"] },
      { label: "Origin", options: ["China", "HR-India", "Viraj", "DANUBE"] },
      { label: "Grade", options: ["304", "316L"] },
      { label: "Notes", options: ["Bended", "1 short", "3 Cut Pcs"] },
    ],
  },
];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/services-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stainless Steel Flat Bars Supplier
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox TRD LLC supplies premium stainless steel flat bars and profiles across UAE for industrial and construction needs.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 tracking-wide mb-12">
            Stainless Steel Flat Bars & Profiles
          </h2>
          {products.map((prod) => (
            <ProductCard key={prod.title} {...prod} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-wide">
            Why Choose Gulf Inox Trading LLC?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            We provide premium stainless steel solutions with unmatched quality, reliability, and customer support across the UAE. Here’s why clients prefer us:
          </p>
          <div className="grid gap-10 md:grid-cols-3 text-left">
            {/* Features */}
            {[
              ["🏆", "Premium Quality", "Our stainless steel products meet international standards for durability, finish, and corrosion resistance."],
              ["🚚", "Timely Delivery", "We ensure fast and reliable delivery for all orders, supporting your project timelines efficiently."],
              ["🤝", "Trusted Supplier", "With years of experience in stainless steel trading, we are the preferred partner for businesses and industries across the UAE."],
              ["💰", "Competitive Pricing", "Our pricing strategy ensures you get the best value for premium stainless steel products."],
              ["🔧", "Custom Solutions", "We provide tailored stainless steel solutions to match your project requirements."],
              ["📞", "Excellent Support", "Our expert team is always ready to assist with inquiries, technical details, and order management."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4 text-4xl">{icon}</div>
                <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base font-light">{desc}</p>
              </div>
            ))}
          </div>
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
                <input type="text" placeholder="Full Name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                <input type="text" placeholder="Company Name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
              </div>
              <input type="text" placeholder="Estimated Quantity / Requirement" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
              <textarea rows={8} value={prefilledMessage} onChange={(e) => setPrefilledMessage(e.target.value)} placeholder="Your inquiry details..." className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all" />
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
