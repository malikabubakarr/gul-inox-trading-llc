"use client";

import { useState } from "react";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";

const productImages: Record<string, string> = {
  "Round Bars – SS 304": "/images/ss-round-bar-304.png",
  "Round Bars – SS 316L": "/images/ss-round-bar-316l.png",
  "Square Bars – SS 304": "/images/ss-square-bar-304.png",
  "Square Bars – SS 316L": "/images/ss-square-bar-316l.png",
  "Threaded Rods – SS 304": "/images/ss-threaded-rod-304.png",
  "Threaded Rods – SS 316L": "/images/ss-threaded-rod-316l.png",
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
    // Round Bars – SS 304
    {
      title: "Round Bars – SS 304",
      fields: [
        {
          label: "Size",
          options: [
            "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm",
            "18 mm", "19 mm", "20 mm", "22 mm", "24 mm", "25 mm", "26 mm", "28 mm", "30 mm",
            "32 mm", "35 mm", "36 mm", "38 mm", "40 mm", "45 mm", "50 mm", "55 mm", "60 mm",
            "65 mm", "70 mm", "75 mm", "80 mm", "85 mm", "90 mm", "95 mm", "100 mm", "110 mm"
          ]
        },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] }
      ],
      remarks: "10 mm – 26 pcs physically not available; 12 mm – 1 short length; 19 mm – short lengths."
    },

    // Round Bars – SS 316L
    {
      title: "Round Bars – SS 316L",
      fields: [
        {
          label: "Size",
          options: [
            "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm",
            "17 mm", "18 mm", "19 mm", "20 mm", "22 mm", "24 mm", "25 mm", "26 mm", "28 mm",
            "30 mm", "32 mm", "34 mm", "35 mm", "36 mm", "38 mm", "40 mm", "42 mm", "45 mm",
            "50 mm", "55 mm", "60 mm", "65 mm", "70 mm", "75 mm", "80 mm", "85 mm", "90 mm",
            "95 mm", "100 mm"
          ]
        },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] }
      ],
      remarks: "14 mm – 8 pcs short lengths; 18 mm – 4 pcs short lengths."
    },

    // Square Bars – SS 304
    {
      title: "Square Bars – SS 304",
      fields: [
        {
          label: "Size",
          options: [
            "4×4 mm", "5×5 mm", "6×6 mm", "8×8 mm", "10×10 mm", "12×12 mm", "15×15 mm",
            "16×16 mm", "18×18 mm", "19×19 mm", "20×20 mm", "25×25 mm", "30×30 mm",
            "40×40 mm", "50×50 mm"
          ]
        },
        { label: "Length", options: ["3 Mtr", "4 Mtr", "6 Mtr"] }
      ],
      remarks: "12×12 mm – 1 cut piece."
    },

    // Square Bars – SS 316L
    {
      title: "Square Bars – SS 316L",
      fields: [
        {
          label: "Size",
          options: [
            "4×4 mm", "5×5 mm", "6×6 mm", "8×8 mm", "10×10 mm", "12×12 mm", "15×15 mm",
            "16×16 mm", "18×18 mm", "19×19 mm", "20×20 mm", "25×25 mm", "30×30 mm",
            "40×40 mm", "45×45 mm", "50×50 mm"
          ]
        },
        { label: "Length", options: ["1.5 Mtr", "3 Mtr", "4 Mtr", "6 Mtr"] }
      ]
    },

    // Threaded Rods – SS 304
    {
      title: "Threaded Rods – SS 304",
      fields: [
        { label: "Size", options: ["16 mm"] },
        { label: "Length", options: ["2 Mtr", "4 Mtr", "6 Mtr"] }
      ]
    },

    // Threaded Rods – SS 316L
    {
      title: "Threaded Rods – SS 316L",
      fields: [
        { label: "Size", options: ["16 mm"] },
        { label: "Length", options: ["2 Mtr", "4 Mtr", "6 Mtr"] }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/services-bg.jpg')" }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stainless Steel Round & Square Bars and Threaded Rods
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox Trading LLC offers a comprehensive inventory of stainless steel round bars, square bars, and threaded rods in 304 & 316L grades, with HL finish, standard 6-meter lengths and custom cut lengths on request.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((prod) => (
            <ProductCard key={prod.title} title={prod.title} fields={prod.fields} remarks={prod.remarks} />
          ))}
        </div>
      </section>

 <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-wide">
            Why Choose Gulf Inox Trading LLC?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            We provide premium stainless steel solutions with unmatched         quality, reliability, and customer support across the UAE. Here’s why clients prefer us:
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
            // In the "INQUIRY FORM" section, replace the entire 
      <section id="inquiry-form" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-wide">
            Send Your Inquiry
          </h2>
          <InquiryForm initialMessage={prefilledMessage} />
        </div>
      </section>
    </div>
  );
}
