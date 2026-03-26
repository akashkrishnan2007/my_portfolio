import React from 'react'

export default function Skills(){
  const skillCategories = [
    { 
      title: 'Programming', 
      icon: '💻',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 80 }
      ]
    },
    { 
      title: 'Web Development', 
      icon: '🌐',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 }
      ]
    },
    { 
      title: 'Database', 
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    { 
      title: 'Core Concepts', 
      icon: '🧠',
      skills: [
        { name: 'DSA', level: 85 },
        { name: 'DBMS', level: 80 },
        { name: 'OOP', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl glow hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-purple-400">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-12 glass p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-300">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Node.js', 'Express.js', 'Git', 'GitHub', 'Pandas', 'NumPy', 'REST API', 'JWT', 'Tkinter'].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Solving Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">LeetCode Problems</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-cyan-400 mb-2">750+</div>
            <div className="text-gray-400 text-sm">SkillRack Problems</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-purple-400 mb-2">45+</div>
            <div className="text-gray-400 text-sm">Bronze Awards</div>
          </div>
          <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-400 text-sm">SR Certificates</div>
          </div>
        </div>
      </div>
    </section>
  )
}
