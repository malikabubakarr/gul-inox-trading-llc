// app/contact/page.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Gulf Inox TRD LLC",
  description:
    "Contact Gulf Inox TRD LLC for stainless steel trading inquiries. Address, phone, email, office hours and contact form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
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
            Contact Gulf Inox TRD LLC
          </h1>
          <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Get in touch with our team for stainless steel supply, pricing, and
            project-based inquiries. We’re here to support your business.
          </p>
          <div className="mt-8">
            <a
              href="#contact-form"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-6 items-start">
          {/* Left Info */}
          <div className="space-y-10">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              Get in Touch
            </h2>
            <div className="space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                    Gulf Inox TRD LLC<br />
                    Dubai, UAE<br />
                    P.O. Box 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-xs text-gray-700 mt-1">
                    +971 4 123 4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-xs text-gray-700 mt-1">
                    info@gulfinox.com
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Office Hours
                  </p>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                    Monday – Saturday<br />
                    9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="contact-form" className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 hover:border-orange-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 hover:border-orange-300"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 hover:border-orange-300"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 hover:border-orange-300"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Find Us
          </h2>
          <p className="text-gray-600 text-sm mb-10 font-light">
            Our office is located in Dubai for easy access and client meetings.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <iframe
              src="https://www.google.com/maps?q=Dubai&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              title="Gulf Inox TRD LLC Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}