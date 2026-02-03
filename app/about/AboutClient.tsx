"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of stainless steel do you supply?",
      a: "We supply stainless steel grades 201, 304, and 316L, including sheets, flat bars, and round bars for all types of applications."
    },
    {
      q: "What finishes are available for stainless steel sheets?",
      a: "Our stainless steel sheets are available in mirror finish, brush finish, 2B finish, and mill finish depending on the grade."
    },
    {
      q: "Do you supply stainless steel to small traders and builders?",
      a: "Yes, we supply stainless steel to house builders, contractors, small traders, workshops, and large industrial organizations."
    },
    {
      q: "What sizes of stainless steel bars do you offer?",
      a: "We offer flat bars in 304 and 316 grades, and round bars in sizes ranging from 3mm up to 100mm."
    },
    {
      q: "Which stainless steel grade should I choose?",
      a: "201 is suitable for budget-friendly and decorative use, 304 is ideal for general construction and industrial use, while 316L is recommended for high-corrosion and marine environments."
    },
    {
      q: "Do you provide bulk or custom stainless steel supply?",
      a: "Yes, we specialize in bulk orders and custom supply based on your required grade, size, thickness, and finish."
    }
  ];

  const projects = [
    {
      title: "Dubai Marina Residential Complex",
      description: "Supplied stainless steel sheets and bars for facade and structural elements.",
      image: "/images/projects/dubai-marina.jpg", // Placeholder
    },
    {
      title: "Abu Dhabi Industrial Plant",
      description: "Delivered bulk 316L bars for machinery and equipment in harsh environments.",
      image: "/images/projects/abu-dhabi-plant.jpg", // Placeholder
    },
    {
      title: "Sharjah Commercial Building",
      description: "Provided custom 304 sheets for kitchen and architectural finishes.",
      image: "/images/projects/sharjah-building.jpg", // Placeholder
    },
  ];

  const clients = [
    "Dubai Construction Co.",
    "UAE Manufacturing Ltd.",
    "Gulf Traders Inc.",
    "Sharjah Builders",
    "Abu Dhabi Industries",
    "Emirates Steel Works",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Intro Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            About Gulf Inox TRD LLC
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Gulf Inox TRD LLC is a leading stainless steel supplier, serving
            builders, traders, and industrial clients with premium-quality
            stainless steel products. With decades of experience, we deliver
            reliable solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* CEO/Founder Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-16 tracking-tight">
            Meet Our Founder & CEO
          </h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12 hover:shadow-2xl transition">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-medium text-orange-600 mb-4">Ahmed Al-Rashid</h3>
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-4">
                  As the Founder and CEO of Gulf Inox TRD LLC, Ahmed brings over 50 years of experience in the stainless steel industry. His vision has driven the company to become a trusted partner for builders, traders, and industrial clients across the UAE and beyond. Under his leadership, we prioritize quality, innovation, and customer satisfaction.
                </p>
                <p className="text-gray-600 text-sm font-light italic">
                  "Quality is not an act, it is a habit." – Aristotle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-16 tracking-tight">
            Our Achievements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["50+", "Years Experience"],
              ["30,000+", "Projects Completed"],
              ["15,000+", "Happy Clients"],
              ["1,000+", "Skilled Staff"],
            ].map(([num, label], i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 ease-out transform hover:scale-105">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex flex-col items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">{num}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-16 tracking-tight">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 ease-out transform hover:scale-105">
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 tracking-tight">
            Our Clients
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We proudly serve a diverse range of clients, from small traders to large industrial organizations. Here are some of our valued partners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <div key={i} className="bg-white rounded-xl p-6 hover:bg-orange-50 transition-colors duration-300 shadow-sm">
                <p className="text-gray-900 font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-2xl transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}