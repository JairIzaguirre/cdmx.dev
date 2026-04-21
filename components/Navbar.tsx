'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar({ dict }: { dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const currentLang = pathname?.split('/')[1] || 'en'

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#propuesta', label: dict.proposal },
    { href: '#stack', label: dict.technology },
    { href: '#metodologia', label: dict.methodology },
    { href: '#beneficios', label: dict.benefits },
    { href: '#contacto', label: dict.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              ecommerce<span className="text-primary-400">.cdmx</span>.dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
              <Link 
                href={redirectedPathname('en')}
                className={`text-xl opacity-80 hover:opacity-100 transition-all duration-300 ${currentLang === 'en' ? 'grayscale-0 scale-110' : 'grayscale'}`}
                title="English"
              >
                🇺🇸
              </Link>
              <Link 
                href={redirectedPathname('es')}
                className={`text-xl opacity-80 hover:opacity-100 transition-all duration-300 ${currentLang === 'es' ? 'grayscale-0 scale-110' : 'grayscale'}`}
                title="Español"
              >
                🇪🇸
              </Link>
            </div>

            <a href="#contacto" className="btn-primary text-sm py-3 px-6">
              {dict.quote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 py-4 mt-2 border-t border-slate-800/50">
              <span className="text-slate-400 text-sm">Language / Idioma:</span>
              <div className="flex gap-4">
                <Link 
                  href={redirectedPathname('en')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl transition-all duration-300 ${currentLang === 'en' ? 'grayscale-0 scale-110' : 'grayscale opacity-50'}`}
                >
                  🇺🇸
                </Link>
                <Link 
                  href={redirectedPathname('es')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl transition-all duration-300 ${currentLang === 'es' ? 'grayscale-0 scale-110' : 'grayscale opacity-50'}`}
                >
                  🇪🇸
                </Link>
              </div>
            </div>

            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary flex justify-center mt-4 text-sm py-3 px-6 w-full text-center"
            >
              {dict.quote}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}