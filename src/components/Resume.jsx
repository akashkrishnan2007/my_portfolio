import React from "react";

export default function Resume() {
  const highlights = [
    { icon: "🎯", label: "LeetCode", value: "50+ Problems Solved" },
    { icon: "🏅", label: "SkillRack", value: "750+ Problems, 45+ Awards" },
    { icon: "📚", label: "Certifications", value: "4 Verified Certificates" },
    { icon: "💼", label: "Projects", value: "5 Full Stack Projects" },
  ];

  return (
    <section id="resume" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download my resume to explore my technical skills, projects, and achievements.
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-purple-500/20 p-10 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Resume Preview Section */}
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-10 text-center hover:scale-105 transition duration-500">
                
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                {/* Details */}
                <h3 className="text-2xl font-bold mb-2">Akash K</h3>
                <p className="text-gray-300 mb-2">Full Stack Developer</p>
                <p className="text-sm text-gray-400 mb-6">
                  B.E CSE | CGPA 8.27
                </p>

                {/* Download Button */}
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Akash_K_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/40 transition-all hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="flex-1 w-full space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                Quick Highlights
              </h3>

              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/60 p-5 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="text-sm text-gray-400">
                        {item.label}
                      </div>
                      <div className="font-semibold text-gray-200">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">
                  Contact
                </h4>
                <p className="text-sm text-gray-400">
                  akash.k2024cse@sece.ac.in
                </p>
                <p className="text-sm text-gray-400">
                  📱 9363597892
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">
                  Location
                </h4>
                <p className="text-sm text-gray-400">
                  Tamil Nadu, India
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-400 mb-2">
                  Availability
                </h4>
                <p className="text-sm text-gray-400">
                  Open to Internship & Full-Time Opportunities
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}