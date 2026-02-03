import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-primary-100/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-6 pb-4 space-y-2 animate-slide-down">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
