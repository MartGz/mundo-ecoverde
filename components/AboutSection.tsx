'use client'

import { Users, Target, Eye, Heart } from 'lucide-react'

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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Asociación sin ánimo de lucro comprometida con el medio ambiente y el desarrollo sostenible de nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Desde nuestra fundación, nos hemos dedicado a la prestación de servicios de aseo público con especial enfoque en el aprovechamiento de residuos sólidos.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Como <span className="font-semibold text-green-700">Centro de Clasificación ECA</span>, trabajamos para transformar los residuos en oportunidades, contribuyendo a la economía circular y al cuidado de nuestro planeta.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-700">5+</p>
                <p className="text-sm text-green-600">Años de Experiencia</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-700">50+</p>
                <p className="text-sm text-green-600">Familias Beneficiadas</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-full">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-green-800">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-4 text-green-300" />
          <h3 className="text-2xl font-bold mb-4">Nuestro Equipo</h3>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Contamos con un equipo de profesionales y recicladores comprometidos con la causa ambiental, trabajando día a día para hacer de Cartagena una ciudad más limpia y sostenible.
          </p>
        </div>
      </div>
    </section>
  )
}