const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight font-display">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                Ivan Delumen
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              UI/UX Designer & Web Developer
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/path-to-your-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-xl font-semibold shadow-lg shadow-neutral-300 hover:shadow-xl hover:shadow-neutral-400 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
