"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Technical Excellence",
    description:
      "Our team of expert developers stays at the forefront of technological advancements. We combine deep technical knowledge with innovative thinking to deliver solutions that drive your business forward using cutting-edge technologies and best practices.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--blue-700))] text-white rounded-lg">
        <div className="text-center p-8">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-2xl font-bold">Technical Excellence</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with you to understand your business needs and deliver tailored solutions. Our collaborative methodology ensures that every project aligns perfectly with your vision and business objectives, creating lasting partnerships.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-600))] text-white rounded-lg">
        <div className="text-center p-8">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <h3 className="text-2xl font-bold">Collaborative Approach</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Innovative Solutions",
    description:
      "We create cutting-edge solutions that help businesses stay ahead of the competition. Our innovative approach combines the latest technologies with creative problem-solving to deliver solutions that transform your business operations.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-600))] text-white rounded-lg">
        <div className="text-center p-8">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-2xl font-bold">Innovative Solutions</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Timely Delivery",
    description:
      "We pride ourselves on meeting deadlines and delivering projects on time, every time. Our proven project management methodology and experienced team ensure that your project is completed within scope, on budget, and on schedule.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--indigo-700))] text-white rounded-lg">
        <div className="text-center p-8">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-2xl font-bold">Timely Delivery</h3>
        </div>
      </div>
    ),
  },
];

export function WhyChooseXyndrixSticky() {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 bg-blue-600/20 text-blue-300 font-semibold rounded-full mb-4 border border-blue-500/30">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Xyndrix</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical expertise with innovative thinking to deliver solutions that drive your business forward.
          </p>
        </div>
        
        {/* Sticky Scroll Content */}
        <StickyScroll content={content} />
      </div>
    </div>
  );
}