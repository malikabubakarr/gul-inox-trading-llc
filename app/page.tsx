"use client";

import Hero from "@/components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BlogCard from "@/components/BlogCard";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import React from "react";
import { ClientReviewsSection } from "@/components/ClientReviewsSection";
import Link from "next/link";


const blogPosts = [
  {
    title: "Difference Between 201, 304 & 316L Stainless Steel",
    excerpt: "Understand the key differences between stainless steel grades and where each is best used.",
    fullText: "201 Stainless Steel is generally used for light-duty applications and is the most economical. 304 Stainless Steel offers excellent corrosion resistance and is widely used in kitchens, piping, and tanks. 316L Stainless Steel contains molybdenum for better corrosion resistance in chemical environments and is ideal for marine or industrial applications. Consider each grade based on strength, corrosion resistance, and cost.",
    img: "/images/blog1.png",
  },
  {
    title: "Mirror vs Hairline Finish – Which Should You Choose?",
    excerpt: "A complete guide to stainless steel finishes and their industrial applications.",
    fullText: "Mirror finish stainless steel is highly reflective, suitable for decorative applications like elevators and interior panels. Hairline (brushed) finish offers subtle texture and is ideal for areas with high wear or for hiding scratches. Choice depends on aesthetic preference and maintenance requirements.",
    img: "/images/blog2.png",
  },
  {
    title: "How to Choose Stainless Steel Sheets for Construction",
    excerpt: "Key factors to consider when selecting stainless steel sheets for your project.",
    fullText: "Selecting the right stainless steel sheet involves considering the grade, thickness, finish, and intended use. For structural purposes, 304 or 316L is preferred. For aesthetic panels, consider finish (mirror, brush, or matte) and thickness for rigidity. Always factor in environmental conditions and maintenance.",
    img: "/images/blog3.png",
  },
];

export default function HomePage() {
  const [modalContent, setModalContent] = React.useState<{ title: string; content: string; } | null>(null);
  return (
    <>
      <Hero />
{/* STEEL PRODUCTS SECTION */}
<section className="py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Premium Stainless Steel Product Range
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-lg">
        High-performance stainless steel solutions engineered for strength,
        durability, and superior finish across industrial, structural, and
        architectural applications.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="space-y-8">
        {/* Steel Sheets */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-sheets.jpg"
              alt="Steel Sheets"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Steel Sheets
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Stainless Steel Sheets offer high strength, corrosion resistance, and premium aesthetics, perfect for kitchen appliances, architectural cladding, and industrial use. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">430</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Mirror</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Hairline</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Matte</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Steel Tubes */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-tube.jpg"
              alt="Steel Tubes"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Stainless Steel Square & Rectangular Tubes
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Stainless Steel Tubes offer durability, corrosion resistance, and elegant finish, ideal for structural, industrial, and decorative applications. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">201</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Square</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Rectangular</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Polished</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Steel Bars */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-bars.jpg"
              alt="Steel Bars"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Stainless Steel Bars
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Stainless Steel Bars deliver strength, durability, and corrosion resistance, ideal for construction, fabrication, and industrial components. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">201</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Round</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Square</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Polished</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-8">
        {/* Steel Pipes */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-pipe.jpg"
              alt="Steel Pipes"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Stainless Steel Round Pipes
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Round Stainless Steel Pipes deliver strength, corrosion resistance, and premium finish, perfect for plumbing, industrial piping, and structural applications. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">201</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Round</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Polished</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Flat Bars */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-CRFlatBars.jpg"
              alt="Steel Flat Bars"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Stainless Steel Flat Bars
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Stainless Steel Flat Bars provide high strength, corrosion resistance, and sleek finish, perfect for construction, fabrication, and industrial applications. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">201</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">CR/Flat</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Polished</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Hairline</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Steel Coils */}
        <motion.div
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="shrink-0 w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl">
            <img
              src="/steel-coil.jpg"
              alt="Steel Coil"
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              Stainless Steel Coils
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Stainless Steel Coils provide flexibility, strength, and corrosion resistance, perfect for sheet metal fabrication, roofing, and industrial applications. <strong>Available in grades with finishes like :</strong>
              <span className="mt-2 inline-flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">304</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">316</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">201</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Hot Rolled</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Cold Rolled</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Polished</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Brushed</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md">Mirror</span>
              </span>
            </p>
          </div>
        </motion.div>

      </div>

    </div>
  </div>
</section>
      {/* Quality Assurance Section with Scroll Animation */}
      <motion.section
        className="bg-gray-50 py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* BIGGER PNG Image */}
          <motion.div
            className="w-64 sm:w-80 md:w-[420px] lg:w-[520px] mb-12 md:mb-16"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/qualityy-assurance.png"
              alt="Gulf Inox Quality Assurance"
              className="w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Uncompromising Quality Control & Certified Assurance
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-10">
              At Gulf Inox Trading LLC, our expert team ensures every stainless steel product
              meets exacting standards using the latest technology and rigorous testing.
              With verified third-party certifications, we guarantee precision,
              reliability, and unmatched quality in every order.
            </p>

            <motion.a
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg text-sm md:text-base"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Quick Quote
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      {/* Types of Steel with Scroll Animation */}
<motion.section
  className="bg-white py-24"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Types of Stainless Steel We Supply
    </motion.h2>

    <motion.p
      className="text-gray-600 text-base max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Premium stainless steel products in multiple grades and forms for construction,
      industrial, and commercial use.
    </motion.p>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        {
          title: "Stainless Steel Sheets",
          desc: "201, 304 & 316L grades in mirror, brush, 2B and mill finish.",
          img: "/images/steel1.png",
          tag: "Sheets / Plates",
          link: "/products/stainless-steel-sheets",
        },
        {
          title: "Stainless Steel Bars",
          desc: "Flat and round bars in 304 & 316L from 3mm to 100mm.",
          img: "/images/steel2.png",
          tag: "Bars",
          link: "/products/stainless-steel-round-bars-&-rods",
        },
        {
          title: "Stainless Steel Coils",
          desc: "Premium quality coils for fabrication and industrial use.",
          img: "/images/steel3.png",
          tag: "Coils",
          link: "/products/stainless-steel-sheets",
        },
        {
          title: "Stainless Steel Pipes",
          desc: "Durable 304 & 316L pipes for plumbing and industry.",
          img: "/images/steel4.png",
          tag: "Pipes / Tubes",
          link: "/products/stainless-steel-pipes",
        },
        {
          title: "Stainless Flat Bars & Angles",
          desc: "Strong flat bars and angles in 304 & 316L grades.",
          img: "/images/steel5.png",
          tag: "Bars / Flat Bars & Angles",
          link: "/products/stainless-steel-flat-bars-cr-flats-square-bars-&-angles",
        },
        {
          title: "Aluminium Sheets & Plates",
          desc: "High-quality aluminium sheets for construction and manufacturing.",
          img: "/images/steel7.png",
          tag: "Aluminium",
          link: "/products/aluminium-sheets-&-plates",
        },
      ].map((item, i) => (
        <SwiperSlide key={i}>
          <Link href={item.link}>
            <motion.div
              className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all overflow-hidden min-h-[560px] flex flex-col cursor-pointer"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-96 w-full object-cover"
              />

              <div className="p-8 text-left flex-1">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  {item.desc}
                </p>
                <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</motion.section>


{/* Vision Mission Values Section */}
<motion.h2
            className="relative mb-20 text-center text-3xl md:text-4xl font-light
              bg-gradient-to-r from-slate-600 via-gray-400 to-slate-700 bg-clip-text text-transparent
              after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-24
              after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r
              after:from-orange-400 after:to-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Mission, Vision & Values
          </motion.h2>
<motion.section
  className="relative py-24 bg-gradient-to-br from-yellow-50 to-orange-30 overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Background Image */}
<div
  className="absolute inset-0 bg-center bg-cover pointer-events-none"
  style={{ backgroundImage: "url('/vision-bg.jpg')" }}
/>


  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-light text-white mb-12 tracking-wide">

      
    </h2>

    {/* Hexagon Layout */}
    <div className="flex flex-col items-center">


      {/* Mission (Top) */}
      <motion.div
        className="z-10 cursor-pointer translate-y-6"
  whileHover={{ scale: 1.05, rotate: 1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    setModalContent({
      title: "MISSION",
      content:
        "To supply certified stainless steel products with consistent quality, competitive pricing, and timely delivery, while building lasting relationships with our clients and supporting their projects with reliable and tailored solutions.",
          })
        }
      >
        <div className="w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-48 bg-gradient-to-b from-[#f0f0f0] via-[#c0c0c0] to-[#808080] clip-hexagon shadow-2xl flex flex-col items-center justify-center text-center px-4 border border-gray-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30 clip-hexagon"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 clip-hexagon"></div>

          <svg className="w-9 h-9 text-black mb-2 relative z-10 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>

          <h3 className="relative z-10 text-lg md:text-xl font-black text-black drop-shadow-sm">
            MISSION
          </h3>
        </div>
      </motion.div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-2 md:gap-4">

        {/* Vision */}
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setModalContent({
              title: "VISION",
              content:
                "To become the preferred stainless steel trading partner across the Middle East and international markets by consistently delivering high-quality products, exceptional service, and reliable supply solutions that meet the evolving needs of our clients",
            })
          }
        >
          <div className="w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-48 bg-gradient-to-b from-[#ffb347] to-[#ff8c00] clip-hexagon shadow-2xl flex flex-col items-center justify-center text-center px-4 border border-orange-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 clip-hexagon"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 clip-hexagon"></div>

            <svg className="w-9 h-9 text-black mb-2 relative z-10 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>

            <h3 className="relative z-10 text-lg md:text-xl font-black text-black drop-shadow-sm">
              VISION
            </h3>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setModalContent({
              title: "VALUES",
              content:
                "Integrity, Quality, Innovation, and Sustainability. We prioritize ethical practices, uncompromising product standards, continuous improvement, and eco-friendly solutions in all our operations.",
            })
          }
        >
          <div className="w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-48 bg-gradient-to-b from-[#f0f0f0] via-[#c0c0c0] to-[#808080] clip-hexagon shadow-2xl flex flex-col items-center justify-center text-center px-4 border border-gray-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-30 clip-hexagon"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 clip-hexagon"></div>

            <svg className="w-9 h-9 text-black mb-2 relative z-10 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>

            <h3 className="relative z-10 text-lg md:text-xl font-black text-black drop-shadow-sm">
              VALUES
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Inline Sticky Note (NO BLACK OVERLAY) */}
      {modalContent && (
        <motion.div
          className="mt-12 flex justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 border-2 border-yellow-400 rounded-lg shadow-2xl p-6 max-w-lg w-full relative transform rotate">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black transition-colors"
              onClick={() => setModalContent(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-gray-800 mb-3 drop-shadow-sm">
              {modalContent.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {modalContent.content}
            </p>
          </div>
        </motion.div>
      )}

    </div>
  </div>
</motion.section>


      
      {/* Stats – Floating Steel Balloons */}
      <motion.section
        className="bg-gradient-to-b from-white to-gray-100 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Heading */}
           <motion.h2
            className="relative mb-20 text-center text-3xl md:text-4xl font-light
              bg-gradient-to-r from-slate-600 via-gray-400 to-slate-700 bg-clip-text text-transparent
              after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-24
              after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r
              after:from-orange-400 after:to-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Providing Solutions For Stainless Steel & Alloyed Metals
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              ["25+", "Years Experience", "silver", "animate-float-slow"],
              ["30,000+", "Projects", "orange", "animate-float"],
              ["10,000+", "Customers", "silver", "animate-float-fast"],
              ["20+", "Skilled Staff", "orange", "animate-float"],
            ].map(([num, label, color, animation], i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center ${animation}`}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.12, rotate: 6 }}
              >
                <div
                  className={`w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-2xl ${
                    color === "silver"
                      ? "bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 text-gray-900"
                      : "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                  }`}
                >
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold">{num}</div>
                    <div className="text-xs md:text-sm font-medium">{label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Animation – Faster & More Movement */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-35px) translateX(10px);
            }
            50% {
              transform: translateY(-55px) translateX(0);
            }
            75% {
              transform: translateY(-35px) translateX(-10px);
            }
          }

          .animate-float-slow {
            animation: float 3.5s ease-in-out infinite;
          }

          .animate-float {
            animation: float 2.3s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: float 1.9s ease-in-out infinite;
          }
        `}</style>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-white py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            className="relative mb-20 text-center text-3xl md:text-4xl font-light
              bg-gradient-to-r from-slate-600 via-gray-400 to-slate-700 bg-clip-text text-transparent
              after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-24
              after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r
              after:from-orange-400 after:to-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ Items */}
          <div className="space-y-8">
            {[
              {
                q: "What types of stainless steel do you supply?",
                a: "We supply stainless steel grades 201, 304, and 316L, including sheets, flat bars, and round bars.",
              },
              {
                q: "What finishes are available for stainless steel sheets?",
                a: "Mirror, brush, 2B, and mill finish depending on the grade.",
              },
              {
                q: "Do you supply stainless steel to small traders and builders?",
                a: "Yes, we supply to house builders, contractors, workshops, and industrial clients.",
              },
              {
                q: "What sizes of stainless steel bars do you offer?",
                a: "Round bars from 3mm to 100mm and flat bars in 304 & 316 grades.",
              },
              {
                q: "Which stainless steel grade should I choose?",
                a: "201 for decorative use, 304 for general industrial use, and 316L for high-corrosion environments.",
              },
              {
                q: "Do you provide bulk or custom supply?",
                a: "Yes, we handle bulk and custom orders based on size, grade, and finish.",
              },
            ].map((item, i) => (
              <motion.details
                key={i}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-lg transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <summary className="flex cursor-pointer items-center justify-between px-8 py-6 text-base md:text-lg font-medium text-gray-800 hover:text-orange-600">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-sm">
                      Q
                    </div>
                    {item.q}
                  </div>

                  <svg
                    className="h-6 w-6 text-orange-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Preview with Scroll Animation */}
      <motion.section
        className="bg-gray-50 py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry Insights & Guides
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Expert insights on stainless steel grades, applications, and industry best practices.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                className="min-h-[600px] flex flex-col bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <ClientReviewsSection />
      
    </>
  );
}