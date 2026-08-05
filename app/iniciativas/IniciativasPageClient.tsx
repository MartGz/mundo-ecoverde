'use client'

import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'
import { useState, useEffect } from 'react'

interface Initiative {
  id: string
  title: string
  content: string
  imageUrl: string | null
  status: string
  createdAt: Date
}

const statusConfig: Record<string, { label: string; badge: string }> = {
  ACTIVE:    { label: 'En curso',    badge: 'text-brand-green bg-green-100' },
  PLANNED:   { label: 'Próximamente', badge: 'text-amber-600 bg-amber-100' },
  COMPLETED: { label: 'Completada',  badge: 'text-blue-600 bg-blue-100' },
}

export default function IniciativasPageClient({ initiatives }: { initiatives: Initiative[] }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [initiatives])

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-12 lg:pb-20 relative overflow-hidden bg-brand-light">
        <div className="hero-blob bg-blue-100 w-[500px] h-[500px] top-[-100px] right-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-brand-green w-[300px] h-[300px] bottom-0 left-0 rounded-full animate-float-medium"></div>

        <div className="container-eco text-center reveal relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-brand-green uppercase bg-green-100 rounded-full">
            Nuestro Impacto
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6">
            Iniciativas que <br /> <span className="text-gradient">Transforman Comunidades</span>
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Proyectos y campañas con los que llevamos el reciclaje sostenible a barrios, empresas e instituciones.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-eco">
          {initiatives.length === 0 ? (
            <div className="text-center reveal py-12">
              <p className="text-brand-gray text-lg">Pronto compartiremos aquí nuestras iniciativas en curso.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => {
                const cfg = statusConfig[initiative.status] || statusConfig.ACTIVE
                return (
                  <div
                    key={initiative.id}
                    className="feature-card overflow-hidden group h-full flex flex-col reveal"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {initiative.imageUrl ? (
                      <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                        <img
                          src={initiative.imageUrl}
                          alt={initiative.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-32 -mx-8 -mt-8 mb-6 bg-brand-light flex items-center justify-center">
                        <i className="fas fa-seedling text-4xl text-brand-green/40"></i>
                      </div>
                    )}
                    <span className={`inline-block w-fit px-3 py-1 mb-3 text-xs font-bold rounded-full ${cfg.badge}`}>
                      {cfg.label}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{initiative.title}</h3>
                    <p className="text-brand-gray text-sm leading-relaxed flex-grow">{initiative.content}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 lg:py-20 bg-brand-light">
        <div className="container-eco reveal">
          <div className="bg-brand-dark rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">¿Tienes una idea para tu comunidad o empresa?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Conversemos sobre cómo llevar una iniciativa de reciclaje sostenible a tu sector.
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

      <ContactModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        serviceType="proceso"
      />
    </div>
  )
}
