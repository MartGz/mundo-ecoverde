import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'

export const metadata = {
  title: 'Servicios - Mundo Eco Verde',
  description: 'Conoce todos nuestros servicios de recolección, clasificación y gestión integral de residuos',
}

export default function ServiciosPage() {
  const serviciosDetallados = [
    {
      icon: '🚛',
      title: 'Recolección Selectiva',
      description: 'Servicio especializado de recolección de materiales aprovechables directamente en la fuente.',
      caracteristicas: [
        'Recolección programada y puntual',
        'Separación en fuente (orgánico/inorgánico)',
        'Logística optimizada por rutas',
        'Personal uniformado y capacitado',
        'Registro digital de recolecciones'
      ],
      beneficios: [
        'Reducción de costos de disposición final',
        'Cumplimiento normativo ambiental',
        'Reportes mensuales de gestión',
        'Certificado de aprovechamiento'
      ]
    },
    {
      icon: '🏭',
      title: 'Clasificación y Aprovechamiento ECA',
      description: 'Procesamiento de materiales reciclables en nuestra estación certificada.',
      caracteristicas: [
        'Clasificación manual especializada',
        'Proceso mecánico asistido',
        'Control de calidad riguroso',
        'Pesaje y registro documentado',
        'Limpieza y acondicionamiento'
      ],
      beneficios: [
        'Máximo aprovechamiento de materiales',
        'Materiales listos para industria',
        'Trazabilidad completa del proceso',
        'Certificación de calidad'
      ]
    },
    {
      icon: '📊',
      title: 'Gestión Integral de Residuos',
      description: 'Soluciones completas para el manejo de residuos en empresas y comunidades.',
      caracteristicas: [
        'Diagnóstico inicial gratuito',
        'Plan de gestión personalizado',
        'Capacitación al personal',
        'Cumplimiento normativo',
        'Reportes de sostenibilidad'
      ],
      beneficios: [
        'Cumplimiento legal garantizado',
        'Reducción de huella ambiental',
        'Mejora de imagen corporativa',
        'Ahorros económicos significativos'
      ]
    },
    {
      icon: '💰',
      title: 'Comercialización de Materiales',
      description: 'Venta y distribución de materiales reciclables procesados a industrias transformadoras.',
      caracteristicas: [
        'Materiales certificados y limpios',
        'Precios competitivos de mercado',
        'Contratos estables',
        'Logística de entrega',
        'Documentación completa'
      ],
      beneficios: [
        'Ingresos por materiales recuperados',
        'Mercados especializados garantizados',
        'Precios referenciados internacionalmente',
        'Transparencia en transacciones'
      ]
    },
    {
      icon: '🎓',
      title: 'Educación y Capacitación Ambiental',
      description: 'Programas de formación y concienciación sobre reciclaje y sostenibilidad.',
      caracteristicas: [
        'Talleres teórico-prácticos',
        'Charlas empresariales',
        'Material didáctico especializado',
        'Capacitación in situ',
        'Seguimiento y evaluación'
      ],
      beneficios: [
        'Cultura organizacional ambiental',
        'Personal comprometido y capacitado',
        'Mejora en separación en fuente',
        'Comunidades ambientalmente responsables'
      ]
    },
    {
      icon: '🧹',
      title: 'Limpieza y Mantenimiento Especial',
      description: 'Servicios de limpieza ecológica para áreas comunes y espacios públicos.',
      caracteristicas: [
        'Limpieza con productos biodegradables',
        'Equipos especializados',
        'Personal capacitado en técnicas ecológicas',
        'Manejo adecuado de residuos',
        'Programación flexible'
      ],
      beneficios: [
        'Espacios limpios y saludables',
        'Cero impacto ambiental',
        'Personal uniformado y certificado',
        'Resultados visibles inmediatos'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section para Servicios */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-eco-verde-800 to-eco-verde-900 text-white">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-eco-verde-100 leading-relaxed">
              Soluciones integrales en gestión de residuos, desde la recolección 
              hasta la comercialización, con los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20 bg-white">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto">
              Ofrecemos un portafolio completo de servicios diseñados para satisfacer 
              las necesidades específicas de cada cliente, siempre con enfoque sostenible.
            </p>
          </div>

          <div className="space-y-16">
            {serviciosDetallados.map((servicio, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-eco-verde-50 rounded-2xl p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{servicio.icon}</div>
                      <h3 className="text-3xl font-bold text-eco-verde-800">
                        {servicio.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-eco-neutral-gris mb-6 leading-relaxed">
                      {servicio.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-eco-verde-800 mb-3 text-lg">📋 Características</h4>
                        <ul className="space-y-2">
                          {servicio.caracteristicas.map((caracteristica, idx) => (
                            <li key={idx} className="flex items-center text-eco-verde-700">
                              <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                              {caracteristica}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-eco-verde-800 mb-3 text-lg">✅ Beneficios</h4>
                        <ul className="space-y-2">
                          {servicio.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="flex items-center text-eco-verde-700">
                              <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                              {beneficio}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 rounded-2xl p-8 text-white text-center h-full flex items-center justify-center">
                    <div>
                      <div className="text-6xl mb-4">{servicio.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{servicio.title}</h3>
                      <Link href="/contacto" className="btn-secondary px-6 py-3 rounded-full font-semibold inline-block">
                        Solicitar Información
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Contratación */}
      <section className="py-20 bg-eco-verde-50">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              ¿Cómo Contratar Nuestros Servicios?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Consulta', desc: 'Nos contactas para evaluar tus necesidades' },
              { step: '2', title: 'Diagnóstico', desc: 'Realizamos un diagnóstico gratuito' },
              { step: '3', title: 'Propuesta', desc: 'Presentamos propuesta personalizada' },
              { step: '4', title: 'Implementación', desc: 'Iniciamos el servicio contratado' }
            ].map((paso, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-eco-verde-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {paso.step}
                </div>
                <h3 className="font-bold text-eco-verde-800 text-lg mb-2">{paso.title}</h3>
                <p className="text-eco-verde-700 text-sm">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-eco-verde-600 to-eco-verde-700 text-white">
        <div className="container-eco text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Gestión de Residuos?
          </h2>
          <p className="text-xl text-eco-verde-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y recibe una asesoría gratuita para implementar 
            soluciones sostenibles en tu empresa o comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-secondary text-lg px-8 py-4 rounded-full font-semibold">
              📞 Solicitar Cotización
            </Link>
            <Link href="/contacto" className="bg-eco-verde-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-eco-verde-900 transition">
              💬 Agendar Asesoría
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}