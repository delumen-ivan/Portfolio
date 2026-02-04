interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  features: string[]
  liveUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'https://via.placeholder.com/800x600',
      features: ['User Authentication', 'Real-time Updates', 'Responsive Design', 'Admin Dashboard'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/800x600',
      features: ['Payment Integration', 'Shopping Cart', 'Inventory Management', 'Order Tracking'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      technologies: ['React', 'PWA', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/800x600',
      features: ['Offline Support', 'Push Notifications', 'Task Management', 'Cloud Sync'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
      technologies: ['Vue', 'Express', 'MySQL', 'Bootstrap'],
      imageUrl: 'https://via.placeholder.com/800x600',
      features: ['Data Analytics', 'API Integration', 'User Roles', 'Export Reports'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neutral-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-display">
            Projects
          </h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto rounded-full"></div>
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
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
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200 group-hover:shadow-3xl group-hover:shadow-neutral-300 transition-all duration-500">
                      {/* Main Image */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Tech Stack Overlay - Shows on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
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
                    </div>
                    
                    {/* Floating decoration */}
                    <div className={`absolute -z-10 top-8 ${isEven ? '-right-8' : '-left-8'} w-full h-full bg-gradient-to-br from-neutral-200/40 to-neutral-300/40 rounded-2xl group-hover:scale-105 transition-transform duration-500`}></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-200/50 group-hover:shadow-xl group-hover:border-neutral-300 transition-all duration-300">
                      <p className="text-neutral-700 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
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
