"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Header from "../../Components/header";

const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-green-600">Internship</span> Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Launch your tech career with hands-on experience in cutting-edge technologies and real-world projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our comprehensive internship programs designed to give you practical experience and industry-ready skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Marketing Internship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Master modern digital marketing strategies including SEO, social media, content marketing, and analytics.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Duration: 3-6 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Level: Beginner to Intermediate
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    SEO & SEM Optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Social Media Marketing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Content Creation & Strategy
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Google Analytics & Ads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Email Marketing Campaigns
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    Brand Management
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full Stack Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Stack Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Learn both frontend and backend development with modern frameworks like React, Node.js, and databases.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Duration: 3-6 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Level: Beginner to Intermediate
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    HTML5, CSS3 & JavaScript
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    React.js & Next.js
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Node.js & Express.js
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    MongoDB & PostgreSQL
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    RESTful APIs & GraphQL
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Git & Version Control
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI/ML Internship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI/ML Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dive into artificial intelligence and machine learning with Python, TensorFlow, and real-world projects.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Duration: 4-6 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Level: Intermediate to Advanced
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Python & Data Science Libraries
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    TensorFlow & PyTorch
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Machine Learning Algorithms
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Deep Learning & Neural Networks
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Computer Vision & NLP
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    Model Deployment & MLOps
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Build native and cross-platform mobile applications using React Native, Flutter, or native technologies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Duration: 3-5 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Level: Beginner to Intermediate
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    React Native & Flutter
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    iOS & Android Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Mobile UI/UX Design
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    API Integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    App Store Deployment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Performance Optimization
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Master user interface and user experience design with industry-standard tools and methodologies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Duration: 3-4 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Level: Beginner to Intermediate
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    Figma & Adobe Creative Suite
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    User Research & Testing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    Wireframing & Prototyping
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    Design Systems & Guidelines
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    Responsive Web Design
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                    Accessibility & Usability
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Science */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Analyze and visualize data using Python, R, and advanced statistical methods for business insights.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Duration: 4-6 months
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Level: Intermediate to Advanced
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Python & R Programming
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Pandas, NumPy & Matplotlib
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Statistical Analysis & Modeling
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Data Visualization & Tableau
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    SQL & Database Management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                    Big Data & Cloud Platforms
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our internship programs are designed to provide comprehensive learning and real industry experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hands-on Projects",
                description: "Work on real client projects and build a portfolio",
                icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              },
              {
                title: "Mentorship",
                description: "Get guidance from experienced professionals",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 414 0zM7 10a2 2 0 11-4 0 2 2 0 414 0z"
              },
              {
                title: "Certificate",
                description: "Industry-recognized completion certificate",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              },
              {
                title: "Job Placement",
                description: "Assistance with job placement after completion",
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Apply now for our internship programs and take the first step towards a successful tech career.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Apply for Internship
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InternshipsPage;
