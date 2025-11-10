'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Recycle } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-green-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Recycle className="w-10 h-10 text-green-300" />
            <span className="text-white text-2xl font-bold">Mundo Eco Verde</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-green-300 transition">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-green-300 transition">
              Nosotros
            </Link>
            <Link href="/servicios" className="text-white hover:text-green-300 transition">
              Servicios
            </Link>
            <Link href="/proceso" className="text-white hover:text-green-300 transition">
              Proceso
            </Link>
            <Link href="/contacto" className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
              Contacto
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-white hover:text-green-300 transition">
              Inicio
            </Link>
            <Link href="/nosotros" className="block text-white hover:text-green-300 transition">
              Nosotros
            </Link>
            <Link href="/servicios" className="block text-white hover:text-green-300 transition">
              Servicios
            </Link>
            <Link href="/proceso" className="block text-white hover:text-green-300 transition">
              Proceso
            </Link>
            <Link href="/contacto" className="block text-white hover:text-green-300 transition">
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}