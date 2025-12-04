'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NosotrosPage() {
  useEffect(() => {
    // Animaciones Reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const valores = [
    {
      icono: 'fas fa-hand-holding-heart',
      titulo: 'Responsabilidad',
      descripcion: 'Comprometidos con el entorno y la sociedad en cada acción.',
      color: 'text-brand-green',
      bgColor: 'bg-green-100'
    },
    {
      icono: 'fas fa-lightbulb',
      titulo: 'Innovación',
      descripcion: 'Buscamos constantemente mejores formas de proteger el planeta.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icono: 'fas fa-scale-balanced',
      titulo: 'Integridad',
      descripcion: 'Transparencia y ética en todas nuestras operaciones.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      icono: 'fas fa-users-rays',
      titulo: 'Trabajo en Equipo',
      descripcion: 'La unión hace la fuerza para lograr un mundo más verde.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icono: 'fas fa-leaf',
      titulo: 'Sostenibilidad',
      descripcion: 'Equilibrio entre desarrollo económico, social y ambiental.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icono: 'fas fa-heart',
      titulo: 'Compromiso Social',
      descripcion: 'Dignificación del reciclador y apoyo a comunidades.',
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    }
  ]

  const logros = [
    { valor: '5+', descripcion: 'Años de experiencia' },
    { valor: '50k+', descripcion: 'Toneladas procesadas' },
    { valor: '120+', descripcion: 'Empresas aliadas' },
    { valor: '50+', descripcion: 'Familias beneficiadas' }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 relative overflow-hidden bg-brand-light">
        <div className="hero-blob bg-brand-green w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] top-[-50px] left-[-50px] lg:left-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bottom-[-50px] right-[-50px] lg:right-[-100px] rounded-full animate-float-medium"></div>

        <div className="container-eco text-center reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-4 lg:mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
              Nuestra Esencia
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-brand-dark mb-4 lg:mb-6 leading-tight">
            Conoce a <span className="text-gradient">Mundo Eco Verde</span>
          </h1>

          <p className="text-base lg:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Somos un equipo apasionado dedicado a transformar la manera en que el mundo ve los residuos.
            Construimos puentes entre la sostenibilidad ambiental y el progreso social.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-eco">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Imagen */}
            <div className="relative reveal group">
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[2rem] rotate-3 opacity-0 lg:opacity-30 group-hover:rotate-1 transition-all duration-500"></div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Equipo Mundo Eco Verde trabajando"
                  className="w-full h-[300px] lg:h-[500px] object-cover rounded-[2rem] shadow-xl transform transition-transform duration-500 hover:scale-[1.01]"
                  loading="lazy"
                />
                
                {/* Badge flotante para desktop */}
                <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:flex items-center gap-4 animate-float-medium">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <i className="fas fa-award text-brand-green text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-gray">Certificados</p>
                    <p className="text-lg font-extrabold text-brand-dark">100%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span className="text-xs font-bold text-brand-green uppercase">
                  Quiénes Somos
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 lg:mb-6 leading-tight">
                Expertos en gestión ambiental y economía circular
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-brand-gray leading-relaxed">
                <p className="text-base lg:text-lg">
                  En <span className="font-bold text-brand-dark">Mundo Eco Verde</span>, no solo somos una empresa de reciclaje; somos agentes de cambio. Nacimos con la convicción de que los residuos no son el final del ciclo, sino el comienzo de uno nuevo.
                </p>
                <p className="text-base lg:text-lg">
                  Operamos bajo los más altos estándares de calidad, integrando tecnología avanzada en nuestros procesos de recolección, clasificación y aprovechamiento. Pero lo que realmente nos define es nuestro <span className="text-brand-green font-bold">compromiso humano</span>.
                </p>
                <p className="text-base lg:text-lg">
                  Trabajamos mano a mano con comunidades y empresas, educando y dignificando la labor del reciclador, demostrando que la rentabilidad y la responsabilidad ecológica van de la mano.
                </p>
              </div>

              {/* Logros en móvil */}
              <div className="mt-6 lg:mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {logros.map((logro, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-brand-dark mb-1">
                      {logro.valor}
                    </div>
                    <div className="text-xs lg:text-sm text-brand-gray font-medium">
                      {logro.descripcion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-12 lg:py-20 bg-brand-light relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent"></div>
        
        <div className="container-eco relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            {/* Misión */}
            <div className="feature-card p-6 lg:p-10 reveal group">
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-brand-green text-2xl lg:text-3xl transition-transform duration-300 bg-green-50 group-hover:scale-110">
                  <i className="fas fa-bullseye"></i>
                </div>
                <span className="text-5xl lg:text-6xl font-bold text-gray-100 select-none">01</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-4 lg:mb-6 group-hover:text-brand-green transition-colors">
                Nuestra Misión
              </h3>
              
              <div className="space-y-3 lg:space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  Brindar soluciones integrales en la gestión de residuos sólidos aprovechables, promoviendo la cultura del reciclaje y la economía circular.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Nos dedicamos a dignificar la labor social del reciclador y a garantizar a nuestros clientes el cumplimiento normativo ambiental, transformando problemas en recursos valiosos para la industria.
                </p>
              </div>
              
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-6 lg:mt-8 overflow-hidden">
                <div className="w-1/3 h-full bg-brand-green group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>

            {/* Visión */}
            <div className="feature-card p-6 lg:p-10 reveal group" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-blue-600 text-2xl lg:text-3xl transition-transform duration-300 bg-blue-50 group-hover:scale-110">
                  <i className="fas fa-earth-americas"></i>
                </div>
                <span className="text-5xl lg:text-6xl font-bold text-gray-100 select-none">02</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-4 lg:mb-6 group-hover:text-blue-600 transition-colors">
                Nuestra Visión
              </h3>
              
              <div className="space-y-3 lg:space-y-4">
                <p className="text-brand-gray leading-relaxed">
                  Consolidarnos para el año 2030 como la organización líder y referente en la Costa Caribe en innovación ambiental y gestión sostenible de residuos.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Aspiramos a ser reconocidos por nuestra excelencia operativa, nuestro impacto social positivo y por ser el aliado estratégico preferido de empresas comprometidas con el cuidado del planeta.
                </p>
              </div>
              
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-6 lg:mt-8 overflow-hidden">
                <div className="w-1/3 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-12 lg:py-20 bg-white border-t border-gray-100">
        <div className="container-eco">
          <div className="text-center mb-8 lg:mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              <span className="text-xs font-bold text-brand-green uppercase">
                Nuestros Pilares
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-3 lg:mb-4">
              Valores Corporativos
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto text-base lg:text-lg">
              Los principios que guían cada una de nuestras acciones y decisiones
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index} 
                className="bg-white p-5 lg:p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 reveal group hover:border-brand-green/30"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${valor.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${valor.icono} text-lg lg:text-xl ${valor.color}`}></i>
                </div>
                <h4 className="font-bold text-lg lg:text-xl text-brand-dark mb-2 lg:mb-3">
                  {valor.titulo}
                </h4>
                <p className="text-sm lg:text-base text-brand-gray leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-brand-green to-green-700 text-white">
        <div className="container-eco text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
              ¿Listo para unirte al cambio?
            </h2>
            <p className="text-lg text-green-100 mb-6 lg:mb-8 leading-relaxed">
              Forma parte de nuestra misión por un planeta más limpio y sostenible.
              Juntos podemos hacer la diferencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-secondary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold bg-white text-brand-green hover:bg-brand-green hover:text-white"
              >
                <i className="fas fa-handshake mr-2"></i> Trabajar con Nosotros
              </Link>
              <Link
                href="/servicios"
                className="px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-lg bg-green-800 text-white hover:bg-green-900 transition"
              >
                <i className="fas fa-recycle mr-2"></i> Conocer Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}