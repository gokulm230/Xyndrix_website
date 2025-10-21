"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);

  const companyRef = useRef(null);
  const productsRef = useRef(null);
  const solutionsRef = useRef(null);
  const careersRef = useRef(null);
  const companyCloseTimeout = useRef(null);
  const productsCloseTimeout = useRef(null);
  const solutionsCloseTimeout = useRef(null);
  const careersCloseTimeout = useRef(null);

  const clearCloseTimeout = (name) => {
    if (name === "company" && companyCloseTimeout.current) {
      clearTimeout(companyCloseTimeout.current);
      companyCloseTimeout.current = null;
    }
    if (name === "products" && productsCloseTimeout.current) {
      clearTimeout(productsCloseTimeout.current);
      productsCloseTimeout.current = null;
    }
    if (name === "solutions" && solutionsCloseTimeout.current) {
      clearTimeout(solutionsCloseTimeout.current);
      solutionsCloseTimeout.current = null;
    }
    if (name === "careers" && careersCloseTimeout.current) {
      clearTimeout(careersCloseTimeout.current);
      careersCloseTimeout.current = null;
    }
  };

  const openDropdown = (name) => {
    // clear any close timer and open the requested dropdown while closing others
    clearCloseTimeout(name);
    if (name === "company") {
      setCompanyDropdownOpen(true);
      setProductsDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    }
    if (name === "products") {
      setProductsDropdownOpen(true);
      setCompanyDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    }
    if (name === "solutions") {
      setSolutionsDropdownOpen(true);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
      setCareersDropdownOpen(false);
    }
    if (name === "careers") {
      setCareersDropdownOpen(true);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  const closeDropdownDelayed = (name, delay = 150) => {
    // start a short timeout to close; cancelled if mouse enters menu
    clearCloseTimeout(name);
    const id = setTimeout(() => {
      if (name === "company") setCompanyDropdownOpen(false);
      if (name === "products") setProductsDropdownOpen(false);
      if (name === "solutions") setSolutionsDropdownOpen(false);
      if (name === "careers") setCareersDropdownOpen(false);
    }, delay);
    if (name === "company") companyCloseTimeout.current = id;
    if (name === "products") productsCloseTimeout.current = id;
    if (name === "solutions") solutionsCloseTimeout.current = id;
    if (name === "careers") careersCloseTimeout.current = id;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile dropdown toggles (keep these as clicks for mobile)
  const toggleMobileDropdown = (dropdown) => {
    if (dropdown === "company") {
      setCompanyDropdownOpen(!companyDropdownOpen);
      setProductsDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === "products") {
      setProductsDropdownOpen(!productsDropdownOpen);
      setCompanyDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === "solutions") {
      setSolutionsDropdownOpen(!solutionsDropdownOpen);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === "careers") {
      setCareersDropdownOpen(!careersDropdownOpen);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  return (
    <header className="font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-center p-4 lg:px-16 shadow-sm bg-white sticky top-0 z-50">
        <div className="flex items-center mr-8">
          <Link href="/Home" className="flex items-center">
            <Image
              src="/xyndrix.png"
              alt="Xyndrix Logo"
              width={120}
              height={40}
              className="h-7 w-auto"
              priority
            />
            <h1 className="ml-1 text-3xl font-bold text-blue-500">XYNDRIX</h1>
          </Link>
        </div>

        {/* Desktop Navigation - Now using hover */}
        <div className="hidden md:flex space-x-6">
          {/* Company Dropdown - Hover */}
          <div
            ref={companyRef}
            onMouseEnter={() => openDropdown("company")}
            onMouseLeave={() => closeDropdownDelayed("company")}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Company
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  companyDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Company Mega Menu */}
            {companyDropdownOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[960px] bg-white shadow-xl rounded-2xl z-50 border border-gray-200"
                onMouseEnter={() => clearCloseTimeout("company")}
                onMouseLeave={() => closeDropdownDelayed("company")}
              >
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Company
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/About"
                            className="block text-sm text-gray-800 hover:text-blue-500"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Team"
                            className="block text-sm text-gray-800 hover:text-blue-500"
                          >
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="block text-sm text-gray-800 hover:text-blue-500"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Resources
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            Docs
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Company News
                      </h4>
                      <p className="text-sm text-gray-600">
                        Latest updates, press releases and announcements from
                        Xyndrix.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="rounded-lg border border-gray-100 p-3 bg-gray-50 flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500">
                        ★
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          Careers at Xyndrix
                        </p>
                        <p className="text-xs text-gray-500">
                          We're hiring — see open roles and benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown - Hover */}
          <div
            ref={productsRef}
            onMouseEnter={() => openDropdown("products")}
            onMouseLeave={() => closeDropdownDelayed("products")}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Products
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  productsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Products Mega Menu */}
            {productsDropdownOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[960px] bg-white shadow-xl rounded-2xl z-50 border border-gray-200"
                onMouseEnter={() => clearCloseTimeout("products")}
                onMouseLeave={() => closeDropdownDelayed("products")}
              >
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Products
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/Products/cctv-pentester"
                            className="block text-sm text-gray-800 hover:text-blue-500"
                          >
                            CCTV Pentester
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Products/discord-application"
                            className="block text-sm text-gray-800 hover:text-blue-500"
                          >
                            Discord Application
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Integrations
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            Slack
                          </a>
                        </li>
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            Discord
                          </a>
                        </li>
                        <li>
                          <a className="block text-sm text-gray-800 hover:text-blue-500">
                            API
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Developer
                      </h4>
                      <p className="text-sm text-gray-600">
                        SDKs, API docs and tools to build on Xyndrix products.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="rounded-lg border border-gray-100 p-3 bg-gray-50 flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500">
                        ⇄
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          Try our SDK
                        </p>
                        <p className="text-xs text-gray-500">
                          Start building integrations in minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown - Hover */}
          <div
            ref={solutionsRef}
            onMouseEnter={() => openDropdown("solutions")}
            onMouseLeave={() => closeDropdownDelayed("solutions")}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Solutions
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  solutionsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Solutions Mega Menu */}
            {solutionsDropdownOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[960px] bg-white shadow-xl rounded-2xl z-50 border border-gray-200"
                onMouseEnter={() => clearCloseTimeout("solutions")}
                onMouseLeave={() => closeDropdownDelayed("solutions")}
              >
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        By use case
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Team collaboration
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Strategy and planning
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Service management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Software development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        By team
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            IT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        By size
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Enterprise
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Small Business
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Startup
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Non-profit
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        By industry
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Retail
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Telecommunications
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Professional Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            Government
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="rounded-lg border border-gray-100 p-3 bg-gray-50 flex items-center gap-4">
                      <img
                        src="/ai-web-dev-3d.svg"
                        alt="Promo"
                        className="w-10 h-10"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-800">Rovo</p>
                        <p className="text-xs text-gray-500">
                          AI-powered apps — driven by your team's knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Careers Dropdown - Hover */}
          <div
            ref={careersRef}
            onMouseEnter={() => openDropdown("careers")}
            onMouseLeave={() => closeDropdownDelayed("careers")}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Careers
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  careersDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Careers Mega Menu */}
            {careersDropdownOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[960px] bg-white shadow-xl rounded-2xl z-50 border border-gray-200"
                onMouseEnter={() => clearCloseTimeout("careers")}
                onMouseLeave={() => closeDropdownDelayed("careers")}
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Open roles
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/Careers/openings"
                            className="text-sm text-gray-800 hover:text-blue-500"
                          >
                            Current Openings
                          </Link>
                        </li>
                        <li>
                          <a className="text-sm text-gray-800 hover:text-blue-500">
                            Internships
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-3">
                        Life at Xyndrix
                      </h4>
                      <p className="text-sm text-gray-600">
                        Benefits, culture, and what it's like to work with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center ml-8 space-x-4">
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-bold"
          >
            Let's Get Started!
          </Link>
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Keep using clicks for mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            {/* Mobile Company Dropdown */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-bold text-gray-700 hover:text-blue-500"
                onClick={() => toggleMobileDropdown("company")}
              >
                <span>Company</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    companyDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {companyDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link
                    href="/About"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/Team"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-bold text-gray-700 hover:text-blue-500"
                onClick={() => toggleMobileDropdown("products")}
              >
                <span>Products</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    productsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {productsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link
                    href="/Products/cctv-pentester"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CCTV Pentester
                  </Link>
                  <Link
                    href="/Products/discord-application"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Discord Application
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Dropdown */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-bold text-gray-700 hover:text-blue-500"
                onClick={() => toggleMobileDropdown("solutions")}
              >
                <span>Solutions</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    solutionsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {solutionsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link
                    href="/Solutions/ai-solutions"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Solutions
                  </Link>
                  <Link
                    href="/Solutions/cybersecurity"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Careers Dropdown */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-bold text-gray-700 hover:text-blue-500"
                onClick={() => toggleMobileDropdown("careers")}
              >
                <span>Careers</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    careersDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {careersDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link
                    href="/Careers/openings"
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Current Openings
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/why-choose-xyndrix"
              className="font-bold py-2 text-gray-700 hover:text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Xyndrix
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 inline-block font-bold"
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
