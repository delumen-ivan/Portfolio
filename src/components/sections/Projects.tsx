interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description:
        'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design. This project demonstrates modern web development practices and clean architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'https://via.placeholder.com/800x600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'An e-commerce platform with shopping cart functionality, payment integration, and admin dashboard. Built with scalability and performance in mind, featuring real-time inventory management.',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/800x600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'A mobile-first progressive web app for task management with offline support and push notifications. Designed for productivity with an intuitive interface and seamless synchronization.',
      technologies: ['React', 'PWA', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/800x600',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div
                key={project.id}
                className="group relative"
                style={{ 
                  animation: 'fadeIn 0.8s ease-out',
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-200/50 group-hover:shadow-3xl group-hover:shadow-primary-300/50 transition-all duration-500">
                      {/* Main Image */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Tech Stack Overlay - Shows on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/95 to-accent-900/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="mb-6">
                            <svg className="w-12 h-12 mx-auto text-white/90 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h4 className="text-white text-xl font-bold mb-6">Tech Stack</h4>
                          <div className="flex flex-wrap gap-3 justify-center">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg text-sm font-semibold border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                                style={{
                                  animation: 'scaleIn 0.4s ease-out',
                                  animationDelay: `${techIndex * 0.1}s`,
                                  animationFillMode: 'both'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Corner */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-600 opacity-80`}></div>
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-20 h-20 bg-white/10 backdrop-blur-sm flex items-center justify-center`}>
                        <span className="text-white font-bold text-2xl">0{project.id}</span>
                      </div>
                    </div>
                    
                    {/* Floating decoration */}
                    <div className={`absolute -z-10 top-8 ${isEven ? '-right-8' : '-left-8'} w-full h-full bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-2xl group-hover:scale-105 transition-transform duration-500`}></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wider">
                          Featured Project
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-200/50 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                      <p className="text-neutral-700 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 hover:-translate-y-1 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>Live Demo</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 rounded-xl font-semibold border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span>View Code</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
