'use client'

import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'
import { useState, useEffect } from 'react'

interface Service {
  id: string
  title: string
  description: string
  icon: string | null
}

export default function ServiciosPageClient({
  serviciosOperativos,
  serviciosSociales,
}: {
  serviciosOperativos: Service[]
  serviciosSociales: Service[]
}) {
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
  }, [serviciosOperativos, serviciosSociales])

  const materiales = [
    { name: 'Papel y Cartón', icon: 'fas fa-newspaper', color: 'text-blue-600' },
    { name: 'Plástico', icon: 'fas fa-bottle-water', color: 'text-red-500' },
    { name: 'Vidrio', icon: 'fas fa-wine-glass', color: 'text-green-600' },
    { name: 'Aluminio', icon: 'fas fa-cubes', color: 'text-gray-600' },
    { name: 'Tetra-Pak', icon: 'fas fa-box', color: 'text-yellow-600' },
    { name: 'Aceite Usado', icon: 'fas fa-oil-can', color: 'text-amber-700' },
    { name: 'Botellas de Amor', icon: 'fas fa-heart', color: 'text-pink-500' }
  ]

  const sectores = [
    {
      icon: 'fas fa-building-user',
      title: 'Residencial',
      desc: 'Conjuntos cerrados, edificios, barrios y comunidades organizadas.',
      color: 'text-brand-green'
    },
    {
      icon: 'fas fa-store',
      title: 'Comercial',
      desc: 'Centros comerciales, oficinas, restaurantes, hoteles y establecimientos.',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-industry',
      title: 'Industrial',
      desc: 'Fábricas, bodegas, zonas francas y empresas con residuos especiales.',
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
            Portafolio de Servicios Integrales
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6">
            Dignificamos el Reciclaje, <br /> <span className="text-gradient">Transformamos el Futuro</span>
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Ofrecemos servicio público de aseo especializado en aprovechamiento, generando prosperidad para la comunidad y dignificando la labor del reciclador.
          </p>
        </div>
      </section>

      {/* Servicios Operativos */}
      {serviciosOperativos.length > 0 && (
        <section className="py-12 lg:py-20 bg-white">
          <div className="container-eco">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold text-brand-dark">Gestión Operativa</h2>
              <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
              <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
                Servicios técnicos especializados para el manejo eficiente de materiales aprovechables
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {serviciosOperativos.map((service, index) => (
                <div
                  key={service.id}
                  className="feature-card p-8 group h-full flex flex-col reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-3xl group-hover:bg-brand-green transition-colors duration-300 mx-auto">
                    <span>{service.icon || '♻️'}</span>
                  </div>

                  <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
                  <p className="text-brand-gray text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Servicios Sociales */}
      {serviciosSociales.length > 0 && (
        <section className="py-12 lg:py-20 bg-brand-light">
          <div className="container-eco">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold text-brand-dark">Gestión Social</h2>
              <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
              <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
                Programas comunitarios y educativos para el desarrollo sostenible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {serviciosSociales.map((service, index) => (
                <div
                  key={service.id}
                  className="feature-card p-8 group h-full flex flex-col reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-3xl group-hover:bg-brand-green transition-colors duration-300 mx-auto">
                    <span>{service.icon || '♻️'}</span>
                  </div>

                  <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
                  <p className="text-brand-gray text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materiales que Aprovechamos */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-eco">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-brand-dark">Materiales que Aprovechamos</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Trabajamos con diversos materiales reciclables para maximizar el aprovechamiento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {materiales.map((material, index) => (
              <div key={index} className="text-center reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-brand-green transition-colors">
                  <i className={`${material.icon} text-2xl ${material.color} group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="font-semibold text-brand-dark">{material.name}</h4>
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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">¿Listo para dignificar el reciclaje con nosotros?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Contáctanos y juntos transformemos el futuro a través del aprovechamiento sostenible.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary px-10 py-4 rounded-xl font-bold text-lg shadow-green hover:shadow-white inline-flex items-center gap-3 relative z-10"
            >
              ¡Contáctanos! <i className="fas fa-arrow-right"></i>
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
    </div>
  )
}
