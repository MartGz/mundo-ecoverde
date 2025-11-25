'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Recycle } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === '/'

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (isHomePage && href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { href: isHomePage ? '#nosotros' : '/nosotros', label: 'Nosotros' },
    { href: isHomePage ? '#servicios' : '/servicios', label: 'Servicios' },
    { href: isHomePage ? '#proceso' : '/proceso', label: 'Proceso' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-eco-verde-900 shadow-eco-lg' : 'bg-transparent'}`}>
      <div className="container-eco py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Recycle className="w-10 h-10 text-eco-verde-300" />
            <span className="text-white text-2xl font-bold">Mundo Eco Verde</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              isHomePage && link.href.startsWith('#') ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white hover:text-eco-verde-300 transition font-medium"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-eco-verde-300 transition font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link 
              href="/contacto" 
              className="btn-primary px-6 py-2 rounded-full font-semibold hover:shadow-eco transition"
            >
              Contacto
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link, index) => (
              isHomePage && link.href.startsWith('#') ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-white hover:text-eco-verde-300 transition w-full text-left py-2 font-medium"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-white hover:text-eco-verde-300 transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}