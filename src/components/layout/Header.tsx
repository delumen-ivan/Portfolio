import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.querySelector('#home') },
        ...navLinks.map(link => ({ id: link.id, element: document.querySelector(link.href) }))
      ]
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].element as HTMLElement | null
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-6 w-full px-6">
        {/* Left Line */}
        <div className="flex-1 h-px bg-neutral-900"></div>
        
        {/* Navigation */}
        <nav className="border-2 border-neutral-900 rounded-full px-6 py-2">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === 'home'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-neutral-900 hover:text-neutral-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
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
            <div className="md:hidden mt-4 pt-4 border-t border-neutral-900">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className={`block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                      activeSection === 'home'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                    }`}
                    onClick={() => {
                      setActiveSection('home')
                      setIsMenuOpen(false)
                    }}
                  >
                    Home
                  </a>
                </li>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                        activeSection === link.id
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                      }`}
                      onClick={() => {
                        setActiveSection(link.id)
                        setIsMenuOpen(false)
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        
        {/* Right Line */}
        <div className="flex-1 h-px bg-neutral-900"></div>
      </div>
    </header>
  )
}

export default Header
