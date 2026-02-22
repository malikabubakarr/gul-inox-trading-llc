"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const reviews = [
  { name: "Ahmed Khan", company: "Steel Fabrication LLC", text: "Excellent stainless steel quality and very professional service. Delivery was fast and material finish was premium.", rating: 5 },
  { name: "Mohammed Ali", company: "Industrial Solutions UAE", text: "Reliable supplier with consistent quality. We regularly purchase sheets and pipes and always receive top-grade material.", rating: 5 },
  { name: "Rashid Trading", company: "Ajman", text: "Competitive pricing, responsive team, and timely delivery. Highly recommended for bulk stainless steel supply.", rating: 4 },
  { name: "Sara Ahmed", company: "Metal Works Co.", text: "Great customer support and excellent stainless steel sheets. Will order again.", rating: 5 },
  { name: "Bilal Hussain", company: "Dubai Fabricators", text: "High-quality products with prompt delivery. Very satisfied.", rating: 5 },
  { name: "Ali Rehman", company: "Steel Traders", text: "Affordable pricing and top-notch material. Highly recommended.", rating: 4 },
  { name: "Fatima Noor", company: "Gulf Industries", text: "Smooth transaction, good communication, and premium sheets.", rating: 5 },
  { name: "Omar Farooq", company: "UAE Stainless", text: "Reliable supplier, consistent quality. Happy with the services.", rating: 5 },
  { name: "Hassan Iqbal", company: "Metal Crafts", text: "Very professional team. Delivery was on time and products were perfect.", rating: 4 },
  { name: "Nadia Khan", company: "Steel Hub", text: "Excellent stainless steel material. Great service!", rating: 5 },
];

// Animated background blob component
function AnimatedBlob({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Star rating component with animation
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-amber-400" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </motion.svg>
      ))}
    </div>
  );
}

// Review card component
function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-5, 5]);
  const scale = useTransform(x, [-200, 200], [0.98, 0.98]);

  return (
    <motion.div
      style={{ rotate, scale, x }}
      className="relative min-w-[320px] md:min-w-[360px] lg:min-w-[400px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Card background with glassmorphism */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl overflow-hidden">
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500" />
        
        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full blur-2xl" />
        
        <div className="relative p-8">
          {/* Quote icon */}
          <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-orange-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <StarRating rating={review.rating} />
          </div>

          {/* Review text */}
          <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg font-light relative z-10">
            "{review.text}"
          </p>

          {/* Author info */}
          <div className="flex items-center gap-4">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
              {review.name.charAt(0)}
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 text-lg">{review.name}</p>
              <p className="text-sm text-gray-500 font-medium">{review.company}</p>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50/50 to-transparent" />
      </div>
    </motion.div>
  );
}

export function ClientReviewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-24 overflow-hidden">
      {/* Animated background blobs */}
      <AnimatedBlob className="bg-orange-300 w-96 h-96 -top-48 -left-48" />
      <AnimatedBlob className="bg-amber-300 w-80 h-80 top-1/2 -right-32" />
      <AnimatedBlob className="bg-orange-200 w-64 h-64 -bottom-32 left-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            TESTIMONIALS
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Clients</span> Say
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with us.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <div className="w-12 h-1 rounded-full bg-gradient-to-l from-orange-400 to-amber-400" />
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex gap-8 cursor-grab pb-8"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </motion.div>

        {/* Navigation hints */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Swipe to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}