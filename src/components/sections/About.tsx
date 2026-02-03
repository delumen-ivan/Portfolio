const About = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SASS/SCSS', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'MySQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker']
    }
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-100/50 rounded-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-display">
            About Me
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Paragraph Section */}
            <div className="max-w-3xl mx-auto">
              <p className="text-neutral-700 leading-relaxed text-lg text-center mb-6">
               I am a dedicated 3rd-year student at PUP Taguig Campus, 
               currently taking the Diploma in Information Technology (DIT) course. 
               I am passionate about technology and always eager to learn new skills to succeed in my field.
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg text-center">
                My goal is to become a professional Web Developer and UI/UX Designer. 
                I enjoy creating websites that are visually appealing and easy to use. 
                I practice my coding and design skills daily, and I look forward to working on 
                real-world projects to gain more experience.
              </p>
            </div>
            
            {/* Skills & Technologies Section */}
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
                Skills & Technologies
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category, categoryIndex) => (
                  <div
                    key={category.title}
                    className="space-y-4"
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <h4 className="font-bold text-neutral-900 text-lg text-center">{category.title}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-neutral-900 text-white rounded-full text-sm 
                            font-medium hover:bg-neutral-800 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
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
