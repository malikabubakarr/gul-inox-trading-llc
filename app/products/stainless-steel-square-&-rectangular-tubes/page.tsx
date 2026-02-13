"use client";

import Image from "next/image";
import { useState } from "react";

/* ========================= */
/* PRODUCT IMAGES */
/* ========================= */

const productImages: Record<string, string> = {
  "304 Square Tubes": "/images/ss-304-square-tube.png",
  "304 Rectangular Tubes": "/images/ss-304-rect-tube.png",
  "201 Tubes": "/images/ss-201-tube.png",
  "316L Square Tubes": "/images/ss-316l-square-tube.png",
  "316L Rectangular Tubes": "/images/ss-316l-rect-tube.png",
  "#600 Finish Tubes": "/images/ss-600-tube.png",
};

/* ========================= */
/* TYPES */
/* ========================= */

type ConfigOption = {
  size?: string[];
  width?: string[];
  diameter?: string[];
  length?: string[];
  thickness?: string[];
};

type Configurations = Record<string, ConfigOption | undefined>;

type Product = {
  title: string;
  description: string;
  configurations: Configurations;
  origin?: string[];
};

/* ========================= */
/* PAGE COMPONENT */
/* ========================= */

export default function StainlessSteelTubesPage() {
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
  /* PRODUCT CARD COMPONENT */
  /* ========================= */

  const ProductCard = ({ title, description, configurations, origin }: Product) => {
    const [selectedFinish, setSelectedFinish] = useState("");
    const [selectedDimension, setSelectedDimension] = useState("");
    const [selectedThickness, setSelectedThickness] = useState("");
    const [selectedOrigin, setSelectedOrigin] = useState("");

    const finishOptions = Object.keys(configurations);
    const currentConfig = configurations[selectedFinish] || {};

    // auto detect dimension type
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

        {/* CONTENT */}
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

/* ========================= */
/* PRODUCTS DATA */
/* ========================= */

const products: Product[] = [
  {
    title: "304 Square Tubes",
    description:
      "SS 304 Square Tubes with HL finish, standard 6-meter lengths, ideal for architectural and industrial frameworks.",
    configurations: {
      "HL Finish": {
        size: [
          "10×10 mm",
          "12.7×12.7 mm",
          "15×15 mm",
          "20×20 mm",
          "25×25 mm",
          "30×30 mm",
          "40×40 mm",
          "50×50 mm",
          "60×60 mm",
          "80×80 mm",
          "100×100 mm",
        ],
        thickness: [
          "1.20 mm",
          "1.50 mm",
          "2.00 mm",
          "3.00 mm",
          "4.00 mm",
          "5.00 mm",
          "6.00 mm",
        ],
      },
    },
    origin: ["China", "India", "UAE"],
  },
  {
    title: "304 Rectangular Tubes",
    description:
      "SS 304 Rectangular Tubes with HL finish, 6-meter lengths, suitable for decorative, structural, and fabrication projects.",
    configurations: {
      "HL Finish": {
        size: [
          "20×10 mm",
          "30×15 mm",
          "40×20 mm",
          "50×25 mm",
          "60×30 mm",
          "80×40 mm",
          "100×50 mm",
        ],
        thickness: [
          "1.20 mm",
          "1.50 mm",
          "2.00 mm",
          "3.00 mm",
          "4.00 mm",
          "5.00 mm",
        ],
      },
    },
    origin: ["China", "India", "UAE"],
  },
  {
    title: "201 Tubes",
    description:
      "SS 201 Square & Rectangular Tubes with HL finish, economical solution for decorative and light structural applications.",
    configurations: {
      "HL Finish": {
        size: [
          "20×20 mm",
          "25×25 mm",
          "30×30 mm",
          "40×40 mm",
          "50×50 mm",
          "40×20 mm",
          "50×25 mm",
        ],
        thickness: ["1.00 mm", "1.20 mm", "1.50 mm", "2.00 mm"],
      },
    },
    origin: ["China", "India"],
  },
  {
    title: "316L Square Tubes",
    description:
      "Premium SS 316L Square Tubes with HL finish for marine, chemical, and food-grade applications.",
    configurations: {
      "HL Finish": {
        size: [
          "10×10 mm",
          "15×15 mm",
          "20×20 mm",
          "25×25 mm",
          "30×30 mm",
          "40×40 mm",
          "50×50 mm",
          "60×60 mm",
          "80×80 mm",
          "100×100 mm",
        ],
        thickness: ["1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm", "4.00 mm", "5.00 mm", "6.00 mm"],
      },
    },
    origin: ["Finland", "India", "China"],
  },
  {
    title: "316L Rectangular Tubes",
    description:
      "SS 316L Rectangular Tubes with HL finish, ideal for heavy fabrication, industrial, offshore, and architectural projects.",
    configurations: {
      "HL Finish": {
        size: [
          "20×10 mm",
          "30×15 mm",
          "40×20 mm",
          "50×25 mm",
          "60×30 mm",
          "80×40 mm",
          "100×50 mm",
        ],
        thickness: ["1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm", "4.00 mm", "5.00 mm"],
      },
    },
    origin: ["Finland", "India", "China"],
  },
  {
    title: "#600 Finish Tubes",
    description:
      "Stainless Steel Tubes with #600 Finish in SS 304 and 316L grades, ideal for industrial fabrication and machine frames.",
    configurations: {
      "SS 304": {
        size: [
          "10×10 mm",
          "20×20 mm",
          "25×25 mm",
          "30×30 mm",
          "40×40 mm",
          "50×50 mm",
          "40×20 mm",
          "50×25 mm",
        ],
        thickness: ["1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm"],
      },
      "SS 316L": {
        size: [
          "20×20 mm",
          "25×25 mm",
          "30×30 mm",
          "40×40 mm",
          "80×40 mm",
        ],
        thickness: ["1.20 mm", "1.50 mm", "2.00 mm", "3.00 mm"],
      },
    },
    origin: ["China", "India", "UAE"],
  },
];


  /* ========================= */
  /* RENDER PAGE */
  /* ========================= */

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/services-bg.jpg')" }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stainless Steel Square & Rectangular Tubes
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Gulf Inox Trading LLC maintains a comprehensive inventory of stainless steel square and rectangular tubes in multiple grades, finishes, and thicknesses. Standard 6-meter lengths available, custom cut lengths on request.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 tracking-wide">
            Why Choose Gulf Inox Trading LLC?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            We provide premium stainless steel solutions with unmatched quality, reliability, and customer support across the UAE. Here’s why clients prefer us:
          </p>

          <div className="grid gap-10 md:grid-cols-3 text-left">
            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🏆</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Our stainless steel products meet international standards for durability, finish, and corrosion resistance.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🚚</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                We ensure fast and reliable delivery for all orders, supporting your project timelines efficiently.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🤝</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Trusted Supplier</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                With years of experience in stainless steel trading, we are the preferred partner for businesses and industries across the UAE.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">💰</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Our pricing strategy ensures you get the best value for premium stainless steel products.
              </p>
            </div>

            <div className="flex flex-col items-start bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 text-4xl">🔧</div>
              <h3 className="text-xl md:text-2xl font-medium mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm md:text-base font-light">
                We provide tailored stainless steel solutions to match your project requirements.
              </p>
            </div>

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
                  <input type="text" placeholder="Your company" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={prefilledMessage}
                  onChange={(e) => setPrefilledMessage(e.target.value)}
                  placeholder="Enter your message"
                  rows={6}
                  className="w-full rounded-3xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105">
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