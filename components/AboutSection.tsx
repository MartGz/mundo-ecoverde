'use client'

import { Users, Target, Eye, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Promover la cultura del reciclaje y el aprovechamiento de residuos, contribuyendo al cuidado del medio ambiente y dignificando el oficio de los recicladores.'
    },
    {
      icon: Eye,
      title: 'Visión',
      description: 'Ser líderes en la gestión integral de residuos sólidos, reconocidos por nuestro compromiso ambiental y social en la región Caribe.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Compromiso ambiental, responsabilidad social, trabajo en equipo, innovación y sostenibilidad en todas nuestras operaciones.'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container-eco">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-verde-800 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto">
            Asociación sin ánimo de lucro comprometida con el medio ambiente y el desarrollo sostenible de nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-eco-verde-800 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-eco-neutral-gris mb-4 text-lg leading-relaxed">
              Desde nuestra fundación, nos hemos dedicado a la prestación de servicios de aseo público con especial enfoque en el aprovechamiento de residuos sólidos.
            </p>
            <p className="text-eco-neutral-gris mb-6 text-lg leading-relaxed">
              Como <span className="font-semibold text-eco-verde-700">Centro de Clasificación ECA</span>, trabajamos para transformar los residuos en oportunidades, contribuyendo a la economía circular y al cuidado de nuestro planeta.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-eco-verde-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-eco-verde-700">5+</p>
                <p className="text-sm text-eco-verde-600">Años de Experiencia</p>
              </div>
              <div className="bg-eco-verde-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-eco-verde-700">50+</p>
                <p className="text-sm text-eco-verde-600">Familias Beneficiadas</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/nosotros" className="btn-outline border-eco-verde-600 text-eco-verde-600 hover:bg-eco-verde-600 hover:text-white px-6 py-3 rounded-full font-semibold inline-block">
                Conoce Más Sobre Nosotros
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-eco-verde-50 to-eco-verde-100 rounded-2xl p-8 h-full border-2 border-eco-verde-200">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-eco-verde-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-eco-verde-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-eco-verde-700 to-eco-verde-800 rounded-2xl p-8 text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-4 text-eco-verde-300" />
          <h3 className="text-2xl font-bold mb-4">Nuestro Equipo</h3>
          <p className="text-eco-verde-100 text-lg max-w-2xl mx-auto mb-6">
            Contamos con un equipo de profesionales y recicladores comprometidos con la causa ambiental, trabajando día a día para hacer de Cartagena una ciudad más limpia y sostenible.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">500+</div>
              <div className="text-eco-verde-200">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">1000+</div>
              <div className="text-eco-verde-200">Toneladas Recicladas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">50+</div>
              <div className="text-eco-verde-200">Familias Beneficiadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eco-verde-300">5+</div>
              <div className="text-eco-verde-200">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}