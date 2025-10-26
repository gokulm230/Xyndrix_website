"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const WhoIsXyndrix = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-2 px-4 bg-blue-600/20 text-blue-300 font-semibold rounded-full mb-4 border border-blue-500/30">
            About Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who is <span className="text-blue-400">Xyndrix</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are innovators, problem solvers, and digital transformation experts dedicated to turning your vision into reality.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Transforming Ideas into Digital Excellence
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Xyndrix Innovations is a cutting-edge technology company specializing in digital transformation and innovative software solutions. We bridge the gap between complex business challenges and elegant technological solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded with a vision to revolutionize how businesses operate in the digital age, we combine technical expertise with creative thinking to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                  <p className="text-gray-300">50+ skilled developers, designers, and strategists working together</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Proven Track Record</h4>
                  <p className="text-gray-300">150+ successful projects delivered across various industries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-300">Serving clients worldwide with 24/7 support and maintenance</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/Contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl">
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Innovation at Core</h4>
                  <p className="text-gray-300">
                    We don't just follow trends; we create them. Our innovative approach combines cutting-edge technology with human-centered design.
                  </p>
                </div>

                {/* Tech Stack Icons */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-blue-500 rounded-md mx-auto mb-2"></div>
                    <span className="text-sm text-gray-300">React</span>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-green-500 rounded-md mx-auto mb-2"></div>
                    <span className="text-sm text-gray-300">Node.js</span>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-yellow-500 rounded-md mx-auto mb-2"></div>
                    <span className="text-sm text-gray-300">Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsXyndrix;