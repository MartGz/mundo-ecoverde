'use client'

import { Home, Truck, Filter, Factory, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProcessSection() {
  const steps = [
    {
      icon: Home,
      title: 'Separación en Fuente',
      description: 'Los usuarios separan los residuos aprovechables en sus hogares o empresas.',
      details: ['Educación previa', 'Contenedores específicos', 'Calendarización']
    },
    {
      icon: Truck,
      title: 'Recolección Selectiva',
      description: 'Nuestros vehículos especializados recolectan los materiales de forma programada.',
      details: ['Rutas optimizadas', 'Personal capacitado', 'Registro digital']
    },
    {
      icon: Filter,
      title: 'Clasificación ECA',
      description: 'En nuestra estación clasificamos los materiales por tipo y calidad.',
      details: ['Proceso manual y mecánico', 'Control de calidad', 'Pesaje y registro']
    },
    {
      icon: Factory,
      title: 'Procesamiento',
      description: 'Preparación de materiales para su comercialización y transformación.',
      details: ['Limpieza y compactación', 'Empaque y almacenamiento', 'Certificación']
    },
    {
      icon: CheckCircle,
      title: 'Comercialización',
      description: 'Venta a industrias transformadoras y cierre del ciclo de reciclaje.',
      details: ['Mercados especializados', 'Precios competitivos', 'Reporte de impacto']
    }
  ]

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container-eco">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-verde-800 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto">
            Un sistema integral que garantiza el máximo aprovechamiento de los residuos, desde la fuente hasta su transformación final.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-eco-verde-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`bg-eco-verde-50 rounded-2xl p-6 max-w-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <h3 className="text-2xl font-bold text-eco-verde-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-eco-neutral-gris mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-eco-verde-700">
                          {index % 2 === 0 && <div className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></div>}
                          {detail}
                          {index % 2 !== 0 && <div className="w-2 h-2 bg-eco-verde-500 rounded-full ml-3"></div>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-eco-verde-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-eco-verde-600 to-eco-verde-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ciclo de Economía Circular
          </h3>
          <p className="text-eco-verde-100 text-lg max-w-2xl mx-auto mb-6">
            Cerramos el ciclo completo del reciclaje, transformando residuos en recursos valiosos y contribuyendo a la sostenibilidad ambiental de nuestra región.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">95%</div>
              <div className="text-eco-verde-200">Material Aprovechado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">24h</div>
              <div className="text-eco-verde-200">Tiempo Procesamiento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">100%</div>
              <div className="text-eco-verde-200">Trazabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">0%</div>
              <div className="text-eco-verde-200">Vertimiento</div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/proceso" className="btn-secondary px-6 py-3 rounded-full font-semibold inline-block">
              Conoce Nuestro Proceso Completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}