'use client'

import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'
import { useState, useEffect } from 'react'

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

interface ProcessMaterial {
  id: string
  order: number
  name: string
  percent: number
}

const METRIC_COLORS = ['text-brand-green', 'text-blue-500', 'text-green-500', 'text-purple-500']
const MATERIAL_COLORS = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500']
const NORMATIVA_ICONS = ['fas fa-scale-balanced', 'fas fa-file-contract', 'fas fa-shield-halved']

export default function ProcesoPageClient({
  meta,
  steps,
  materials,
}: {
  meta: ProcessMeta
  steps: ProcessStep[]
  materials: ProcessMaterial[]
}) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'cotizacion' | 'recoleccion' | 'proceso'>('cotizacion')

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
  }, [meta, steps, materials])

  const handleOpenModal = (type: 'cotizacion' | 'recoleccion' | 'proceso') => {
    setModalType(type)
    setShowModal(true)
  }

  const sortedSteps = [...steps].sort((a, b) => a.order - b.order)
  const sortedMaterials = [...materials].sort((a, b) => a.order - b.order)

  const metricas = [
    { icono: meta.metric1Icon, valor: meta.metric1Value, descripcion: meta.metric1Label, color: METRIC_COLORS[0] },
    { icono: meta.metric2Icon, valor: meta.metric2Value, descripcion: meta.metric2Label, color: METRIC_COLORS[1] },
    { icono: meta.metric3Icon, valor: meta.metric3Value, descripcion: meta.metric3Label, color: METRIC_COLORS[2] },
    { icono: meta.metric4Icon, valor: meta.metric4Value, descripcion: meta.metric4Label, color: METRIC_COLORS[3] },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section para Proceso */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-brand-light to-blue-50">
        <div className="hero-blob bg-brand-green/20 w-[600px] h-[600px] top-[-100px] left-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-blue-100/50 w-[400px] h-[400px] bottom-0 right-0 rounded-full animate-float-medium"></div>

        <div className="container-eco relative z-10 text-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-xs font-bold text-brand-gray uppercase tracking-widest">
              {meta.heroBadge}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
            {meta.heroTitle}
          </h1>

          <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed font-medium">
            {meta.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Proceso Detallado */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container-eco">
          <div className="text-center mb-12 lg:mb-20 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Nuestro Ciclo de Gestión
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto text-lg">
              Desde la recolección hasta la comercialización, garantizamos trazabilidad completa
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-green to-blue-500 hidden lg:block"></div>

            {/* Pasos del proceso */}
            <div className="space-y-12 lg:space-y-20">
              {sortedSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center reveal ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-brand-dark">{step.title}</h3>
                      </div>
                      <p className="text-brand-gray mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <i className="fas fa-check-circle text-brand-green"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ícono en el centro */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-16 h-16 bg-white border-4 border-brand-green rounded-full text-brand-green text-2xl shadow-lg">
                    <i className={step.icon}></i>
                  </div>

                  {/* Espacio vacío para la otra mitad */}
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificación Final */}
          <div className="mt-20 bg-gradient-to-r from-brand-green to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white reveal">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Certificación de Aprovechamiento
              </h3>
              <p className="text-green-100 mb-8">
                Al finalizar el proceso, entregamos un Certificado de Aprovechamiento que valida tu contribución ambiental y cumple con los requisitos normativos vigentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleOpenModal('proceso')}
                  className="btn-secondary text-lg px-8 py-3 rounded-full font-semibold"
                >
                  <i className="fas fa-play-circle mr-2"></i> Iniciar Proceso
                </button>
                <button className="bg-white text-brand-green px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
                  <i className="fas fa-download mr-2"></i> Descargar Certificado Ejemplo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas y Materiales */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="container-eco">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Métricas */}
            <div className="reveal">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">
                Nuestro Impacto en Números
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {metricas.map((metrica, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                    <i className={`${metrica.icono} ${metrica.color} text-3xl mb-3`}></i>
                    <div className="text-4xl font-bold text-brand-dark mb-1">{metrica.valor}</div>
                    <p className="text-sm text-brand-gray">{metrica.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Materiales Procesados */}
            <div className="reveal">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">
                Distribución de Materiales Aprovechados
              </h3>
              <div className="space-y-4">
                {sortedMaterials.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-brand-dark">{item.name}</span>
                      <span className="text-brand-gray">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${MATERIAL_COLORS[index % MATERIAL_COLORS.length]} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cumplimiento Normativo */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-eco text-center reveal">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-8 lg:mb-12">
            Cumplimos con la Normatividad Vigente
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {meta.normativas.map((norma, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <i className={`${NORMATIVA_ICONS[index % NORMATIVA_ICONS.length]} text-3xl text-brand-green mb-4`}></i>
                <h4 className="font-bold text-lg text-brand-dark mb-2">{norma.ley}</h4>
                <p className="text-brand-gray text-sm">{norma.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 lg:py-20 bg-brand-dark text-white">
        <div className="container-eco text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para implementar un sistema de aprovechamiento sostenible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos y recibe una evaluación gratuita de tus residuos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleOpenModal('cotizacion')}
                className="btn-primary text-lg px-8 py-4 rounded-xl font-semibold"
              >
                <i className="fas fa-calculator mr-2"></i> Solicitar Cotización
              </button>
              <button
                onClick={() => handleOpenModal('recoleccion')}
                className="bg-white text-brand-dark px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition"
              >
                <i className="fas fa-truck mr-2"></i> Solicitar Recolección
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        serviceType={modalType}
      />
    </div>
  )
}
