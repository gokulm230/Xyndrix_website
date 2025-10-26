"use client";
import Link from "next/link";
import AnimatedTechHero from "./animated-tech-hero";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="relative bg-white overflow-hidden  py-20 lg:py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="inline-flex items-center py-1 px-4 bg-gradient-to-r from-blue-500/10 to-blue-500/10 text-blue-600 font-semibold rounded-full mb-4 border border-blue-200/30 shadow-sm hero-badge">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 16.5L12 5.25L19.5 16.5H4.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 5.25L19.5 16.5H4.5L12 5.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Innovating the Future
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-light mb-8 bg-clip-text bg-gradient-to-r text-black hero-title">
                Great <span className="text-black hero-word">Product</span> is
                <br />
                built by great{" "}
                <span className="text-black relative hero-word-main">
                  teams
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 hero-copy">
                We help build and manage a team of world-class developers to
                bring your vision to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/Contact" className="relative group hero-cta">
                  <div className="absolute -inset-0.5  rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-blue-600  text-white font-medium py-3 px-8 rounded-lg transition duration-300 group-hover:scale-105">
                    Let's get started!
                    <span className="absolute right-4  top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </button>
                </Link>
                <Link href="/We-do" className="relative group hero-cta">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
                  <button className="relative bg-white text-blue-600 font-medium py-3 px-8 rounded-lg border border-gray-200 transition duration-300 group-hover:scale-105">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500 hero-visual">
                  <div className="w-[650px] h-[550px] mx-auto">
                    {/* <AnimatedTechHero /> */}
                    <Image
                      src="/Hero_image.jpg"
                      alt="Description of image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
