"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const FloatingDock = ({
  items,
  className,
  mobileClassName,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 ${mobileClassName} ${className}`}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 p-2 rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgb(0_0_0/0.1)] space-x-2"
      >
        {items.map((item, idx) => (
          <Link
            href={item.href}
            key={`floating-dock-${idx}`}
            className="relative group"
            onClick={() => setActiveIndex(idx)}
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-full ${
                  activeIndex === idx
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
                } duration-200 transition-all`}
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <span
                className={`text-xs mt-1 ${
                  activeIndex === idx
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                } duration-200 transition-all`}
              >
                {item.title}
              </span>
            </div>
            {activeIndex === idx && (
              <motion.div
                layoutId="active-pill"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-900"
                style={{
                  zIndex: -1,
                }}
              />
            )}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};