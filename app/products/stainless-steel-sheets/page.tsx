"use client";

import Image from "next/image";
import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";

/* ========================= */
/* PRODUCT IMAGES */
/* ========================= */
/* First image = BIG */
/* Next 4 = small bottom images */

const productImages: Record<string, { src: string; title: string }[]> = {
  "304 Sheets": [
    { src: "/images/ss-304-sheet.png", title: "304 sheets" },
    { src: "/images/304 miror.jpg", title: "Mirror Finish" },
    { src: "/images/304 brush finish.jpg", title: "Brush Finish" },
    { src: "/images/stainless-steel-304-sheet-2b-finish.jpg", title: "2B Finish" },
  ],
  "304 Coils": [
    
    { src: "/images/sss-304-coil.png", title: "304 Coil" },
    { src: "/images/304 mill coil.jpg", title: "2B Finish" },
    { src: "/images/brush coil 304.jpg", title: "Brush Finish" },
  ],
  "316L Sheets": [
    { src: "/images/ss-316l-sheet.png", title: "Main Sheet" },
    { src: "/images/316 mirror.jpg", title: "Mirror Finish" },
    { src: "/images/316 2b.jpg", title: "2B Finish" },
    { src: "/images/316 golden mirror.jpg", title: "Golden Mirror Finish" },
    
  ],
  "316L Coils": [
    { src: "/images/ss-316l-coil.png", title: "316 Coil" },    
    { src: "/images/2b 316 coil.jpg", title: "2B Finish" },
  ],
  "Chequered Plates": [
    { src: "/images/ss-chequered.png", title: "Chequered Plate" },
    { src: "/images/2b chq.jpg", title: "304 2b Chequered" },
    { src: "/images/316 2b chq.jpg", title: "316 2b Chequered" },
  ],
  "201 Sheets": [
    { src: "/images/ss-201-sheet.png", title: "201 Sheet" },
    { src: "/images/201 brush finish.jpg", title: "Brush Finish" },
    { src: "/images/201 2b finish.jpg", title: "2b Finish" },
    { src: "/images/201 mirror finish.jpg", title: "Mirror Finish" },
    
  ],
  "430 Sheets": [
    { src: "/images/ss-430-sheet.png", title: "430 Sheet" },
    { src: "/images/430 BA finish.jpg", title: "BA Finish" },
    { src: "/images/430 2b finish.jpg", title: "2B Finish" },
    { src: "/images/430 brush finish.jpg", title: "Brush Finish" },
   
  ],
  "Aluminium Sheets": [
    { src: "/images/aluminium-plain.png", title: "Aluminium Plain" },
    { src: "/images/alum mill finish.jpg", title: "Mill Finish" },
    { src: "/images/alum cheq.jpg", title: "Chequered Finish" },
  ],
  "Nylon Rods": [
    { src: "/images/nylon-rod.png", title: "Main Rod" },

  ],
  "Mixed SS Bundle": [
    { src: "/images/mixed-main.png", title: "Main Bundle" },
    { src: "/images/mixed-1.png", title: "Bundle 1" },
    { src: "/images/mixed-2.png", title: "Bundle 2" },
    { src: "/images/mixed-3.png", title: "Bundle 3" },
    { src: "/images/mixed-4.png", title: "Bundle 4" },
  ],
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

      {/* IMAGE SECTION */}
      {productImages[title] && (
        <div className="md:w-1/3 flex-shrink-0">

          {/* BIG IMAGE */}
          <Image
            src={productImages[title][0].src} // use .src
            alt={productImages[title][0].title} // use title for alt
            width={400}
            height={400}
            className="rounded-xl object-cover w-full h-64 mb-3"
          />
          <p className="text-center text-sm text-gray-700 mb-2">
            {productImages[title][0].title}
          </p>

          {/* SMALL IMAGES */}
          <div className="grid grid-cols-4 gap-2">
            {productImages[title].slice(1, 5).map((img, i) => (
              <div key={i} className="flex flex-col items-center">
                <Image
                  src={img.src} // use .src
                  alt={img.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-20"
                />
                <span className="text-xs mt-1 text-center text-gray-700">{img.title}</span>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* RIGHT SIDE */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-6">
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
  <section
    className="relative pb-32"
    style={{ paddingTop: "250px" }} // <-- adjust this to your navbar height
  >
    {/* Full HD Background */}
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/services-bg.jpg')"
      }}
    />

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
      {/* ============================= */}
{/* PRODUCTS TABLE SECTION */}
{/* ============================= */}

<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-2xl md:text-3xl font-light text-center text-gray-900 mb-10">
      Stainless Steel & Aluminium Product Specifications
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm text-left">

        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Finish</th>
            <th className="px-4 py-2 border">Thickness / Diameter</th>
            <th className="px-4 py-2 border">Size / Width / Length</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) =>
            Object.entries(product.configurations).map(
              ([finish, config], index) => {
                if (!config) return null;

                const dimension =
                  config.size ||
                  config.width ||
                  config.diameter ||
                  config.length ||
                  [];

                const thickness = config.thickness || [];

                return (
                  <tr key={`${product.title}-${finish}`} className="even:bg-gray-100">

                    {/* PRODUCT NAME (rowspan merge) */}
                    {index === 0 && (
                      <td
                        rowSpan={Object.keys(product.configurations).length}
                        className="px-4 py-2 border font-medium align-top"
                      >
                        {product.title}
                      </td>
                    )}

                    {/* FINISH */}
                    <td className="px-4 py-2 border">{finish}</td>

                    {/* THICKNESS */}
                    <td className="px-4 py-2 border">
                      {thickness.length ? thickness.join(", ") : "-"}
                    </td>

                    {/* DIMENSION */}
                    <td className="px-4 py-2 border">
                      {dimension.length ? dimension.join(", ") : "-"}
                    </td>

                  </tr>
                );
              }
            )
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