import Link from 'next/link';
import AnimatedWeDoHero from '../Components/ui/animated-wedo-hero';

export default function WeDoPage() {
  return (
    <div className="font-sans min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-purple-50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
                  🚀 What We Do
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Turning Ideas into<br /><span className="text-blue-600">Digital Success</span> Stories
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                At Xyndrix Innovations, we don't just provide software services — we craft solutions that empower businesses to grow, scale, and stay competitive in a rapidly evolving digital world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                  Our Services
                </Link>
                <Link href="/Contact" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-300 transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <AnimatedWeDoHero />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-purple-100 text-purple-600 font-semibold rounded-full mb-4">
              🚀 Our Approach
            </span>
            <h2 className="text-3xl text-gray-900 font-bold mb-6">Strategic & <span className="text-blue-600">Innovative</span> Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in combining technology, creativity, and strategy to deliver meaningful results. From startups to enterprises, we partner with organizations to design, develop, and deploy solutions that drive impact.
            </p>
          </div>
        </div>
      </div>

      {/* How We Create Value Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              💡 How We Create Value
            </span>
            <h2 className="text-3xl text-gray-900 font-bold mb-6">Our Process <span className="text-blue-600">Blueprint</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Understand Your Needs</h3>
              <p className="text-gray-600">
                We start by listening — understanding your goals, challenges, and vision.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Design Tailored Solutions</h3>
              <p className="text-gray-600">
                Every project is customized with innovative strategies and the latest technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Develop with Excellence</h3>
              <p className="text-gray-600">
                Our team ensures secure, scalable, and high-performance builds.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Deliver & Support</h3>
              <p className="text-gray-600">
                We provide end-to-end implementation with continuous improvement and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Areas We Work In Section */}
      <div className="py-24 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              🌍 Areas We Work In
            </span>
            <h2 className="text-3xl text-gray-900 font-bold mb-6">Our <span className="text-blue-600">Expertise</span> Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of digital solutions to address your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Building modern, responsive websites.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">App Development</h3>
              <p className="text-gray-600 mb-6">
                Creating mobile-first solutions for every platform.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">AI & Automation</h3>
              <p className="text-gray-600 mb-6">
                Leveraging artificial intelligence to simplify complex tasks.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Protecting digital assets from evolving threats.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Driving growth with targeted online campaigns.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-800">ERP & Business Solutions</h3>
              <p className="text-gray-600 mb-6">
                Streamlining operations with enterprise-ready tools.
              </p>
              <Link href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
              🤝 Our Promise
            </span>
            <h2 className="text-3xl text-gray-900 font-bold mb-8">Your <span className="text-blue-600">Dedicated</span> Technology Partner</h2>
            
            <p className="text-xl text-gray-700 mb-10">
              With Xyndrix Innovations, you're not just hiring a technology partner — you're gaining a dedicated ally who is committed to helping your business succeed in the digital era.
            </p>
            
            <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
              <p className="text-xl font-medium text-gray-800 italic">
                "What we do goes beyond coding. We innovate, we solve problems, and we help shape the future of your business."
              </p>
            </div>
            
            <div className="mt-12">
              <Link href="/Contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
