'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
    { 
      id: 4, 
      name: 'csemeta', 
      src: 'https://csemeta.vercel.app/images/logo.png' 
    },
    { 
      id: 5, 
      name: 'Customer 5', 
      src: 'https://via.placeholder.com/200x100?text=Customer+5' 
    },
  ];
  
  // Use custom logos if provided, otherwise use defaults
  const baseLogos = customLogos || customerLogos;
  
  const trackRef = useRef(null);
  
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
    
    // Set custom animation speed if provided
    if (customSpeed && trackRef.current) {
      // Convert customSpeed to animation duration (lower speed = longer duration)
      const duration = 80 / (customSpeed * 2); // Adjusted for better visibility
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
        className="flex-shrink-0 mx-10 md:mx-20 opacity-100"
      >
        <div className={`w-[150px] h-[100px] md:w-[200px] md:h-[130px] relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center`}>
          <Image 
            src={logo.src} 
            alt={`${logo.name} logo`} 
            fill
            className={`object-contain ${
              // Special handling for logos with specific needs
              logo.name === 'Karupa Foundation' ? 'p-1' :
              logo.name === 'KAHE' ? 'p-3 object-contain' : 
              logo.name === 'CSE Meta' ? 'p-2' : 
              logo.name === 'Surya Coconut' ? 'p-1.5' : 
              'p-2'
            }`}
            sizes="(max-width: 768px) 140px, 180px"
            priority={suffix === 'first'} 
            quality={100}
            unoptimized={logo.src.startsWith('http')}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {title || "Our Valued Customers"}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle || "Trusted by leading organizations across industries to deliver exceptional technology solutions"}
          </p>
        </div>
        
        <div className="relative mt-8">
          {/* Gradient overlays for smooth transitions */}
          <div className="absolute left-0 top-0 h-full w-8 md:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-8 md:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* The continuously scrolling container with CSS module */}
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack} ref={trackRef}>
              {/* First set of logos */}
              {createLogoItems('first')}
              {/* Duplicate set for seamless loop */}
              {createLogoItems('second')}
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Join the growing list of organizations who trust us with their technology needs
          </p>
          <a href="/Contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Become a partner
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogoMarquee;