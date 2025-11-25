import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'

export const metadata = {
  title: 'Proceso - Mundo Eco Verde',
  description: 'Conoce nuestro proceso integral de gestión de residuos desde la recolección hasta la comercialización',
}

export default function ProcesoPage() {
  const etapasDetalladas = [
    {
      numero: "01",
      titulo: "Diagnóstico y Planificación",
      icono: "📋",
      descripcion: "Evaluamos las necesidades específicas de cada cliente y diseñamos un plan personalizado.",
      actividades: [
        "Visita técnica de diagnóstico",
        "Análisis de generación de residuos",
        "Diseño de rutas y frecuencias",
        "Capacitación inicial al personal"
      ],
      duracion: "1-2 días",
      resultado: "Plan de gestión personalizado"
    },
    {
      numero: "02",
      titulo: "Separación en Fuente",
      icono: "🏠",
      descripcion: "Implementamos sistemas de separación en el origen con contenedores especializados y capacitación.",
      actividades: [
        "Instalación de contenedores diferenciados",
        "Capacitación práctica al personal",
        "Material educativo visual",
        "Seguimiento y ajustes iniciales"
      ],
      duracion: "3-5 días",
      resultado: "Separación correcta en origen"
    },
    {
      numero: "03",
      titulo: "Recolección Programada",
      icono: "🚛",
      descripcion: "Recolección especializada según calendario establecido, con registro y trazabilidad.",
      actividades: [
        "Recolección en rutas optimizadas",
        "Registro digital de cantidades",
        "Control de calidad en sitio",
        "Comunicación constante con cliente"
      ],
      duracion: "Continuo",
      resultado: "Material recolectado y registrado"
    },
    {
      numero: "04",
      titulo: "Transporte Seguro",
      icono: "🚚",
      descripcion: "Transporte especializado de materiales a nuestra Estación de Clasificación (ECA).",
      actividades: [
        "Vehiculos autorizados y equipados",
        "Protocolos de bioseguridad",
        "Documentación de transporte",
        "Rutas optimizadas para eficiencia"
      ],
      duracion: "Según programación",
      resultado: "Material entregado en ECA"
    },
    {
      numero: "05",
      titulo: "Clasificación ECA",
      icono: "🏭",
      descripcion: "Proceso de clasificación manual y mecánica en nuestra estación certificada.",
      actividades: [
        "Recepción y pesaje inicial",
        "Clasificación por tipo de material",
        "Control de calidad riguroso",
        "Limpieza y acondicionamiento"
      ],
      duracion: "24-48 horas",
      resultado: "Materiales clasificados y limpios"
    },
    {
      numero: "06",
      titulo: "Procesamiento y Empaque",
      icono: "📦",
      descripcion: "Preparación de materiales para su comercialización a industrias transformadoras.",
      actividades: [
        "Compactación y enfardado",
        "Empaque según especificaciones",
        "Almacenamiento temporal",
        "Control de inventario"
      ],
      duracion: "24 horas",
      resultado: "Material listo para venta"
    },
    {
      numero: "07",
      titulo: "Comercialización",
      icono: "💰",
      descripcion: "Venta de materiales a industrias nacionales e internacionales.",
      actividades: [
        "Negociación con transformadores",
        "Coordinación logística",
        "Documentación y facturación",
        "Seguimiento de entregas"
      ],
      duracion: "2-5 días",
      resultado: "Cierre del ciclo de reciclaje"
    },
    {
      numero: "08",
      titulo: "Reporte y Seguimiento",
      icono: "📊",
      descripcion: "Entrega de reportes detallados y evaluación continua del proceso.",
      actividades: [
        "Reportes mensuales de gestión",
        "Indicadores de desempeño",
        "Reuniones de seguimiento",
        "Propuestas de mejora continua"
      ],
      duracion: "Continuo",
      resultado: "Transparencia y mejora continua"
    }
  ]

  const metricasProceso = [
    { valor: "95%", descripcion: "Tasa de aprovechamiento" },
    { valor: "24h", descripcion: "Tiempo promedio de procesamiento" },
    { valor: "100%", descripcion: "Trazabilidad garantizada" },
    { valor: "0%", descripcion: "Material a relleno sanitario" }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section para Proceso */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-eco-verde-800 to-eco-verde-900 text-white">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestro Proceso
            </h1>
            <p className="text-xl md:text-2xl text-eco-verde-100 leading-relaxed">
              Conoce cada etapa de nuestro sistema integral de gestión de residuos, 
              diseñado para maximizar el aprovechamiento y garantizar la sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso Detallado */}
      <section className="py-20 bg-white">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              Ciclo Completo de Gestión
            </h2>
            <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto">
              Desde la separación en fuente hasta la comercialización, cada etapa está 
              optimizada para garantizar eficiencia, calidad y máximo impacto ambiental positivo.
            </p>
          </div>

          <div className="space-y-8">
            {etapasDetalladas.map((etapa, index) => (
              <div key={index} className="bg-eco-verde-50 rounded-2xl p-8 hover:shadow-eco-lg transition-all duration-300">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Número e Icono */}
                  <div className="md:col-span-2 text-center">
                    <div className="bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 text-white rounded-2xl p-6 mb-4">
                      <div className="text-3xl font-bold mb-2">{etapa.numero}</div>
                      <div className="text-4xl">{etapa.icono}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-semibold text-eco-verde-800">{etapa.duracion}</p>
                    </div>
                  </div>
                  
                  {/* Contenido Principal */}
                  <div className="md:col-span-7">
                    <h3 className="text-2xl font-bold text-eco-verde-800 mb-3">
                      {etapa.titulo}
                    </h3>
                    <p className="text-eco-neutral-gris mb-4 text-lg leading-relaxed">
                      {etapa.descripcion}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-eco-verde-800 mb-2">📝 Actividades:</h4>
                        <ul className="space-y-1">
                          {etapa.actividades.map((actividad, idx) => (
                            <li key={idx} className="flex items-center text-sm text-eco-verde-700">
                              <span className="w-1.5 h-1.5 bg-eco-verde-500 rounded-full mr-2"></span>
                              {actividad}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resultado */}
                  <div className="md:col-span-3">
                    <div className="card rounded-xl p-4 border-l-4 border-eco-verde-500">
                      <h4 className="font-bold text-eco-verde-800 mb-2">🎯 Resultado:</h4>
                      <p className="text-eco-verde-700 text-sm">{etapa.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas del Proceso */}
      <section className="py-20 bg-eco-verde-900 text-white">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Eficiencia Comprobada
            </h2>
            <p className="text-xl text-eco-verde-100 max-w-2xl mx-auto">
              Nuestros números hablan por la calidad y eficiencia de nuestro proceso
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {metricasProceso.map((metrica, index) => (
              <div key={index} className="text-center">
                <div className="bg-eco-verde-800 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-eco-verde-300 mb-4">
                    {metrica.valor}
                  </div>
                  <p className="text-eco-verde-100 text-lg font-semibold">
                    {metrica.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios del Sistema */}
      <section className="py-20 bg-white">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              Beneficios de Nuestro Sistema
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: "🌱 Beneficios Ambientales",
                items: [
                  "Reducción de huella de carbono",
                  "Disminución de residuos en rellenos sanitarios",
                  "Conservación de recursos naturales",
                  "Contribución a economía circular"
                ]
              },
              {
                titulo: "💼 Beneficios Económicos",
                items: [
                  "Reducción de costos de disposición",
                  "Generación de ingresos por materiales",
                  "Cumplimiento normativo sin multas",
                  "Mejora de competitividad"
                ]
              },
              {
                titulo: "👥 Beneficios Sociales",
                items: [
                  "Generación de empleo local",
                  "Dignificación del oficio del reciclador",
                  "Educación ambiental comunitaria",
                  "Mejora de la salud pública"
                ]
              }
            ].map((beneficio, index) => (
              <div key={index} className="card-eco rounded-2xl p-6">
                <h3 className="text-xl font-bold text-eco-verde-800 mb-4">
                  {beneficio.titulo}
                </h3>
                <ul className="space-y-3">
                  {beneficio.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-eco-verde-700">
                      <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología y Innovación */}
      <section className="py-20 bg-eco-verde-50">
        <div className="container-eco">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-eco-verde-800 mb-6">
                Tecnología en Nuestro Proceso
              </h2>
              <div className="space-y-4 text-eco-neutral-gris text-lg leading-relaxed">
                <p>
                  Integramos <strong>tecnología de punta</strong> en cada etapa de nuestro 
                  proceso para garantizar máxima eficiencia y trazabilidad completa.
                </p>
                <p>
                  Desde <strong>sistemas de ruteo inteligente</strong> hasta 
                  <strong> plataformas digitales de monitoreo</strong>, cada innovación 
                  está orientada a optimizar resultados y transparentar nuestro trabajo.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    "Sistema GPS en flota",
                    "Plataforma digital de reportes",
                    "App de seguimiento en tiempo real",
                    "Análisis de datos predictivos"
                  ].map((tech, idx) => (
                    <div key={idx} className="card rounded-lg p-3 text-center">
                      <p className="text-eco-verde-800 font-semibold text-sm">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-eco-verde-600 to-eco-verde-500 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Innovación Continua</h3>
              <p className="text-eco-verde-100 mb-6">
                Estamos en constante evolución para incorporar las mejores 
                prácticas y tecnologías en beneficio de nuestros clientes y el medio ambiente.
              </p>
              <Link href="/contacto" className="btn-secondary px-6 py-3 rounded-full font-semibold inline-block">
                Conocer Más Innovaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-eco-verde-600 to-eco-verde-700 text-white">
        <div className="container-eco text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Quieres Implementar Este Proceso?
          </h2>
          <p className="text-xl text-eco-verde-100 mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo a transformar tu gestión de residuos con nuestro 
            sistema probado y certificado de aprovechamiento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-secondary text-lg px-8 py-4 rounded-full font-semibold">
              📞 Iniciar Proceso
            </Link>
            <Link href="/contacto" className="bg-eco-verde-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-eco-verde-900 transition">
              📥 Descargar Brochure
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}