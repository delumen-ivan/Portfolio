const About = () => {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'Git', icon: '🔧' },
    { name: 'REST APIs', icon: '🔌' },
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100/50 shadow-sm">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  I'm a passionate web developer with expertise in building modern,
                  responsive web applications. I love turning complex problems into
                  simple, beautiful, and intuitive solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or learning something new.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group px-5 py-4 bg-gradient-to-br from-white to-primary-50/50 border border-primary-100 hover:border-primary-300 rounded-xl text-center font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <div className="text-neutral-700 text-sm">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
