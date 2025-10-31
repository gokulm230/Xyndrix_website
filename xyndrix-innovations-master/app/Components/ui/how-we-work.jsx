"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

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
      features: [
        "Market analysis and competitor research",
        "Target audience identification",
        "Requirements gathering and documentation",
        "Project scope and timeline definition"
      ]
    },
    {
      id: 2,
      title: "Design & Strategy",
      description:
        "Our designers and strategists collaborate to create clean, intuitive, and conversion-focused digital experiences.",
      image: "/design.jpg",
      features: [
        "User experience (UX) design",
        "User interface (UI) design", 
        "Prototyping and wireframing",
        "Brand identity and visual strategy"
      ]
    },
    {
      id: 3,
      title: "Development & Testing",
      description:
        "We bring designs to life with scalable, efficient code — ensuring performance, security, and smooth user experiences.",
      image: "/development&testing.jpg",
      features: [
        "Frontend and backend development",
        "Quality assurance and testing",
        "Performance optimization",
        "Security implementation"
      ]
    },
    {
      id: 4,
      title: "Launch & Growth",
      description:
        "Once live, we continue to optimize your product through data-driven insights, updates, and performance scaling.",
      image: "/launch.jpg",
      features: [
        "Deployment and launch support",
        "Performance monitoring",
        "Ongoing maintenance and updates",
        "Analytics and optimization"
      ]
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* <span className="inline-block py-1 px-5 bg-blue-600/20 text-blue-300 font-semibold rounded-full mb-5 border border-blue-500/30">
            How We Work
          </span> */}
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Process to Build Exceptional Products
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We follow a structured yet flexible approach to ensure your product
            is built efficiently, beautifully, and with a lasting impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="transform transition-all duration-500 ease-out hover:scale-110 hover:z-20 relative"
            >
              <CardSpotlight
                ref={(el) => (cardsRef.current[index] = el)}
                className="h-full w-full bg-neutral-900 border-neutral-700 hover:shadow-2xl hover:shadow-blue-600/20 min-h-[480px]"
                radius={300}
                color="#1e40af"
              >
              <div className="relative z-20 hover:transition-transform duration-300 hover:ease-in-out h-full flex flex-col">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  <p className="text-blue-400 font-semibold text-sm mb-2">Key Activities:</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <Step key={featureIndex} title={feature} />
                    ))}
                  </ul>
                </div>
              </div>
            </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Step component for feature list
const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-neutral-200 text-sm">{title}</p>
    </li>
  );
};

// Check icon component
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-400 mt-0.5 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default HowWeWork;
