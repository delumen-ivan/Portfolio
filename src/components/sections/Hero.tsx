const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary-100/80 backdrop-blur-sm text-primary-700 rounded-full text-sm font-medium shadow-sm">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              A passionate developer crafting beautiful, intuitive web experiences that make a difference
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-primary-700 rounded-xl font-medium border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="inline-block text-neutral-400 hover:text-primary-600 transition-colors">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
