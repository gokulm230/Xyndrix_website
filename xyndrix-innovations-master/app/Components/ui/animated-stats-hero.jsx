"use client";
import Link from "next/link";

export default function StatsSection() {
  return (
    <div className="bg-gray-50 py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Achievements
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering excellence through experience and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Projects Delivered */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number text-5xl font-bold text-black mb-3">10+</h3>
          <p className="text-gray-700 font-medium text-lg">Projects Delivered</p>
          <p className="mt-4 text-gray-600 text-sm">
            Successful projects completed for clients across various industries
          </p>
        </div>

        {/* Products Developed */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-md">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 002-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number text-5xl font-bold text-black mb-3">5+</h3>
          <p className="text-gray-700 font-medium text-lg">Products Developed</p>
          <p className="mt-4 text-gray-600 text-sm">
            Innovative solutions designed to solve real-world problems
          </p>
        </div>

        {/* Expert Team Members */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-md">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
          <h3 className="stat-number text-5xl font-bold text-black mb-3">20+</h3>
          <p className="text-gray-700 font-medium text-lg">Expert Team Members</p>
          <p className="mt-4 text-gray-600 text-sm">
            Skilled professionals dedicated to delivering excellence
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/about"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
        >
          Learn more about our expertise
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
