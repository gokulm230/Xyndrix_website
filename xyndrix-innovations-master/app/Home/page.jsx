"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTechHero from "../Components/ui/animated-tech-hero";
import WhyChooseXyndrix from "../Components/ui/why-choose-xyndrix-section";
import Hero from "../Components/ui/home-hero-section";
import HowWeWork from "../Components/ui/how-we-work";
import VisionMissionSection from "../Components/ui/vision-mission-section";
import { WhyChooseXyndrixSticky } from "../Components/ui/why-choose-xyndrix-sticky";
import BlogsSection from "../Components/ui/blogs-section";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-badge", {
        y: -8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(".hero-title", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.08,
        ease: "power3.out",
      });
      gsap.from(".hero-copy", { y: 16, opacity: 0, duration: 0.6, delay: 0.2 });
      gsap.from(".hero-cta", {
        y: 8,
        opacity: 0,
        duration: 0.6,
        delay: 0.35,
        stagger: 0.08,
      });
      gsap.from(".hero-visual", {
        scale: 0.98,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      // Make non-main hero words semi-bold shortly after entrance
      gsap.delayedCall(0.08, () => {
        gsap.utils
          .toArray(".hero-word")
          .forEach((el) => el.classList.add("font-semibold"));
      });

      // After 1.2s animate the 'teams' word to bold, then persist via class swap
      gsap.delayedCall(1.2, () => {
        gsap.to(".hero-word-main", {
          fontWeight: 700,
          duration: 0.35,
          ease: "power1.out",
          onComplete() {
            gsap.utils.toArray(".hero-word-main").forEach((el) => {
              el.classList.remove("font-semibold");
              el.classList.add("font-bold");
              el.style.fontWeight = "";
            });
          },
        });
      });

      // Why Choose cards - reveal on scroll
      gsap.utils.toArray(".why-card").forEach((card) => {
        gsap.from(card, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="font-sans min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Xyndrix - Sticky Scroll Section */}
      <WhyChooseXyndrixSticky />
      
      {/* How We Work Section */}
      <HowWeWork />

      {/* Blogs Section */}
      <BlogsSection />
    </div>
  );
}
