"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TeamPage() {
  const [expandedBio, setExpandedBio] = useState(null);
  const pageRef = useRef(null);
  const teamRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Section Entrance Animation
      const tl = gsap.timeline();
      
      // Animate the "OUR TEAM" badge
      tl.from(".team-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      // Animate the main title with stagger effect on words
      .from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      // Animate the subtitle
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // 2. Team Members Grid Animation with ScrollTrigger
      gsap.from(".team-member", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        stagger: {
          amount: 1.2,
          grid: [3, 3],
          from: "start"
        },
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // 3. Individual Team Member Card Hover Animations
      gsap.utils.toArray(".team-member").forEach((card) => {
        const avatar = card.querySelector(".team-avatar");
        const name = card.querySelector(".team-name");
        const role = card.querySelector(".team-role");
        
        // Hover animation for each card
        card.addEventListener("mouseenter", () => {
          gsap.to(avatar, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(name, {
            color: "#2563eb",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(role, {
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(avatar, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(name, {
            color: "#1f2937",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(role, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // 4. Bio Expansion Animation (handled separately in toggleBio function)

      // 5. CTA Section Animation
      gsap.from(".cta-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // 6. Button hover animations
      gsap.utils.toArray(".cta-button").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // 7. Floating animation for avatars
      gsap.utils.toArray(".team-avatar").forEach((avatar, index) => {
        gsap.to(avatar, {
          y: "random(-10, 10)",
          duration: "random(2, 4)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const toggleBio = (id) => {
    const bioElement = document.querySelector(`[data-bio-id="${id}"]`);
    
    if (expandedBio === id) {
      // Closing animation
      gsap.to(bioElement, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setExpandedBio(null);
        }
      });
    } else {
      // Closing previous bio if open
      if (expandedBio !== null) {
        const prevBio = document.querySelector(`[data-bio-id="${expandedBio}"]`);
        if (prevBio) {
          gsap.to(prevBio, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      }
      
      setExpandedBio(id);
      
      // Opening animation
      setTimeout(() => {
        gsap.fromTo(bioElement, 
          {
            height: 0,
            opacity: 0
          },
          {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }
        );
        
        // Animate bio content
        gsap.from(bioElement.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out"
        });
      }, 50);
    }
  };

  const teamMembers = [
    {
      id: 2,
      name: "Sarwesh D",
      role: "Chief Technology Officer",
      image: "/team/sarwesh.jpg",
      initials: "SD",
      bio: "Technical lead with deep expertise in software architecture, emerging technologies, and development methodologies. Sarwesh drives our technical innovation and oversees all engineering initiatives.",
    },
    {
      id: 1,
      name: "Gokul M",
      role: "Chief Executive Officer & Founder",
      image: "/team/gokul.jpg",
      initials: "GM",
      bio: "Visionary leader and overall caretaker of Xyndrix operations. Gokul oversees strategic direction, business development, and ensures the company's mission aligns with market needs and client expectations.",
    },
    {
      id: 5,
      name: "Bala Surya",
      role: "Legal Affairs & Compliance Director",
      image: "/team/bala-surya.jpg",
      initials: "BS",
      bio: "Legal sector lead ensuring regulatory compliance, contract management, and risk mitigation. Bala oversees all legal aspects of business operations, intellectual property protection, and corporate governance.",
    },
    {
      id: 3,
      name: "Mukilan T",
      role: "Head of Research & Development",
      image: "/team/mukilan.jpg",
      initials: "MT",
      bio: "R&D lead spearheading breakthrough innovations and next-generation solutions. Mukilan focuses on emerging technologies, product development, and maintaining our competitive edge through continuous research.",
    },
    {
      id: 4,
      name: "Natesan K",
      role: "Innovation & Hackathon Director",
      image: "/team/natesan.jpg",
      initials: "NK",
      bio: "Hackathon lead fostering innovation culture and rapid prototyping. Natesan organizes innovation challenges, mentors development teams, and drives creative problem-solving initiatives across the organization.",
    },
    {
      id: 6,
      name: "Pratheesh S",
      role: "Client Success & Relationship Manager",
      image: "/team/pratheesh.jpg",
      initials: "PS",
      bio: "Client success lead dedicated to building lasting partnerships and ensuring exceptional client experiences. Pratheesh manages client relationships, oversees project delivery satisfaction, and drives customer retention.",
    },
    {
      id: 7,
      name: "Harini",
      role: "Digital Marketing & Brand Strategy Lead",
      image: "/team/harini.jpg",
      initials: "HN",
      bio: "Digital marketing lead crafting compelling brand narratives and driving online presence. Harini develops marketing strategies, manages digital campaigns, and builds brand awareness across multiple channels.",
    },
    {
      id: 8,
      name: "Haran",
      role: "Information Systems & Data Analytics Lead",
      image: "/team/haran.jpg",
      initials: "HR",
      bio: "Information lead managing data infrastructure, analytics, and information security. Haran ensures data integrity, develops insights from business intelligence, and maintains robust information management systems.",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-white" ref={pageRef}>
      {/* Enhanced Hero Section */}
      <div className="py-18 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={headerRef} className="text-center mb-12">
            <h4 className="team-badge text-blue-600 text-2xl font-medium mb-4 tracking-wide">
              OUR TEAM
            </h4>
            <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet the people behind Xyndrix
            </h1>
            <p className="hero-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience to drive
              innovation and excellence across all aspects of our business.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl" ref={teamRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-member flex flex-col items-center cursor-pointer"
              >
                <div className="relative mb-6">
                  {member.image ? (
                    <div className="team-avatar w-64 h-64 rounded-full overflow-hidden border-2 border-gray-100 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-gray-800 rounded-full"
                        style={{ display: "none" }}
                      >
                        {member.initials}
                      </div>
                    </div>
                  ) : (
                    <div className="team-avatar w-64 h-64 flex items-center justify-center text-4xl font-bold text-white bg-gray-800 rounded-full shadow-lg">
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="team-name text-xl font-medium text-gray-800 mb-1 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="team-role text-gray-500 mb-4 text-center transition-transform duration-300">
                  {member.role}
                </p>

                <button
                  onClick={() => toggleBio(member.id)}
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  Bio
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      expandedBio === member.id ? "rotate-180" : ""
                    } group-hover:scale-110`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedBio === member.id && (
                  <div 
                    data-bio-id={member.id}
                    className="mt-4 text-gray-600 max-w-md text-sm text-center overflow-hidden"
                  >
                    <p className="mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
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

      {/* Enhanced CTA Section */}
      <div className="py-16 bg-gray-50" ref={ctaRef}>
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="cta-content">
            <h2 className="text-5xl font-bold text-black mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people to join our growing team.
              Check out our open positions or get in touch with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/careers"
                className="cta-button px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="cta-button px-8 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}