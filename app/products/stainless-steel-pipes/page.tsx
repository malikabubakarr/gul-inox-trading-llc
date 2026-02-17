"use client";

import Image from "next/image";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

/* ========================= */
/* PRODUCT IMAGES */
/* ========================= */

const productImages: Record<string, string> = {
  "304 Stainless Steel Pipes": "/images/ss-304-pipe.png",
  "316L Stainless Steel Pipes": "/images/ss-316l-pipe.png",
  "201 Stainless Steel Pipes": "/images/ss-201-pipe.png",
  "316L Stainless Steel Fittings": "/images/ss-316l-fittings.png",
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
    title: "304 Stainless Steel Pipes",
    description:
      "SS 304 pipes available in wide range of sizes, thicknesses and finishes for fabrication and industrial use.",
    fields: [
      {
        label: "Size & Thickness",
        options: [
          '3/8" × 1.50 mm',
          '1/2" × 1.20 mm',
          '1/2" × 1.50 mm',
          '5/8" × 1.20 mm',
          '5/8" × 1.50 mm',
          '3/4" × 1.20 mm',
          '3/4" × 1.50 mm',
          '3/4" × 2.00 mm',
          '1" × 1.20 mm',
          '1" × 1.50 mm',
          '1" × 2.00 mm',
          '1-1/4" × 1.20 mm',
          '1-1/4" × 1.50 mm',
          '1-1/4" × 2.00 mm',
          '1-1/2" × 1.20 mm',
          '1-1/2" × 1.50 mm',
          '1-1/2" × 2.00 mm',
          '2" × 1.20 mm',
          '2" × 1.50 mm',
          '2" × 2.00 mm',
          '2-1/2" × 1.50 mm',
          '2-1/2" × 2.00 mm',
          '3" × 1.50 mm',
          '3" × 2.00 mm',
          '4" × 1.50 mm',
          '4" × 2.00 mm',
        ],
      },
      {
        label: "Finish",
        options: [
          "#600 Finish",
          "180G Brush Finish",
          "400G Finish",
          "Golden Mirror (3 Meter)",
        ],
      },
    ],
    remarks:
      "Some stock marked short, damaged, or cut pieces — discounted material available.",
  },

  {
    title: "316L Stainless Steel Pipes",
    description:
      "Corrosion-resistant SS 316L pipes suitable for marine, chemical and high-performance applications.",
    fields: [
      {
        label: "Size & Thickness",
        options: [
          '3/8" × 1.50 mm',
          '1/2" × 1.20 mm',
          '1/2" × 1.50 mm',
          '5/8" × 1.50 mm',
          '3/4" × 1.20 mm',
          '3/4" × 1.50 mm',
          '3/4" × 2.00 mm',
          '7/8" × 1.50 mm',
          '1" × 1.20 mm',
          '1" × 1.50 mm',
          '1" × 2.00 mm',
          '1-1/4" × 1.50 mm',
          '1-1/4" × 2.00 mm',
          '1-1/2" × 1.50 mm',
          '1-1/2" × 2.00 mm',
          '2" × 1.50 mm',
          '2" × 2.00 mm',
          '2" × 3.00 mm',
          '2-1/2" × 1.50 mm',
          '2-1/2" × 2.00 mm',
          '3" × 1.50 mm',
          '3" × 2.00 mm',
          '3" × 3.00 mm',
          '4" × 1.50 mm',
          '4" × 2.00 mm',
          '4" × 3.00 mm',
        ],
      },
      {
        label: "Finish",
        options: ["#600 Finish", "180G Brush Finish"],
      },
    ],
    remarks:
      "Includes short pieces, damaged items, and some physically unavailable stock.",
  },

  {
    title: "201 Stainless Steel Pipes",
    description:
      "Cost-effective SS 201 pipes for general fabrication and construction.",
    fields: [
      {
        label: "Size & Thickness",
        options: [
          '3/4" × 1.20 mm',
          '1" × 1.00 mm',
          '1" × 1.20 mm',
          '1-1/2" × 1.20 mm',
          '2" × 1.20 mm',
        ],
      },
      {
        label: "Notes",
        options: ["Sindia Steels", "Rusted Material Available"],
      },
    ],
  },

  {
    title: "316L Stainless Steel Fittings",
    description:
      "SS 316L fittings including elbows and Sch 40 pipes.",
    fields: [
      {
        label: "Item",
        options: [
          '1-1/2" Short Radius Elbow',
          '2" Mix Radius Elbow',
          '2" Class150 NPT 90° Threaded Elbow',
          '4" Sch 40 Pipe (Taiwan)',
          '2-1/2" Sch 40 Pipe',
        ],
      },
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
            Stainless Steel Pipes Supplier
          </h1>

          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox TRD LLC provides premium stainless steel pipes for construction, industrial, and fabrication projects with wide stock availability.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 tracking-wide mb-12">
            Stainless Steel Pipes We Supply
          </h2>
          {products.map((prod) => (
            <ProductCard key={prod.title} {...prod} />
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