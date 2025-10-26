"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Vision animation
      tl.fromTo(
        visionRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      // Mission animation
      tl.fromTo(
        missionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Driving innovation and excellence in everything we do
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Vision Card */}
          <div
            ref={visionRef}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200/30 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To be the leading technology partner that transforms businesses
                through innovative digital solutions, empowering organizations
                to thrive in the digital age and create lasting impact in their
                industries.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="font-medium">
                    Global Technology Leadership
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="font-medium">
                    Digital Transformation Excellence
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="font-medium">Sustainable Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            ref={missionRef}
            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200/30 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We deliver cutting-edge technology solutions that drive business
                growth, enhance user experiences, and solve complex challenges.
                Through collaboration, innovation, and excellence, we turn
                vision into reality.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium">Client-Centric Solutions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium">Quality & Innovation</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium">Collaborative Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Principles that guide our decisions and delivery.
            </p>
          </div>

          {/* Overlapping Cards Layout */}
          <div className="relative max-w-6xl mx-auto h-[500px] md:h-[400px]">
            {/* Excellence Card */}
            <div className="absolute top-0 left-0 w-full md:w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl z-10">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Excellence</h4>
                  <p className="text-blue-100 leading-relaxed">
                    We set clear standards, execute with discipline, and
                    continuously improve our processes to deliver superior
                    results.
                  </p>
                </div>
                <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                  <span className="mr-2">—</span>
                  <span className="text-sm">LEARN MORE</span>
                </div>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="absolute top-8 left-4 md:left-64 w-full md:w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl z-20">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Collaboration</h4>
                  <p className="text-purple-100 leading-relaxed">
                    We work openly with clients and teams to achieve shared
                    outcomes through transparent communication.
                  </p>
                </div>
                <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                  <span className="mr-2">—</span>
                  <span className="text-sm">LEARN MORE</span>
                </div>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="absolute top-16 left-8 md:left-[32rem] w-full md:w-80 h-80 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl z-30">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Innovation</h4>
                  <p className="text-green-100 leading-relaxed">
                    We challenge assumptions and adopt pragmatic technology that
                    creates genuine business value.
                  </p>
                </div>
                <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                  <span className="mr-2">—</span>
                  <span className="text-sm">LEARN MORE</span>
                </div>
              </div>
            </div>

            {/* Integrity Card */}
            <div className="absolute top-24 left-12 md:left-[48rem] w-full md:w-80 h-80 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl z-40">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Integrity</h4>
                  <p className="text-orange-100 leading-relaxed">
                    We act ethically, keep our commitments, and communicate with
                    honesty and transparency.
                  </p>
                </div>
                <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                  <span className="mr-2">—</span>
                  <span className="text-sm">LEARN MORE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="block md:hidden mt-8 space-y-6">
            {/* Excellence Card - Mobile */}
            <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Excellence</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We set clear standards, execute with discipline, and
                    continuously improve.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration Card - Mobile */}
            <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl overflow-hidden">
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Collaboration</h4>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    We work openly with clients and teams to achieve shared
                    outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Card - Mobile */}
            <div className="w-full h-64 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden">
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Innovation</h4>
                  <p className="text-green-100 text-sm leading-relaxed">
                    We challenge assumptions and adopt pragmatic technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Integrity Card - Mobile */}
            <div className="w-full h-64 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl overflow-hidden">
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Integrity</h4>
                  <p className="text-orange-100 text-sm leading-relaxed">
                    We act ethically, keep commitments, and communicate with
                    candor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
