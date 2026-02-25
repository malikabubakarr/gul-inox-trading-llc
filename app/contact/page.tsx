// app/contact/page.tsx
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Gulf Inox Trading LLC",
  description:
    "Contact Gulf Inox Trading LLC for stainless steel trading inquiries. Address, phone, email, office hours and contact form.",
};

export default function ContactPage() {
  return (
<div className="bg-white min-h-screen">
  {/* HERO SECTION */}
  <section className="relative pt-44 pb-28 md:pt-52 md:pb-32 overflow-hidden">
    
    {/* Full HD Background with Parallax */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/services-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed", // parallax effect
        filter: "none", // ensures no dimming/fading
      }}
    />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Contact Gulf Inox Trading LLC
      </h1>
      <p className="text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
        Get in touch with our team for stainless steel supply, pricing, and project-based inquiries. We’re here to support your business.
      </p>
      <div className="mt-8">
        <a
          href="#contact-form"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1"
        >
          Send a Message
        </a>
      </div>
    </div>

  </section>


      {/* Contact */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-6 items-start">
          {/* Left Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Send className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                Get in Touch
              </h2>
            </div>
            <div className="space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 group">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Address</p>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                    New Industrial Area, Ajman- 16882<br />
                    Ajman , UAE<br />
                    P.O. Box 16882, Ajman - U.A.E
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 group">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Phone</p>
                  <p className="text-xs text-gray-700 mt-1">
                    +971 6 7 480526
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 group">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Email</p>
                  <p className="text-xs text-gray-700 mt-1">
                    info@gulfinox.com
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 group">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    Office Hours
                  </p>
                  <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                    Monday – Saturday<br />
                    8:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-start bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300" id="contact-form">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                Send a Message
              </h2>
            </div>

            {/* ContactForm component */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <MapPin className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              Find Us
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-10 font-light">
            Our office is located in Ajman for easy access and client meetings.
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <iframe
              src="https://www.google.com/maps?q=Gulf+Inox+Trading+LLC+Ajman&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              title="Gulf Inox Trading LLC Location"
            />
            {/* Transparent Overlay for Clickability */}
            <a
              href="https://maps.app.goo.gl/WcapGtKewnLL3kus6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-transparent"
              aria-label="Open location in Google Maps"
            ></a>
          </div>
          {/* Open in Google Maps Button */}
          <a
            href="https://maps.app.goo.gl/WcapGtKewnLL3kus6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}