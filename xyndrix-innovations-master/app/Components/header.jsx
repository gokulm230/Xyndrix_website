"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile dropdown toggles (keep these as clicks for mobile)
  const toggleMobileDropdown = (dropdown) => {
    if (dropdown === 'company') {
      setCompanyDropdownOpen(!companyDropdownOpen);
      setProductsDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === 'products') {
      setProductsDropdownOpen(!productsDropdownOpen);
      setCompanyDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === 'solutions') {
      setSolutionsDropdownOpen(!solutionsDropdownOpen);
      setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
      setCareersDropdownOpen(false);
    } else if (dropdown === 'careers') {
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
            className="relative" 
            ref={companyRef}
            onMouseEnter={() => {
              setCompanyDropdownOpen(true);
              setProductsDropdownOpen(false);
              setSolutionsDropdownOpen(false);
              setCareersDropdownOpen(false);
            }}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Company
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Company Dropdown Menu */}
            {companyDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200">
                <div className="py-2">
                  <Link 
                    href="/About" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">About Xyndrix</p>
                      <p className="text-xs text-gray-500">Learn about our company</p>
                    </div>
                  </Link>
                  <Link 
                    href="/Team" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Team</p>
                      <p className="text-xs text-gray-500">Meet our talented team</p>
                    </div>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Contact Us</p>
                      <p className="text-xs text-gray-500">Get in touch with us</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Products Dropdown - Hover */}
          <div 
            className="relative" 
            ref={productsRef}
            onMouseEnter={() => {
              setProductsDropdownOpen(true);
              setCompanyDropdownOpen(false);
              setSolutionsDropdownOpen(false);
              setCareersDropdownOpen(false);
            }}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Products
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Products Dropdown Menu */}
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200">
                <div className="py-2">
                  <Link 
                    href="/Products/cctv-pentester" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">CCTV Pentester</p>
                      <p className="text-xs text-gray-500">Open source security tool</p>
                    </div>
                  </Link>
                  <Link 
                    href="/Products/discord-application" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Discord Application</p>
                      <p className="text-xs text-gray-500">Enhance your Discord experience</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Solutions Dropdown - Hover */}
          <div 
            className="relative" 
            ref={solutionsRef}
            onMouseEnter={() => {
              setSolutionsDropdownOpen(true);
              setCompanyDropdownOpen(false);
              setProductsDropdownOpen(false);
              setCareersDropdownOpen(false);
            }}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Solutions
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Solutions Dropdown Menu */}
            {solutionsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200">
                <div className="py-2">
                  <Link 
                    href="/Solutions/ai-solutions" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">AI Solutions</p>
                      <p className="text-xs text-gray-500">Intelligent automation & insights</p>
                    </div>
                  </Link>
                  <Link 
                    href="/Solutions/cybersecurity" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Cybersecurity</p>
                      <p className="text-xs text-gray-500">Protect your digital assets</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Careers Dropdown - Hover */}
          <div 
            className="relative" 
            ref={careersRef}
            onMouseEnter={() => {
              setCareersDropdownOpen(true);
              setCompanyDropdownOpen(false);
              setProductsDropdownOpen(false);
              setSolutionsDropdownOpen(false);
            }}
            onMouseLeave={() => setCareersDropdownOpen(false)}
          >
            <button className="flex items-center font-bold text-gray-700 hover:text-blue-500 transition-colors">
              Careers
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${careersDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Careers Dropdown Menu */}
            {careersDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200">
                <div className="py-2">
                  <Link 
                    href="/Careers/openings" 
                    className="flex items-center px-4 py-3 hover:bg-gray-50 group"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Current Openings</p>
                      <p className="text-xs text-gray-500">Join our growing team</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/why-choose-xyndrix" className="font-bold text-gray-700 hover:text-blue-500 transition-colors">Why Choose Xyndrix</Link>
        </div>

        <div className="flex items-center ml-8 space-x-4">
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-bold">
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
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
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
                onClick={() => toggleMobileDropdown('company')}
              >
                <span>Company</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {companyDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <Link 
                    href="/About" 
                    className="block py-1 text-sm font-bold text-gray-600 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Xyndrix
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
                onClick={() => toggleMobileDropdown('products')}
              >
                <span>Products</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                onClick={() => toggleMobileDropdown('solutions')}
              >
                <span>Solutions</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                onClick={() => toggleMobileDropdown('careers')}
              >
                <span>Careers</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${careersDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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