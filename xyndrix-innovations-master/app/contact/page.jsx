'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedContactHero from '../Components/ui/animated-contact-hero';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // This is a placeholder for actual form submission logic
    // In a real app, you would send this data to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 opacity-20 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  Get in Touch
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Contact <span className="text-blue-600">Us</span> – Xyndrix Innovations
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-12">
                Have a project in mind? Looking for a technology partner who understands your business needs? We're here to help. Get in touch with our team today and let's create something extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#contact-form" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  Send Message
                </a>
                <a href="#contact-info" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-xl border border-gray-300 transition duration-300 hover:border-blue-300">
                  Contact Info
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative h-96 w-full">
                <AnimatedContactHero />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div id="contact-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Our Details
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Contact</span> Information</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're ready to assist you with your digital needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Email</h3>
              <p className="text-gray-600 mb-4">
                Drop us a message anytime
              </p>
              <a href="mailto:xyndrixinfo@gmail.com" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                xyndrixinfo@gmail.com
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Phone</h3>
              <p className="text-gray-600 mb-4">
                Call us during business hours
              </p>
              <a href="tel:+919488345831" className="text-green-600 font-medium hover:text-green-800 inline-flex items-center">
                +91 94883 45831
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Address</h3>
              <p className="text-gray-600 mb-4">
                Visit our office
              </p>
              <p className="text-purple-600 font-medium inline-flex items-center">
                Coimbatore, India
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                  Send Us a Message
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Start a <span className="text-blue-600">Conversation</span></h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-md">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                <p className="text-green-700 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-100">
                    {error}
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Tell us about your project or inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Submit Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 opacity-30 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 opacity-30 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Work With Us
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner For <span className="text-blue-600">Digital Success</span></h2>
            <p className="text-lg text-gray-600 mb-10">
              Whether you're a startup, enterprise, or individual entrepreneur, we'd love to hear your ideas and discuss how we can bring them to life.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="p-8 border border-dashed border-blue-300 rounded-xl bg-blue-50">
                <p className="text-xl font-medium text-gray-800 italic">
                  "At Xyndrix Innovations, your ideas + our expertise = powerful digital solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Follow Us
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay <span className="text-blue-600">Connected</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with us for updates, insights, and tech innovations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a href="https://www.instagram.com/xyndrix_innovations/" target="_blank" rel="noreferrer" 
               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4 border border-gray-100 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="text-left flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Instagram</h3>
                <p className="text-gray-600">@xyndrix_innovations</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/company/xyndrix-innovations/" target="_blank" rel="noreferrer" 
               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-left flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-1">LinkedIn</h3>
                <p className="text-gray-600">Xyndrix Innovations</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
