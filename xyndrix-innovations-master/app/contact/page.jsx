"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedContactHero from "../Components/ui/animated-contact-hero";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Refs for animations
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Enhanced Hero Section Animation
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: -30,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            // Add text reveal effect
            clipPath: "inset(0 100% 0 0)",
          },
          "-=0.4"
        )
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Enhanced Form Animation with stagger
      const formTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      formTimeline
        .from(".form-container", {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".form-field",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "start",
            },
            ease: "power2.out",
          },
          "-=0.5"
        );

      // Add hover animations for form inputs
      gsap.utils
        .toArray(".form-field input, .form-field textarea")
        .forEach((input) => {
          input.addEventListener("focus", () => {
            gsap.to(input, {
              scale: 1.02,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          input.addEventListener("blur", () => {
            gsap.to(input, {
              scale: 1,
              boxShadow: "0 0 0px rgba(59, 130, 246, 0)",
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

      // Submit button animation
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.addEventListener("mouseenter", () => {
          gsap.to(submitBtn, {
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        submitBtn.addEventListener("mouseleave", () => {
          gsap.to(submitBtn, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0px rgba(37, 99, 235, 0)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Social links hover animations
      gsap.utils.toArray(".social-link").forEach((link) => {
        const icon = link.querySelector(".social-icon");
        const text = link.querySelector(".social-text");

        link.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(text, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(text, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enhanced form submission with animation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Animate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success animation
      gsap.to(".form-container", {
        scale: 0.95,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          setSubmitted(true);
          gsap.fromTo(
            ".success-message",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
        },
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");

      // Error shake animation
      gsap.to(".form-container", {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: "power2.inOut",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white" ref={pageRef}>
      {/* Add the animated hero component */}
      <div
        className="relative py-24 bg-gray-50 border-b border-gray-200 overflow-hidden"
        ref={heroRef}
      >
        <div className="absolute inset-0 opacity-30">
          {/* <AnimatedContactHero /> */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm font-semibold mb-6 border border-blue-100">
              Contact Us
            </div>

            <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Get In Touch With Our Team
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your next project? Our team of experts is here to
              help you achieve your business goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="py-20" ref={formRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="form-container bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="success-message bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-green-700 mb-4">
                      Thank you for contacting us. We'll respond within 24
                      hours.
                    </p>
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-200"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="form-field">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                        placeholder="Tell us about your project requirements..."
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <div className=" bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Email
                      </h4>
                      <a
                        href="mailto:xyndrixinfo@gmail.com"
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        xyndrixinfo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Phone
                      </h4>
                      <a
                        href="tel:+919488345831"
                        className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        +91 94883 45831
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Location
                      </h4>
                      <p className="text-sm text-gray-600">Coimbatore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/company/xyndrix/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100 hover:border-blue-200"
                  >
                    <div className="social-icon w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        LinkedIn
                      </h4>
                      <p className="text-xs text-gray-500">
                        Professional Network
                      </p>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/xyndrix_innovations/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100 hover:border-purple-200"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        Instagram
                      </h4>
                      <p className="text-xs text-gray-500">Visual Updates</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-purple-600 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
