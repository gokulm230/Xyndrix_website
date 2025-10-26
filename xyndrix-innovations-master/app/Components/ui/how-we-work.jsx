"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      const cardEls = cardsRef.current.filter(Boolean);
      if (cardEls.length) {
        tl.fromTo(
          cardEls,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Discovery & Research",
      description:
        "We begin by diving deep into your goals, challenges, and target audience to form a clear foundation for your project.",
      image: "/discovery&research.jpg",
    },
    {
      id: 2,
      title: "Design & Strategy",
      description:
        "Our designers and strategists collaborate to create clean, intuitive, and conversion-focused digital experiences.",
      image: "/design.jpg",
    },
    {
      id: 3,
      title: "Development & Testing",
      description:
        "We bring designs to life with scalable, efficient code — ensuring performance, security, and smooth user experiences.",
      image: "/development&testing.jpg",
    },
    {
      id: 4,
      title: "Launch & Growth",
      description:
        "Once live, we continue to optimize your product through data-driven insights, updates, and performance scaling.",
      image: "/launch.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-white to-blue-50 text-black overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-5 bg-blue-100 text-blue-700 font-semibold rounded-full mb-5 border border-blue-200">
            How We Work
          </span>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Process to Build Exceptional Products
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We follow a structured yet flexible approach to ensure your product
            is built efficiently, beautifully, and with a lasting impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-80">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:from-blue-700/80 transition-all duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
