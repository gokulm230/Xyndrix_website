"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTechHero from '../Components/ui/animated-tech-hero';
import CustomerLogoMarquee from '../Components/ui/customer-logo-marquee';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-badge', { y: -8, opacity: 0, duration: 0.5, ease: 'power2.out' });
      gsap.from('.hero-title', { y: 24, opacity: 0, duration: 0.8, delay: 0.08, ease: 'power3.out' });
      gsap.from('.hero-copy', { y: 16, opacity: 0, duration: 0.6, delay: 0.2 });
      gsap.from('.hero-cta', { y: 8, opacity: 0, duration: 0.6, delay: 0.35, stagger: 0.08 });
      gsap.from('.hero-visual', { scale: 0.98, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' });

      // Make non-main hero words semi-bold shortly after entrance
      gsap.delayedCall(0.08, () => {
        gsap.utils.toArray('.hero-word').forEach((el) => el.classList.add('font-semibold'));
      });

      // After 1.2s animate the 'teams' word to bold, then persist via class swap
      gsap.delayedCall(1.2, () => {
        gsap.to('.hero-word-main', {
          fontWeight: 700,
          duration: 0.35,
          ease: 'power1.out',
          onComplete() {
            gsap.utils.toArray('.hero-word-main').forEach((el) => {
              el.classList.remove('font-semibold');
              el.classList.add('font-bold');
              el.style.fontWeight = '';
            });
          }
        });
      });

      // Why Choose cards - reveal on scroll
      gsap.utils.toArray('.why-card').forEach((card) => {
        gsap.from(card, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="font-sans min-h-screen">

        {/* Hero Section */}
      <div className="relative bg-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="inline-flex items-center py-1 px-4 bg-gradient-to-r from-blue-500/10 to-blue-500/10 text-blue-600 font-semibold rounded-full mb-4 border border-blue-200/30 shadow-sm hero-badge">
                  <svg className="w-5 h-5 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 16.5L12 5.25L19.5 16.5H4.5Z" fill="currentColor" />
                    <path d="M12 5.25L19.5 16.5H4.5L12 5.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Innovating the Future
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light mb-8 bg-clip-text bg-gradient-to-r text-black hero-title">
                Great <span className="text-black hero-word">Product</span> is<br />
                built by great <span className="text-black relative hero-word-main">
                  teams
                  <svg className="absolute top-0 right-0 transform translate-x-full -translate-y-1/4 w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 hero-copy">
                We help build and manage a team of world-class developers to bring your vision to life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/Contact" className="relative group hero-cta">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-gradient-to-r from-blue-600 to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300 group-hover:scale-105">
                    Let's get started!
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </button>
                </Link>
                <Link href="/We-do" className="relative group hero-cta">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
                  <button className="relative bg-white text-blue-600 font-medium py-3 px-8 rounded-lg border border-gray-200 transition duration-300 group-hover:scale-105">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                  <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500 hero-visual">
                    <div className="w-[650px] h-[550px] mx-auto">
                      <AnimatedTechHero />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 -z-10"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Xyndrix Section */}
  <div className="py-20 bg-white why-choose-section">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              Our Advantage
            </span>
            <h2 className="text-5xl font-bold text-black mb-6">Why Choose Xyndrix</h2>
            <p className="text-gray-600">
              We combine technical expertise with innovative thinking to deliver solutions that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 why-card">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-600">Technical Excellence</h3>
              <p className="text-gray-600">
                Our team of expert developers stays at the forefront of technological advancements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 why-card">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-600">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with you to understand your business needs and deliver tailored solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 why-card">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-600">Innovative Solutions</h3>
              <p className="text-gray-600">
                We create cutting-edge solutions that help businesses stay ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 why-card">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-600">Timely Delivery</h3>
              <p className="text-gray-600">
                We pride ourselves on meeting deadlines and delivering projects on time, every time.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/why-choose-xyndrix" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              Learn more about our approach
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Customer Logos Section - Animated Running Marquee */}
      <CustomerLogoMarquee 
        customLogos={[
          {
            id: 'karupa',
            name: 'Karupa Foundation',
            src: 'https://karupafoundation.com/images/logo%20final.jpg'
          },
          {
            id: 'kahe',
            name: 'KAHE',
            src: 'https://img.kompass.com/sys-master-images/h24/h5a/9687875125278/kahe-jpg'
          },
          {
            id: 'surya',
            name: 'Surya Coconut',
            src: 'https://www.suryacoconut.shop/assets/surya-logo-D7BLbdcg.png'
          },
          {
            id: 'csemeta',
            name: 'CSE Meta',
            src: 'https://csemeta.vercel.app/images/logo.png'
          },
          {
            id: 'reserve',
            name: 'Future Partner',
            src: 'https://via.placeholder.com/200x100?text=Your+Logo+Here'
          }
        ]}
        title="Our Partners & Clients"
        subtitle="Organizations we've collaborated with to deliver innovative solutions"
        speed={0.25}
      />

      {/* Our Collaborators Section - Static */}
      <div className="w-full bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
              Our Collaborators
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Companies we work closely with to deliver exceptional results
            </p>
          </div>
          
          <div className="flex justify-center items-center py-8">
            <a 
              href="https://xarlex.co.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-[200px] h-[130px] relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
              aria-label="Visit Xarlex website"
            >
              <Image 
                src="/logos/collaborators/xarlex-logo.jpg" 
                alt="Xarlex logo" 
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="200px"
                priority
                quality={100}
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 bg-blue-600 text-white text-xs py-1 px-3 rounded-full">
                Visit Website
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">What We Bring to Your Business</h2>
            <p className="text-gray-600">
              We provide comprehensive technology solutions tailored to meet your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Web Development</h3>
              <p className="text-gray-600 mb-6">
                From responsive websites to complex web applications, we deliver solutions that work across all devices.
              </p>
              <Link href="/We-do" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Mobile App Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
              <Link href="/We-do" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">Dedicated Teams</h3>
              <p className="text-gray-600 mb-6">
                Skilled developers and designers who integrate seamlessly with your existing team.
              </p>
              <Link href="/We-do" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 002-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
              <p className="text-gray-600">Amazing Products</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">20+</h3>
              <p className="text-gray-600">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How We Work Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">How We Work With You</h2>
            <p className="text-gray-600">
              Our proven methodology ensures we deliver exceptional results on every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl text-blue-600 font-bold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We listen to your goals and challenges to understand what success looks like for your project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl text-blue-600 font-bold mb-4">Strategy & Design</h3>
              <p className="text-gray-600">
                We create a tailored roadmap and design that aligns with your business objectives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-md transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl text-blue-600 font-bold mb-4">Development & Launch</h3>
              <p className="text-gray-600">
                Our expert team builds your solution with constant communication and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}