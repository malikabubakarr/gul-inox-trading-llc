"use client";

import Image from "next/image";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

/* ========================= */
/* PRODUCT IMAGES */
/* ========================= */

const productImages: Record<string, string> = {
  "304 Sheets": "/images/ss-304-sheet.png",
  "304 Coils": "/images/sss-304-coil.png",
  "316L Sheets": "/images/ss-316l-sheet.png",
  "316L Coils": "/images/ss-316l-coil.png",
  "Chequered Plates": "/images/ss-chequered.png",
  "201 Sheets": "/images/ss-201-sheet.png",
  "430 Sheets": "/images/ss-430-sheet.png",
  "Aluminium Sheets": "/images/aluminium-plain.png",
  "Nylon Rods": "/images/nylon-rod.png",
  "Mixed SS Bundle": "/images/mixed-ss.png",
};

/* ========================= */
/* TYPES */
/* ========================= */

type ConfigOption = {
  thickness?: string[];
  size?: string[];
  width?: string[];
  diameter?: string[];
  length?: string[];
};

type Configurations = Record<string, ConfigOption | undefined>;

type Product = {
  title: string;
  description: string;
  configurations: Configurations;
  origin?: string[];
};

/* ========================= */
/* PAGE */
/* ========================= */

export default function StainlessSteelSheetsPage() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  /* ========================= */
  /* INQUIRY BUILDER */
  /* ========================= */

  const handleInquiryClick = (
    product: string,
    finish: string,
    dimensionLabel: string,
    dimensionValue: string,
    thickness: string,
    origin?: string
  ) => {
    let msg = `Inquiry for ${product}`;
    if (finish) msg += `\nFinish: ${finish}`;
    if (dimensionValue) msg += `\n${dimensionLabel}: ${dimensionValue}`;
    if (thickness) msg += `\nThickness: ${thickness}`;
    if (origin) msg += `\nOrigin: ${origin}`;

    setPrefilledMessage(msg);

    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /* ========================= */
  /* PRODUCT CARD */
  /* ========================= */

  const ProductCard = ({
    title,
    description,
    configurations,
    origin,
  }: Product) => {
    const [selectedFinish, setSelectedFinish] = useState("");
    const [selectedDimension, setSelectedDimension] = useState("");
    const [selectedThickness, setSelectedThickness] = useState("");
    const [selectedOrigin, setSelectedOrigin] = useState("");

    const finishOptions = Object.keys(configurations);
    const currentConfig = configurations[selectedFinish] || {};

    /* auto detect dimension type */
    const dimensionLabel =
      currentConfig.size
        ? "Size"
        : currentConfig.width
        ? "Width"
        : currentConfig.diameter
        ? "Diameter"
        : currentConfig.length
        ? "Length"
        : "Dimension";

    const dimensionOptions =
      currentConfig.size ||
      currentConfig.width ||
      currentConfig.diameter ||
      currentConfig.length ||
      [];

    const thicknessOptions = currentConfig.thickness || [];

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
            />
          </div>
        )}

        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-2">
              {title}
            </h3>

            <p className="text-gray-600 text-sm md:text-base font-light mb-6">
              {description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              {/* FINISH */}
              <div>
                <label className="block text-sm font-medium mb-2">Finish</label>
                <select
                  value={selectedFinish}
                  onChange={(e) => {
                    setSelectedFinish(e.target.value);
                    setSelectedDimension("");
                    setSelectedThickness("");
                  }}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                >
                  <option value="">Select Finish</option>
                  {finishOptions.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* DIMENSION */}
              {dimensionOptions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {dimensionLabel}
                  </label>
                  <select
                    value={selectedDimension}
                    onChange={(e) => setSelectedDimension(e.target.value)}
                    disabled={!selectedFinish}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm disabled:bg-gray-100"
                  >
                    <option value="">Select {dimensionLabel}</option>
                    {dimensionOptions.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* THICKNESS */}
              {thicknessOptions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Thickness
                  </label>
                  <select
                    value={selectedThickness}
                    onChange={(e) => setSelectedThickness(e.target.value)}
                    disabled={!selectedFinish}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm disabled:bg-gray-100"
                  >
                    <option value="">Select Thickness</option>
                    {thicknessOptions.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* ORIGIN */}
              {origin && (
                <div>
                  <label className="block text-sm font-medium mb-2">Origin</label>
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
                  >
                    <option value="">Select Origin</option>
                    {origin.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              handleInquiryClick(
                title,
                selectedFinish,
                dimensionLabel,
                selectedDimension,
                selectedThickness,
                selectedOrigin
              )
            }
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
        "Premium stainless steel 304 sheets offering excellent corrosion resistance, durability, and versatility for architectural, industrial, and fabrication applications.",

      configurations: {
        "Brush Finish (#4 / Laser / PVC)": {
          thickness: ["0.40 mm", "0.60 mm", "0.80 mm", "1.00 mm", "2.00 mm", "3.00 mm","4.00 mm", "5.00 mm", "6.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft","5 × 10 ft", "1250 × 2500 mm"],
        },
        "2B Finish": {
          thickness: ["0.40 mm", "0.60 mm", "0.80 mm", "1.00 mm", "2.00 mm", "3.00 mm", "Up to 30.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft", "1250 × 2500 mm", "1500 × 3000 mm"],
        },
        "DC Finish": {
          thickness: ["0.40 mm", "0.60 mm", "0.80 mm", "1.00 mm", "2.00 mm", "3.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "1250 × 2500 mm"],
        },
        "#1 Finish (Hot Rolled Annealed & Pickled)": {
          thickness: ["2.00 mm", "3.00 mm", "Up to 30.00 mm"],
          size: ["1500 × 3000 mm", "1500 × 6000 mm"],
        },
        "Mirror Finish (#8 / 12K Super Mirror)": {
          thickness: ["0.60 mm", "0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft"],
        },
        "Golden Mirror Finish (PVD Coated)": {
          thickness: ["0.60 mm", "0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "Taiwan",  "Jindal (India)"],
    },

    {
      title: "304 Coils",
      description:
        "High-quality stainless steel 304 coils suitable for fabrication, rolling, cutting, and industrial processing applications.",

      configurations: {
        "2B Finish": {
          thickness: ["0.80 mm", "1.00 mm", "1.20 mm", "1.50 mm", "2.00 mm"],
          width: ["1219 mm", "1250 mm"],
        },
        "Brush Finish (#4 / Laser PVC)": {
          thickness: ["0.80 mm", "1.00 mm"],
          width: ["1219 mm"],
        },
      },

      origin: ["China", "Taiwan", "India"],
    },

    {
      title: "316L Sheets",
      description:
        "Molybdenum-bearing stainless steel 316L sheets offering superior corrosion resistance for marine, chemical, pharmaceutical, and harsh industrial environments.",

      configurations: {
        "2B Finish": {
          thickness: ["0.50 mm", "0.80 mm", "1.00 mm", "1.50 mm", "2.00 mm", "3.00 mm", "5.00 mm", "10.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft", "1500 × 3000 mm"],
        },
        "#1 Finish (Hot Rolled Annealed & Pickled)": {
          thickness: ["3.00 mm", "5.00 mm", "10.00 mm", "Up to 50.00 mm"],
          size: ["1500 × 3000 mm", "1500 × 6000 mm", "2000 × 6000 mm"],
        },
        "Mirror Finish (#8 / 12K Super Mirror)": {
          thickness: ["0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "5 × 10 ft"],
        },
        "Golden Mirror Finish (PVD Coated)": {
          thickness: ["0.80 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "Taiwan", "Jindal (India)", "Finland (Outokumpu)", "Belgium", "South Africa"],
    },

    {
      title: "316L Coils",
      description:
        "High-quality stainless steel 316L coils ideal for fabrication, cutting, and industrial processing applications requiring enhanced corrosion resistance.",

      configurations: {
        "2B Finish": {
          thickness: ["0.80 mm", "1.00 mm", "1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm"],
          width: ["1219 mm"],
        },
      },

      origin: ["China", "Taiwan", "India", "Finland"],
    },

    {
      title: "Chequered Plates",
      description:
        "Durable stainless steel chequered plates designed for anti-slip flooring, platforms, staircases, and heavy-duty industrial applications.",

      configurations: {
        "304 2B Chequered Plate": {
          thickness: ["1.50 mm", "2.00 mm", "3.00 mm", "4.00 mm", "5.00 mm", "6.00 mm"],
          size: ["4 × 8 ft"],
        },
        "316L 2B Chequered Plate": {
          thickness: ["3.00 mm", "4.00 mm", "5.00 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "India"],
    },

    {
      title: "201 Sheets",
      description:
        "Cost-effective stainless steel 201 sheets suitable for decorative, light industrial, and fabrication applications.",

      configurations: {
        "Brush Finish (#4)": {
          thickness: ["0.50 mm", "0.80 mm", "1.00 mm", "1.50 mm", "2.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft"],
        },
        "2B Finish": {
          thickness: ["0.50 mm", "0.80 mm", "1.50 mm", "2.50 mm", "3.00 mm"],
          size: ["4 × 8 ft", "4 × 10 ft", "1219 × 1900 mm"],
        },
        "Mirror Finish (#8)": {
          thickness: ["0.50 mm", "0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft"],
        },
        "#1 Finish (Hot Rolled Annealed & Pickled)": {
          thickness: ["2.00 mm", "3.00 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "India"],
    },

    {
      title: "430 Sheets",
      description:
        "Ferritic stainless steel 430 sheets offering good corrosion resistance, formability, and cost efficiency for kitchen equipment and decorative applications.",

      configurations: {
        "BA Finish": {
          thickness: ["0.40 mm", "0.60 mm", "0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft"],
        },
        "2B Finish": {
          thickness: ["0.50 mm", "0.80 mm", "1.00 mm", "1.50 mm", "2.00 mm"],
          size: ["4 × 8 ft"],
        },
        "Brush Finish (#4)": {
          thickness: ["0.80 mm", "1.00 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "India"],
    },
    {
      title: "Aluminium Sheets",
      description:
        "High-quality aluminium sheets offering lightweight strength, corrosion resistance, and excellent workability for industrial, fabrication, and architectural applications.",

      configurations: {
        "Mill Finish": {
          thickness: [
            "0.90 mm",
            "1.20 mm",
            "1.50 mm",
            "2.00 mm",
            "3.00 mm",
            "4.00 mm",
            "5.00 mm",
            "6.00 mm"
          ],
          size: ["4 × 8 ft", "4 × 10 ft", "1500 × 3000 mm"],
        },
        "Chequered Aluminium Plate": {
          thickness: ["1.50 mm", "2.00 mm", "3.00 mm", "4.00 mm"],
          size: ["4 × 8 ft"],
        },
      },

      origin: ["China", "UAE", "India"],
    },
    {
      title: "Nylon Rods",
      description:
        "Industrial-grade nylon rods offering high strength, wear resistance, and low friction properties, suitable for machining, bushings, gears, rollers, and mechanical components.",

      configurations: {
        "Natural (White) Nylon": {
          diameter: [
            "10 mm",
            "15 mm",
            "20 mm",
            "25 mm",
            "30 mm",
            "40 mm",
            "50 mm",
            "60 mm",
            "75 mm",
            "100 mm"
          ],
          length: ["1000 mm"],
        },
      },

      origin: ["China", "UAE"],
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
            Gulf Inox Trading LLC supplies premium stainless steel sheets for construction, fabrication, and industrial applications across UAE.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 tracking-wide mb-12">
            Stainless Steel Grades We Supply
          </h2>

          {/* PRODUCTS */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 space-y-24">
              {products.map((p) => (
                <ProductCard key={p.title} {...p} />
              ))}
            </div>
          </section>
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