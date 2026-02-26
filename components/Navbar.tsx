"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Search, ArrowRight } from "lucide-react";

// Define the Product interface for TypeScript
interface Product {
  name: string;
  page: string;
  keywords: string[];
}

// Import products data using a relative path (adjust based on your file structure)
// Ensure products.ts exports: export const products: Product[] = [...]
import { products } from "../data/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

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

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keywords.some((keyword: string) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setSearchResults(filtered);
    setShowSearchDropdown(true);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchResultClick = () => {
    setSearchQuery("");
    setShowSearchDropdown(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Responsive Top Info Bar */}
<section className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 px-3 md:px-6 py-2 md:py-3 shadow-lg text-xs md:text-sm">

  {/* LEFT — Call + Email */}
  <div className="flex items-center gap-3 md:gap-10">

    {/* Call */}
    <a
      href="tel:+97167480526"
      className="flex items-center gap-2 md:gap-3 group hover:text-orange-400 transition-all"
    >
      <div className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-full group-hover:bg-orange-500/20">
        <Phone size={16} className="md:w-5 md:h-5 text-orange-500" />
      </div>

      {/* text visible on all screens but compact */}
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-500">
          Call for Inquiry
        </span>
        <span className="font-semibold text-white text-[11px] md:text-sm">
          +971 67480526
        </span>
      </div>
    </a>

    {/* Divider desktop only */}
    <div className="hidden md:block h-10 w-px bg-gray-700"></div>

    {/* Email */}
    <a
      href="mailto:info@gulfinox.com"
      className="flex items-center gap-2 md:gap-3 group hover:text-orange-400 transition-all"
    >
      <div className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-full group-hover:bg-orange-500/20">
        <Mail size={16} className="md:w-5 md:h-5 text-orange-500" />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-500">
          Email for Inquiry
        </span>
        <span className="font-semibold text-white text-[11px] md:text-sm">
          info@gulfinox.com
        </span>
      </div>
    </a>
  </div>

  {/* RIGHT — Location */}
  <div className="flex items-center gap-2 md:gap-3 text-gray-400">
    <div className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 bg-white/5 rounded-full">
      <MapPin size={16} className="md:w-5 md:h-5 text-orange-500" />
    </div>

    {/* always visible but smaller on mobile */}
    <div className="flex flex-col leading-tight max-w-[120px] md:max-w-none">
      <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-500">
        Location
      </span>
      <span className="font-medium text-gray-300 text-[11px] md:text-sm truncate">
        New Industrial Area, Ajman
      </span>
    </div>
  </div>

</section>

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
              width={scrolled ? 80 : 100}
              height={scrolled ? 80 : 100}
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

              <div className="absolute left-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-80 overflow-y-auto">
                <div className="p-2">
                  <DropdownLink
                    href="/products/stainless-steel-sheets"
                    title="Stainless Steel Sheets"
                    desc="201, 304 & 316L grades"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-pipes"
                    title="Stainless Steel Pipes"
                    desc="201, 304 & 316L grades"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-round-bars-&-rods"
                    title="Stainless Steel Round Bars & Rods"
                    desc="201, 304 & 316L grades"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-square-&-rectangular-tubes"
                    title="Stainless Steel Square & Rectangular Tubes"
                    desc="201, 304 & 316L grades"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-flat-bars-cr-flats-square-bars-&-angles"
                    title="Stainless Steel Flat Bars, CR Flats & Angles"
                    desc="Tailored industrial orders"
                  />
                  <DropdownLink
                    href="/products/stainless-steel-pipes-schedule-&-SMLS"
                    title="Stainless Steel Pipes - Schedule & Seamless"
                    desc="Tailored industrial orders"
                  />
                  <DropdownLink
                    href="/products/aluminium-sheets-&-plates"
                    title="Aluminium Sheets & Plates"
                    desc="Tailored industrial orders"
                  />
                </div>
              </div>
            </li>

            <li><Link href="/services" className="nav-btn">Services</Link></li>
            <li><Link href="/contact" className="nav-btn">Contact</Link></li>
          </ul>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto z-60">
                <div className="p-2">
                  {searchResults.map((product: Product, index: number) => (
                    <Link
                      key={index}
                      href={product.page}
                      onClick={handleSearchResultClick}
                      className="block px-4 py-3 rounded-xl hover:bg-orange-50 transition"
                    >
                      <div className="font-medium text-gray-900 text-sm">{product.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

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
            {/* Mobile Search Bar */}
            <div className="flex items-center gap-2 relative">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {showSearchDropdown && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto z-60">
                  <div className="p-2">
                    {searchResults.map((product: Product, index: number) => (
                      <Link
                        key={index}
                        href={product.page}
                        onClick={() => {
                          handleSearchResultClick();
                          setOpen(false);
                        }}
                        className="block px-4 py-3 rounded-xl hover:bg-orange-50 transition"
                      >
                        <div className="font-medium text-gray-900 text-sm">{product.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
                  className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productsOpen && (
                <div className="mt-3 space-y-3 pl-4 border-l border-gray-200 max-h-96 overflow-y-auto">
                  <MobileSub href="/products/stainless-steel-sheets" onClick={() => setOpen(false)}>
                    Stainless Steel Sheets
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-pipes" onClick={() => setOpen(false)}>
                    Stainless Steel Pipes
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-round-bars-&-rods" onClick={() => setOpen(false)}>
                    Stainless Steel Round Bars & Rods
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-square-&-rectangular-tubes" onClick={() => setOpen(false)}>
                    Stainless Steel Square & Rectangular Tubes
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-flat-bars-cr-flats-square-bars-&-angles" onClick={() => setOpen(false)}>
                    Stainless Steel Flat Bars, CR Flats, & Angles
                  </MobileSub>
                  <MobileSub href="/products/stainless-steel-pipes-schedule-&-SMLS" onClick={() => setOpen(false)}>
                    Stainless Steel Pipes - Schedule & Seamless
                  </MobileSub>
                  <MobileSub href="/products/aluminium-sheets-&-plates" onClick={() => setOpen(false)}>
                    Aluminium Sheets & Plates
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