"use client";

const WhyChooseXyndrix = () => {
  return (
    <div className="py-20 bg-white why-choose-section">
    <div className="container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 font-semibold rounded-full mb-4">
          Our Advantage
        </span>
        <h2 className="text-5xl font-bold text-black mb-6">
          Why Us
        </h2>
        <p className="text-gray-600">
          We combine technical expertise with innovative thinking to deliver
          solutions that drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Technical Excellence Card */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 why-card hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-20"></div>

          {/* Content Container */}
          <div className="relative h-full p-8 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Technical Excellence
            </h3>
            <p className="text-white/90">
              Our team of expert developers stays at the forefront of
              technological advancements.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center text-white text-sm font-medium">
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

        {/* Collaborative Approach Card */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 why-card hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/patterns/network.svg')] opacity-20"></div>

          {/* Content Container */}
          <div className="relative h-full p-8 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Collaborative Approach
            </h3>
            <p className="text-white/90">
              We work closely with you to understand your business needs and
              deliver tailored solutions.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center text-white text-sm font-medium">
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

        {/* Innovative Solutions Card */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 why-card hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/patterns/bubbles.svg')] opacity-20"></div>

          {/* Content Container */}
          <div className="relative h-full p-8 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-cyan-600 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Innovative Solutions
            </h3>
            <p className="text-white/90">
              We create cutting-edge solutions that help businesses stay ahead
              of the competition.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center text-white text-sm font-medium">
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

        {/* Timely Delivery Card */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 why-card hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/patterns/timeline.svg')] opacity-20"></div>

          {/* Content Container */}
          <div className="relative h-full p-8 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Timely Delivery
            </h3>
            <p className="text-white/90">
              We pride ourselves on meeting deadlines and delivering projects on
              time, every time.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center text-white text-sm font-medium">
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
      </div>
    </div>
  </div>
  );
};

export default WhyChooseXyndrix;
