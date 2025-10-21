'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './marquee.module.css';

/**
 * CustomerLogoMarquee Component
 * @param {Object} props
 * @param {Array} [props.customLogos] - Optional array of customer logos to override defaults
 * @param {string} [props.title] - Optional title text override
 * @param {string} [props.subtitle] - Optional subtitle text override
 * @param {number} [props.speed] - Optional animation speed (lower = slower)
 */
const CustomerLogoMarquee = ({ customLogos, title, subtitle, speed: customSpeed }) => {
  // Array of customer logos with customizable image URLs
  const customerLogos = [
    { 
      id: 1, 
      name: 'Karupa Foundation', 
      src: 'https://karupafoundation.com/images/logo%20final.jpg' 
    },
    { 
      id: 2, 
      name: 'KAHE', 
      src: 'https://img.kompass.com/sys-master-images/h24/h5a/9687875125278/kahe-jpg' 
    },
    { 
      id: 3, 
      name: 'Surya Coconut', 
      src: 'https://www.suryacoconut.shop/assets/surya-logo-D7BLbdcg.png' 
    },
  ];
  
  // Use custom logos if provided, otherwise use defaults
  const baseLogos = customLogos || customerLogos;
  
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Handle visibility change to pause animation when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (trackRef.current) {
        if (document.hidden) {
          trackRef.current.classList.add(styles.paused);
        } else {
          trackRef.current.classList.remove(styles.paused);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Set custom animation speed if provided - use much slower speed for professional look
    if (trackRef.current) {
      // Convert customSpeed to animation duration (lower speed = longer duration)
      const duration = customSpeed ? (120 / customSpeed) : 120; // Much slower by default
      trackRef.current.style.animationDuration = `${duration}s`;
    }
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [customSpeed]);

  // Create logo groups with unique keys
  const createLogoItems = (suffix = '') => {
    return baseLogos.map((logo) => (
      <div 
        key={`${logo.id}-${suffix}`}  
        className="flex-shrink-0 mx-12 md:mx-10 opacity-100"
      >
        <div className="w-[150px] h-[80px] md:w-[250px] md:h-[150px] relative flex items-center justify-center">
          <Image 
            src={logo.src} 
            alt={`${logo.name} logo`} 
            fill
            className="object-contain"
            sizes="(max-width: 768px) 150px, 200px"
            priority={suffix === 'first'} 
            quality={100}
            unoptimized={logo.src.startsWith('http')}
          />
        </div>
      </div>
    ));
  };

  // Mouse and touch event handlers for manual scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    // Pause the animation during drag
    if (trackRef.current) {
      trackRef.current.classList.add(styles.paused);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startPosition) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Resume the animation after some delay
    setTimeout(() => {
      if (trackRef.current && !containerRef.current.matches(':hover')) {
        trackRef.current.classList.remove(styles.paused);
      }
    }, 500);
  };

  const handleMouseEnter = () => {
    // Pause animation on hover
    if (trackRef.current) {
      trackRef.current.classList.add(styles.paused);
    }
  };

  const handleMouseLeave = () => {
    // Resume animation when mouse leaves
    if (trackRef.current && !isDragging) {
      trackRef.current.classList.remove(styles.paused);
    }
  };

  return (
    <div className="w-full bg-white  py-30 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            {title || "TRUSTED PARTNER"}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="relative mt-12">
          {/* Gradient overlays for smooth transitions */}
          <div className="absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* The continuously scrolling container with CSS module */}
          <div 
            className={`${styles.marqueeContainer} cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div 
              className={`${styles.marqueeTrack} py-6`} 
              ref={trackRef}
            >
              {/* First set of logos */}
              {createLogoItems('first')}
              {/* Duplicate set for seamless loop */}
              {createLogoItems('second')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogoMarquee;