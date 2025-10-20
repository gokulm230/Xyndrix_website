"use client";

const WhyChooseXyndrix = () => {
  return (
    <div className=" py-36 bg-gradient-to-b from-[#0a0a0f] via-[#0e0e14] to-[#0a0a0f] text-gray-200 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-4 bg-blue-600/20 text-blue-400 font-semibold rounded-full mb-4 border border-blue-500/30 backdrop-blur-sm">
            Our Advantage
          </span>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose Xyndrix
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Xyndrix, we merge technology and creativity to craft innovative, scalable, and impactful digital experiences.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Technical Excellence",
              desc: "Our expert engineers deliver high-performance, scalable, and secure digital products with cutting-edge technologies.",
              iconColor: "text-blue-400",
              gradient: "from-blue-600/30 to-blue-900/20",
              iconPath:
                "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
            },
            {
              title: "Collaborative Approach",
              desc: "We believe in strong partnerships, aligning our process with your vision to ensure exceptional results.",
              iconColor: "text-purple-400",
              gradient: "from-purple-600/30 to-indigo-900/20",
              iconPath:
                "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z",
            },
            {
              title: "Innovative Solutions",
              desc: "We thrive on challenges — delivering forward-thinking solutions that give your business a competitive edge.",
              iconColor: "text-cyan-400",
              gradient: "from-cyan-600/30 to-sky-900/20",
              iconPath:
                "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
            },
            {
              title: "Timely Delivery",
              desc: "With streamlined workflows and agile practices, we ensure every project meets your deadlines with precision.",
              iconColor: "text-indigo-400",
              gradient: "from-indigo-600/30 to-purple-900/20",
              iconPath:
                "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br ${item.gradient} border border-gray-700/40 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]`}
            >
              {/* Card Content */}
              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-6 flex items-center">
                  <div
                    className={`w-14 h-14 bg-gray-900/80 rounded-xl flex items-center justify-center ${item.iconColor} shadow-inner border border-gray-700 transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d={item.iconPath} clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <div className="mt-6 pt-4">
                  <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseXyndrix;
