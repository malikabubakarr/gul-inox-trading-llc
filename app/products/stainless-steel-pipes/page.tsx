"use client";

import Image from "next/image";
import { useState } from "react";

// Example images for pipes
const productImages: Record<string, string> = {
  "304 Pipes": "/images/ss-304-pipe.jpg",
  "316L Pipes": "/images/ss-316-fittings.jpg",
  "201 Pipes": "/images/ss-201-pipe.jpg",
  "316L Fittings": "/images/ss-316l-fittings.jpg",
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
        {/* Image Left */}
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

        {/* Content Right */}
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
      title: "304 Pipes",
      description: "Stainless Steel 304 Pipes available in multiple sizes, thicknesses, and finishes for industrial and fabrication applications.",
      fields: [
        { label: "Size & Thickness", options: [
          "3/8\" × 1.50 mm",
          "1/2\" × 1.20 mm",
          "1/2\" × 1.50 mm",
          "5/8\" × 1.20 mm",
          "5/8\" × 1.50 mm",
          "3/4\" × 1.20 mm",
          "3/4\" × 1.50 mm",
          "3/4\" × 2.00 mm",
          "1\" × 1.20 mm",
          "1\" × 1.50 mm",
          "1\" × 2.00 mm",
          "1-1/4\" × 1.20 mm",
          "1-1/4\" × 1.50 mm",
          "1-1/4\" × 2.00 mm",
          "1-1/2\" × 1.20 mm",
          "1-1/2\" × 1.50 mm",
          "1-1/2\" × 2.00 mm",
          "2\" × 1.20 mm",
          "2\" × 1.50 mm",
          "2\" × 2.00 mm",
          "2-1/2\" × 1.50 mm",
          "2-1/2\" × 2.00 mm",
          "3\" × 1.50 mm",
          "3\" × 2.00 mm",
          "4\" × 1.50 mm",
          "4\" × 2.00 mm"
        ] },
        { label: "Finish", options: ["Brush Finish (180G)", "Golden Mirror Finish", "400G Finish"] },
      ],
      remarks: "⚠️ Some pieces marked as short or damaged (can be offered at discounted rates)."
    },
    {
      title: "316L Pipes",
      description: "High-grade 316L stainless steel pipes for marine, chemical, and industrial applications.",
      fields: [
        { label: "Size & Thickness", options: [
          "3/8\" × 1.50 mm",
          "1/2\" × 1.20 mm",
          "1/2\" × 1.50 mm",
          "5/8\" × 1.50 mm",
          "3/4\" × 1.20 mm",
          "3/4\" × 1.50 mm",
          "3/4\" × 2.00 mm",
          "7/8\" × 1.50 mm",
          "1\" × 1.20 mm",
          "1\" × 1.50 mm",
          "1\" × 2.00 mm",
          "1-1/4\" × 1.50 mm",
          "1-1/4\" × 2.00 mm",
          "1-1/2\" × 1.50 mm",
          "1-1/2\" × 2.00 mm",
          "2\" × 1.50 mm",
          "2\" × 2.00 mm",
          "2\" × 3.00 mm",
          "2-1/2\" × 1.50 mm",
          "2-1/2\" × 2.00 mm",
          "3\" × 1.50 mm",
          "3\" × 2.00 mm",
          "3\" × 3.00 mm",
          "4\" × 1.50 mm",
          "4\" × 2.00 mm",
          "4\" × 3.00 mm"
        ] },
        { label: "Finish", options: ["Brush Finish (180G)", "#600 Finish"] },
      ],
      remarks: "⚠️ Some items noted as short, cut pieces, or physically unavailable."
    },
    {
      title: "201 Pipes",
      description: "Economical SS 201 Pipes for light industrial and construction needs.",
      fields: [
        { label: "Size & Thickness", options: [
          "3/4\" × 1.20 mm",
          "1\" × 1.00 mm",
          "1\" × 1.20 mm",
          "1-1/4\" × 1.20 mm",
          "1-1/2\" × 1.20 mm",
          "2\" × 1.20 mm"
        ] },
        { label: "Finish", options: ["Brush Finish", "2B Finish", "Mirror Finish", "#1 Finish"] },
      ],
      remarks: "Stock includes Sindia Steels. Some material marked rusted (can be segregated or discounted)."
    },
    {
      title: "316L Fittings",
      description: "Stainless Steel 316L Fittings including elbows, threaded and Sch 40 pipes.",
      fields: [
        { label: "Item", options: [
          "1-1/2\" × 1.50 mm Short Radius Elbow",
          "2\" × 1.50 mm Mix Radius",
          "2\" Class 150 NPT 90° Threaded Elbow",
          "4\" Sch 40 Pipe (Taiwan)",
          "2-1/2\" Sch 40 Pipe"
        ] }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
{/* Hero */}
<section className="relative pt-44 pb-28 md:pt-52 md:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover opacity-[0.06]"
    style={{ backgroundImage: "url('/services-bg.jpg')" }}
  />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Stainless Steel Pipes Supplier
    </h1>
    <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
      Gulf Inox TRD LLC provides premium stainless steel pipes for construction, industrial, and fabrication projects with wide stock availability.
    </p>
  </div>
</section>

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
