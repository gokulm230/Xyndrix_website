"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedAboutHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Elements to animate
    if (!svgRef.current) return;
    
    // Animation for floating elements
    const floatingElements = svgRef.current.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
      // Apply different animation delays
      element.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite`;
    });

    // Animation for team members
    const teamElements = svgRef.current.querySelectorAll('.team-element');
    teamElements.forEach((element, index) => {
      element.style.animation = `teamFloat 3s ease-in-out ${index * 0.2}s infinite`;
    });

    // Animation for connection lines
    const connections = svgRef.current.querySelectorAll('.connection');
    connections.forEach((element, index) => {
      element.style.animation = `dash 5s linear ${index * 0.5}s infinite`;
    });

    // Animation for ideas
    const ideas = svgRef.current.querySelectorAll('.idea');
    ideas.forEach((element, index) => {
      element.style.animation = `pulse 3s ease-in-out ${index * 0.3}s infinite`;
    });
    
    // Handle mouse move for interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move idea lightbulbs slightly towards mouse
      const ideas = svgRef.current.querySelectorAll('.idea');
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
        @keyframes teamFloat {
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
      `}</style>
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Elements */}
        <circle cx="300" cy="250" r="200" fill="url(#radial-bg)" opacity="0.2" />
        <path d="M50,100 Q150,50 250,150 T450,200" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10,10" className="connection" opacity="0.5" />
        <path d="M100,400 Q200,300 300,350 T500,250" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10,10" className="connection" opacity="0.5" />
        
        {/* Team Collaboration Illustration */}
        <g className="team-element">
          <rect x="200" y="200" width="200" height="120" rx="10" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
          <text x="300" y="235" textAnchor="middle" fill="#4B5563" fontWeight="bold" fontSize="18">Our Team</text>
          <text x="300" y="265" textAnchor="middle" fill="#6B7280" fontSize="14">Collaboration & Innovation</text>
          
          {/* Team Members */}
          <circle cx="240" cy="300" r="15" fill="#8B5CF6" className="team-element" />
          <circle cx="280" cy="300" r="15" fill="#3B82F6" className="team-element" />
          <circle cx="320" cy="300" r="15" fill="#EC4899" className="team-element" />
          <circle cx="360" cy="300" r="15" fill="#10B981" className="team-element" />
        </g>
        
        {/* Ideas and Mission */}
        <g className="floating-element">
          <circle cx="150" cy="150" r="40" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="2" />
          <circle cx="150" cy="150" r="15" fill="#6366F1" className="idea" />
          <text x="150" y="190" textAnchor="middle" fill="#4F46E5" fontSize="14">Ideas</text>
        </g>
        
        <g className="floating-element">
          <circle cx="450" cy="150" r="40" fill="#F0FDFA" stroke="#CCFBF1" strokeWidth="2" />
          <circle cx="450" cy="150" r="15" fill="#10B981" className="idea" />
          <text x="450" y="190" textAnchor="middle" fill="#059669" fontSize="14">Vision</text>
        </g>
        
        <g className="floating-element">
          <circle cx="450" cy="350" r="40" fill="#FDF2F8" stroke="#FCE7F3" strokeWidth="2" />
          <circle cx="450" cy="350" r="15" fill="#EC4899" className="idea" />
          <text x="450" y="390" textAnchor="middle" fill="#DB2777" fontSize="14">Impact</text>
        </g>
        
        <g className="floating-element">
          <circle cx="150" cy="350" r="40" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
          <circle cx="150" cy="350" r="15" fill="#3B82F6" className="idea" />
          <text x="150" y="390" textAnchor="middle" fill="#2563EB" fontSize="14">Mission</text>
        </g>
        
        {/* Digital Transformation Path */}
        <path d="M150,150 Q300,100 450,150 T450,350 Q300,400 150,350 Z" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="15,15" className="connection" fill="none" opacity="0.7" />
        
        {/* Central Element */}
        <g className="team-element">
          <circle cx="300" cy="250" r="50" fill="url(#gradient)" />
          <text x="300" y="255" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">Xyndrix</text>
        </g>

        {/* Definitions for gradients */}
        <defs>
          <radialGradient id="radial-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EEF2FF" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedAboutHero;