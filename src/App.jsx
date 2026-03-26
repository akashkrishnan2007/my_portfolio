import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen animated-gradient text-gray-100 relative overflow-hidden">
      {/* Floating blobs */}
      <div className="blob w-96 h-96 bg-purple-600 top-0 left-0" style={{animationDelay: '0s'}}></div>
      <div className="blob w-80 h-80 bg-cyan-500 bottom-0 right-0" style={{animationDelay: '7s'}}></div>
      <div className="blob w-72 h-72 bg-blue-500 top-1/2 left-1/2" style={{animationDelay: '3s'}}></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
