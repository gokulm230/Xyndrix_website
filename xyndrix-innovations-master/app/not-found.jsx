"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.back();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleGoBack = () => {
    router.back();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden flex items-center justify-center py-10 sm:py-16 md:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Rotating Gears/Tech Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`gear-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            variants={rotateVariants}
            animate="animate"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="opacity-20"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="30" fill="#6366f1" opacity="0.3" />
              {[...Array(8)].map((_, index) => (
                <line
                  key={index}
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="10"
                  stroke="#6366f1"
                  strokeWidth="2"
                  transform={`rotate(${index * 45} 50 50)`}
                />
              ))}
            </svg>
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number with Animation */}
          <motion.div
            className="mb-4 sm:mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 leading-none mb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              404
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Page Not Available
            </motion.p>
          </motion.div>

          {/* Robot/Tech Illustration */}
          <motion.div
            className="mb-4 sm:mb-6 md:mb-8 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                className="drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="robotGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>

                {/* Robot Body */}
                <motion.rect
                  x="50"
                  y="70"
                  width="100"
                  height="80"
                  rx="10"
                  fill="url(#robotGradient)"
                  animate={{
                    y: [70, 65, 70],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Robot Head */}
                <motion.rect
                  x="60"
                  y="30"
                  width="80"
                  height="60"
                  rx="8"
                  fill="url(#robotGradient)"
                  animate={{
                    y: [30, 25, 30],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Eyes */}
                <motion.circle
                  cx="80"
                  cy="55"
                  r="8"
                  fill="#ffffff"
                  animate={{
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <motion.circle
                  cx="120"
                  cy="55"
                  r="8"
                  fill="#ffffff"
                  animate={{
                    scaleY: [1, 0.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                {/* Antenna */}
                <motion.line
                  x1="100"
                  y1="30"
                  x2="100"
                  y2="15"
                  stroke="#4f46e5"
                  strokeWidth="3"
                  animate={{
                    y1: [30, 25, 30],
                    y2: [15, 10, 15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="100"
                  cy="15"
                  r="5"
                  fill="#ef4444"
                  animate={{
                    opacity: [1, 0.3, 1],
                    cy: [15, 10, 15],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />

                {/* Arms */}
                <motion.rect
                  x="30"
                  y="80"
                  width="20"
                  height="50"
                  rx="5"
                  fill="#6366f1"
                  animate={{
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "40px 80px" }}
                />
                <motion.rect
                  x="150"
                  y="80"
                  width="20"
                  height="50"
                  rx="5"
                  fill="#6366f1"
                  animate={{
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "160px 80px" }}
                />

                {/* Legs */}
                <rect x="70" y="150" width="20" height="40" rx="5" fill="#6366f1" />
                <rect x="110" y="150" width="20" height="40" rx="5" fill="#6366f1" />

                {/* Wrench in hand */}
                <motion.g
                  animate={{
                    rotate: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: "40px 130px" }}
                >
                  <rect
                    x="35"
                    y="120"
                    width="10"
                    height="30"
                    fill="#9ca3af"
                    rx="2"
                  />
                  <circle cx="40" cy="115" r="8" fill="#9ca3af" />
                </motion.g>
              </svg>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6 md:mb-8">
            <motion.div
              className="inline-flex items-center py-1.5 px-4 sm:py-2 sm:px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm sm:text-base font-semibold rounded-full mb-4 sm:mb-6 border border-blue-200/30 shadow-lg"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 10px 30px rgba(59, 130, 246, 0.2)",
                  "0 10px 40px rgba(139, 92, 246, 0.3)",
                  "0 10px 30px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  animate={{
                    pathLength: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </svg>
              Page Under Progress
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sorry, This Page is Under Progress
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              The page you're looking for is currently being developed.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              We're working hard to bring you something amazing!
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="mb-4 sm:mb-6 md:mb-8 px-4"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg border border-gray-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                  }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6l4 2"
                />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 font-medium">
                <span className="hidden sm:inline">Auto-redirecting in </span>
                <span className="sm:hidden">Redirecting in </span>
                <motion.span
                  key={countdown}
                  className="text-blue-600 font-bold text-base sm:text-lg"
                  initial={{ scale: 1.5, color: "#ef4444" }}
                  animate={{ scale: 1, color: "#2563eb" }}
                  transition={{ duration: 0.3 }}
                >
                  {countdown}
                </motion.span>
                <span className="hidden sm:inline"> seconds</span>
                <span className="sm:hidden">s</span>
              </span>
            </div>
          </motion.div>

          {/* Go Back Button */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <motion.button
              onClick={handleGoBack}
              className="relative group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-xl text-sm sm:text-base">
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    x: [-2, 0, -2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </motion.svg>
                Go Back
              </div>
            </motion.button>

            <Link href="/Home" className="w-full sm:w-auto">
              <motion.button
                className="relative group w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300" />
                <div className="relative bg-white text-blue-600 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg border-2 border-blue-200 transition duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go Home
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Tech Elements at Bottom */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 flex justify-center gap-4 sm:gap-6 md:gap-8"
            variants={itemVariants}
          >
            {[
              { icon: "⚙️", label: "Building" },
              { icon: "🔧", label: "Fixing" },
              { icon: "🚀", label: "Launching" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500/30 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
