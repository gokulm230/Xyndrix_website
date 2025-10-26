"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const sectionsRef = useRef([]);
  const cardLength = content.length;

  // Register GSAP plugin once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Use GSAP ScrollTrigger to switch active card when each section enters viewport
  useEffect(() => {
    if (!sectionsRef.current || sectionsRef.current.length === 0) return;
    const triggers = sectionsRef.current.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top center+=10%",
        end: "bottom center-=10%",
        onEnter: () => setActiveCard(i),
        onEnterBack: () => setActiveCard(i),
      })
    );
    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [cardLength]);

  const backgroundColors = [
    "#ffffff", // white
    "#f8fafc", // slate-50
    "#f1f5f9", // slate-100
  ];
  // Keeping gradients array removed as right-side now renders content-provided backgrounds

  return (
    <div className="relative bg-white" ref={ref}>
      <div className="flex max-w-7xl mx-auto relative">
        {/* Left side - Scrollable content */}
        <div className="w-1/2 pr-8 relative z-10">
          <motion.div
            animate={{
              backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="space-y-0">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                ref={(el) => (sectionsRef.current[index] = el)}
                className="min-h-screen flex items-center py-32 relative"
              >
                <div className="max-w-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h2
                      animate={{
                        opacity: activeCard === index ? 1 : 0.4,
                        scale: activeCard === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {item.title}
                    </motion.h2>
                    <motion.p
                      animate={{
                        opacity: activeCard === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-xl text-gray-600 leading-relaxed">
                      {item.description}
                    </motion.p>
                    
                    {/* Progress indicator */}
                    <motion.div 
                      className="mt-8 flex items-center space-x-2"
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                    >
                      <span className="text-sm font-medium text-gray-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex space-x-1">
                        {content.map((_, i) => (
                          <motion.div
                            key={i}
                            className={`h-1 w-8 rounded-full ${
                              i === activeCard ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                            animate={{
                              backgroundColor: i === activeCard ? '#2563eb' : '#d1d5db',
                              scale: i === activeCard ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-500">
                        {String(content.length).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side - Scrolls with content; each card aligns with its section */}
        <div className="w-1/2 pl-8">
          <div className="space-y-0">
            {content.map((item, index) => (
              <div key={`image-${index}`} className="min-h-screen flex items-center justify-center py-32">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                    scale: activeCard === index ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "h-96 w-96 overflow-hidden rounded-2xl shadow-2xl border border-gray-200",
                    contentClassName
                  )}
                >
                  {item.content}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
