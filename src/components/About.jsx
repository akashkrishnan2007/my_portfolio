import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bio */}
          <div className="glass p-8 rounded-2xl glow">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer and B.E CSE student at Sri Eshwar College of Engineering 
              with a CGPA of 8.27. I specialize in building efficient, scalable web applications with modern 
              technologies.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I enjoy solving complex problems through clean code and thoughtful architecture. My focus is on 
              creating user-centric applications that deliver real value while maintaining high performance 
              and maintainability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Active problem solver with 50+ LeetCode problems and 750+ SkillRack problems solved, earning 
              45+ Bronze Awards and 2 Certificates.
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-4">
            <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-gray-400">B.E CSE - Sri Eshwar College of Engineering</p>
                  <p className="text-cyan-400 font-semibold">CGPA: 8.27 (2024-2028)</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">HSC</h4>
                  <p className="text-gray-400">Sri Ragavendra Matric HSS</p>
                  <p className="text-cyan-400 font-semibold">86.6% (2023-2024)</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">Tamil Nadu, India</p>
                  <p className="text-cyan-400 font-semibold">📱 9363597892</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
