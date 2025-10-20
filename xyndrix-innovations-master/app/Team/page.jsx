"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TeamPage() {
  const [expandedBio, setExpandedBio] = useState(null);
  const pageRef = useRef(null);
  const teamRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial page animation
    const ctx = gsap.context(() => {
      // Fade in header elements
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
      
      // Team member cards animation
      gsap.from(".team-member", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
        ease: "power2.out"
      });
    }, pageRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);

  const toggleBio = (id) => {
    setExpandedBio(expandedBio === id ? null : id);
  };
  
  const teamMembers = [
    {
      id: 1,
      name: "Bala Surya",
      role: "Co-Founder, CMO & CFO",
      image: "/team/bala-surya.jpg", // You'll need to add actual images
      initials: "BS",
      bio: "Developer with expertise in delivering innovative software solutions and leading high-performance teams."
    },
    {
      id: 2,
      name: "Sarweshwar D",
      role: "Co-Founder & CMO",
      image: "/team/sarweshwar.jpg",
      initials: "SD",
      bio: "Technology expert with a background in AI and cloud architecture."
    },
    {
      id: 3,
      name: "Gokul M",
      role: "Co-Founder & Head of Innovation",
      image: "/team/gokul.jpg",
      initials: "GM",
      bio: "Product visionary with expertise in emerging technologies."
    },
    {
      id: 4,
      name: "Mukilan T",
      role: "Chief Executive Officer",
      image: "/team/mukilan.jpg",
      initials: "MT",
      bio: "Operations expert ensuring seamless business processes."
    },
    {
      id: 5,
      name: "Natesan K",
      role: "Chief Technology Officer",
      image: "/team/natesan.jpg",
      initials: "NK",
      bio: "Technology visionary with expertise in AI, cloud architecture, and emerging tech solutions."
    },
    {
      id: 6,
      name: "Sriharan",
      role: "Cyber Head",
      image: "/team/sriharan.jpg",
      initials: "SH",
      bio: "Cybersecurity expert ensuring robust protection against threats."
    },
    {
      id: 7,
      name: "Pratheesh S",
      role: "HR",
      image: "/team/pratheesh.jpg",
      initials: "PS",
      bio: "HR leader focused on talent and company culture."
    },
    {
      id: 8,
      name: "Nithiskumar",
      role: "Innovation & Growth Officer",
      image: "/team/nithiskumar.jpg",
      initials: "NK",
      bio: "Legal expert ensuring compliance and risk management."
    },
    {
      id: 9,
      name: "Mithrasree",
      role: "Content Creator Head",
      image: "/team/mithrasree.jpg", 
      initials: "MS",
      bio: "Creative strategist driving content innovation and engagement."
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-white" ref={pageRef}>
      {/* Minimal Hero Section */}
      <div className="py-18 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={headerRef} className="text-center mb-12">
            <h4 className="text-blue-600 text-2xl font-medium mb-4 tracking-wide">OUR TEAM</h4>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet the people behind Xyndrix</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience to drive innovation
              and excellence across all aspects of our business.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl" ref={teamRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member flex flex-col items-center">
                <div className="relative mb-6">
                  {member.image ? (
                    <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-gray-100">
                      <Image 
                        src={member.image}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover grayscale"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-gray-800 rounded-full" style={{display: 'none'}}>
                        {member.initials}
                      </div>
                    </div>
                  ) : (
                    <div className="w-64 h-64 flex items-center justify-center text-4xl font-bold text-white bg-gray-800 rounded-full">
                      {member.initials}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                
                <button 
                  onClick={() => toggleBio(member.id)}
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bio
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${expandedBio === member.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedBio === member.id && (
                  <div className="mt-4 text-gray-600 max-w-md text-sm">
                    {member.bio}
                    
                    {/* Additional bio content - can be expanded */}
                    <p className="mt-4">
                      With years of industry experience, {member.name.split(' ')[0]} brings unique perspective 
                      and expertise to our team. Outside of work, they enjoy hiking, reading, and spending time with family.
                    </p>
                    
                    <div className="mt-4 flex space-x-3">
                      <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple "Join Our Team" CTA */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to join our growing team. 
            Check out our open positions or get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/careers" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
