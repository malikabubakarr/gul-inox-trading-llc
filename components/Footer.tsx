// components/Footer.tsx
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaCog, FaPhone } from 'react-icons/fa'; // Additional icons for links

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 p-8 border-t border-gray-300 shadow-lg"> {/* Removed mt-10 to eliminate gap */}
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Logo, Links, and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/logoo.png" // Replace with your actual logo path (e.g., /images/logo.png)
              alt="Gulf Inox TRD LLC Logo"
              className="h-30 w-auto mr-3"
            />
            <span className="text-xl font-bold text-gray-800">Gulf Inox TRD LLC</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 mb-4 md:mb-0">
            <a href="/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <FaHome size={16} /> Home
            </a>
            <a href="/about" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <FaInfoCircle size={16} /> About
            </a>
            <a href="/services" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <FaCog size={16} /> Services
            </a>
            <a href="/contact" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <FaPhone size={16} /> Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/gulfinox"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-300 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/gulfinox"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-300 rounded-full text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:info@gulfinox.com"
              className="p-2 bg-gray-300 rounded-full text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Products</h3>
          <nav className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <a href="/products/stainless-steel-sheets" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Sheets
            </a>
            <a href="/products/stainless-steel-pipes" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Pipes
            </a>
            <a href="/products/stainless-steel-round-bars-&-rods" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Round Bars & Rods
            </a>
            <a href="/products/stainless-steel-square-&-rectangular-tubes" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Square & Rectangular Tubes
            </a>
            <a href="/products/stainless-steel-flat-bars-cr-flats-square-bars-&-angles" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Flat Bars, CR Flats, Square Bars & Angless
            </a>
            <a href="/products/stainless-steel-pipes-schedule-&-SMLS" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Stainless Steel Pipes - Schedule & Seamless
            </a>
            <a href="/products/aluminium-sheets-&-plates" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Aluminium Sheets & Plates
            </a>
          </nav>
        </div>

        {/* Bottom Section: Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Stay Updated</h3>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest news and updates.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent shadow-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Gulf Inox TRD LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}