"use client";
import Link from "next/link";
import AnimatedTechHero from "./animated-tech-hero";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center px-4 max-w-4xl mx-auto text-center w-full"
          >
        
            {/* Main Title with FlipWords */}
            <div className="mt-8 text-center mb-8 leading-tight flex flex-col items-center gap-4 w-full">
              {/* Dynamic Title with FlipWords */}
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-gradient-to-br from-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-2xl">
                Transform Your
                <FlipWords words={["Vision", "Ideas", "Dreams", "Concepts"]} />
                into
                <FlipWords words={["Reality", "Products", "Solutions", "Success"]} />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-4">
              We build world-class digital products with cutting-edge technology
              and a team of expert developers dedicated to your success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-lg">
              <Link href="/Contact" className="relative group w-full sm:w-auto sm:flex-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 sm:px-8 rounded-lg transition duration-300 group-hover:scale-105 backdrop-blur-sm text-base sm:text-lg w-full">
                  Start Your Project
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </button>
              </Link>
              <Link href="/About" className="relative group w-full sm:w-auto sm:flex-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/30 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
                <button className="relative bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 sm:px-8 rounded-lg border border-white/20 transition duration-300 group-hover:scale-105 hover:bg-white/20 text-base sm:text-lg w-full">
                  About Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
