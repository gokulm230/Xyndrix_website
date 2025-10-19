"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedTechHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Elements to animate
    if (!svgRef.current) return;
    
    // Animation for floating code elements
    const floatingCodes = svgRef.current.querySelectorAll('.floating-code');
    floatingCodes.forEach((element, index) => {
      // Apply different animation delays
      element.style.animation = `float 4s ease-in-out ${index * 0.5}s infinite`;
    });

    // Animation for robot parts
    const robotElements = svgRef.current.querySelectorAll('.robot-part');
    robotElements.forEach((element, index) => {
      element.style.animation = `robotFloat 3s ease-in-out ${index * 0.2}s infinite`;
    });

    // Animation for tech elements
    const techElements = svgRef.current.querySelectorAll('.tech-element');
    techElements.forEach((element, index) => {
      element.style.animation = `spin 8s linear ${index * 1}s infinite`;
    });

    // Animation for particles
    const particles = svgRef.current.querySelectorAll('.particle');
    particles.forEach((element, index) => {
      element.style.animation = `pulse 3s ease-in-out ${index * 0.3}s infinite`;
    });

    // Animation for connection lines
    const connections = svgRef.current.querySelectorAll('.connection');
    connections.forEach((element, index) => {
      element.style.animation = `dash 5s linear ${index * 0.5}s infinite`;
    });

    // Animation for screen elements
    const screenElements = svgRef.current.querySelectorAll('.screen-element');
    screenElements.forEach((element, index) => {
      element.style.animation = `fadeInOut 4s ease-in-out ${index * 0.3}s infinite`;
    });
    
    // Handle mouse move for interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move robot eyes to follow mouse
      const leftEye = svgRef.current.querySelector('.left-eye');
      const rightEye = svgRef.current.querySelector('.right-eye');
      
      if (leftEye && rightEye) {
        const eyeRadius = 2;
        
        // Calculate direction from eye center to mouse
        const leftEyeCenter = { x: 205, y: 250 };
        const rightEyeCenter = { x: 245, y: 250 };
        
        const leftDx = (x - leftEyeCenter.x) / 10;
        const leftDy = (y - leftEyeCenter.y) / 10;
        const leftDistance = Math.sqrt(leftDx * leftDx + leftDy * leftDy);
        const leftEyeX = leftEyeCenter.x + (leftDx / leftDistance) * Math.min(eyeRadius, leftDistance);
        const leftEyeY = leftEyeCenter.y + (leftDy / leftDistance) * Math.min(eyeRadius, leftDistance);
        
        const rightDx = (x - rightEyeCenter.x) / 10;
        const rightDy = (y - rightEyeCenter.y) / 10;
        const rightDistance = Math.sqrt(rightDx * rightDx + rightDy * rightDy);
        const rightEyeX = rightEyeCenter.x + (rightDx / rightDistance) * Math.min(eyeRadius, rightDistance);
        const rightEyeY = rightEyeCenter.y + (rightDy / rightDistance) * Math.min(eyeRadius, rightDistance);
        
        leftEye.setAttribute('cx', leftEyeX);
        leftEye.setAttribute('cy', leftEyeY);
        rightEye.setAttribute('cx', rightEyeX);
        rightEye.setAttribute('cy', rightEyeY);
      }
      
      // Move particles slightly towards mouse
      const particles = svgRef.current.querySelectorAll('.particle');
      particles.forEach(particle => {
        const cx = parseFloat(particle.getAttribute('cx'));
        const cy = parseFloat(particle.getAttribute('cy'));
        
        const dx = (x - cx) / 100;
        const dy = (y - cy) / 100;
        
        particle.setAttribute('cx', cx + dx);
        particle.setAttribute('cy', cy + dy);
      });
    };
    
    // Only add mousemove when hovering
    if (isHovering && svgRef.current) {
      svgRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (svgRef.current) {
        svgRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovering]);

  return (
    <div 
      className="relative w-full h-full cursor-pointer" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 95%, 100% { transform: scaleY(1); }
          97.5% { transform: scaleY(0.1); }
        }
        
        @keyframes typing {
          0%, 100% { width: 0; }
          50% { width: 100%; }
        }
        
        @keyframes colorCycle {
          0% { stroke: #4f46e5; }
          33% { stroke: #8b5cf6; }
          66% { stroke: #6366f1; }
          100% { stroke: #4f46e5; }
        }
        
        .connection {
          stroke-dasharray: 10;
          stroke-dashoffset: 20;
          animation: dash 5s linear infinite, colorCycle 10s infinite !important;
        }
        
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(20, end) infinite;
        }
        
        .robot-eye {
          animation: blink 5s infinite;
          transform-origin: center;
        }
      `}</style>

      <svg 
        ref={svgRef} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 800 600" 
        width="800" 
        height="600"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#6366f1" floodOpacity="0.3" />
          </filter>
        </defs>
        
        {/* Floating code elements */}
        <g transform="translate(50, 100)" className="floating-code">
          <rect x="0" y="0" width="120" height="20" rx="4" fill="#c7d2fe" />
          <rect x="20" y="30" width="160" height="20" rx="4" fill="#a5b4fc" />
          <rect x="40" y="60" width="100" height="20" rx="4" fill="#818cf8" />
          <rect x="20" y="90" width="140" height="20" rx="4" fill="#6366f1" />
          <rect x="0" y="120" width="180" height="20" rx="4" fill="#4f46e5" />
        </g>
        
        <g transform="translate(600, 150)" className="floating-code">
          <rect x="0" y="0" width="120" height="20" rx="4" fill="#ddd6fe" />
          <rect x="-20" y="30" width="160" height="20" rx="4" fill="#c4b5fd" />
          <rect x="-40" y="60" width="100" height="20" rx="4" fill="#a78bfa" />
          <rect x="-20" y="90" width="140" height="20" rx="4" fill="#8b5cf6" />
          <rect x="0" y="120" width="120" height="20" rx="4" fill="#7c3aed" />
        </g>

        {/* Computer/laptop */}
        <g transform="translate(400, 360)" filter="url(#shadow)">
          {/* Screen */}
          <rect x="-120" y="-100" width="240" height="160" rx="8" fill="#1e1b4b" stroke="#312e81" strokeWidth="4" />
          <rect x="-110" y="-90" width="220" height="140" rx="4" fill="url(#screenGradient)" />
          
          {/* Screen content - UI elements with typing effect */}
          <g className="typing-effect">
            <rect x="-90" y="-70" width="80" height="10" rx="2" fill="#e0e7ff" opacity="0.8" className="screen-element" />
            <rect x="-90" y="-50" width="60" height="10" rx="2" fill="#e0e7ff" opacity="0.6" className="screen-element" />
            <rect x="-90" y="-30" width="40" height="10" rx="2" fill="#e0e7ff" opacity="0.6" className="screen-element" />
          </g>
          
          <g className="screen-element">
            <rect x="10" y="-70" width="70" height="70" rx="4" fill="#c7d2fe" opacity="0.8" />
            <circle cx="45" cy="-35" r="20" fill="#818cf8" />
            <path d="M35 -35 L55 -35 M45 -45 L45 -25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </g>
          
          <rect x="-90" y="0" width="180" height="30" rx="4" fill="#c7d2fe" opacity="0.4" className="screen-element" />
          
          {/* Base */}
          <path d="M-120 65 L120 65 L150 110 L-150 110 Z" fill="#312e81" />
          <rect x="-150" y="110" width="300" height="10" rx="2" fill="#1e1b4b" />
        </g>
        
        {/* Floating AI robot character */}
        <g transform="translate(220, 260)" filter="url(#glow)" className="robot-part">
          {/* Head */}
          <circle cx="0" cy="0" r="50" fill="url(#robotGradient)" />
          <circle cx="-20" cy="-10" r="10" fill="#fff" opacity="0.9" />
          <circle cx="20" cy="-10" r="10" fill="#fff" opacity="0.9" />
          <circle cx="-15" cy="-10" r="5" fill="#000" className="robot-eye left-eye" />
          <circle cx="25" cy="-10" r="5" fill="#000" className="robot-eye right-eye" />
          
          {/* Antennas */}
          <line x1="0" y1="-50" x2="0" y2="-70" stroke="#6d28d9" strokeWidth="4" />
          <circle cx="0" cy="-75" r="5" fill="#a78bfa" className="pulse" />
          
          {/* Body elements */}
          <rect x="-40" y="60" width="80" height="60" rx="20" fill="url(#robotGradient)" />
          
          {/* Arms */}
          <path d="M-40 70 Q-80 50 -90 90" stroke="#7c3aed" strokeWidth="8" fill="none" className="robot-part" />
          <circle cx="-90" cy="90" r="10" fill="#8b5cf6" className="robot-part" />
          
          <path d="M40 70 Q80 40 100 60" stroke="#7c3aed" strokeWidth="8" fill="none" className="robot-part" />
          <circle cx="100" cy="60" r="10" fill="#8b5cf6" className="robot-part" />
          
          {/* Digital elements */}
          <circle cx="-15" cy="80" r="5" fill="#a5b4fc" className="screen-element" />
          <circle cx="0" cy="80" r="5" fill="#818cf8" className="screen-element" />
          <circle cx="15" cy="80" r="5" fill="#6366f1" className="screen-element" />
        </g>
        
        {/* Floating data/tech elements */}
        <g transform="translate(530, 230)" className="tech-element">
          {/* 3D cube */}
          <polygon points="0,0 40,-20 80,0 40,20" fill="#c4b5fd" opacity="0.8" />
          <polygon points="80,0 40,20 40,60 80,40" fill="#8b5cf6" opacity="0.8" />
          <polygon points="0,0 40,20 40,60 0,40" fill="#a78bfa" opacity="0.8" />
          
          {/* AI nodes */}
          <circle cx="0" cy="-40" r="10" fill="#4f46e5" opacity="0.8" className="tech-element" />
          <circle cx="40" cy="-60" r="8" fill="#4f46e5" opacity="0.8" className="tech-element" />
          <circle cx="80" cy="-40" r="10" fill="#4f46e5" opacity="0.8" className="tech-element" />
          
          <line x1="0" y1="-40" x2="40" y2="-60" stroke="#a5b4fc" strokeWidth="2" className="connection" />
          <line x1="40" y1="-60" x2="80" y2="-40" stroke="#a5b4fc" strokeWidth="2" className="connection" />
          <line x1="0" y1="-40" x2="40" y2="-20" stroke="#a5b4fc" strokeWidth="2" className="connection" />
          <line x1="80" y1="-40" x2="40" y2="-20" stroke="#a5b4fc" strokeWidth="2" className="connection" />
        </g>
        
        {/* Floating particles with enhanced effects */}
        <circle cx="150" cy="150" r="5" fill="#6366f1" opacity="0.8" className="particle">
          <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="650" cy="300" r="4" fill="#8b5cf6" opacity="0.8" className="particle">
          <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="100" r="6" fill="#4f46e5" opacity="0.8" className="particle">
          <animate attributeName="r" values="4;8;4" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="230" cy="400" r="3" fill="#7c3aed" opacity="0.8" className="particle">
          <animate attributeName="r" values="2;4;2" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="450" r="5" fill="#6366f1" opacity="0.8" className="particle">
          <animate attributeName="r" values="3;7;3" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Connection lines with data flow effect */}
        <g>
          <line x1="150" y1="150" x2="400" y2="100" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.6" className="connection">
            <animate attributeName="stroke-dashoffset" from="20" to="-20" dur="3s" repeatCount="indefinite" />
          </line>
          <circle r="2" fill="#c7d2fe" opacity="0.8">
            <animateMotion path="M150,150 L400,100" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
        
        <g>
          <line x1="400" y1="100" x2="650" y2="300" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.6" className="connection">
            <animate attributeName="stroke-dashoffset" from="20" to="-20" dur="4s" repeatCount="indefinite" />
          </line>
          <circle r="2" fill="#c7d2fe" opacity="0.8">
            <animateMotion path="M400,100 L650,300" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        
        <g>
          <line x1="230" y1="400" x2="400" y2="100" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.6" className="connection">
            <animate attributeName="stroke-dashoffset" from="20" to="-20" dur="3.5s" repeatCount="indefinite" />
          </line>
          <circle r="2" fill="#c7d2fe" opacity="0.8">
            <animateMotion path="M230,400 L400,100" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        <g>
          <line x1="600" y1="450" x2="650" y2="300" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.6" className="connection">
            <animate attributeName="stroke-dashoffset" from="20" to="-20" dur="2.5s" repeatCount="indefinite" />
          </line>
          <circle r="2" fill="#c7d2fe" opacity="0.8">
            <animateMotion path="M600,450 L650,300" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedTechHero;