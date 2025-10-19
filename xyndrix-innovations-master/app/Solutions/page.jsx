import Image from 'next/image';
import Link from 'next/link';
import AnimatedSolutionsHero from '../Components/ui/animated-solutions-hero';

export default function SolutionsPage() {
  return (
    <div className="font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
                  Our Solutions
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Empowering Businesses with <span className="text-blue-600">Smart Technology</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Xyndrix Technologies, we provide tailored digital solutions that address today's toughest business challenges. Whether you need a powerful online presence, secure systems, or smarter operations, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="#solutions" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 transition-all duration-300">
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                  <div className="w-[650px] h-[550px] mx-auto">
                    <AnimatedSolutionsHero />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-30 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology Solutions for Modern Businesses</h2>
            <p className="text-gray-600">Our comprehensive suite of digital solutions helps businesses solve complex challenges and achieve remarkable growth.</p>
          </div>
          
          {/* SaaS Solutions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  SaaS Solutions
                </h2>
                
                <p className="text-white/90 mb-8">
                  Transform your business operations with our powerful, scalable Software-as-a-Service platforms designed to streamline processes and boost efficiency.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Cloud-Based</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Subscription Model</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Enterprise Solutions</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">API Integration</span>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Modern Software Delivery for Today's Businesses</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">The Challenge</h4>
                      <p className="text-gray-600">Businesses struggle with costly software implementation, maintenance overhead, and scaling difficulties as they grow, hindering operational efficiency and innovation.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">We deliver flexible SaaS platforms with subscription-based pricing that eliminate upfront costs, provide automatic updates, and scale seamlessly with your business needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Benefits</h4>
                      <p className="text-gray-600">Lower total cost of ownership, rapid deployment, automatic updates and maintenance, enhanced security, and the flexibility to access your business tools from anywhere.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Web Development */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Web Development
                </h2>
                
                <p className="text-white/90 mb-8">
                  Create a powerful online presence with custom websites that not only look stunning but also deliver exceptional results for your business.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Responsive Design</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">E-commerce</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">CMS Integration</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">SEO Optimized</span>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">How We Help You Succeed Online</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">The Challenge</h4>
                      <p className="text-gray-600">Businesses struggle to build websites that attract, engage, and convert customers in an increasingly competitive digital landscape.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">We create fast, responsive, and visually stunning websites designed to enhance user experience and drive measurable business growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Benefits</h4>
                      <p className="text-gray-600">SEO-optimized, mobile-friendly, secure, and scalable websites that adapt as your business grows and evolves.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* App Development Solution */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="order-2 lg:order-1 lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect with Users on Every Device</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">The Challenge</h4>
                      <p className="text-gray-600">In today's mobile-first world, customers demand intuitive apps that work flawlessly across multiple platforms and devices.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">We develop high-performance iOS, Android, and cross-platform apps that boost customer engagement, streamline operations, and build brand loyalty.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Benefits</h4>
                      <p className="text-gray-600">Intuitive UX/UI design, smooth performance, offline functionality, seamless integration with existing systems, and long-term scalability.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  App Development
                </h2>
                
                <p className="text-white/90 mb-8">
                  Engage your audience on mobile with cutting-edge applications that provide seamless experiences across all devices and platforms.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">iOS Apps</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Android Apps</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Cross-Platform</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">React Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Solutions */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  AI Solutions
                </h2>
                
                <p className="text-white/90 mb-8">
                  Transform your business with intelligent systems that automate repetitive tasks, uncover insights from data, and drive smarter decision-making.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Machine Learning</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Predictive Analytics</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Computer Vision</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">NLP</span>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Intelligent Systems for Smarter Business</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">The Challenge</h4>
                      <p className="text-gray-600">Companies waste valuable resources on repetitive tasks, struggle to extract meaningful insights from data, and make decisions based on incomplete information.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">Our AI-driven systems automate workflows, analyze complex data patterns, provide predictive insights, and deliver intelligent recommendations for optimized operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Benefits</h4>
                      <p className="text-gray-600">Dramatically improved operational efficiency, significant cost reduction, data-backed decision-making, and competitive advantage through innovation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cybersecurity Solutions */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="order-2 lg:order-1 lg:col-span-3 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Comprehensive Protection for the Digital Age</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">The Challenge</h4>
                      <p className="text-gray-600">In an increasingly connected world, sophisticated cyber threats put sensitive data, intellectual property, and business continuity at serious risk every day.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Our Solution</h4>
                      <p className="text-gray-600">We implement multi-layered cybersecurity strategies including threat detection, vulnerability management, data encryption, and staff training to create a comprehensive security posture.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Key Benefits</h4>
                      <p className="text-gray-600">Enhanced security against evolving threats, minimized risk of data breaches, compliance with industry regulations, and the peace of mind that comes with robust protection.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all duration-300">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 lg:col-span-2 bg-gradient-to-br from-green-600 to-green-700 text-white p-8 lg:p-12">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Cybersecurity Solutions
                </h2>
                
                <p className="text-white/90 mb-8">
                  Protect your digital assets with enterprise-grade security solutions designed to defend against today's sophisticated cyber threats.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Threat Detection</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Data Encryption</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Network Security</span>
                  <span className="bg-white/20 text-white text-sm py-1 px-3 rounded">Security Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Solutions Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
              Additional Solutions
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">More Ways We Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our full range of technology solutions designed to address your specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Our data-driven digital marketing strategies help businesses increase online visibility, attract qualified leads, and boost conversion rates.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">SEO</span>
                  <span className="inline-block text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">PPC</span>
                  <span className="inline-block text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">Social Media</span>
                  <span className="inline-block text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">Content Marketing</span>
                </div>
              </div>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* ERP Solutions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ERP Solutions</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">We design custom Enterprise Resource Planning systems that centralize operations, streamline workflows, and improve productivity across your organization.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block text-xs font-medium bg-green-50 text-green-600 px-2 py-1 rounded">Process Automation</span>
                  <span className="inline-block text-xs font-medium bg-green-50 text-green-600 px-2 py-1 rounded">Resource Management</span>
                  <span className="inline-block text-xs font-medium bg-green-50 text-green-600 px-2 py-1 rounded">Reporting</span>
                </div>
              </div>
              <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Domain & Hosting */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Domain & Hosting</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">We provide secure, fast, and reliable domain registration and hosting services with 24/7 support and guaranteed uptime.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block text-xs font-medium bg-purple-50 text-purple-600 px-2 py-1 rounded">Managed Hosting</span>
                  <span className="inline-block text-xs font-medium bg-purple-50 text-purple-600 px-2 py-1 rounded">Domain Management</span>
                  <span className="inline-block text-xs font-medium bg-purple-50 text-purple-600 px-2 py-1 rounded">SSL Certificates</span>
                </div>
              </div>
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-orange-100 text-orange-500 font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Xyndrix Solutions?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Tailored for your business needs</h3>
              <p className="text-gray-600 text-sm">We create custom solutions that address your specific business challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Scalable for future growth</h3>
              <p className="text-gray-600 text-sm">Our solutions grow with your business, adapting to new requirements and challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Secure and reliable technologies</h3>
              <p className="text-gray-600 text-sm">We prioritize security and reliability in every solution we build.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">End-to-end implementation & support</h3>
              <p className="text-gray-600 text-sm">We're with you at every step, from planning to implementation and ongoing support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
