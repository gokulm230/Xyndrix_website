"use client";

import { useEffect, useRef, useState } from 'react';

const EnhancedTeamAnimation = () => {
  const svgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Team member elements animation
    const teamMembers = svgRef.current.querySelectorAll('.team-member');
    teamMembers.forEach((element, index) => {
      element.style.animation = `teamMemberFloat 6s ease-in-out ${index * 0.7}s infinite`;
    });

    // Skills/attributes animation
    const skillElements = svgRef.current.querySelectorAll('.skill-element');
    skillElements.forEach((element, index) => {
      element.style.animation = `rotate 15s linear ${index * 2}s infinite${index % 2 === 0 ? ' reverse' : ''}`;
    });

    // Connection lines animation
    const connectionLines = svgRef.current.querySelectorAll('.connection-line');
    connectionLines.forEach((element, index) => {
      element.style.animation = `dash 8s linear ${index * 0.3}s infinite`;
    });

    // Pulse animation for team members' highlights
    const highlights = svgRef.current.querySelectorAll('.member-highlight');
    highlights.forEach((element, index) => {
      element.style.animation = `pulse 3s ease-in-out ${index * 0.5}s infinite`;
    });

    // Handle interactive elements
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Interactive skill bubbles - move slightly toward mouse position
      const skills = svgRef.current.querySelectorAll('.skill-bubble');
      skills.forEach(skill => {
        const cx = parseFloat(skill.getAttribute('cx') || 0);
        const cy = parseFloat(skill.getAttribute('cy') || 0);
        
        if (cx && cy) {
          const dx = (x - cx) / 80;
          const dy = (y - cy) / 80;
          
          skill.setAttribute('cx', cx + dx);
          skill.setAttribute('cy', cy + dy);
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
        @keyframes teamMemberFloat {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(8px, -12px); }
          50% { transform: translate(-5px, -20px); }
          75% { transform: translate(-10px, -8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 1000; }
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Center hub - representing team collaboration */}
        <circle cx="300" cy="250" r="60" fill="#EBF5FF" className="skill-element" />
        <circle cx="300" cy="250" r="45" fill="#DBEAFE" />
        <path d="M300 220 L300 280 M270 250 L330 250" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
        
        {/* Team Member 1 - Blue */}
        <g className="team-member" transform="translate(150, 150)">
          <circle cx="0" cy="0" r="38" fill="#DBEAFE" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="600">BS</text>
        </g>
        
        {/* Team Member 2 - Purple */}
        <g className="team-member" transform="translate(450, 150)">
          <circle cx="0" cy="0" r="38" fill="#EDE9FE" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="600">SD</text>
        </g>
        
        {/* Team Member 3 - Green */}
        <g className="team-member" transform="translate(150, 350)">
          <circle cx="0" cy="0" r="38" fill="#DCFCE7" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="600">GM</text>
        </g>
        
        {/* Team Member 4 - Orange */}
        <g className="team-member" transform="translate(450, 350)">
          <circle cx="0" cy="0" r="38" fill="#FFEDD5" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#F97316" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#F97316" fontSize="12" fontWeight="600">MT</text>
        </g>

        {/* Team Member 5 - Yellow */}
        <g className="team-member" transform="translate(300, 100)">
          <circle cx="0" cy="0" r="38" fill="#FEF9C3" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#CA8A04" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#CA8A04" fontSize="12" fontWeight="600">NK</text>
        </g>

        {/* Team Member 6 - Indigo */}
        <g className="team-member" transform="translate(300, 400)">
          <circle cx="0" cy="0" r="38" fill="#E0E7FF" className="member-highlight" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#4F46E5" fontSize="12" fontWeight="600">SH</text>
        </g>
        
        {/* Connection lines between team members and center */}
        <line x1="150" y1="150" x2="300" y2="250" className="connection-line" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 4" />
        <line x1="450" y1="150" x2="300" y2="250" className="connection-line" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="8 4" />
        <line x1="150" y1="350" x2="300" y2="250" className="connection-line" stroke="#10B981" strokeWidth="2" strokeDasharray="8 4" />
        <line x1="450" y1="350" x2="300" y2="250" className="connection-line" stroke="#F97316" strokeWidth="2" strokeDasharray="8 4" />
        <line x1="300" y1="100" x2="300" y2="250" className="connection-line" stroke="#CA8A04" strokeWidth="2" strokeDasharray="8 4" />
        <line x1="300" y1="400" x2="300" y2="250" className="connection-line" stroke="#4F46E5" strokeWidth="2" strokeDasharray="8 4" />
        
        {/* Skill bubbles - interactive elements */}
        <circle cx="220" cy="200" r="15" fill="#93C5FD" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="380" cy="200" r="18" fill="#C4B5FD" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="220" cy="300" r="13" fill="#6EE7B7" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="380" cy="300" r="16" fill="#FDBA74" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="240" cy="150" r="10" fill="#FCD34D" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="240" cy="350" r="12" fill="#A5B4FC" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="360" cy="150" r="14" fill="#A7F3D0" fillOpacity="0.7" className="skill-bubble" />
        <circle cx="360" cy="350" r="11" fill="#FCA5A5" fillOpacity="0.7" className="skill-bubble" />
        
        {/* Skill rings rotating */}
        <circle cx="300" cy="250" r="90" stroke="#E0F2FE" strokeWidth="5" strokeDasharray="15 10" fill="none" className="skill-element" />
        <circle cx="300" cy="250" r="120" stroke="#F0F9FF" strokeWidth="3" strokeDasharray="8 12" fill="none" className="skill-element" />
        
        {/* Success indicators */}
        <path d="M200 80 L210 90 L230 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M400 80 L410 90 L430 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M200 420 L210 430 L230 400" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M400 420 L410 430 L430 400" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default EnhancedTeamAnimation;