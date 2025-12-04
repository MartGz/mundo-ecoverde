'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ProcessSection() {
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
  }, [])

  const steps = [
    {
      icon: 'fas fa-clipboard-list',
      title: 'Diagnóstico y Consultoría',
      description: 'Antes de recoger la primera bolsa, entendemos tu operación. Realizamos un aforo inicial para identificar tipos de residuos, volúmenes y puntos críticos.',
      items: ['Plan de Gestión Integral (PGIRS)', 'Capacitación al personal']
    },
    {
      icon: 'fas fa-truck-fast',
      title: 'Logística y Recolección',
      description: 'Ejecución operativa con nuestra flota especializada. Garantizamos frecuencias fijas y personal uniformado que cumple con protocolos de seguridad.',
      items: ['Rutas optimizadas por GPS', 'Manifiesto de recolección digital']
    },
    {
      icon: 'fas fa-hands-holding-circle',
      title: 'Clasificación Técnica (ECA)',
      description: 'El material ingresa a nuestra Estación de Clasificación. Operarios expertos separan, limpian y compactan los residuos según sus propiedades.',
      items: ['Pesaje electrónico certificado', 'Segregación por polímeros y fibras']
    },
    {
      icon: 'fas fa-industry',
      title: 'Valorización y Cierre de Ciclo',
      description: 'Transformamos el residuo en materia prima secundaria. Comercializamos los materiales compactados directamente con industrias transformadoras.',
      items: ['Reincorporación a cadena productiva', 'Reducción de huella de carbono']
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certificación Ambiental',
      description: 'El ciclo finaliza con la emisión de tu Certificado de Aprovechamiento, un documento legal que valida tu cumplimiento normativo.',
      items: ['Documento legal válido', 'Respaldo de indicadores de sostenibilidad']
    }
  ]

  const stepTitles = [
    'Entregables Clave:',
    'Características:',
    'Proceso Técnico:',
    'Economía Circular:',
    'Certificación:'
  ]

  return (
    <section id="proceso" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container-eco timeline-container">
        
        <div className="timeline-line"></div>
        <div className="timeline-progress"></div>

        <div className="space-y-16 lg:space-y-24 relative z-10">

          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center reveal group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Círculo con ícono */}
              <div className={`absolute left-[14px] md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-1/2 flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 
                ${index === 0 ? 'bg-brand-green text-white' : 'bg-white text-brand-green'} 
                rounded-full shadow-green border-4 lg:border-[6px] border-white group-hover:bg-brand-green group-hover:text-white transition-colors duration-300`}>
                <i className={`${step.icon} text-lg lg:text-2xl`}></i>
              </div>

              {/* Contenido de la tarjeta */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'} w-full pl-16 md:pl-0 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className="step-card p-6 lg:p-8 xl:p-10">
                  <span className="step-number-bg">0{index + 1}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3">{step.title}</h3>
                    <p className="text-brand-gray mb-6 leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="text-xs font-bold text-brand-green uppercase mb-2">{stepTitles[index]}</h4>
                      <ul className={`text-sm text-brand-dark space-y-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <i className="fas fa-circle-check text-brand-green"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Espacio vacío para la otra mitad en desktop */}
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}

          <div className="reveal pt-8 lg:pt-16 flex flex-col items-center justify-center text-center relative z-20">
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-brand-dark rounded-full flex items-center justify-center text-brand-green text-3xl lg:text-4xl shadow-2xl mb-6 lg:mb-8 border-4 border-white animate-float-medium">
              <i className="fas fa-certificate"></i>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">Certificación Ambiental</h3>
            <p className="text-brand-gray max-w-xl mb-6 lg:mb-8 text-base lg:text-lg">
              El ciclo finaliza con la emisión de tu <strong>Certificado de Aprovechamiento</strong>, un documento legal que valida tu cumplimiento normativo y respalda tus indicadores de sostenibilidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="btn-primary px-8 lg:px-10 py-3 lg:py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-green hover:shadow-lg transition-all text-sm lg:text-base">
                Solicitar Recolección <i className="fas fa-arrow-right"></i>
              </Link>
              <button className="px-8 lg:px-10 py-3 lg:py-4 bg-white border border-gray-200 text-brand-dark font-bold rounded-xl hover:border-brand-green hover:text-brand-green transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                <i className="fas fa-download"></i> Ver Ejemplo de Certificado
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}