"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedWeDoHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Elements to animate
    if (!svgRef.current) return;
    
    // Animation for floating idea elements
    const ideaElements = svgRef.current.querySelectorAll('.idea-element');
    ideaElements.forEach((element, index) => {
      // Apply different animation delays
      element.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite`;
    });

    // Animation for solution elements
    const solutionElements = svgRef.current.querySelectorAll('.solution-element');
    solutionElements.forEach((element, index) => {
      element.style.animation = `solutionFloat 3s ease-in-out ${index * 0.2}s infinite`;
    });

    // Animation for tech connection elements
    const connectionElements = svgRef.current.querySelectorAll('.connection');
    connectionElements.forEach((element, index) => {
      element.style.animation = `dash 5s linear ${index * 0.5}s infinite`;
    });

    // Animation for digital elements
    const digitalElements = svgRef.current.querySelectorAll('.digital-element');
    digitalElements.forEach((element, index) => {
      element.style.animation = `spin 8s linear ${index * 1}s infinite`;
    });

    // Animation for particles
    const particles = svgRef.current.querySelectorAll('.particle');
    particles.forEach((element, index) => {
      element.style.animation = `pulse 3s ease-in-out ${index * 0.3}s infinite`;
    });
    
    // Handle mouse move for interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move idea elements slightly towards mouse
      const ideas = svgRef.current.querySelectorAll('.idea-element');
      ideas.forEach(idea => {
        const cx = parseFloat(idea.getAttribute('cx') || 0);
        const cy = parseFloat(idea.getAttribute('cy') || 0);
        
        if (cx && cy) {
          const dx = (x - cx) / 100;
          const dy = (y - cy) / 100;
          
          idea.setAttribute('cx', cx + dx);
          idea.setAttribute('cy', cy + dy);
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
        @keyframes solutionFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
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
        {/* Main central document */}
        <rect x="200" y="150" width="200" height="250" rx="15" className="solution-element" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
        
        {/* Document header */}
        <rect x="220" y="180" width="160" height="30" rx="5" className="digital-element" fill="#EEF2FF" />
        <rect x="220" y="230" width="160" height="15" rx="3" className="digital-element" fill="#E0E7FF" />
        <rect x="220" y="255" width="120" height="15" rx="3" className="digital-element" fill="#E0E7FF" />
        
        {/* Document content lines */}
        <rect x="220" y="300" width="160" height="10" rx="2" className="digital-element" fill="#E0E7FF" />
        <rect x="220" y="320" width="140" height="10" rx="2" className="digital-element" fill="#E0E7FF" />
        <rect x="220" y="340" width="160" height="10" rx="2" className="digital-element" fill="#E0E7FF" />
        <rect x="220" y="360" width="130" height="10" rx="2" className="digital-element" fill="#E0E7FF" />

        {/* Idea lightbulbs */}
        <circle cx="120" cy="150" r="25" className="idea-element" fill="#FEF3C7" />
        <path d="M120 130 L120 145 M110 155 L130 155" stroke="#F59E0B" strokeWidth="3" className="idea-element" />
        <path d="M120 145 Q125 150 120 155 Q115 150 120 145" fill="#F59E0B" className="idea-element" />

        <circle cx="480" cy="130" r="20" className="idea-element" fill="#ECFDF5" />
        <path d="M480 115 L480 125 M472 135 L488 135" stroke="#10B981" strokeWidth="3" className="idea-element" />
        <path d="M480 125 Q484 130 480 135 Q476 130 480 125" fill="#10B981" className="idea-element" />

        <circle cx="150" cy="380" r="22" className="idea-element" fill="#EFF6FF" />
        <path d="M150 365 L150 375 M142 385 L158 385" stroke="#3B82F6" strokeWidth="3" className="idea-element" />
        <path d="M150 375 Q154 380 150 385 Q146 380 150 375" fill="#3B82F6" className="idea-element" />

        {/* Connection lines between ideas and document */}
        <path d="M145 150 L200 200" className="connection" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M460 130 L400 180" className="connection" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M170 370 L200 350" className="connection" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />

        {/* Digital elements floating around */}
        <circle cx="100" cy="250" r="12" className="digital-element" fill="#C7D2FE" opacity="0.7" />
        <circle cx="500" cy="250" r="15" className="digital-element" fill="#BFDBFE" opacity="0.7" />
        <circle cx="300" cy="80" r="18" className="digital-element" fill="#DDD6FE" opacity="0.7" />
        <circle cx="350" cy="420" r="14" className="digital-element" fill="#A5B4FC" opacity="0.7" />

        {/* Code blocks */}
        <rect x="80" cy="300" width="60" height="40" rx="5" className="solution-element" fill="#F8FAFC" stroke="#6366F1" strokeWidth="2" />
        <rect x="460" cy="320" width="70" height="50" rx="5" className="solution-element" fill="#F8FAFC" stroke="#6366F1" strokeWidth="2" />

        {/* Small particles */}
        <circle cx="150" cy="200" r="5" className="particle" fill="#FCD34D" opacity="0.7" />
        <circle cx="450" cy="180" r="4" className="particle" fill="#34D399" opacity="0.7" />
        <circle cx="230" cy="400" r="6" className="particle" fill="#93C5FD" opacity="0.7" />
        <circle cx="370" cy="100" r="4" className="particle" fill="#A78BFA" opacity="0.7" />

        {/* Arrow showing transformation */}
        <path d="M310 100 Q380 70 450 100 L440 90 M450 100 L440 110" className="connection" stroke="#7C3AED" strokeWidth="3" />

        {/* Corner fold on document */}
        <path d="M400 150 L400 180 L370 150 Z" className="solution-element" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default AnimatedWeDoHero;