// components/FloatingButtons.tsx
"use client";

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const whatsappNumbers = [
    { number: '971507840677', label: 'Sheikh GIT' },
    { number: '971504658536', label: 'Sarwar GIT' },
    { number: '971502044277', label: 'Rajesh GIT' },
    { number: '971505120628', label: 'Praveen GIT' },
  ];

  const toggleWhatsAppOptions = () => {
    setShowWhatsAppOptions(!showWhatsAppOptions);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onClick={toggleWhatsAppOptions}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          {showWhatsAppOptions ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
        </button>

        {/* WhatsApp Options Dropdown */}
        {showWhatsAppOptions && (
          <div className="absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Select a Sales Agent</h4>
            <div className="space-y-2">
              {whatsappNumbers.map((agent, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${agent.number}?text=Hello%20Gulf%20Inox%20TRD%20LLC,%20I%20am%20interested%20in%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-colors duration-200"
                  onClick={() => setShowWhatsAppOptions(false)} // Close dropdown after selection
                >
                  {agent.label} (+{agent.number})
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Email Button - Opens Gmail with Draft Message */}
      <a
        href="https://mail.google.com/mail/?view=cm&to=info@gulfinox.com&su=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20stainless%20steel%20products."

        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Send us an email via Gmail"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}