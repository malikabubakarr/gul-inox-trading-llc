"use client";

import { section } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

const pipeImages: Record<string, string> = {
  "Schedule Pipes – SS 304": "/images/ss-pipes-304.png",
  "Schedule Pipes – SS 316L": "/images/ss-pipes-316l.png",
  "SMLS Pipes – SS 316L": "/images/ss-smls-pipes-316l.png",
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
            <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">{title}</h3>

            <div className={`grid ${fields.length > 2 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6 mb-6`}>
              {fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  <select
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
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
  // ===============================
  // SCHEDULE PIPES — SS 304
  // ===============================
  {
    title: "Schedule Pipes – SS 304",
    fields: [
      {
        label: "Size (NB)",
        options: [
          '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"',
          '2"', '2-1/2"', '3"', '4"', '5"', '6"'
        ]
      },
      {
        label: "Schedule",
        options: ["Sch 10", "Sch 40"]
      },
      {
        label: "OD × Thickness (mm)",
        options: [
          "21.34 × 2.11",
          "21.34 × 2.77",
          "26.67 × 2.11",
          "26.67 × 2.87",
          "33.40 × 2.77",
          "33.40 × 3.38",
          "42.16 × 2.77",
          "42.16 × 3.56",
          "48.26 × 2.77",
          "48.26 × 3.68",
          "60.33 × 2.77",
          "60.33 × 3.91",
          "73.03 × 3.05",
          "73.03 × 5.16",
          "88.90 × 3.05",
          "88.90 × 5.49",
          "114.30 × 3.05",
          "114.30 × 6.02",
          "141.30 × 3.40",
          "141.30 × 6.55",
          "168.25 × 3.40",
          "168.25 × 7.11"
        ]
      }
    ]
  },

  // ===============================
  // SCHEDULE PIPES — SS 316L
  // ===============================
  {
    title: "Schedule Pipes – SS 316L",
    fields: [
      {
        label: "Size (NB)",
        options: [
          '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"',
          '2"', '2-1/2"', '3"', '3-1/2"', '4"',
          '5"', '6"', '8"', '10"', '12"'
        ]
      },
      {
        label: "Schedule",
        options: ["Sch 10", "Sch 40"]
      },
      {
        label: "OD × Thickness (mm)",
        options: [
          "21.34 × 2.11",
          "21.34 × 2.77",
          "26.67 × 2.11",
          "26.67 × 2.87",
          "33.40 × 2.77",
          "33.40 × 3.38",
          "42.16 × 2.77",
          "42.16 × 3.56",
          "48.26 × 2.77",
          "48.26 × 3.68",
          "60.33 × 2.77",
          "60.33 × 3.91",
          "73.03 × 3.05",
          "73.03 × 5.16",
          "88.90 × 3.05",
          "88.90 × 5.49",
          "114.30 × 3.05",
          "114.30 × 6.02",
          "141.30 × 3.40",
          "141.30 × 6.55",
          "168.25 × 3.40",
          "168.25 × 7.11",
          "219.08 × 3.76",
          "219.08 × 8.18",
          "273.10 × 4.20",
          "273.10 × 9.28"
        ]
      }
    ],
    remarks:
      "Includes short lengths, damaged pieces, DANUBE material, and limited availability in some sizes (3-1/2 & 12 inch thickness not specified)."
  },

  // ===============================
  // SMLS PIPES — SS 316L
  // ===============================
  {
    title: "SMLS Pipes – SS 316L",
    fields: [
      {
        label: "Brand / Origin",
        options: ["China", "Sandvik", "YC Inox"]
      },
      {
        label: "Size (NB)",
        options: ['1/2"', '1"', '1-1/4"', '1-1/2"', '6"']
      },
      {
        label: "Schedule",
        options: ["Sch 10", "Sch 40"]
      },
      {
        label: "OD × Thickness (mm)",
        options: [
          "21.34 × 2.11",
          "42.16 × 3.56",
          "42.16 × 2.77",
          "48.26 × 3.68",
          "168.25 × 3.40",
          "—"
        ]
      },
      {
        label: "Finish",
        options: ["Mirror", "Brush", "Standard"]
      }
    ]
  }
];
<section>
  why choose us
</section>

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/services-bg.jpg')" }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stainless Steel Pipes – Schedule & SMLS
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox Trading LLC supplies a comprehensive range of stainless steel pipes in SS 304 & 316L, available in Schedule 10 & 40, along with SMLS imported pipes from premium brands. Standard and short lengths available.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
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