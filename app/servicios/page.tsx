'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactModal from '@/components/ContactModal'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Animaciones Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const serviciosDetallados = [
    {
      icon: 'fas fa-truck-ramp-box',
      title: 'Recolección Selectiva',
      description: 'Implementamos rutas de recolección optimizadas para el retiro de residuos aprovechables directamente en la fuente. Garantizamos puntualidad y trazabilidad.',
      features: ['Flota propia', 'Personal uniformado', 'Frecuencias a medida']
    },
    {
      icon: 'fas fa-recycle',
      title: 'Clasificación ECA',
      description: 'En nuestra Estación de Clasificación y Aprovechamiento (ECA), procesamos los materiales para reintroducirlos a la cadena productiva.',
      features: ['Tecnología de prensado', 'Selección manual experta', 'Trazabilidad del residuo']
    },
    {
      icon: 'fas fa-dumpster',
      title: 'Gestión Integral de Residuos',
      description: 'Administramos el cuarto de basuras de tu copropiedad o empresa bajo normativa vigente. Nos encargamos del manejo de residuos ordinarios y reciclables.',
      features: ['Cumplimiento PGIRS', 'Certificados de disposición', 'Mantenimiento de áreas']
    },
    {
      icon: 'fas fa-hand-holding-dollar',
      title: 'Comercialización',
      description: 'Compramos y vendemos materiales reciclables al por mayor. Conectamos generadores con industrias transformadoras asegurando precios justos.',
      features: ['Precios del mercado', 'Logística incluida', 'Contratos a largo plazo']
    },
    {
      icon: 'fas fa-chalkboard-user',
      title: 'Educación Ambiental',
      description: 'Sensibilizamos a tu equipo o comunidad. Dictamos talleres lúdicos y técnicos sobre separación en la fuente y sostenibilidad.',
      features: ['Talleres prácticos', 'Señalética informativa', 'Campañas de impacto']
    },
    {
      icon: 'fas fa-broom',
      title: 'Limpieza Especializada',
      description: 'Servicios de aseo técnico para eventos, finalización de obras, fachadas y espacios públicos con productos biodegradables.',
      features: ['Maquinaria especializada', 'Personal certificado', 'Disposición final']
    }
  ]

  const sectores = [
    {
      icon: 'fas fa-building-user',
      title: 'Residencial',
      desc: 'Conjuntos cerrados, edificios y barrios organizados.',
      color: 'text-brand-green'
    },
    {
      icon: 'fas fa-store',
      title: 'Comercial',
      desc: 'Centros comerciales, oficinas, restaurantes y hoteles.',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial',
      desc: 'Fábricas, bodegas y zonas francas con residuos especiales.',
      color: 'text-orange-500'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section para Servicios */}
      <section className="pt-32 lg:pt-40 pb-12 lg:pb-20 relative overflow-hidden bg-brand-light">
        <div className="hero-blob bg-blue-100 w-[500px] h-[500px] top-[-100px] right-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-brand-green w-[300px] h-[300px] bottom-0 left-0 rounded-full animate-float-medium"></div>

        <div className="container-eco text-center reveal relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-brand-green uppercase bg-green-100 rounded-full">
            Nuestros Servicios
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6">
            Soluciones para un <br /> <span className="text-gradient">Mundo Más Limpio</span>
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Ofrecemos un portafolio integral diseñado para cubrir todas las necesidades de gestión de residuos de tu empresa, conjunto residencial o industria.
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container-eco">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {serviciosDetallados.map((service, index) => (
              <div 
                key={index}
                className="feature-card p-8 group h-full flex flex-col reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mx-auto">
                  <i className={`${service.icon} text-3xl`}></i>
                </div>

                <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
                <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="text-sm text-brand-gray space-y-3 pt-4 border-t border-gray-100">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <i className="fas fa-circle-check text-brand-green"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores que Atendemos */}
      <section className="py-12 lg:py-20 bg-brand-light">
        <div className="container-eco">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-brand-dark">Sectores que Atendemos</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectores.map((sector, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center reveal hover:shadow-lg transition-all" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                  <i className={`${sector.icon} text-2xl ${sector.color}`}></i>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{sector.title}</h3>
                <p className="text-brand-gray text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-eco reveal">
          <div className="bg-brand-dark rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">¿Listo para optimizar tu gestión de residuos?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Contáctanos hoy mismo para una evaluación gratuita y descubre cuánto puedes ahorrar y contribuir al planeta.
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="btn-primary px-10 py-4 rounded-xl font-bold text-lg shadow-green hover:shadow-white inline-flex items-center gap-3 relative z-10"
            >
              Solicitar Cotización <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        serviceType="cotizacion" 
      />

      <Footer />
      <WhatsAppButton />
    </div>
  )
}