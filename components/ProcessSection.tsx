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

  const pasosOperativos = [
    {
      icon: 'fas fa-truck-loading',
      title: '1. Recolección de Residuos',
      description: 'Implementamos micro y macro rutas optimizadas para el retiro eficiente de materiales aprovechables directamente en la fuente.',
      features: ['Micro rutas comunitarias', 'Macro rutas empresariales', 'Programación flexible']
    },
    {
      icon: 'fas fa-truck',
      title: '2. Transporte de Residuos',
      description: 'Transporte seguro y especializado de materiales aprovechables hacia nuestra Estación de Clasificación.',
      features: ['Flota propia certificada', 'Logística optimizada', 'Seguimiento GPS']
    },
    {
      icon: 'fas fa-warehouse',
      title: '3. Clasificación en ECA',
      description: 'Procesamiento técnico en nuestra Estación de Clasificación y Aprovechamiento (ECA) con los más altos estándares.',
      features: ['Clasificación manual experta', 'Almacenamiento seguro', 'Control de calidad']
    },
    {
      icon: 'fas fa-industry',
      title: '4. Transformación de Materiales',
      description: 'Valorización y transformación de residuos para su reintroducción a las cadenas productivas.',
      features: ['Prensado y compactación', 'Procesamiento especializado', 'Valorización máxima']
    }
  ]

  const pasosSociales = [
    {
      icon: 'fas fa-chalkboard-user',
      title: '5. Capacitación y Sensibilización',
      description: 'Programas educativos para comunidades y empresas sobre la importancia del reciclaje y manejo de residuos.',
      features: ['Talleres prácticos', 'Charlas empresariales', 'Material didáctico']
    },
    {
      icon: 'fas fa-bullhorn',
      title: '6. Campañas Pedagógicas',
      description: 'Campañas de separación en la fuente para mejorar los índices de reciclaje y conciencia ambiental.',
      features: ['Campañas comunitarias', 'Separación en fuente', 'Monitoreo de resultados']
    },
    {
      icon: 'fas fa-seedling',
      title: '7. Desarrollo de Proyectos',
      description: 'Diseño e implementación de proyectos ambientales sostenibles que beneficien a la comunidad.',
      features: ['Diagnóstico ambiental', 'Diseño de proyectos', 'Implementación y seguimiento']
    },
    {
      icon: 'fas fa-handshake',
      title: '8. Comercialización Certificada',
      description: 'Comercialización y disposición final certificada de materiales aprovechables con trazabilidad completa.',
      features: ['Certificados de disposición', 'Precios competitivos', 'Trazabilidad completa']
    }
  ]

  const metricas = [
    {
      icon: 'fas fa-recycle',
      valor: '95%',
      descripcion: 'Tasa de aprovechamiento',
      color: 'text-brand-green'
    },
    {
      icon: 'fas fa-clock',
      valor: '24h',
      descripcion: 'Procesamiento',
      color: 'text-blue-500'
    },
    {
      icon: 'fas fa-shield-check',
      valor: '100%',
      descripcion: 'Certificación',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-users',
      valor: '50+',
      descripcion: 'Recicladores formalizados',
      color: 'text-purple-500'
    }
  ]

  const materialesProcesados = [
    { material: 'Papel y Cartón', porcentaje: 35, color: 'bg-blue-500' },
    { material: 'Plástico', porcentaje: 28, color: 'bg-red-500' },
    { material: 'Vidrio', porcentaje: 18, color: 'bg-green-500' },
    { material: 'Aluminio', porcentaje: 12, color: 'bg-yellow-500' },
    { material: 'Tetra Pak', porcentaje: 4, color: 'bg-purple-500' },
    { material: 'Aceite Usado', porcentaje: 2, color: 'bg-orange-500' },
    { material: 'Botellas de Amor', porcentaje: 1, color: 'bg-pink-500' }
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

        {/* Gestión Operativa */}
        <div className="mb-16 lg:mb-24 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10">Gestión Operativa</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pasosOperativos.map((paso, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green mx-auto">
                  <i className={`${paso.icon} text-2xl lg:text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{paso.title}</h4>
                <p className="text-brand-gray text-sm lg:text-base mb-4">{paso.description}</p>
                <ul className="text-sm text-brand-gray space-y-2">
                  {paso.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 justify-center">
                      <i className="fas fa-check-circle text-brand-green text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gestión Social */}
        <div className="mb-16 lg:mb-24 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10">Gestión Social</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pasosSociales.map((paso, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green mx-auto">
                  <i className={`${paso.icon} text-2xl lg:text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{paso.title}</h4>
                <p className="text-brand-gray text-sm lg:text-base mb-4">{paso.description}</p>
                <ul className="text-sm text-brand-gray space-y-2">
                  {paso.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 justify-center">
                      <i className="fas fa-check-circle text-brand-green text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas y Materiales */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Métricas */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-brand-dark mb-8">Nuestro Impacto</h3>
            <div className="grid grid-cols-2 gap-6">
              {metricas.map((metrica, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                  <i className={`${metrica.icon} ${metrica.color} text-3xl mb-3`}></i>
                  <div className="text-4xl font-bold text-brand-dark mb-1">{metrica.valor}</div>
                  <p className="text-sm text-brand-gray">{metrica.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Materiales Procesados */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-brand-dark mb-8">Materiales que Procesamos</h3>
            <div className="space-y-4">
              {materialesProcesados.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-brand-dark">{item.material}</span>
                    <span className="text-brand-gray">{item.porcentaje}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.porcentaje}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-brand-light rounded-3xl p-8 lg:p-12 mb-12 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                <i className="fas fa-shield-alt text-brand-green text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2">Integridad</h4>
              <p className="text-brand-gray">Principios y normas éticas en todas nuestras acciones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                <i className="fas fa-users text-brand-green text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2">Trabajo en Equipo</h4>
              <p className="text-brand-gray">Comunicación efectiva y resultados colaborativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                <i className="fas fa-heart text-brand-green text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2">Respeto</h4>
              <p className="text-brand-gray">Trato amable y seguridad para todos nuestros colaboradores</p>
            </div>
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