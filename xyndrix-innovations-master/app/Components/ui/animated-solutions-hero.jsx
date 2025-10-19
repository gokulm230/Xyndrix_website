"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedSolutionsHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  // Define service details with use cases
  const services = [
    {
      name: "Web Development",
      description: "Custom responsive websites and web applications",
      features: ["E-commerce", "CMS Integration", "SEO Optimization"],
      useCase: "Perfect for businesses looking to establish a powerful online presence with a modern website that converts visitors to customers."
    },
    {
      name: "AI Solutions",
      description: "Intelligent systems for business automation and insights",
      features: ["Machine Learning", "Data Analytics", "Process Automation"],
      useCase: "Ideal for companies seeking to leverage data for predictive analytics, customer insights, and automated decision-making processes."
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive protection for digital assets",
      features: ["Threat Detection", "Data Encryption", "Security Training"],
      useCase: "Essential for organizations that need to safeguard sensitive data, maintain compliance, and protect against evolving cyber threats."
    },
    {
      name: "Mobile Applications",
      description: "Native and cross-platform mobile experiences",
      features: ["iOS & Android", "React Native", "UX Design"],
      useCase: "For businesses wanting to engage customers on mobile platforms with intuitive, high-performance applications."
    },
    {
      name: "SaaS Platforms",
      description: "Cloud-based software solutions for businesses",
      features: ["Subscription Models", "Multi-tenant Architecture", "API Integration"],
      useCase: "Suited for organizations looking to deliver scalable, accessible software solutions to clients with subscription-based revenue models."
    },
    {
      name: "IT Consulting",
      description: "Expert guidance for technology strategy",
      features: ["Digital Transformation", "Tech Strategy", "Implementation Support"],
      useCase: "For businesses navigating complex technology decisions or planning digital transformation initiatives."
    }
  ];

  useEffect(() => {
    // Elements to animate
    if (!svgRef.current) return;
    
    // Setup 3D helix animations
    const solutionCards = svgRef.current.querySelectorAll('.solution-card');
    solutionCards.forEach((element, index) => {
      // Apply helix animation with alternating direction and perspective
      if (index % 2 === 0) {
        element.style.animation = `helix ${24 + index * 3}s linear infinite`;
        element.style.transformStyle = 'preserve-3d';
      } else {
        element.style.animation = `reverseHelix ${30 - index * 2}s linear infinite`;
        element.style.transformStyle = 'preserve-3d';
      }
      
      // Add z-index animation based on position
      const zAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      zAnimation.setAttribute('attributeName', 'opacity');
      zAnimation.setAttribute('values', '0.7;1;0.7');
      zAnimation.setAttribute('dur', `${4 + index}s`);
      zAnimation.setAttribute('repeatCount', 'indefinite');
      element.appendChild(zAnimation);
    });
    
    // Animation for central hub
    const centralHub = svgRef.current.querySelector('.hub-element');
    if (centralHub) {
      centralHub.style.animation = `pulse 3s ease-in-out infinite`;
    }
    
    // Animation for rotating ring
    const ring = svgRef.current.querySelector('.ring');
    if (ring) {
      ring.style.animation = `rotate 60s linear infinite`;
    }

    // Animation for connection lines
    const connections = svgRef.current.querySelectorAll('.connection');
    connections.forEach((element, index) => {
      element.style.animation = `dash ${5 + index}s linear ${index * 0.5}s infinite`;
    });

    // Animation for icons
    const icons = svgRef.current.querySelectorAll('.solution-icon');
    icons.forEach((element, index) => {
      element.style.animation = `iconPulse 3s ease-in-out ${index * 0.3}s infinite`;
    });
    
    // Handle click for service details
    const handleServiceClick = (index) => {
      setActiveService(index);
      setShowDetails(true);
      setTimeout(() => setShowDetails(false), 5000);
    };
    
    // Add click handlers to solution cards
    solutionCards.forEach((card, index) => {
      card.addEventListener('click', () => handleServiceClick(index));
    });
    
    // Handle mouse move for interactive 3D effect
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = ((x / rect.width) * 2) - 1;
      const normalizedY = (((y / rect.height) * 2) - 1) * -1; // Invert Y
      
      // Rotate the entire SVG slightly based on mouse position for 3D effect
      svgRef.current.style.transform = `rotateY(${normalizedX * 10}deg) rotateX(${normalizedY * 10}deg)`;
      svgRef.current.style.transition = 'transform 0.5s ease-out';
      
      // Calculate center for distance
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distanceFromCenter = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      
      // Show use case text based on cursor proximity
      const useCaseTexts = svgRef.current.querySelectorAll('.use-case-text');
      if (useCaseTexts.length > 0) {
        useCaseTexts.forEach((text, index) => {
          text.style.opacity = '0.2';
        });
        
        // Find closest card to mouse position
        const cards = svgRef.current.querySelectorAll('.solution-card');
        let closestCard = -1;
        let minDistance = Infinity;
        
        cards.forEach((card, index) => {
          const cardBBox = card.getBBox();
          const cardCenterX = cardBBox.x + cardBBox.width/2;
          const cardCenterY = cardBBox.y + cardBBox.height/2;
          
          const distance = Math.sqrt(
            Math.pow(x - cardCenterX, 2) + Math.pow(y - cardCenterY, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            closestCard = index;
          }
        });
        
        if (closestCard >= 0 && minDistance < 150) {
          useCaseTexts[closestCard].style.opacity = '1';
          useCaseTexts[closestCard].style.transform = 'scale(1.1)';
        }
      }
      
      // Adjust the animation speed based on mouse position
      const ring = svgRef.current.querySelector('.ring');
      if (ring) {
        const speedFactor = 1 + (distanceFromCenter / rect.width) * 0.8;
        ring.style.animationDuration = `${60 / speedFactor}s`;
      }
    };
    
    // Add and remove event listeners
    const svg = svgRef.current;
    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up click handlers
      solutionCards.forEach((card, index) => {
        card.removeEventListener('click', () => handleServiceClick(index));
      });
    };
  }, []);

  return (
    <div 
      className="w-full h-full perspective-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style jsx>{`
        @keyframes helix {
          0% { transform: rotateY(0deg) translateZ(150px) rotateY(0deg); }
          100% { transform: rotateY(360deg) translateZ(150px) rotateY(-360deg); }
        }
        @keyframes reverseHelix {
          0% { transform: rotateY(360deg) translateZ(150px) rotateY(-360deg); }
          100% { transform: rotateY(0deg) translateZ(150px) rotateY(0deg); }
        }
        @keyframes elevate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0px 0px 5px rgba(59, 130, 246, 0.5)); }
          50% { filter: drop-shadow(0px 0px 15px rgba(59, 130, 246, 0.8)); }
        }
        @keyframes slide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .perspective-container {
          perspective: 1200px;
        }
        .helix-container {
          transform-style: preserve-3d;
        }
      `}</style>
      
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Elements with technology blueprint grid */}
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F015" strokeWidth="1"/>
          <text x="5" y="8" fill="#E2E8F010" fontSize="5">x</text>
          <text x="25" y="28" fill="#E2E8F010" fontSize="5">y</text>
        </pattern>
        <rect width="600" height="500" fill="url(#grid)" />
        
        {/* 3D Space Background */}
        <circle cx="300" cy="250" r="240" fill="url(#radial-bg)" opacity="0.2" />
        
        {/* 3D Grid elements for perspective */}
        <g className="helix-container">
          <ellipse cx="300" cy="250" rx="200" ry="100" stroke="#E2E8F020" strokeWidth="1" strokeDasharray="4,4" />
          <ellipse cx="300" cy="250" rx="150" ry="75" stroke="#E2E8F030" strokeWidth="1" strokeDasharray="4,4" />
          <ellipse cx="300" cy="250" rx="100" ry="50" stroke="#E2E8F040" strokeWidth="1" strokeDasharray="4,4" />
          
          {/* Coordinate axis guides */}
          <line x1="300" y1="50" x2="300" y2="450" stroke="#E2E8F020" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="100" y1="250" x2="500" y2="250" stroke="#E2E8F020" strokeWidth="1" strokeDasharray="5,5" />
          <text x="505" y="250" fill="#E2E8F040" fontSize="10">X</text>
          <text x="300" y="45" fill="#E2E8F040" fontSize="10">Y</text>
          
          {/* Spiral DNA-like helix elements */}
          <path d="M300,30 Q400,150 300,250 Q200,350 300,470" stroke="url(#helix-gradient-1)" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6">
            <animate attributeName="d" values="M300,30 Q400,150 300,250 Q200,350 300,470;M300,30 Q200,150 300,250 Q400,350 300,470;M300,30 Q400,150 300,250 Q200,350 300,470" dur="15s" repeatCount="indefinite" />
          </path>
          
          <path d="M300,30 Q200,150 300,250 Q400,350 300,470" stroke="url(#helix-gradient-2)" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6">
            <animate attributeName="d" values="M300,30 Q200,150 300,250 Q400,350 300,470;M300,30 Q400,150 300,250 Q200,350 300,470;M300,30 Q200,150 300,250 Q400,350 300,470" dur="15s" repeatCount="indefinite" />
          </path>
          
          {/* Connecting horizontal rungs between helix strands */}
          <g className="helix-rungs">
            {Array.from({length: 8}).map((_, i) => {
              const y = 50 + i * 50;
              return (
                <line 
                  key={i} 
                  x1={300 - 80 - 40 * Math.sin(i * Math.PI / 4)} 
                  y1={y} 
                  x2={300 + 80 + 40 * Math.sin(i * Math.PI / 4)} 
                  y2={y} 
                  stroke={`url(#rung-gradient-${i % 3})`} 
                  strokeWidth="1"
                  strokeDasharray="2,3"
                  opacity={0.4 + (i % 3) * 0.2}
                >
                  <animate 
                    attributeName="opacity" 
                    values={`${0.4 + (i % 3) * 0.2};${0.8 + (i % 3) * 0.1};${0.4 + (i % 3) * 0.2}`} 
                    dur={`${3 + i}s`}
                    repeatCount="indefinite" 
                  />
                </line>
              );
            })}
          </g>
        </g>
        
        {/* 3D Perspective Rings */}
        <g className="ring">
          <ellipse cx="300" cy="250" rx="200" ry="100" stroke="url(#ring-gradient)" strokeWidth="1.5" strokeDasharray="1,10" fill="none" opacity="0.6">
            <animate attributeName="rx" values="200;205;200" dur="10s" repeatCount="indefinite" />
            <animate attributeName="ry" values="100;105;100" dur="10s" repeatCount="indefinite" />
            <animate attributeName="transform" values="rotate(-5 300 250);rotate(0 300 250);rotate(5 300 250);rotate(0 300 250);rotate(-5 300 250)" dur="20s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="300" cy="250" rx="150" ry="75" stroke="url(#ring-gradient-2)" strokeWidth="1.5" strokeDasharray="2,8" fill="none" opacity="0.7">
            <animate attributeName="rx" values="150;155;150" dur="12s" repeatCount="indefinite" />
            <animate attributeName="ry" values="75;80;75" dur="12s" repeatCount="indefinite" />
            <animate attributeName="transform" values="rotate(5 300 250);rotate(0 300 250);rotate(-5 300 250);rotate(0 300 250);rotate(5 300 250)" dur="25s" repeatCount="indefinite" />
          </ellipse>
        </g>
        
        {/* 3D DNA Helix with service nodes */}
        <g className="solutions">
          {services.map((service, index) => {
            // Calculate position for 3D helix layout
            const angleOffset = (index / services.length) * 360;
            const yPos = 80 + (index * (340 / (services.length - 1))); // Distribute along Y axis
            
            // For alternating X positions to create helix effect
            const radius = 100;
            const xOffset = (index % 2 === 0) ? -radius : radius;
            
            // Calculate Z position for depth perception (will be used for scaling)
            const zPosition = Math.sin((index / services.length) * Math.PI * 2);
            const scale = 0.8 + (0.4 * (zPosition + 1) / 2); // Scale from 0.8 to 1.2
            const opacity = 0.7 + (0.3 * (zPosition + 1) / 2); // Opacity from 0.7 to 1.0
            
            // Generate a color based on index
            const colors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EC4899", "#14B8A6"];
            const color = colors[index % colors.length];
            const colorLight = index % 2 === 0 ? "#EFF6FF" : "#F5F3FF";
            const colorBorder = index % 2 === 0 ? "#BFDBFE" : "#DDD6FE";
            
            return (
              <g key={index} className="solution-card" transform={`translate(${300 + xOffset} ${yPos}) scale(${scale})`} opacity={opacity}>
                {/* Service node */}
                <circle r="40" fill={colorLight} stroke={colorBorder} strokeWidth="2" className="solution-circle">
                  <animate attributeName="r" values={`${40 * scale};${42 * scale};${40 * scale}`} dur={`${3 + index}s`} repeatCount="indefinite" />
                </circle>
                
                {/* Service name */}
                <text y="-5" textAnchor="middle" fill={color.replace('F6', '2F')} fontWeight="bold" fontSize="10">
                  {service.name}
                </text>
                
                {/* Add features in a smaller font */}
                <text y="10" textAnchor="middle" fill={color.replace('F6', '4F')} fontSize="8" opacity="0.8">
                  {service.features[0]}
                </text>
                
                {/* Connect to next service in helix with curve */}
                {index < services.length - 1 && (
                  <>
                    {/* Connection to opposite side service */}
                    <path
                      className="connection"
                      d={`M0,0 C${xOffset * -0.7},50 ${xOffset * -1.3},${(340 / (services.length - 1)) - 50} ${xOffset * -2},${340 / (services.length - 1)}`}
                      stroke="url(#line-gradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </>
                )}
                
                {/* Service icon */}
                <circle r="15" cy="-25" fill={color} className="solution-icon">
                  <animate attributeName="r" values={`15;16;15`} dur={`${2 + index * 0.5}s`} repeatCount="indefinite" />
                </circle>
                
                {/* Use case text - hidden by default, shown on hover/proximity */}
                <g className="use-case-text" opacity="0" transform="translate(100, 0)">
                  <rect x="-95" y="30" width="190" height="60" fill={`${color}30`} stroke={color} strokeWidth="1" rx="5" />
                  <text x="0" y="45" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                    USE CASE:
                  </text>
                  <foreignObject x="-90" y="50" width="180" height="35">
                    <div xmlns="http://www.w3.org/1999/xhtml" style={{
                      color: 'white', 
                      fontSize: '7px',
                      lineHeight: '1.2',
                      textAlign: 'center',
                      padding: '0 5px'
                    }}>
                      {service.useCase}
                    </div>
                  </foreignObject>
                </g>
                
                {/* Add industry keywords floating around */}
                <g className="keywords" opacity="0.7">
                  {service.features.slice(1, 3).map((feature, i) => (
                    <text 
                      key={i} 
                      x={50 * Math.cos(i * Math.PI/2)} 
                      y={40 * Math.sin(i * Math.PI/2)}
                      textAnchor="middle"
                      fill={color}
                      fontSize="8"
                      opacity="0.8"
                    >
                      {feature}
                      <animate 
                        attributeName="opacity" 
                        values="0.8;1;0.8" 
                        dur={`${3 + i}s`}
                        repeatCount="indefinite" 
                      />
                    </text>
                  ))}
                </g>
              </g>
            );
          })}
          
          {/* Central connector hub */}
          <circle cx="300" cy="250" r="25" fill="url(#hub-gradient)" className="hub-element">
            <animate attributeName="r" values="25;27;25" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="300" y="254" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
            Solutions
          </text>
        </g>
        
        {/* Animated Particles moving along the helix paths */}
        {Array.from({length: 10}).map((_, i) => {
          const startDelay = i * 0.8;
          const duration = 8 + (i % 3) * 2;
          const side = i % 2 === 0;
          const color = i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#8B5CF6" : "#10B981";
          const path = side ? 
            "M300,30 Q400,150 300,250 Q200,350 300,470" : 
            "M300,30 Q200,150 300,250 Q400,350 300,470";
          
          return (
            <circle key={i} r="3" fill={color} opacity="0.6">
              <animateMotion 
                path={path} 
                begin={`${startDelay}s`}
                dur={`${duration}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="opacity" 
                values="0.2;0.8;0.2" 
                dur={`${duration * 0.5}s`}
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="r" 
                values="2;4;2" 
                dur={`${duration * 0.3}s`}
                repeatCount="indefinite" 
              />
            </circle>
          );
        })}
        
        {/* Enhanced floating keywords with industry-specific terms */}
        <g className="floating-keywords">
          <text x="140" y="80" textAnchor="middle" fill="#3B82F6" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite" />
            E-commerce • SaaS • Enterprise
          </text>
          <text x="460" y="80" textAnchor="middle" fill="#8B5CF6" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="5.5s" repeatCount="indefinite" />
            AI • ML • Automation
          </text>
          <text x="140" y="420" textAnchor="middle" fill="#10B981" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4.7s" repeatCount="indefinite" />
            Security • Compliance • Protection
          </text>
          <text x="460" y="420" textAnchor="middle" fill="#F59E0B" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="5.2s" repeatCount="indefinite" />
            iOS • Android • Cross-Platform
          </text>
          <text x="300" y="35" textAnchor="middle" fill="#EC4899" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4.9s" repeatCount="indefinite" />
            Subscription • Integration • API
          </text>
          <text x="300" y="465" textAnchor="middle" fill="#14B8A6" fontSize="9" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="5.3s" repeatCount="indefinite" />
            Digital Transformation • Strategy
          </text>
          
          {/* Industry markers */}
          <text x="80" y="200" textAnchor="middle" fill="#3B82F660" fontSize="14" fontWeight="bold" opacity="0.4" transform="rotate(-90, 80, 200)">
            ENTERPRISE
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="8s" repeatCount="indefinite" />
          </text>
          <text x="520" y="300" textAnchor="middle" fill="#8B5CF660" fontSize="14" fontWeight="bold" opacity="0.4" transform="rotate(90, 520, 300)">
            STARTUPS
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="8.5s" repeatCount="indefinite" />
          </text>
        </g>

        {/* Enhanced Gradient Definitions */}
        <defs>
          <radialGradient id="radial-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#1E40AF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="helix-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="helix-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="hub-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C7D2FE" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          
          <linearGradient id="ring-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C7D2FE" />
          </linearGradient>
          
          <linearGradient id="rung-gradient-0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="rung-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="rung-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Service Details Overlay - shown when a service is selected */}
      {showDetails && activeService !== null && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-bold mb-2">{services[activeService].name}</h3>
            <p className="mb-4">{services[activeService].description}</p>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 mb-4">
              {services[activeService].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h4 className="font-semibold mb-2">Use Case:</h4>
            <p>{services[activeService].useCase}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedSolutionsHero;