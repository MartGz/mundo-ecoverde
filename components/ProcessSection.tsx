'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ProcessStep {
  id: string
  order: number
  icon: string
  title: string
  description: string
  items: string[]
  createdAt: Date
  updatedAt: Date
}

interface ValueItem {
  id: string
  order: number
  icon: string
  title: string
  description: string
  colorKey: string
  createdAt: Date
  updatedAt: Date
}

interface ProcessMeta {
  id: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  metric1Value: string
  metric1Label: string
  metric1Icon: string
  metric2Value: string
  metric2Label: string
  metric2Icon: string
  metric3Value: string
  metric3Label: string
  metric3Icon: string
  metric4Value: string
  metric4Label: string
  metric4Icon: string
  normativas: { ley: string; desc: string }[]
  updatedAt: Date
}

const METRIC_COLORS = ['text-brand-green', 'text-blue-500', 'text-green-500', 'text-purple-500']

const VALUE_COLOR_MAP: Record<string, string> = {
  green: 'text-brand-green',
  blue: 'text-blue-600',
  orange: 'text-orange-500',
  purple: 'text-purple-600',
  teal: 'text-teal-600',
  red: 'text-red-500',
}

export default function ProcessSection({
  steps,
  values,
  meta,
}: {
  steps: ProcessStep[]
  values: ValueItem[]
  meta: ProcessMeta
}) {
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
  }, [steps, values, meta])

  const sortedSteps = [...steps].sort((a, b) => a.order - b.order)
  const topValues = [...values].sort((a, b) => a.order - b.order).slice(0, 3)

  const metricas = [
    { icon: meta.metric1Icon, valor: meta.metric1Value, descripcion: meta.metric1Label, color: METRIC_COLORS[0] },
    { icon: meta.metric2Icon, valor: meta.metric2Value, descripcion: meta.metric2Label, color: METRIC_COLORS[1] },
    { icon: meta.metric3Icon, valor: meta.metric3Value, descripcion: meta.metric3Label, color: METRIC_COLORS[2] },
    { icon: meta.metric4Icon, valor: meta.metric4Value, descripcion: meta.metric4Label, color: METRIC_COLORS[3] },
  ]

  return (
    <section id="proceso" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-light/50 opacity-50 pointer-events-none -z-10"></div>

      <div className="container-eco relative z-10">
        <div className="text-center mb-12 lg:mb-20 reveal">
          <h2 className="text-brand-green font-bold uppercase text-sm mb-3 tracking-widest">Nuestro Proceso</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-brand-dark">
            Ciclo Integral de Aprovechamiento
          </h3>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto text-lg">
            Dignificamos el reciclaje a través de un proceso completo que transforma residuos en recursos
          </p>
        </div>

        {/* Pasos del Proceso */}
        <div className="mb-16 lg:mb-24 reveal">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {sortedSteps.map((step) => (
              <div key={step.id} className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green mx-auto">
                  <i className={`${step.icon} text-2xl lg:text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h4>
                <p className="text-brand-gray text-sm lg:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Nuestro Impacto</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metricas.map((metrica, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <i className={`${metrica.icon} ${metrica.color} text-3xl mb-3`}></i>
                <div className="text-4xl font-bold text-brand-dark mb-1">{metrica.valor}</div>
                <p className="text-sm text-brand-gray">{metrica.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="bg-brand-light rounded-3xl p-8 lg:p-12 mb-12 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {topValues.map((value) => (
              <div key={value.id} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <i className={`${value.icon} ${VALUE_COLOR_MAP[value.colorKey] || VALUE_COLOR_MAP.green} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">{value.title}</h4>
                <p className="text-brand-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-green to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white reveal">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              ¿Listo para implementar un sistema de aprovechamiento sostenible?
            </h3>
            <p className="text-green-100 mb-8">
              Contáctanos hoy mismo y recibe una evaluación gratuita de tus residuos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-brand-green px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-calculator mr-2"></i> Solicitar Cotización
              </Link>
              <Link
                href="/contacto?type=recoleccion"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-truck mr-2"></i> Solicitar Recolección
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
