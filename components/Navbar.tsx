"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Info Bar */}
      <div className="hidden md:flex items-center justify-between bg-gray-100 text-gray-700 text-sm px-6 py-2 border-b border-gray-200">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-orange-500" />
            <span>+971 67480526</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-orange-500" />
            <span>info@gulfinox.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-orange-500" />
          <span>New Industrial Area, Ajman- 16882, UAE</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-gray-200 shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logoo.png"
              alt="Gulf Inox Trading LLC"
              width={scrolled ? 60 : 80}
              height={scrolled ? 60 : 80}
              priority
              className="transition-all duration-300"
            />
            <div className="leading-tight">
              <span className="block text-lg sm:text-xl font-semibold text-gray-900">
                Gulf Inox
              </span>
              <span className="block text-xs sm:text-sm text-gray-600">
                Trading L.L.C
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            <li><Link href="/" className="nav-btn">Home</Link></li>
            <li><Link href="/about" className="nav-btn">About</Link></li>

            {/* Products Dropdown */}
            <li className="relative group">
              <button className="nav-btn inline-flex items-center gap-1">
                Products <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  <DropdownLink
                    href="/products/stainless-steel-sheets"
                    title="Stainless Steel Sheets"
                    desc="201, 304 & 316L grades"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-bars"
                    title="Stainless Steel Bars"
                    desc="Flat & Round bars"
                  />
                  <DropdownLink
                    href="/products/custom-bulk-supply"
                    title="Custom / Bulk Supply"
                    desc="Tailored industrial orders"
                  />
                </div>
              </div>
            </li>

            <li><Link href="/services" className="nav-btn">Services</Link></li>
            <li><Link href="/contact" className="nav-btn">Contact</Link></li>
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition text-sm"
          >
            Request Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-5 py-6 space-y-5 border-t border-gray-200 shadow-lg">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="mobile-item w-full flex justify-between items-center"
              >
                Products
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="mt-3 space-y-3 pl-4 border-l border-gray-200">
                  <MobileSub href="/products/stainless-steel-sheets" onClick={() => setOpen(false)}>
                    Stainless Steel Sheets
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-bars" onClick={() => setOpen(false)}>
                    Stainless Steel Bars
                  </MobileSub>
                  <MobileSub href="/products/custom-bulk-supply" onClick={() => setOpen(false)}>
                    Custom / Bulk Supply
                  </MobileSub>
                </div>
              )}
            </div>

            <MobileLink href="/services" onClick={() => setOpen(false)}>Services</MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition shadow-md text-sm"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style jsx>{`
        .nav-btn {
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 9999px;
          font-weight: 400;
          color: #374151;
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .nav-btn:hover {
          background: #e5e7eb;
        }
        .mobile-item {
          padding: 0.5rem 0.75rem;
          border-radius: 9999px;
          background: #f3f4f6;
          font-weight: 400;
          text-align: center;
          font-size: 0.875rem;
        }
      `}</style>
    </header>
  );
}

/* Helper Components */
function DropdownLink({ href, title, desc }: any) {
  return (
    <Link href={href} className="block px-4 py-3 rounded-xl hover:bg-orange-50 transition">
      <div className="font-medium text-gray-900 text-sm">{title}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </Link>
  );
}

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link href={href} onClick={onClick} className="mobile-item block">
      {children}
    </Link>
  );
}

function MobileSub({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 font-normal"
    >
      {children}
    </Link>
  );
}