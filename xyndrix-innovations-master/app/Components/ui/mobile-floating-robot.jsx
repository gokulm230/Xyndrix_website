"use client";

import { useState, useRef, useEffect } from 'react';

const MobileFloatingRobot = () => {
  const [showChat, setShowChat] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const robotRef = useRef(null);
  
  const toggleChat = () => {
    setShowChat(!showChat);
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  useEffect(() => {
    // Add random blinking
    if (!robotRef.current) return;
    
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
    <div className="fixed right-4 bottom-16 z-50 cursor-pointer block md:hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes blink {
          0%, 95%, 100% { transform: scaleY(1); }
          97.5% { transform: scaleY(0.1); }
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
      `}</style>

      {/* Chat Bubble */}
      {showChat && (
        <div className="chat-bubble absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 w-64">
          <div className="absolute w-4 h-4 bg-white transform rotate-45 -bottom-2 right-6"></div>
          <div className="text-gray-800">
            <h4 className="font-bold text-sm mb-2">Xyndrix AI Assistant</h4>
            <p className="text-xs mb-3">Hi there! How can I help you with your technology needs today?</p>
            <div className="flex space-x-2">
              <button 
                onClick={() => window.open('/contact', '_self')} 
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 px-2 rounded transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => window.open('/We-do', '_self')} 
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 px-2 rounded transition-colors"
              >
                Services
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
        <div 
          ref={robotRef}
          className="robot-container bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          onClick={toggleChat}
        >
          {/* Notification Dot */}
          {!showChat && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full z-10 animate-pulse"></span>
          )}
          
          {/* Simple Robot Face */}
          <svg viewBox="0 0 40 40" className={`w-8 h-8 ${isWaving ? 'robot-wave' : ''}`}>
            <circle cx="15" cy="15" r="4" fill="#f0fdff" />
            <circle cx="25" cy="15" r="4" fill="#f0fdff" />
            <circle cx="15" cy="15" r="2" fill="#0e7490" className="robot-eye" />
            <circle cx="25" cy="15" r="2" fill="#0e7490" className="robot-eye" />
            <path 
              d={showChat ? "M13 25 Q20 28 27 25" : "M13 25 Q20 30 27 25"} 
              stroke="#f0fdff" 
              strokeWidth="1.5" 
              fill="transparent" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileFloatingRobot;