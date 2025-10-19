"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedContactHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;
    
    // Animation for contact elements
    const contactElements = svgRef.current.querySelectorAll('.contact-element');
    contactElements.forEach((element, index) => {
      element.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite`;
    });

    // Animation for connection lines
    const connections = svgRef.current.querySelectorAll('.connection');
    connections.forEach((element, index) => {
      element.style.animation = `dash 5s linear ${index * 0.5}s infinite`;
    });

    // Animation for message elements
    const messageElements = svgRef.current.querySelectorAll('.message-element');
    messageElements.forEach((element, index) => {
      element.style.animation = `messageFloat 3s ease-in-out ${index * 0.2}s infinite`;
    });

    // Animation for decorative circles
    const circles = svgRef.current.querySelectorAll('.decorative-circle');
    circles.forEach((element, index) => {
      element.style.animation = `pulse 3s ease-in-out ${index * 0.3}s infinite`;
    });

    // Handle mouse move for interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move particles slightly towards mouse
      const particles = svgRef.current.querySelectorAll('.particle');
      particles.forEach(particle => {
        const cx = parseFloat(particle.getAttribute('cx') || 0);
        const cy = parseFloat(particle.getAttribute('cy') || 0);
        
        if (cx && cy) {
          const dx = (x - cx) / 70;
          const dy = (y - cy) / 70;
          
          particle.setAttribute('cx', cx + dx);
          particle.setAttribute('cy', cy + dy);
        }
      });
    };
    
    // Add and remove event listeners
    const svg = svgRef.current;
    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes messageFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Decorative background circles */}
        <circle cx="100" cy="100" r="40" className="decorative-circle" fill="#EBF4FF" opacity="0.6" />
        <circle cx="500" cy="120" r="50" className="decorative-circle" fill="#EBF8FF" opacity="0.5" />
        <circle cx="120" cy="400" r="60" className="decorative-circle" fill="#EDF2FF" opacity="0.4" />
        <circle cx="480" cy="380" r="45" className="decorative-circle" fill="#E6FFFA" opacity="0.5" />

        {/* Central Message Icon */}
        <circle cx="300" cy="250" r="80" className="contact-element" fill="#EBF8FF" stroke="#3B82F6" strokeWidth="3" />
        
        {/* Envelope shape */}
        <rect x="260" y="230" width="80" height="50" rx="3" className="message-element" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <path d="M260 230 L300 255 L340 230" className="message-element" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <path d="M260 280 L285 255 M340 280 L315 255" className="message-element" fill="none" stroke="#3B82F6" strokeWidth="2" />

        {/* Connection Elements - Email */}
        <circle cx="160" cy="180" r="30" className="contact-element" fill="#DBEAFE" />
        <path d="M160 170 L160 175 M155 180 L165 180" stroke="#3B82F6" strokeWidth="3" className="contact-element" />
        <path d="M160 175 Q163 178 160 180 Q157 178 160 175" fill="#3B82F6" className="contact-element" />
        <path d="M190 180 L250 230" className="connection" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Connection Elements - Phone */}
        <circle cx="160" cy="320" r="30" className="contact-element" fill="#D1FAE5" />
        <path d="M150 310 C145 315, 145 325, 150 330 C155 335, 165 335, 170 330 C175 325, 175 315, 170 310 Z" fill="none" stroke="#10B981" strokeWidth="3" className="contact-element" />
        <path d="M158 320 C158 323, 162 323, 162 320" stroke="#10B981" strokeWidth="2" className="contact-element" />
        <path d="M160 320 L230 260" className="connection" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Connection Elements - Location */}
        <circle cx="440" cy="180" r="30" className="contact-element" fill="#EDE9FE" />
        <path d="M440 165 C430 165, 425 175, 425 185 C425 195, 440 205, 440 205 C440 205, 455 195, 455 185 C455 175, 450 165, 440 165 Z" fill="none" stroke="#8B5CF6" strokeWidth="3" className="contact-element" />
        <circle cx="440" cy="180" r="5" fill="#8B5CF6" className="contact-element" />
        <path d="M410 180 L350 230" className="connection" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />

        {/* Connection Elements - Social Media */}
        <circle cx="440" cy="320" r="30" className="contact-element" fill="#FEE2E2" />
        <path d="M430 320 L450 320 M440 310 L440 330" stroke="#EF4444" strokeWidth="3" className="contact-element" />
        <path d="M370 270 L410 320" className="connection" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Small interactive particles */}
        <circle cx="220" cy="150" r="5" className="particle" fill="#93C5FD" opacity="0.7" />
        <circle cx="380" cy="150" r="4" className="particle" fill="#6EE7B7" opacity="0.7" />
        <circle cx="220" cy="350" r="6" className="particle" fill="#C4B5FD" opacity="0.7" />
        <circle cx="380" cy="350" r="5" className="particle" fill="#FCA5A5" opacity="0.7" />
        <circle cx="300" cy="150" r="4" className="particle" fill="#93C5FD" opacity="0.7" />
        <circle cx="300" cy="350" r="5" className="particle" fill="#C4B5FD" opacity="0.7" />
        <circle cx="200" cy="250" r="4" className="particle" fill="#6EE7B7" opacity="0.7" />
        <circle cx="400" cy="250" r="6" className="particle" fill="#FCA5A5" opacity="0.7" />

        {/* Form representation */}
        <rect x="260" y="300" width="80" height="10" rx="2" className="message-element" fill="white" stroke="#3B82F6" strokeWidth="1" />
        <rect x="260" y="320" width="80" height="10" rx="2" className="message-element" fill="white" stroke="#3B82F6" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default AnimatedContactHero;