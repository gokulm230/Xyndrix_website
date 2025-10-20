"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      // Smooth heading animation
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50, scale: 0.95, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "back.out(1.2)",
        }
      );

      // Smooth staggered cards animation
      const cardEls = cardsRef.current.filter(Boolean);
      if (cardEls.length) {
        tl.fromTo(
          cardEls,
          { opacity: 0, y: 60, scale: 0.9, rotateY: 8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: "back.out(1.1)",
            stagger: 0.2,
          },
          "-=0.5" // slightly overlaps with heading animation
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We begin by understanding your vision, business needs, and goals to set a clear project direction.",
    },
    {
      id: 2,
      title: "Strategy & Design",
      description:
        "Our team crafts a strategic roadmap and designs intuitive user experiences tailored to your objectives.",
    },
    {
      id: 3,
      title: "Development & Launch",
      description:
        "We develop robust, scalable solutions and ensure a seamless launch with precision and transparency.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden"
    >
      <div className="absolute top-0 right-20 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-4 bg-blue-50 text-blue-600 font-semibold rounded-full mb-5 border border-blue-100">
            Our Process
          </span>

          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6">
            How We Work With You
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our proven methodology ensures every project we deliver is innovative, efficient, and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 text-center hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.id}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
