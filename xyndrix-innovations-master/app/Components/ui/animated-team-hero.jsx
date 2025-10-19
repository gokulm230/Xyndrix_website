"use client";

import { useEffect, useRef, useState } from 'react';

const AnimatedTeamHero = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  // Project names for the animation
  const projects = ["Web App", "Mobile App", "AI Model", "Data Platform"];

  // Set initial random positions for team members
  const [teamPositions, setTeamPositions] = useState([
    { x: 180, y: 120 },  // Initial positions more spread out across canvas
    { x: 150, y: 380 },
    { x: 250, y: 250 },
    { x: 550, y: 150 },
    { x: 600, y: 300 },
    { x: 500, y: 420 }
  ]);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined' || !svgRef.current) return;
    
    // Animation for team member avatars
    const teamMembers = svgRef.current.querySelectorAll('.team-member');
    const floatingAnimations = [
      'floatCircle', 
      'floatFigureEight',
      'floatDiagonal',
      'floatFigureEight',
      'floatCircle',
      'floatDiagonal'
    ];
    
    // Move team members to their initial random positions
    teamMembers.forEach((element, index) => {
      if (index < teamPositions.length) {
        const { x, y } = teamPositions[index];
        element.setAttribute('transform', `translate(${x}, ${y})`);
      }
    });
    
    // Create larger floating patterns
    teamMembers.forEach((element, index) => {
      // Apply different floating animations with larger movement ranges
      const animType = floatingAnimations[index % floatingAnimations.length];
      const animDuration = 10 + (index % 4) * 3; // 10-19 seconds duration
      const animDelay = index * 1.2; // Staggered delay
      
      // Set custom animation for free-floating effect
      // Use custom inline style with transform property to create larger movement patterns
      const translateX = 30 + (index % 3) * 15; // 30-60px x movement
      const translateY = 25 + (index % 4) * 10; // 25-55px y movement
      const rotate = index % 2 === 0 ? 3 : -3; // slight rotation
      
      // Create custom keyframe animation programmatically
      const styleTag = document.createElement('style');
      styleTag.setAttribute('data-custom-animation', `floatCustom${index}`);
      styleTag.textContent = `
        @keyframes floatCustom${index} {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${translateX}px, ${-translateY}px) rotate(${rotate}deg); }
          50% { transform: translate(${translateX/2}px, ${-translateY*1.2}px) rotate(${rotate*1.5}deg); }
          75% { transform: translate(${-translateX*0.8}px, ${-translateY*0.5}px) rotate(${-rotate}deg); }
          100% { transform: translate(0, 0); }
        }
      `;
      
      // Check if a style with this animation already exists and remove it
      const existingStyle = document.querySelector(`style[data-custom-animation="floatCustom${index}"]`);
      if (existingStyle) {
        existingStyle.remove();
      }
      
      document.head.appendChild(styleTag);
      
      // Apply the custom animation
      element.style.animation = `floatCustom${index} ${animDuration}s ease-in-out ${animDelay}s infinite`;
      
      // Keep the scale animation separately from the float animation
      const innerCircles = element.querySelectorAll('circle');
      if (innerCircles.length >= 2) {
        innerCircles[1].style.animation = `teamPulse 3s ease-in-out ${index * 0.4}s infinite`;
      }
      
      // Add hover effect for team member avatars
      element.addEventListener('mouseenter', () => {
        // Pause the floating animation while hovered
        const currentTransform = window.getComputedStyle(element).transform;
        element.style.animation = 'none';
        element.style.transform = currentTransform;
        
        element.querySelector('circle:nth-child(2)').setAttribute('r', '32');
        const nameText = element.querySelector('text');
        if (nameText) {
          nameText.setAttribute('font-size', '10');
          nameText.setAttribute('font-weight', 'bold');
        }
      });
      
      element.addEventListener('mouseleave', () => {
        // Resume the floating animation
        element.style.animation = `floatCustom${index} ${animDuration}s ease-in-out ${animDelay}s infinite`;
        
        const isLeader = element.querySelector('text').textContent.includes('LEAD');
        element.querySelector('circle:nth-child(2)').setAttribute('r', isLeader ? '30' : '25');
        const nameText = element.querySelector('text');
        if (nameText) {
          nameText.setAttribute('font-size', isLeader ? '9' : '8');
          nameText.setAttribute('font-weight', 'bold');
        }
      });
    });

    // Animation for connection lines between team members
    const connections = svgRef.current.querySelectorAll('.connection');
    connections.forEach((element, index) => {
      element.style.animation = `flowDash 5s linear ${index * 0.4}s infinite`;
    });

    // Animation for project nodes
    const projectNodes = svgRef.current.querySelectorAll('.project-node');
    projectNodes.forEach((element, index) => {
      element.style.animation = `projectGlow 3s ease-in-out ${index * 0.5}s infinite`;
      
      // Add interactive highlighting for project nodes
      element.addEventListener('mouseenter', () => {
        setActiveProject(index);
        element.setAttribute('opacity', '1');
        element.querySelector('circle').setAttribute('r', '28');
      });
      
      element.addEventListener('mouseleave', () => {
        element.querySelector('circle').setAttribute('r', '25');
      });
    });
    
    // Animation for idea elements flowing from team members to projects
    const ideas = svgRef.current.querySelectorAll('.idea-particle');
    ideas.forEach((element, index) => {
      element.style.animation = `flowToProject 3s linear ${index * 0.2}s infinite`;
    });
    
    // Rotate through projects to highlight
    const projectInterval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length);
    }, 4000);
    
    // Update connection lines to follow the team members as they float
    const updateConnectionLines = () => {
      if (!svgRef.current) return;
      
      const teamMembers = svgRef.current.querySelectorAll('.team-member');
      const projectNodes = svgRef.current.querySelectorAll('.project-node circle');
      const teamProjectConnections = svgRef.current.querySelectorAll('.team-project-connection');
      const teamConnections = svgRef.current.querySelectorAll('.team-connection');
      
      // Get team member positions
      const positions = [];
      teamMembers.forEach(member => {
        const transform = member.getAttribute('transform');
        if (transform) {
          const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
          if (match) {
            const x = parseFloat(match[1]);
            const y = parseFloat(match[2]);
            positions.push({x, y});
          }
        }
      });
      
      // Get project positions
      const projectPositions = [];
      projectNodes.forEach(node => {
        const cx = parseFloat(node.getAttribute('cx'));
        const cy = parseFloat(node.getAttribute('cy'));
        projectPositions.push({x: cx, y: cy});
      });
      
      // Define connection pairs for all connections between team members and projects
      const connectionPairs = [
        [0, 0], // Team member 1 to Web App (project 1)
        [1, 2], // Team member 2 to AI Model (project 3)
        [2, 3], // Team member 3 to Data (project 4)
        [3, 0], // Team member 4 to Web App (project 1)
        [4, 1], // Team member 5 to Mobile (project 2)
        [5, 3]  // Team member 6 to Data (project 4)
      ];
      
      // Update team-to-project connections
      if (positions.length >= 6 && projectPositions.length >= 4) {
        connectionPairs.forEach((pair, index) => {
          if (index < teamProjectConnections.length) {
            const teamPos = positions[pair[0]];
            const projectPos = projectPositions[pair[1]];
            
            if (teamPos && projectPos) {
              const path = `M${teamPos.x} ${teamPos.y} L${projectPos.x} ${projectPos.y}`;
              teamProjectConnections[index].setAttribute('d', path);
            }
          }
        });
      }
      
      // Update team-to-team connections with curved paths
      if (positions.length >= 6 && teamConnections.length >= 3) {
        // Top row connection
        const topPath = `M${positions[0].x} ${positions[0].y} C${positions[0].x + 100} ${positions[0].y - 50}, ${positions[3].x - 100} ${positions[3].y - 50}, ${positions[3].x} ${positions[3].y}`;
        teamConnections[0].setAttribute('d', topPath);
        
        // Middle row connection
        const midPath = `M${positions[1].x} ${positions[1].y} C${positions[1].x + 100} ${positions[1].y - 30}, ${positions[4].x - 100} ${positions[4].y - 30}, ${positions[4].x} ${positions[4].y}`;
        teamConnections[1].setAttribute('d', midPath);
        
        // Bottom row connection
        const bottomPath = `M${positions[2].x} ${positions[2].y} C${positions[2].x + 100} ${positions[2].y - 20}, ${positions[5].x - 100} ${positions[5].y - 20}, ${positions[5].x} ${positions[5].y}`;
        teamConnections[2].setAttribute('d', bottomPath);
      }
      
      // Update idea particles
      const ideaParticles = svgRef.current.querySelectorAll('.idea-particle');
      ideaParticles.forEach((particle, index) => {
        const pairIndex = Math.floor(index / 2);
        if (pairIndex < connectionPairs.length) {
          const pair = connectionPairs[pairIndex];
          const teamPos = positions[pair[0]];
          const projectPos = projectPositions[pair[1]];
          
          if (teamPos && projectPos && particle.style.offsetPath) {
            particle.style.offsetPath = `path('M${teamPos.x} ${teamPos.y} L${projectPos.x} ${projectPos.y}')`;
          }
        }
      });
    };
    
    // Run the update initially and set interval to keep updating
    updateConnectionLines();
    const connectionUpdateInterval = setInterval(updateConnectionLines, 100);

    // Handle mouse move for interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      // Calculate mouse position relative to SVG
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Move team members slightly towards mouse cursor for interactive feel
      const teamMembers = svgRef.current.querySelectorAll('.team-member');
      teamMembers.forEach(member => {
        // Get the translate values from the transform attribute
        const transform = member.getAttribute('transform');
        if (transform) {
          const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
          if (match) {
            const cx = parseFloat(match[1]);
            const cy = parseFloat(match[2]);
            
            // Subtle movement based on mouse position
            const dx = (x - cx) / 150; 
            const dy = (y - cy) / 150;
            
            member.setAttribute('transform', `translate(${cx + dx}, ${cy + dy})`);
          }
        }
      });
      
      // Update connection lines after moving team members
      updateConnectionLines();
    };
    
    // Add and remove event listeners
    const svg = svgRef.current;
    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mousemove', handleMouseMove);
      clearInterval(projectInterval);
      clearInterval(connectionUpdateInterval);
      
      // Clean up event listeners from team members
      teamMembers.forEach(element => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
      
      // Clean up event listeners from project nodes
      projectNodes.forEach(element => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
      
      // Clean up added style tags
      const customStyles = document.querySelectorAll('style[data-custom-animation]');
      customStyles.forEach(style => style.remove());
    };
  }, [activeProject, projects.length]);

  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style jsx>{`
        @keyframes teamPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes projectGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.5)); }
          50% { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); }
        }
        @keyframes flowDash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes flowToProject {
          0% { 
            opacity: 0;
            offset-distance: 0%;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% { 
            opacity: 0;
            offset-distance: 100%;
          }
        }
        @keyframes highlight {
          0% { fill-opacity: 0.6; }
          50% { fill-opacity: 1; }
          100% { fill-opacity: 0.6; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes avatarPop {
          0% { transform: scale(1); }
          40% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes shadowPulse {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.7)); }
          50% { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        }
        @keyframes floatVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }
        @keyframes floatCircle {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(0, -30px); }
          75% { transform: translate(-20px, -20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatDiagonal {
          0% { transform: translate(0, 0); }
          25% { transform: translate(25px, -25px); }
          50% { transform: translate(40px, 0); }
          75% { transform: translate(25px, 25px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatFigureEight {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(3deg); }
          50% { transform: translate(0, 0) rotate(0deg); }
          75% { transform: translate(-30px, -20px) rotate(-3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes floatRandom {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-35px, -15px) rotate(-2deg); }
          40% { transform: translate(25px, -35px) rotate(3deg); }
          60% { transform: translate(35px, 10px) rotate(1deg); }
          80% { transform: translate(-15px, 25px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        /* Add styles for SVG elements */
        svg .team-member {
          cursor: pointer;
          transition: transform 0.3s ease;
          transform-origin: center center;
          will-change: transform;
        }
        
        svg .team-member:hover {
          transform: scale(1.1);
          animation: avatarPop 0.5s ease-out;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
          z-index: 10;
        }
        
        svg .team-member circle {
          transition: all 0.3s ease;
        }
        
        svg .team-member text {
          transition: font-size 0.3s ease, fill 0.3s ease;
          pointer-events: none; /* Prevents text from interfering with hover */
        }
        
        svg .project-node {
          cursor: pointer;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.6));
        }
        
        svg .project-node:hover {
          filter: drop-shadow(0 0 12px rgba(59, 130, 246, 1));
          z-index: 5;
        }
        
        svg .connection {
          transition: stroke-width 0.3s ease, stroke-opacity 0.3s ease;
          pointer-events: none; /* Makes lines non-interactive so they don't block other elements */
        }
        
        svg .idea-particle {
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
          pointer-events: none;
        }
      `}</style>

      <svg 
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Elements */}
        <circle cx="700" cy="100" r="80" fill="#EBF5FF" fillOpacity="0.6" />
        <circle cx="100" cy="400" r="70" fill="#F0F9FF" fillOpacity="0.6" />
        
        {/* Connection lines layer (beneath other elements) */}
        <g className="connection-layer">
          {/* Project to Project Connections */}
          <path
            className="connection"
            d="M400 150 L300 300"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            className="connection"
            d="M300 300 L400 350"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            className="connection"
            d="M400 350 L500 300"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            className="connection"
            d="M500 300 L400 150"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="8 4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          
          {/* Team Member to Project Connections */}
          <path
            className="connection team-project-connection"
            d="M180 200 L400 150"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            className="connection team-project-connection"
            d="M150 320 L300 300"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            className="connection team-project-connection"
            d="M200 400 L400 350"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            className="connection team-project-connection"
            d="M600 180 L400 150"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            className="connection team-project-connection"
            d="M620 300 L500 300"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            className="connection team-project-connection"
            d="M580 400 L400 350"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />

          {/* Team Member Connections with curved paths */}
          <path
            className="connection team-connection"
            d="M180 200 C300 100, 450 100, 600 180"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            className="connection team-connection"
            d="M150 320 C250 260, 500 260, 620 300"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            className="connection team-connection"
            d="M200 400 C300 370, 450 370, 580 400"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
        </g>
        
        {/* Central Project Hub */}
        <circle cx="400" cy="250" r="60" fill="#DBEAFE" fillOpacity="0.5" />
        
        {/* Project Nodes */}
        <g className="project-node" opacity={activeProject === 0 ? "1" : "0.7"}>
          <circle cx="400" cy="150" r="25" fill="#3B82F6" fillOpacity="0.8" />
          <text x="400" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">WEB APP</text>
        </g>
        
        <g className="project-node" opacity={activeProject === 1 ? "1" : "0.7"}>
          <circle cx="500" cy="300" r="25" fill="#3B82F6" fillOpacity="0.8" />
          <text x="500" y="305" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">MOBILE</text>
        </g>
        
        <g className="project-node" opacity={activeProject === 2 ? "1" : "0.7"}>
          <circle cx="300" cy="300" r="25" fill="#3B82F6" fillOpacity="0.8" />
          <text x="300" y="305" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">AI MODEL</text>
        </g>
        
        <g className="project-node" opacity={activeProject === 3 ? "1" : "0.7"}>
          <circle cx="400" cy="350" r="25" fill="#3B82F6" fillOpacity="0.8" />
          <text x="400" y="355" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">DATA</text>
        </g>
        
        {/* Team Members - initial transform will be overridden by JavaScript */}
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="35" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="30" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip1">
            <circle cx="0" cy="0" r="28" />
          </clipPath>
          <g clipPath="url(#avatarClip1)">
            <rect x="-28" y="-28" width="56" height="56" fill="#2563EB" />
            <circle cx="0" cy="-10" r="12" fill="#DBEAFE" />
            <path d="M-15 5 Q0 35, 15 5" stroke="#DBEAFE" strokeWidth="12" fill="none" />
          </g>
          <text x="0" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="9" 
              strokeWidth="0.5" stroke="#3B82F6">Bala S. - LEAD</text>
        </g>
        
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="30" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="25" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip2">
            <circle cx="0" cy="0" r="23" />
          </clipPath>
          <g clipPath="url(#avatarClip2)">
            <rect x="-23" y="-23" width="46" height="46" fill="#3B82F6" />
            <circle cx="0" cy="-8" r="10" fill="#DBEAFE" />
            <path d="M-12 4 Q0 30, 12 4" stroke="#DBEAFE" strokeWidth="10" fill="none" />
          </g>
          <text x="0" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8" 
              strokeWidth="0.5" stroke="#3B82F6">Sandeep K. - DEV</text>
        </g>
        
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="30" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="25" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip3">
            <circle cx="0" cy="0" r="23" />
          </clipPath>
          <g clipPath="url(#avatarClip3)">
            <rect x="-23" y="-23" width="46" height="46" fill="#4F46E5" />
            <circle cx="0" cy="-8" r="10" fill="#DBEAFE" />
            <path d="M-12 4 Q0 30, 12 4" stroke="#DBEAFE" strokeWidth="10" fill="none" />
          </g>
          <text x="0" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8" 
              strokeWidth="0.5" stroke="#3B82F6">Arun K. - AI</text>
        </g>
        
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="30" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="25" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip4">
            <circle cx="0" cy="0" r="23" />
          </clipPath>
          <g clipPath="url(#avatarClip4)">
            <rect x="-23" y="-23" width="46" height="46" fill="#0EA5E9" />
            <circle cx="0" cy="-8" r="10" fill="#DBEAFE" />
            <path d="M-12 4 Q0 30, 12 4" stroke="#DBEAFE" strokeWidth="10" fill="none" />
          </g>
          <text x="0" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8" 
              strokeWidth="0.5" stroke="#3B82F6">Rahul J. - UX</text>
        </g>
        
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="30" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="25" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip5">
            <circle cx="0" cy="0" r="23" />
          </clipPath>
          <g clipPath="url(#avatarClip5)">
            <rect x="-23" y="-23" width="46" height="46" fill="#0284C7" />
            <circle cx="0" cy="-8" r="10" fill="#DBEAFE" />
            <path d="M-12 4 Q0 30, 12 4" stroke="#DBEAFE" strokeWidth="10" fill="none" />
          </g>
          <text x="0" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8" 
              strokeWidth="0.5" stroke="#3B82F6">Vijay P. - DATA</text>
        </g>
        
        <g className="team-member" transform="translate(0, 0)">
          <circle cx="0" cy="0" r="30" fill="#DBEAFE" />
          <circle cx="0" cy="0" r="25" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          <clipPath id="avatarClip6">
            <circle cx="0" cy="0" r="23" />
          </clipPath>
          <g clipPath="url(#avatarClip6)">
            <rect x="-23" y="-23" width="46" height="46" fill="#1D4ED8" />
            <circle cx="0" cy="-8" r="10" fill="#DBEAFE" />
            <path d="M-12 4 Q0 30, 12 4" stroke="#DBEAFE" strokeWidth="10" fill="none" />
          </g>
          <text x="0" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="8" 
              strokeWidth="0.5" stroke="#3B82F6">Manish K. - QA</text>
        </g>
        
        {/* Connections from Team Members to Projects */}
        <path
          className="connection"
          d="M180 200 L400 150"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M150 320 L300 300"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M200 400 L400 350"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M600 180 L400 150"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M620 300 L500 300"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M580 400 L400 350"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 4"
          strokeLinecap="round"
        />

        {/* Team to Team connections */}
        <path
          className="connection"
          d="M180 200 L600 180"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="5 3"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M150 320 L620 300"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="5 3"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
        <path
          className="connection"
          d="M200 400 L580 400"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="5 3"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />

        {/* Idea particles flowing along paths */}
        {/* Web App Project */}
        <circle 
          className="idea-particle"
          r="5" 
          fill="#60A5FA"
          style={{
            offsetPath: "path('M180 200 L400 150')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#DBEAFE"
          style={{
            offsetPath: "path('M180 200 L400 150')",
            offsetRotate: "0deg",
            animationDelay: "1.5s"
          }}
        />
        <circle 
          className="idea-particle"
          r="5" 
          fill="#60A5FA"
          style={{
            offsetPath: "path('M600 180 L400 150')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#DBEAFE"
          style={{
            offsetPath: "path('M600 180 L400 150')",
            offsetRotate: "0deg",
            animationDelay: "1.2s"
          }}
        />
        
        {/* AI Model Project */}
        <circle 
          className="idea-particle"
          r="5" 
          fill="#818CF8"
          style={{
            offsetPath: "path('M150 320 L300 300')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#EEF2FF"
          style={{
            offsetPath: "path('M150 320 L300 300')",
            offsetRotate: "0deg",
            animationDelay: "1.7s"
          }}
        />
        
        {/* Mobile App Project */}
        <circle 
          className="idea-particle"
          r="5" 
          fill="#34D399"
          style={{
            offsetPath: "path('M620 300 L500 300')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#D1FAE5"
          style={{
            offsetPath: "path('M620 300 L500 300')",
            offsetRotate: "0deg",
            animationDelay: "0.8s"
          }}
        />
        
        {/* Data Project */}
        <circle 
          className="idea-particle"
          r="5" 
          fill="#F472B6"
          style={{
            offsetPath: "path('M200 400 L400 350')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#FCE7F3"
          style={{
            offsetPath: "path('M200 400 L400 350')",
            offsetRotate: "0deg",
            animationDelay: "1.3s"
          }}
        />
        <circle 
          className="idea-particle"
          r="5" 
          fill="#F472B6"
          style={{
            offsetPath: "path('M580 400 L400 350')",
            offsetRotate: "0deg"
          }}
        />
        <circle 
          className="idea-particle"
          r="4" 
          fill="#FCE7F3"
          style={{
            offsetPath: "path('M580 400 L400 350')",
            offsetRotate: "0deg",
            animationDelay: "0.9s"
          }}
        />
        
        {/* Team collaboration particles */}
        <circle 
          className="idea-particle"
          r="3" 
          fill="#FCD34D"
          style={{
            offsetPath: "path('M180 200 C300 100, 450 100, 600 180')",
            offsetRotate: "auto",
            animationDuration: "6s"
          }}
        />
        <circle 
          className="idea-particle"
          r="3" 
          fill="#A5B4FC"
          style={{
            offsetPath: "path('M150 320 C250 260, 500 260, 620 300')",
            offsetRotate: "auto",
            animationDuration: "7s"
          }}
        />
        <circle 
          className="idea-particle"
          r="3" 
          fill="#BFDBFE"
          style={{
            offsetPath: "path('M200 400 C300 370, 450 370, 580 400')",
            offsetRotate: "auto",
            animationDuration: "5s"
          }}
        />

        {/* Project Labels */}
        <text 
          x="400" 
          y="250" 
          textAnchor="middle" 
          fill="#1E3A8A" 
          fontWeight="bold" 
          fontSize="18"
        >
          {projects[activeProject]}
        </text>
        <text 
          x="400" 
          y="275" 
          textAnchor="middle" 
          fill="#1E3A8A" 
          fontSize="12"
        >
          Team Collaboration
        </text>
      </svg>
    </div>
  );
};

export default AnimatedTeamHero;