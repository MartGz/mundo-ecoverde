'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { useEffect } from 'react'

export default function AboutSection() {
  useReveal()

  return (
    <section id="nosotros" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" 
                alt="Equipo trabajando"
                className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover transform hover:-translate-y-2 transition duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop" 
                alt="Instalaciones"
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="text-brand-green font-bold uppercase text-sm mb-2">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Más que reciclaje, creamos cultura ambiental.
            </h3>
            <p className="text-brand-gray text-lg mb-6 leading-relaxed">
              En <span className="font-bold text-brand-dark">Mundo Eco Verde</span>, no solo gestionamos residuos; diseñamos soluciones. Desde 2018, hemos liderado la transformación de la industria del reciclaje integrando tecnología y dignidad humana.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 flex-shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Certificación Ambiental</h4>
                  <p className="text-sm text-brand-gray">Procesos auditados y cumplimiento normativo garantizado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 flex-shrink-0">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Inclusión Social</h4>
                  <p className="text-sm text-brand-gray">Dignificamos la labor de más de 50 familias recicladoras.</p>
                </div>
              </div>
            </div>

            <Link 
              href="/nosotros" 
              className="text-brand-green font-bold hover:text-brand-dark transition-colors inline-flex items-center gap-2 border-b-2 border-brand-green pb-1"
            >
              Conoce nuestra historia <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}