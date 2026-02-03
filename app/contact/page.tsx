// app/contact/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Contact Gulf Inox TRD LLC",
  description:
    "Get in touch with Gulf Inox TRD LLC for stainless steel trading inquiries. Find our location, contact details, and send us a message.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Contact Gulf Inox TRD LLC
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed font-light">
            Reach out to us for inquiries about our premium stainless steel products and services. We're here to provide expert support and tailored solutions for your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Get in Touch - Left */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Address</h3>
                  <p className="text-gray-700 text-xs mt-1 leading-relaxed">
                    Gulf Inox TRD LLC<br />
                    Dubai, UAE<br />
                    P.O. Box 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-700 text-xs mt-1">+971 4 123 4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="text-gray-700 text-xs mt-1">info@gulfinox.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900 text-sm"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900 text-sm"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none text-gray-900 text-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Find Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Visit our office in Dubai, UAE. We're conveniently located for easy access and personalized service.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789012!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sDubai%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gulf Inox TRD LLC Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}