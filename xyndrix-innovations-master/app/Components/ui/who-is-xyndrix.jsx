"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const WhoIsXyndrix = () => {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Who is <span className="text-blue-600">Xyndrix</span>?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We are innovators, problem solvers, and digital transformation experts dedicated to turning your vision into reality.
          </p>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-center space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Transforming Ideas into Digital Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Xyndrix Innovations is a cutting-edge technology company specializing in digital transformation and innovative software solutions. We bridge the gap between complex business challenges and elegant technological solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize how businesses operate in the digital age, we combine technical expertise with creative thinking to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6 pt-6 flex flex-row justify-center gap-10">
              <div className="flex items-center justify-center flex-col gap-5 group min-h-[120px]">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 414 0zM7 10a2 2 0 11-4 0 2 2 0 414 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-600 leading-relaxed">15+ skilled developers, designers, and strategists working together</p>
                </div>
              </div>

              <div className="flex items-center justify-center flex-col gap-5 group min-h-[120px]">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600 leading-relaxed">20+ successful projects delivered across various industries</p>
                </div>
              </div>

              <div className="flex items-center justify-center flex-col gap-5 group min-h-[120px]">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h4>
                  <p className="text-gray-600 leading-relaxed">Serving clients worldwide with 24/7 support and maintenance</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsXyndrix;