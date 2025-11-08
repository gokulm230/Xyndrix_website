"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setservicesDropdownOpen] = useState(false);

  const companyRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const companyCloseTimeout = useRef(null);
  const productsCloseTimeout = useRef(null);
  const servicesCloseTimeout = useRef(null);

  const clearCloseTimeout = (name) => {
    if (name === "company" && companyCloseTimeout.current) {
      clearTimeout(companyCloseTimeout.current);
      companyCloseTimeout.current = null;
    }
    if (name === "products" && productsCloseTimeout.current) {
      clearTimeout(productsCloseTimeout.current);
      productsCloseTimeout.current = null;
    }
    if (name === "services" && servicesCloseTimeout.current) {
      clearTimeout(servicesCloseTimeout.current);
      servicesCloseTimeout.current = null;
    }
  };

  const openDropdown = (name) => {
    clearCloseTimeout(name);
    if (name === "company") {
      setCompanyDropdownOpen(true);
      setProductsDropdownOpen(false);
      setservicesDropdownOpen(false);
    }
    if (name === "products") {
      setProductsDropdownOpen(true);
      setCompanyDropdownOpen(false);
      setservicesDropdownOpen(false);
    }
    if (name === "services") {
      setservicesDropdownOpen(true);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
    }
  };

  const closeDropdownDelayed = (name, delay = 500) => {
    clearCloseTimeout(name);
    const id = setTimeout(() => {
      if (name === "company") setCompanyDropdownOpen(false);
      if (name === "products") setProductsDropdownOpen(false);
      if (name === "services") setservicesDropdownOpen(false);
    }, delay);
    if (name === "company") companyCloseTimeout.current = id;
    if (name === "products") productsCloseTimeout.current = id;
    if (name === "services") servicesCloseTimeout.current = id;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (dropdown) => {
    if (dropdown === "company") {
      setCompanyDropdownOpen(!companyDropdownOpen);
      setProductsDropdownOpen(false);
      setservicesDropdownOpen(false);
    } else if (dropdown === "products") {
      setProductsDropdownOpen(!productsDropdownOpen);
      setCompanyDropdownOpen(false);
      setservicesDropdownOpen(false);
    } else if (dropdown === "services") {
      setservicesDropdownOpen(!servicesDropdownOpen);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
    }
  };

  return (
    <header className="font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-3 lg:px-16 bg-[#0a085c] sticky top-0 z-[10000]">
        <div className="flex items-center">
          <Link href="/Home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/xyndrix.png"
              alt="Xyndrix Logo"
              width={120}
              height={40}
              className="h-7 w-auto"
              priority
            />
            <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">XYNDRIX</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* About Us - Standalone Link */}
          <Link href="/About" className="font-semibold text-white/90 hover:text-white transition-colors">
            About Us
          </Link>

          {/* Company Dropdown */}
          <div
            ref={companyRef}
            onMouseEnter={() => openDropdown("company")}
            onMouseLeave={() => closeDropdownDelayed("company")}
            className="relative"
          >
            <button className="flex items-center gap-1 font-semibold text-white/90 hover:text-white transition-colors">
              Company
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  companyDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Company Dropdown Menu */}
            {companyDropdownOpen && (
              <div
                className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 bg-gradient-to-br from-[#0a085c] to-[#1a1575] shadow-2xl rounded-xl z-[99999] border border-white/10 backdrop-blur-md"
                onMouseEnter={() => clearCloseTimeout("company")}
                onMouseLeave={() => closeDropdownDelayed("company")}
              >
                <div className="p-3">
                  <div className="space-y-2">
                    {/* <Link
                      href="/About"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">About Us</span>
                    </Link> */}
                    <Link
                      href="/Team"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">Team</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          {/* <div
            ref={productsRef}
            onMouseEnter={() => openDropdown("products")}
            onMouseLeave={() => closeDropdownDelayed("products")}
            className="relative"a
          > */}
            {/* <button className="flex items-center gap-1 font-semibold text-white/90 hover:text-white transition-colors">
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button> */}

            {/* Products Dropdown Menu */}
            {/* {productsDropdownOpen && (
              <div
                className="fixed top-20 left-1/2 transform -translate-x-1/2 w-80 bg-gradient-to-br from-[#0a085c] to-[#1a1575] shadow-2xl rounded-xl z-[99999] border border-white/10 backdrop-blur-md"
                onMouseEnter={() => clearCloseTimeout("products")}
                onMouseLeave={() => closeDropdownDelayed("products")}
              >
                <div className="p-3">
                  <h4 className="text-xs font-bold uppercase text-white/50 tracking-wider mb-4">Our Products</h4>
                  <div className="space-y-2">
                    <Link
                      href="/Products/MeshUp"
                      className="block group"
                    >
                      <div className="flex items-start gap-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-4 rounded-lg">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">MeshUp</div>
                          <p className="text-sm text-white/60">Innovative collaboration platform</p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/Products/cctv-pentester"
                      className="block group"
                    >
                      <div className="flex items-start gap-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-4 rounded-lg">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">CCTV Pentester</div>
                          <p className="text-sm text-white/60">Security testing for surveillance systems</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )} */}
          {/* </div> */}

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={() => closeDropdownDelayed("services")}
            className="relative"
          >
            <button className="flex items-center gap-1 font-semibold text-white/90 hover:text-white transition-colors">
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Services Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                className="fixed top-20 left-1/2 transform -translate-x-1/2 w-80 bg-gradient-to-br from-[#0a085c] to-[#1a1575] shadow-2xl rounded-xl z-[99999] border border-white/10 backdrop-blur-md"
                onMouseEnter={() => clearCloseTimeout("services")}
                onMouseLeave={() => closeDropdownDelayed("services")}
              >
                <div className="p-3">
                  <h4 className="text-xs font-bold uppercase text-white/50 tracking-wider mb-4">What We Offer</h4>
                  <div className="space-y-2">
                    <Link
                      href="/services/web-app-development"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="font-medium">Web & App Development</span>
                    </Link>
                    <Link
                      href="/services/ai-solutions"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-medium">AI Solutions</span>
                    </Link>
                    <Link
                      href="/services/internships"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium">Internships</span>
                    </Link>
                    {/* <Link
                      href="/services/courses"
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg group"
                    >
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="font-medium">Courses</span>
                    </Link> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-blue-700 hover:bg-blue-900 text-white px-4 py-1.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Let's Get Started!
          </Link>
          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-[#0a085c] to-[#1a1575] shadow-2xl py-6 px-6 absolute top-full left-0 right-0 z-40 border-t border-white/10">
          <div className="flex flex-col space-y-4">
            {/* Mobile Company Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold text-white/90 hover:text-white "
                onClick={() => toggleMobileDropdown("company")}
              >
                <span>Company</span>
                <svg
                  className={`w-4 h-4 transition-transform ${companyDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-white/20">
                  <Link href="/About" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/Team" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    Team
                  </Link>
                  <Link href="/contact" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold text-white/90 hover:text-white py-2"
                onClick={() => toggleMobileDropdown("products")}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-white/20">
                  <Link href="/Products/MeshUp" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    MeshUp
                  </Link>
                  <Link href="/Products/cctv-pentester" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    CCTV Pentester
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold text-white/90 hover:text-white py-2"
                onClick={() => toggleMobileDropdown("services")}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-white/20">
                  <Link href="/services/web-app-development" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    Web & App Development
                  </Link>
                  <Link href="/services/ai-solutions" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    AI Solutions
                  </Link>
                  <Link href="/services/internships" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    Internships
                  </Link>
                  <Link href="/services/courses" className="block py-2 text-sm text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                    Courses
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Get Started!
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}