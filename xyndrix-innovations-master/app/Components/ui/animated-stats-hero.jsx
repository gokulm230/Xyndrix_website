"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = sectionRef.current.querySelectorAll(".stat-number");

      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              counter.innerText = Math.floor(counter.innerText) + suffix;
            },
          }
        );
      });

      // Stats reveal animations
      gsap.from(sectionRef.current.querySelectorAll(".stat-item"), {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl  font-bold text-gray-900 leading-tight">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Side - Main Content */}
          <div className="">
            <div>
              {/* Large Number */}
              <div className="">
                <div
                  className="stat-number text-8xl md:text-9xl font-bold text-blue-600 leading-none"
                  data-target="20"
                  data-suffix="+"
                >
                  0+
                </div>
                <p className="text-gray-700 text-lg mt-2 font-medium">
                  Project Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Additional Stats & Visual */}
          <div className="">
            {/* Top Stats */}
            <div className="">
              <div className="stat-item border-l-2 border-gray-500 pl-15">
                <div
                  className="stat-number text-6xl md:text-7xl font-bold text-blue-600 leading-none"
                  data-target="5"
                  data-suffix="+"
                >
                  0+
                </div>
                <p className="text-gray-700 text-base mt-1">
                  Products in Our Suite
                </p>
              </div>

              <div className="stat-item border-l-2 border-gray-500 pl-15">
                <div
                  className="stat-number text-6xl md:text-7xl font-bold text-blue-600 leading-none"
                  data-target="15"
                  data-suffix="+"
                >
                  0%
                </div>
                <p className="text-gray-700 text-base mt-1">
                  Expert Team Members
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/all_man.webp"
              alt="Descriptive Alt Text"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
