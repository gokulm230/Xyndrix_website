import Image from 'next/image';
import Link from 'next/link';
import AnimatedAboutHero from '../Components/ui/animated-about-hero';

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
                  About Us
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                From Students to <span className="text-blue-600">Innovators</span>
              </h1>
              
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                Discover the story of how a group of students turned their passion for technology into a thriving company, building solutions that clients trust and love.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                  Get in Touch
                </Link>
                <Link href="/Team" className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium rounded-lg border border-gray-200 transition-all duration-300">
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                  <div className="w-[650px] h-[550px] mx-auto">
                    <AnimatedAboutHero />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">From Classrooms to Code</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-900 mb-6 text-lg leading-relaxed">
                Every startup begins with a dream. For us at Xyndrix, that dream was born not in offices with glass walls or corporate boardrooms, but in classrooms, hostel corridors, and countless late-night conversations. We were just a group of students — armed with laptops, curiosity, and the belief that even the smallest ideas could grow into something meaningful.
              </p>
              
              <p className="text-gray-900 mb-6 text-lg leading-relaxed">
                It started with questions that seemed too big for us at the time: <span className="font-semibold text-gray-900">"What if we build something of our own?"</span> <span className="font-semibold text-gray-900">"Could we really turn our ideas into products people use?"</span>
              </p>
              
              <p className="text-gray-900 mb-6 text-lg leading-relaxed">
                The answers didn't come quickly. What did come was the realization that passion and persistence mattered more than perfect conditions. With limited resources, but unlimited determination, we took a leap of faith. That leap became Xyndrix — not just a company, but the story of how friendship, learning, and courage can come together to create something real.
              </p>
              
              <p className="text-gray-900 mb-6 text-lg leading-relaxed">
                Like any young founders, we faced doubts: <em>Are we too early? Will anyone trust us?</em> But each small win — a prototype that finally worked, a project completed, a line of code after hours of debugging — reminded us that we were moving in the right direction.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
                <p className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Today, that persistence is paying off.</span> We now have clients who trust us, and their happiness is the biggest reward for our hard work. Seeing them satisfied with what we build reminds us why we started in the first place. And this is only the beginning — we have many exciting plans ahead, with innovations that will push boundaries and bring fresh ideas to life.
                </p>
              </div>
              
              <p className="text-gray-900 text-lg leading-relaxed font-medium text-center">
                So stay with us. The journey is just getting started, and the best chapters are yet to come. Get ready for the updates — because at Xyndrix, we're only warming up. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission and Vision Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300 shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-900 leading-relaxed">
                "To empower businesses by delivering innovative SaaS solutions that streamline operations, enhance efficiency, and enable scalable growth."
              </p>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-900">Focused on delivering measurable value to our clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300 shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-900 leading-relaxed mb-6">
                To grow from a student-led startup into a global innovator, while staying true to the passion and curiosity that started it all. We believe technology is more than just code — it's a way to shape the future.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-900">Stay rooted in curiosity and student-era passion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-900">Become a global leader in innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-gray-900 max-w-2xl mx-auto">
              Our journey as students taught us resilience, creativity, and collaboration, and those lessons now guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-900 leading-relaxed">
                We push boundaries, experiment boldly, and create solutions that matter. Every challenge is an opportunity to innovate.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Happiness</h3>
              <p className="text-gray-900 leading-relaxed">
                Success isn't just delivering projects; it's making sure our clients are genuinely satisfied with what we build.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A Culture of Learning</h3>
              <p className="text-gray-900 leading-relaxed">
                Every project is a chance to grow, both as individuals and as a team. We never stop learning and evolving.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity & Trust</h3>
              <p className="text-gray-900 leading-relaxed">
                We value honesty, transparency, and accountability in every relationship. Trust is the foundation of everything we do.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact-Driven</h3>
              <p className="text-gray-900 leading-relaxed">
                Beyond business, we want our work to inspire students, communities, and future innovators to dream bigger.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-10">
                <svg className="absolute left-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 614.7 768.9">
                  <path fill="currentColor" d="M.3 0h614.4v768.9H.3z"></path>
                  <path fill="#FFF" d="M121.5 768.9L614.7 431V0L121.5 337.8z"></path>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
                <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                  Partner with Xyndrix Technologies and experience the difference our innovative solutions can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300">
                    Get in Touch
                  </Link>
                  <Link href="/Solutions" className="inline-flex items-center justify-center px-6 py-3 bg-blue-800/30 hover:bg-blue-800/40 text-white border border-white/30 font-medium rounded-lg transition-all duration-300">
                    View Our Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
