import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              Akash K
            </h3>
            <p className="text-gray-400 text-sm">Full Stack Developer & Problem Solver</p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Projects</a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/akashkrishnan2007" target="_blank" rel="noreferrer" 
               className="p-2 glass rounded-lg hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/akash-k-466312328" target="_blank" rel="noreferrer" 
               className="p-2 glass rounded-lg hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://leetcode.com/problemset/" target="_blank" rel="noreferrer" 
               className="p-2 glass rounded-lg hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.776-1.649-7.872.537l-2.32 2.497c-.55.59-.55 1.523 0 2.114l4.277 4.193c.548.538 1.43.538 1.976 0l2.396-2.392a1.384 1.384 0 0 0-.003-1.955 1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a.69.69 0 0 1-.988 0l-4.277-4.193a.69.69 0 0 1 0-.988l2.32-2.497c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c2.365 1.914 5.776 1.649 7.872-.537l2.32-2.497a1.384 1.384 0 0 0-.003-1.955 1.378 1.378 0 0 0-1.951-.003l-2.32 2.497c-1.058 1.134-3.204 1.27-4.43.278l-3.501-2.831a5.855 5.855 0 0 0-3.948-1.105z"/>
              </svg>
            </a>
            <a href="https://skillrack.com/faces/candidate/trackshome.xhtml" target="_blank" rel="noreferrer" 
               className="p-2 glass rounded-lg hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Akash K. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with 💜 for placements
          </p>
        </div>
      </div>
    </footer>
  )
}
