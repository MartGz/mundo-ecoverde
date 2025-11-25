'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    background: 'bg-gradient-to-br from-eco-verde-500 to-eco-verde-700',
    title: 'Centro de Reciclaje ECA',
    subtitle: 'Estación de Clasificación y Aprovechamiento',
    description: 'Transformamos residuos en oportunidades sostenibles para Cartagena',
    image: '🌱',
    cta: 'Conoce Más',
    badge: '♻️ Eco-Friendly',
    link: '/nosotros'
  },
  {
    id: 2,
    background: 'bg-gradient-to-br from-eco-accion-azul to-blue-600',
    title: 'Gestión Integral de Residuos',
    subtitle: 'Soluciones completas para tu empresa',
    description: 'Recolección, clasificación y aprovechamiento de materiales reciclables',
    image: '📦',
    cta: 'Nuestros Servicios',
    badge: '🏆 Certificados',
    link: '/servicios'
  },
  {
    id: 3,
    background: 'bg-gradient-to-br from-eco-accion-naranja to-orange-600',
    title: 'Educación Ambiental',
    subtitle: 'Construyendo conciencia ecológica',
    description: 'Programas de capacitación y sensibilización para comunidades y empresas',
    image: '📚',
    cta: 'Únete',
    badge: '👥 Comunidad',
    link: '/servicios'
  },
  {
    id: 4,
    background: 'bg-gradient-to-br from-eco-verde-600 to-eco-verde-800',
    title: 'Comercialización de Materiales',
    subtitle: 'Mercado sostenible de reciclables',
    description: 'Conectamos productores con industrias que valoran los materiales reciclados',
    image: '💼',
    cta: 'Cotizar',
    badge: '💰 Económico',
    link: '/contacto'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${slide.background} ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="container-eco h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Content */}
                <div className="text-white space-y-6 animate-slide-up">
                  <div className="badge-eco bg-white/20 backdrop-blur-sm border border-white/30">
                    {slide.badge}
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl text-eco-verde-100 font-semibold">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-xl text-eco-verde-50 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={slide.link} className="btn-primary text-lg px-8 py-4 text-center">
                      {slide.cta}
                    </Link>
                    <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white hover:text-eco-verde-700 text-lg px-8 py-4 text-center">
                      Contactar
                    </Link>
                  </div>
                </div>

                {/* Image/Icon */}
                <div className="flex justify-center lg:justify-end animate-fade-in">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <span className="text-8xl lg:text-9xl">
                      {slide.image}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
      >
        {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}