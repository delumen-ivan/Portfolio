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
        'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'https://via.placeholder.com/600x400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'An e-commerce platform with shopping cart functionality, payment integration, and admin dashboard.',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/600x400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'A mobile-first progressive web app for task management with offline support and push notifications.',
      technologies: ['React', 'PWA', 'Firebase', 'Material UI'],
      imageUrl: 'https://via.placeholder.com/600x400',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
