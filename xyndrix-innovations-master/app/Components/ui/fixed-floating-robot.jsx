"use client";

import { useState, useEffect, useRef } from 'react';

const FixedFloatingRobot = () => {
  const robotRef = useRef(null);
  const [showChat, setShowChat] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  
  const toggleChat = () => {
    setShowChat(!showChat);
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  useEffect(() => {
    // Animation setup
    if (!robotRef.current) return;

    // Add random blinking
    const eyes = robotRef.current.querySelectorAll('.robot-eye');
    eyes.forEach(eye => {
      const blinkDelay = 3000 + Math.random() * 4000; // Random blink between 3-7 seconds
      eye.style.animation = `blink ${blinkDelay}ms infinite`;
    });
    
    // Initial wave animation after 2 seconds
    setTimeout(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 2000);
  }, []);

  return (
    <div className="fixed left-4 bottom-16 md:left-6 md:bottom-6 z-50 cursor-pointer hidden md:block">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes blink {
          0%, 95%, 100% { transform: scaleY(1); }
          97.5% { transform: scaleY(0.1); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(24px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
        }
        
        @keyframes wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes bubbleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .robot-container {
          animation: float 4s ease-in-out infinite;
        }
        
        .robot-eye {
          transform-origin: center;
        }
        
        .robot-wave {
          animation: wave 1s ease-in-out;
          transform-origin: bottom center;
        }
        
        .chat-bubble {
          animation: bubbleIn 0.3s ease-out;
        }
        
        .orbiting-icon {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          opacity: 0.9;
        }
        
        .icon-1 {
          animation: orbit 8s linear infinite;
          animation-delay: 0s;
        }
        
        .icon-2 {
          animation: orbit 8s linear infinite;
          animation-delay: -2s;
        }
        
        .icon-3 {
          animation: orbit 8s linear infinite;
          animation-delay: -4s;
        }
        
        .icon-4 {
          animation: orbit 8s linear infinite;
          animation-delay: -6s;
        }
      `}</style>

      {/* Chat Bubble */}
      {showChat && (
        <div className="chat-bubble absolute bottom-24 left-0 bg-white rounded-lg shadow-lg p-4 w-64">
          <div className="absolute w-4 h-4 bg-white transform rotate-45 -bottom-2 left-6"></div>
          <div className="text-gray-800">
            <h4 className="font-bold text-sm mb-2">Xyndrix AI Assistant</h4>
            <p className="text-sm mb-3">Hi there! How can I help you with your technology needs today?</p>
            <div className="flex space-x-2">
              <button 
                onClick={() => window.open('/contact', '_self')} 
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 px-2 rounded transition-colors"
              >
                Contact Us
              </button>
              <button 
                onClick={() => window.open('/We-do', '_self')} 
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 px-2 rounded transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => setShowChat(false)} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs py-1 px-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs py-1 px-2 rounded-full whitespace-nowrap">
          Need help?
        </div>
        <div 
          ref={robotRef} 
          className="robot-container relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24"
          onClick={toggleChat}
        >
          {/* Notification Dot */}
          {!showChat && (
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full z-10 animate-pulse"></span>
          )}
          
          {/* Orbiting Tech Icons */}
          <div className="orbiting-icon icon-1 bg-cyan-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none">
              <path d="M4 5h16v14H4V5z" fill="#0891b2" fillOpacity="0.4"/>
              <path d="M10 9h4v4h-4V9z" fill="#0e7490"/>
            </svg>
          </div>
          <div className="orbiting-icon icon-2 bg-cyan-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none">
              <path d="M21 11a9 9 0 11-18 0 9 9 0 0118 0z" fill="#0891b2" fillOpacity="0.4"/>
              <path d="M12 7v4h4" stroke="#0e7490" strokeWidth="2"/>
            </svg>
          </div>
          <div className="orbiting-icon icon-3 bg-cyan-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="5" width="16" height="16" rx="2" fill="#0891b2" fillOpacity="0.4"/>
              <path d="M8 9h8M8 13h4" stroke="#0e7490" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="orbiting-icon icon-4 bg-cyan-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-cyan-600" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" fill="#0891b2" fillOpacity="0.4"/>
              <path d="M12 8v8M8 12h8" stroke="#0e7490" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Main Robot */}
          <div className="robot-body relative w-full h-full flex items-center justify-center">
            {/* Robot Head/Body */}
            <svg viewBox="0 0 120 120" className={`w-20 h-20 ${isWaving ? 'robot-wave' : ''}`}>
              {/* Gradient definition */}
              <defs>
                <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#e0f7fa" />
                  <stop offset="70%" stopColor="#0e7490" />
                  <stop offset="100%" stopColor="#155e75" />
                </radialGradient>
              </defs>

              {/* Robot Head */}
              <circle cx="60" cy="60" r="50" fill="url(#robotGradient)" />
              
              {/* Robot Eyes */}
              <circle cx="40" cy="50" r="12" fill="#f0fdff" opacity="0.9" />
              <circle cx="80" cy="50" r="12" fill="#f0fdff" opacity="0.9" />
              <circle cx="40" cy="50" r="6" fill="url(#eyeGradient)" className="robot-eye" />
              <circle cx="80" cy="50" r="6" fill="url(#eyeGradient)" className="robot-eye" />
              
              {/* Robot Antenna */}
              <circle cx="60" cy="18" r="5" fill="#0e7490" />
              <line x1="60" y1="23" x2="60" y2="30" stroke="#0e7490" strokeWidth="3" />
              
              {/* Robot Mouth - changes to a smile when chat is open */}
              <path 
                d={showChat ? "M40 75 Q60 85 80 75" : "M40 75 Q60 90 80 75"} 
                stroke="#0e7490" 
                strokeWidth="3" 
                fill="transparent" 
              />
              
              {/* Headphones */}
              <path d="M20 45 C15 45 15 65 20 65" stroke="#0e7490" strokeWidth="3" fill="transparent" />
              <path d="M100 45 C105 45 105 65 100 65" stroke="#0e7490" strokeWidth="3" fill="transparent" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedFloatingRobot;