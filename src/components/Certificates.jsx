import React from 'react'

export default function Certificates(){
  const certificates = [
    {
      title: 'Mastering Data Structures and Algorithms Using C and C++',
      issuer: 'Udemy',
      year: '2025',
      icon: '🏆'
    },
    {
      title: 'Python for Automation',
      issuer: 'Online Course',
      year: '2024',
      icon: '🐍'
    },
    {
      title: 'The Complete Introduction to Data Structures',
      issuer: 'Udemy',
      year: '2024',
      icon: '📊'
    },
    {
      title: 'The Complete Introduction to C Programming',
      issuer: 'Udemy',
      year: '2024',
      icon: '💻'
    }
  ]

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl glow hover:bg-white/10 transition-all group">
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/30 rounded-full text-xs font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verified Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-400 text-sm">Hours Learning</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Projects Built</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8.27</div>
            <div className="text-gray-400 text-sm">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
