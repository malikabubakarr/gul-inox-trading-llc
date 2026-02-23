"use client";

import Image from "next/image";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

const aluminiumImages: Record<string, string> = {
  "Aluminium Sheets – 1100 H14 (Plain Finish)": "/images/aluminium-plain.png",
  "Aluminium Sheets – 1100 H14 (Stucco Finish)": "/images/aluminium-stucco.png",
  "Aluminium Sheets – 1100 H14 (Chequered Finish)": "/images/aluminium-chequered.png",
  "Aluminium Plates – Grade 5083": "/images/aluminium-5083.png",
  "Aluminium Plates – Grade 6061 T6": "/images/aluminium-6061.png",
};
type Product = {
  title: string;
  description?: string;
  fields: {
    label: string;
    options: string[];
  }[];
  remarks?: string;
};

export default function AluminiumSheetsPage() {
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
        {aluminiumImages[title] && (
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={aluminiumImages[title]}
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

 const products: Product[] = [
  /* =====================================================
     ALUMINIUM SHEETS — 1100 H14 (PLAIN)
  ===================================================== */
  {
    title: "Aluminium Sheets – 1100 H14 (Plain Finish)",
    description: "Plain finish aluminium sheets for industrial and fabrication use.",
    fields: [
      {
        label: "Thickness & Size",
        options: [
          "0.60MM X 1220MM X 2440MM",
          "0.65MM X 1220MM X 2440MM",
          "0.70MM X 1220MM X 2440MM",
          "0.80MM X 1220MM X 2440MM",
          "0.85MM X 1220MM X 2440MM",
          "0.90MM X 1220MM X 2440MM",
          "1.00MM X 1500MM X 3000MM",
          "1.10MM X 1220MM X 2440MM",
          "1.20MM X 1220MM X 2440MM",
          "1.20MM X 1500MM X 3000MM",
          "1.40MM X 1220MM X 2440MM",
          "1.40MM X 1500MM X 3000MM",
          "1.80MM X 1220MM X 2440MM",
          "1.80MM X 1220MM X 3000MM",
          "1.80MM X 1500MM X 3000MM",
          "2.00MM X 1220MM X 2440MM",
          "2.00MM X 1500MM X 3000MM",
          "2.50MM X 1220MM X 2440MM",
          "2.50MM X 1500MM X 3000MM",
          "2.80MM X 1220MM X 2440MM",
          "2.80MM X 1200MM X 3000MM",
          "2.80MM X 1500MM X 3000MM",
          "3.00MM X 1220MM X 2440MM",
          "3.00MM X 1500MM X 3000MM",
          "3.80MM X 1220MM X 2440MM",
          "3.80MM X 1500MM X 3000MM",
          "4.80MM X 1220MM X 2440MM",
          "4.80MM X 1500MM X 3000MM",
          "5.80MM X 1220MM X 2440MM",
          "5.80MM X 1500MM X 3000MM",
          "7.80MM X 1220MM X 2440MM",
          "7.80MM X 1500MM X 3000MM",
          "9.80MM X 1220MM X 2440MM"
        ]
      },
      { label: "Finish", options: ["Plain"] },
      { label: "Grade", options: ["Alum 1100 H14"] }
    ]
  },

  /* =====================================================
     STUCCO
  ===================================================== */
  {
    title: "Aluminium Sheets – 1100 H14 (Stucco Finish)",
    fields: [
      {
        label: "Thickness & Size",
        options: ["0.65MM X 1220MM X 2440MM"]
      },
      { label: "Finish", options: ["Stucco"] },
      { label: "Grade", options: ["Alum 1100 H14"] }
    ]
  },

  /* =====================================================
     CHEQUERED
  ===================================================== */
  {
    title: "Aluminium Sheets – 1100 H14 (Chequered Finish)",
    fields: [
      {
        label: "Thickness & Size",
        options: [
          "1.00MM X 1220MM X 2440MM",
          "1.50MM X 1220MM X 2440MM",
          "1.80MM X 1220MM X 2440MM",
          "2.50MM X 1220MM X 2440MM",
          "2.80MM X 1220MM X 2440MM",
          "3.80MM X 1220MM X 2440MM"
        ]
      },
      { label: "Finish", options: ["Chequered"] },
      { label: "Grade", options: ["Alum 1100 H14"] }
    ]
  },

  /* =====================================================
     PLATES — 5083
  ===================================================== */
  {
    title: "Aluminium Plates – Grade 5083",
    fields: [
      {
        label: "Thickness & Size",
        options: [
          "10.00MM X 1500MM X 3000MM",
          "20.00MM X 1520MM X 3020MM"
        ]
      },
      { label: "Grade", options: ["5083"] }
    ]
  },

  /* =====================================================
     PLATES — 6061 T6
  ===================================================== */
  {
    title: "Aluminium Plates – Grade 6061 T6",
    fields: [
      {
        label: "Thickness & Size",
        options: ["30.00MM X 1500MM X 3000MM"]
      },
      { label: "Grade", options: ["6061 T6"] }
    ]
  }
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
            Aluminium Sheets & Plates Supplier
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox Trading LLC supplies high-quality Aluminium Sheets & Plates in
            multiple grades, thicknesses, and finishes for industrial use across the UAE.
            Our products are sourced from trusted manufacturers.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 tracking-wide mb-12">
            Aluminium Grades We Supply
          </h2>

          {products.map((prod) => (
            <ProductCard key={prod.title} title={prod.title} description={prod.description} fields={prod.fields} />
          ))}
        </div>
      </section>
      {/* ============================= */}
{/* PRODUCTS TABLE SECTION */}
{/* ============================= */}

<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 mb-10">
      Stainless Steel Product Specifications
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm text-left">

        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Specification Type</th>
            <th className="px-4 py-2 border">Available Options</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) =>
            product.fields.map((field, index) => (
              <tr
                key={`${product.title}-${field.label}`}
                className="even:bg-gray-100"
              >
                {/* PRODUCT NAME rowspan */}
                {index === 0 && (
                  <td
                    rowSpan={product.fields.length}
                    className="px-4 py-2 border font-medium align-top"
                  >
                    {product.title}
                  </td>
                )}

                {/* FIELD LABEL */}
                <td className="px-4 py-2 border">
                  {field.label}
                </td>

                {/* OPTIONS */}
                <td className="px-4 py-2 border">
                  {field.options.join(", ")}
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>

  </div>
</section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-wide">
            Why Choose Gulf Inox Trading LLC?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            We provide premium aluminium solutions with unmatched quality, reliability, and customer support across the UAE. Here’s why clients prefer us:
          </p>

          <div className="grid gap-10 md:grid-cols-3 text-left">
            {/* Feature 1 */}
            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🏆</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Our aluminium products meet international standards for durability, finish, and corrosion resistance.
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
                With years of experience in aluminium trading, we are the preferred partner for businesses and industries across the UAE.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">💰</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Our pricing strategy ensures you get the best value for premium aluminium products.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🔧</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                We provide tailored aluminium solutions to match your project requirements.
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