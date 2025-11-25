'use client'

import { Truck, Recycle, Factory, Trash2, Package, Sprout } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Recolección Selectiva',
      description: 'Recolección especializada de materiales aprovechables en fuente, separando residuos orgánicos e inorgánicos.',
      features: ['Recolección programada', 'Separación en fuente', 'Logística especializada']
    },
    {
      icon: Recycle,
      title: 'Clasificación y Aprovechamiento',
      description: 'Proceso de clasificación de materiales reciclables en nuestra estación ECA con tecnología y personal calificado.',
      features: ['Clasificación manual y mecánica', 'Procesamiento de materiales', 'Control de calidad']
    },
    {
      icon: Factory,
      title: 'Gestión de Residuos',
      description: 'Manejo integral de residuos sólidos para empresas, condominios y comunidades.',
      features: ['Planes personalizados', 'Cumplimiento normativo', 'Reportes de gestión']
    },
    {
      icon: Package,
      title: 'Comercialización',
      description: 'Venta y distribución de materiales reciclables procesados a industrias y transformadores.',
      features: ['Materiales certificados', 'Precios competitivos', 'Trazabilidad completa']
    },
    {
      icon: Sprout,
      title: 'Educación Ambiental',
      description: 'Programas de capacitación y concienciación sobre reciclaje y sostenibilidad ambiental.',
      features: ['Talleres educativos', 'Charlas empresariales', 'Material didáctico']
    },
    {
      icon: Trash2,
      title: 'Limpieza Especial',
      description: 'Servicios de limpieza y mantenimiento de áreas comunes y espacios públicos.',
      features: ['Limpieza ecológica', 'Equipos especializados', 'Productos biodegradables']
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-eco-verde-50">
      <div className="container-eco">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-verde-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto">
            Soluciones integrales en manejo de residuos sólidos, desde la recolección hasta la comercialización de materiales aprovechables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card rounded-2xl p-6 hover:shadow-eco-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-eco-verde-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-eco-neutral-gris mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-eco-verde-700">
                    <div className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-eco-verde-800 mb-4">
            ¿Necesita un servicio personalizado?
          </h3>
          <p className="text-eco-neutral-gris mb-6 max-w-2xl mx-auto">
            Contáctenos para evaluar sus necesidades y desarrollar un plan de gestión de residuos a medida para su empresa o comunidad.
          </p>
          <Link href="/contacto" className="btn-primary px-8 py-3 rounded-full font-semibold inline-block">
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </section>
  )
}