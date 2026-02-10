"use client";

import Image from "next/image";
import { useState } from "react";

const productImages: Record<string, string> = {
  "304 Sheets": "/images/ss-304-sheet.jpg",
  "304 Coils": "/images/sss-304-coil.jpg",
  "316L Sheets": "/images/ss-316l-sheet.jpg",
  "316L Coils": "/images/ss-316l-coil.jpg",
  "Chequered Plate": "/images/ss-chequered.jpg",
  "201 Sheets": "/images/ss-201-sheet.jpg",
  "430 Sheets": "/images/ss-430-sheet.jpg",
  "Aluminium Sheet": "/images/aluminium-sheet.jpg",
  "Nylon Rod": "/images/nylon-rod.jpg",
  "Mixed SS Bundle": "/images/mixed-ss.jpg",
};

export default function StainlessSteelSheetsPage() {
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
    title: "304 Sheets",
    description:
      "Premium stainless steel sheets with excellent corrosion resistance, suitable for architectural, industrial, and fabrication applications.",
    fields: [
      { label: "Finish", options: ["Brush Finish (#4 / Laser / PVC)", "2B Finish", "DC Finish", "#1 Finish (Hot Rolled)", "Mirror Finish (#8 / 12K)", "Golden Mirror Finish"] },
      { label: "Thickness", options: ["0.40 mm", "0.60 mm", "0.80 mm", "1.00 mm", "2.00 mm", "3.00 mm", "Up to 30.00 mm"] },
      { label: "Size", options: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft", "1250 × 2500 mm", "1500 × 3000 mm", "1500 × 6000 mm"] },
      { label: "Origin", options: ["China", "Taiwan", "Italy", "Jindal (India)", "Belgium"] },
    ],
  },
  {
    title: "304 Coils",
    description:
      "High-quality stainless steel 304 coils suitable for fabrication, rolling, cutting, and industrial processing applications.",
    fields: [
      { label: "Finish", options: ["2B Finish", "Brush Finish (#4 Laser PVC)"] },
      { label: "Thickness", options: ["0.80 mm", "1.00 mm", "1.20 mm", "1.50 mm", "2.00 mm"] },
      { label: "Width", options: ["1219 mm", "1250 mm"] },
    ],
  },
  {
    title: "316L Sheets",
    description:
      "Molybdenum-bearing stainless steel offering superior corrosion resistance, ideal for marine, chemical, pharmaceutical, and harsh industrial environments.",
    fields: [
      { label: "Finish", options: ["2B Finish", "Brush Finish (#4 / Novacel / Laser)", "#1 Finish", "Mirror Finish (#8 / 12K)", "Golden Mirror Finish"] },
      { label: "Thickness", options: ["0.50 mm", "0.80 mm", "1.00 mm", "1.50 mm", "2.00 mm", "3.00 mm", "5.00 mm", "10.00 mm", "Up to 50.00 mm"] },
      { label: "Size", options: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft", "1500 × 3000 mm", "1500 × 6000 mm", "2000 × 6000 mm"] },
      { label: "Origin", options: ["China", "Taiwan", "Jindal (India)", "Finland (Outokumpu)", "Belgium", "South Africa"] },
    ],
  },
  {
    title: "316L Coils",
    description:
      "High-quality stainless steel 316L coils suitable for fabrication, rolling, cutting, and industrial processing applications.",
    fields: [
      { label: "Finish", options: ["2B Finish"] },
      { label: "Thickness", options: ["0.80 mm", "1.00 mm", "1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm"] },
      { label: "Width", options: ["1219 mm"] },
    ],
  },
  {
  title: "Chequered Plate",
  description:
    "Durable stainless steel chequered plates ideal for flooring, platforms, staircases, and anti-slip applications.",
  fields: [
    { label: "Grades", options: ["304", "316L"] },
    { label: "Finish", options: ["2B Chequered"] },
    { label: "Thickness", options: ["1.50 mm", "2.00 mm", "3.00 mm", "4.00 mm", "5.00 mm", "6.00 mm"] },
    { label: "Size", options: ["4 × 8 ft"] },
  ],
},
  {
    title: "201 Sheets",
    description:
      "Cost-effective stainless steel sheets suitable for light industrial and decorative applications.",
    fields: [
      { label: "Finish", options: ["Brush Finish", "2B Finish", "Mirror Finish", "#1 Finish"] },
      { label: "Thickness", options: ["0.50 mm", "0.80 mm", "1.00 mm", "1.50 mm", "2.00 mm", "2.50 mm", "3.00 mm"] },
      { label: "Size", options: ["4 × 8 ft", "4 × 10 ft", "1219 × 1900 mm"] },
    ],
  },
  {
    title: "430 Sheets",
    description:
      "Ferritic stainless steel with excellent corrosion resistance and attractive finish, suitable for kitchen, architectural, and appliance applications.",
    fields: [
      { label: "Finish", options: ["BA Finish (PVC)", "2B Finish", "Brush Finish (#4)"] },
      { label: "Thickness", options: ["0.50 mm", "0.80 mm", "1.00 mm", "1.20 mm", "1.50 mm"] },
    ],
  },
  {
    title: "Aluminium Sheets",
    description:
      "Lightweight and corrosion-resistant aluminium sheets for industrial, construction, and decorative applications.",
    fields: [
      { label: "Type", options: ["Aluminium Chequered Sheets"] },
      { label: "Thickness", options: ["1.50 mm"] },
      { label: "Size", options: ["4 × 8 ft"] },
    ],
  },
  {
    title: "Nylon Rod",
    description:
      "High-strength nylon rods suitable for machining, industrial components, and mechanical applications.",
    fields: [
      { label: "Diameter", options: ["25 mm", "40 mm", "50 mm", "90 mm", "100 mm"] },
      { label: "Length", options: ["1 Meter"] },
      { label: "Colors", options: ["Black", "White"] },
    ],
  },
  {
    title: "Mixed Stainless Steel Bundles",
    description:
      "Bundles of stainless steel sheets with mixed dimensions, ideal for fabrication and resale.",
    fields: [
      { label: "Grades", options: ["304"] },
      { label: "Finish", options: ["2B", "BA"] },
      { label: "Sizes", options: ["Mixed dimensions"] },
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
      Stainless Steel Sheets Supplier
    </h1>

    <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox TRD LLC supplies premium stainless steel sheets for construction, fabrication, and industrial applications across UAE.
    </p>
  </div>
</section>


      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 tracking-wide mb-12">
            Stainless Steel Grades We Supply
          </h2>

          {products.map((prod) => (
            <ProductCard key={prod.title} title={prod.title} description={prod.description} fields={prod.fields} />
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-wide">
      Why Choose Gulf Inox TRD LLC?
    </h2>
    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
      We provide premium stainless steel solutions with unmatched quality, reliability, and customer support across the UAE. Here’s why clients prefer us:
    </p>

    <div className="grid gap-10 md:grid-cols-3 text-left">
      {/* Feature 1 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">🏆</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Premium Quality</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          Our stainless steel products meet international standards for durability, finish, and corrosion resistance.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">🚚</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Timely Delivery</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          We ensure fast and reliable delivery for all orders, supporting your project timelines efficiently.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">🤝</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Trusted Supplier</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          With years of experience in stainless steel trading, we are the preferred partner for businesses and industries across the UAE.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">💰</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Competitive Pricing</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          Our pricing strategy ensures you get the best value for premium stainless steel products.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">🔧</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Custom Solutions</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          We provide tailored stainless steel solutions to match your project requirements.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-orange-600 mb-4 text-4xl">📞</div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">Excellent Support</h3>
        <p className="text-gray-600 text-sm md:text-base font-light">
          Our expert team is always ready to assist with inquiries, technical details, and order management.
        </p>
      </div>
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
              {/* Name, Email, Phone, Company */}
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
