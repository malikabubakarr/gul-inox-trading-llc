"use client";

import Image from "next/image";
import { useState } from "react";

const aluminiumImages: Record<string, string> = {
  "Aluminium Sheets – 1100 H14 (Plain Finish)": "/images/aluminium-plain.jpg",
  "Aluminium Sheets – 1100 H14 (Stucco Finish)": "/images/aluminium-stucco.jpg",
  "Aluminium Sheets – 1100 H14 (Chequered Finish)": "/images/aluminium-chequered.jpg",
  "Aluminium Plates – Grade 5083": "/images/aluminium-5083.jpg",
  "Aluminium Plates – Grade 6061 T6": "/images/aluminium-6061.jpg",
};

export default function AluminiumSheetsPage() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleInquiryClick = (
    productTitle: string,
    selection?: { thickness: string; size: string }
  ) => {
    let msg = `Inquiry for ${productTitle}`;
    if (selection) {
      msg += `\nThickness: ${selection.thickness}\nSize: ${selection.size}`;
    }
    setPrefilledMessage(msg);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      title: "Aluminium Sheets – 1100 H14 (Plain Finish)",
      columns: ["Thickness (MM)", "Size (MM)"],
      data: [
        ["0.60", "1220 × 2440"],
        ["0.80", "1220 × 2440"],
        ["1.20", "1500 × 3000"],
        ["2.00", "1500 × 3000"],
        ["3.00", "1500 × 3000"],
      ],
    },
    {
      title: "Aluminium Sheets – 1100 H14 (Stucco Finish)",
      columns: ["Thickness (MM)", "Size (MM)"],
      data: [["0.65", "1220 × 2440"]],
    },
    {
      title: "Aluminium Sheets – 1100 H14 (Chequered Finish)",
      columns: ["Thickness (MM)", "Size (MM)"],
      data: [
        ["1.00", "1220 × 2440"],
        ["1.80", "1220 × 2440"],
        ["2.50", "1220 × 2440"],
      ],
    },
    {
      title: "Aluminium Plates – Grade 5083",
      columns: ["Thickness (MM)", "Size (MM)"],
      data: [
        ["10.00", "1500 × 3000"],
        ["20.00", "1520 × 3020"],
      ],
    },
    {
      title: "Aluminium Plates – Grade 6061 T6",
      columns: ["Thickness (MM)", "Size (MM)"],
      data: [["30.00", "1500 × 3000"]],
    },
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
      Aluminium Sheets & Plates Supplier
    </h1>
    <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
       Gulf Inox TRD LLC supplies high-quality Aluminium Sheets & Plates in
            multiple grades, thicknesses, and finishes for industrial use across the UAE. Our products are sourced from trusted manufacturers and
    </p>
  </div>
</section>

      {/* PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((prod) => {
            const [selectedRow, setSelectedRow] = useState<{
              thickness: string;
              size: string;
            } | null>(null);

            return (
              <div
                key={prod.title}
                className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {aluminiumImages[prod.title] && (
                    <div className="md:w-1/3">
                      <Image
                        src={aluminiumImages[prod.title]}
                        alt={prod.title}
                        width={800}
                        height={500}
                        className="rounded-xl object-cover w-full h-64 md:h-full"
                      />
                    </div>
                  )}

                  <div className="md:w-2/3 flex flex-col justify-between">
                    <h3 className="text-xl md:text-2xl font-medium text-orange-600 mb-6">
                      {prod.title}
                    </h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            {prod.columns.map((col) => (
                              <th
                                key={col}
                                className="border px-4 py-3 text-left"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {prod.data.map((row, idx) => {
                            const isSelected =
                              selectedRow?.thickness === row[0] &&
                              selectedRow?.size === row[1];

                            return (
                              <tr
                                key={idx}
                                onClick={() =>
                                  setSelectedRow({
                                    thickness: row[0],
                                    size: row[1],
                                  })
                                }
                                className={`cursor-pointer ${
                                  isSelected
                                    ? "bg-orange-50"
                                    : idx % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-50"
                                }`}
                              >
                                <td className="border px-4 py-3">{row[0]}</td>
                                <td className="border px-4 py-3">{row[1]}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <button
                      onClick={() =>
                        handleInquiryClick(prod.title, selectedRow || undefined)
                      }
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 mt-4"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INQUIRY FORM (unchanged, works same as SS page) */}
      <section id="inquiry-form" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <textarea
            rows={7}
            value={prefilledMessage}
            onChange={(e) => setPrefilledMessage(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>
      </section>
    </div>
  );
}
