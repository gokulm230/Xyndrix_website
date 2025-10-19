import Image from 'next/image';
import Link from 'next/link';
import EnhancedTeamAnimation from '../Components/ui/enhanced-team-animation';

export default function TeamPage() {
  return (
    <div className="font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="mb-6">
                <span className="inline-block py-1.5 px-3 bg-blue-50 text-blue-600 font-medium text-sm rounded-md mb-4">
                  Our Team
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                The People Behind <span className="text-blue-600">Our Innovation</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-10 max-w-xl">
                Meet the talented individuals who drive our vision forward and make digital transformation possible for businesses around the world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-300 inline-flex items-center">
                  Join Our Team
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="#leadership" className="px-6 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 font-medium rounded-full transition duration-300">
                  Meet Leadership
                </Link>
              </div>
            </div>
            
            <div className="relative lg:h-[500px]">
              <EnhancedTeamAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div id="leadership" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Leadership
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Executive <span className="text-blue-600">Team</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in technology, business, and innovation to drive our success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Executive Team Member Cards */}
            {/* 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-blue-50">
                <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">BS</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Bala Surya</h3>
                <p className="text-blue-600 font-medium mb-4 text-sm">Co-Founder , CMO & CFO</p>
                <p className="text-gray-600 mb-6 text-sm">
                Developer with expertise in delivering innovative software solutions and leading high-performance teams.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-purple-50">
                <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">SD</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Sarweshwar D</h3>
                <p className="text-purple-600 font-medium mb-4 text-sm">Co-Founder & CMO</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Technology expert with a background in AI and cloud architecture.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-purple-100 text-purple-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-purple-100 text-purple-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-green-50">
                <div className="w-full h-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">GM</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Gokul M</h3>
                <p className="text-green-600 font-medium mb-4 text-sm">Co-Founder & Head of Innovation</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Product visionary with expertise in emerging technologies.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-green-100 text-green-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-green-100 text-green-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-orange-50">
                <div className="w-full h-full bg-orange-600 flex items-center justify-center text-white text-2xl font-bold">MK</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Mukilan T</h3>
                <p className="text-orange-600 font-medium mb-4 text-sm">Chief Executive Officer</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Operations expert ensuring seamless business processes.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 text-orange-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 text-orange-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-yellow-50">
                <div className="w-full h-full bg-yellow-600 flex items-center justify-center text-white text-2xl font-bold">NT</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Natesan K</h3>
                <p className="text-yellow-600 font-medium mb-4 text-sm">Chief Technology Officer</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Technology visionary with expertise in AI, cloud architecture, and emerging tech solutions.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-yellow-100 text-yellow-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-yellow-100 text-yellow-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-indigo-50">
                <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">SH</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Sriharan</h3>
                <p className="text-indigo-600 font-medium mb-4 text-sm">Cyber Head</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Cybersecurity expert ensuring robust protection against threats.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-indigo-100 text-indigo-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-indigo-100 text-indigo-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-teal-50">
                <div className="w-full h-full bg-teal-600 flex items-center justify-center text-white text-2xl font-bold">PS</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Pratheesh S</h3>
                <p className="text-teal-600 font-medium mb-4 text-sm">HR</p>
                <p className="text-gray-600 mb-6 text-sm">
                  HR leader focused on talent and company culture.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-teal-100 text-teal-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-teal-100 text-teal-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-red-50">
                <div className="w-full h-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold">NK</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Nithiskumar</h3>
                <p className="text-red-600 font-medium mb-4 text-sm">Innovation & Growth Officer</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Legal expert ensuring compliance and risk management.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-red-100 text-red-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-red-100 text-red-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 9 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-orange-50">
                <div className="w-full h-full bg-orange-600 flex items-center justify-center text-white text-2xl font-bold">MS</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Mithrasree</h3>
                <p className="text-orange-600 font-medium mb-4 text-sm">Content Creator Head</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Creative strategist driving content innovation and engagement.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 text-orange-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 text-orange-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 10 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-pink-50">
                <div className="w-full h-full bg-pink-600 flex items-center justify-center text-white text-2xl font-bold">KV</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Kavinya</h3>
                <p className="text-pink-600 font-medium mb-4 text-sm">Research Head</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Research expert driving innovation and insights.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-pink-100 text-pink-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-pink-100 text-pink-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 11 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto border-4 border-indigo-50">
                <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">HN</div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Harini</h3>
                <p className="text-indigo-600 font-medium mb-4 text-sm">Marketing Head</p>
                <p className="text-gray-600 mb-6 text-sm">
                  Marketing expert driving brand awareness and customer engagement.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="bg-gray-100 hover:bg-indigo-100 text-indigo-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-indigo-100 text-indigo-600 w-8 h-8 rounded flex items-center justify-center transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 12 */}
            
          </div>
        </div>
      </div>
      
      {/* Department Teams Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Our Experts
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Department <span className="text-blue-600">Leaders</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each department at Xyndrix is led by industry experts who bring specialized knowledge to our projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Engineering Team */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Engineering</h3>
              <p className="text-blue-600 font-medium mb-4">Sarah Chen</p>
              <p className="text-gray-600 mb-6">
                Our engineering team builds robust, scalable solutions using cutting-edge technologies.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Meet the Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Design Team */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Design</h3>
              <p className="text-purple-600 font-medium mb-4">Miguel Rodriguez</p>
              <p className="text-gray-600 mb-6">
                Our design team creates intuitive, beautiful user experiences that delight users.
              </p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Meet the Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Product Team */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product</h3>
              <p className="text-green-600 font-medium mb-4">Aisha Johnson</p>
              <p className="text-gray-600 mb-6">
                Our product team translates business needs into technical requirements with precision.
              </p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Meet the Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Client Success Team */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Client Success</h3>
              <p className="text-orange-600 font-medium mb-4">Thomas Wilson</p>
              <p className="text-gray-600 mb-6">
                Our client success team ensures smooth implementation and ongoing support.
              </p>
              <Link href="/contact" className="text-orange-600 hover:text-orange-800 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Meet the Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Culture Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Our Culture
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Makes Us <span className="text-blue-600">Different</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation First</h3>
                  <p className="text-gray-600">We foster a culture where new ideas are welcomed and innovation thrives in every project we undertake.</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Learning</h3>
                  <p className="text-gray-600">We invest in our team's growth with regular training and learning opportunities to stay ahead.</p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Work-Life Balance</h3>
                  <p className="text-gray-600">We promote a healthy balance between professional achievements and personal well-being for our team.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="h-60 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -mb-12 -ml-12"></div>
                </div>
                <div className="h-72 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-md mt-10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mt-10 -mr-10"></div>
                </div>
                <div className="h-72 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-green-100 rounded-full -mt-8 -ml-8"></div>
                </div>
                <div className="h-60 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md mt-10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-100 rounded-full -mb-14 -mr-14"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 bg-opacity-30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Careers
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Join Our Team of <span className="text-blue-200">Innovators</span></h2>
            <p className="text-xl mb-10 text-blue-50">
              We're always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and find your next opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium transition duration-300 shadow-lg">
                View Open Positions
              </Link>
              <Link href="/contact" className="border border-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium transition duration-300">
                Contact Our HR Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
