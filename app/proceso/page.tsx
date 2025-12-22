'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactModal from '@/components/ContactModal'
import { useState } from 'react'
import { useEffect } from "react"

export default function ProcesoPage() {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'cotizacion' | 'recoleccion' | 'proceso'>('cotizacion')

  useEffect(() => {
    // Animaciones Reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (type: 'cotizacion' | 'recoleccion' | 'proceso') => {
    setModalType(type)
    setShowModal(true)
  }

  const steps = [
    {
      numero: "01",
      icono: "fas fa-clipboard-check",
      titulo: "Diagnóstico Inicial",
      descripcion: "Evaluamos tu operación para identificar tipos de residuos, volúmenes y puntos críticos de generación. Desarrollamos un plan personalizado de Gestión Integral de Residuos (PGIRS).",
      items: ["Aforo de residuos", "Plan de Gestión Integral (PGIRS)", "Capacitación inicial al personal"]
    },
    {
      numero: "02",
      icono: "fas fa-truck-pickup",
      titulo: "Recolección y Transporte",
      descripcion: "Implementamos micro y macro rutas optimizadas con nuestra flota especializada. Garantizamos frecuencias fijas y personal uniformado con todos los protocolos de seguridad.",
      items: ["Micro rutas comunitarias", "Macro rutas empresariales", "Manifiesto de recolección digital"]
    },
    {
      numero: "03",
      icono: "fas fa-warehouse",
      titulo: "Clasificación en ECA",
      descripcion: "El material llega a nuestra Estación de Clasificación y Aprovechamiento (ECA). Operarios expertos separan, limpian y clasifican según tipo de material.",
      items: ["Pesaje electrónico certificado", "Clasificación por tipo de material", "Almacenamiento temporal seguro"]
    },
    {
      numero: "04",
      icono: "fas fa-industry",
      titulo: "Transformación y Procesamiento",
      descripcion: "Transformamos los residuos en materia prima secundaria mediante procesos de compactación, trituración y preparación para la comercialización.",
      items: ["Compactación y prensado", "Procesamiento según especificaciones", "Preparación para transporte industrial"]
    },
    {
      numero: "05",
      icono: "fas fa-handshake",
      titulo: "Comercialización Certificada",
      descripcion: "Comercializamos los materiales procesados directamente con industrias transformadoras, garantizando trazabilidad completa y disposición final certificada.",
      items: ["Certificados de disposición", "Comercialización directa", "Reportes de sostenibilidad"]
    }
  ];

  const metricas = [
    {
      icono: "fas fa-recycle",
      valor: "95%",
      descripcion: "Tasa de aprovechamiento de materiales",
      color: "text-brand-green",
    },
    {
      icono: "fas fa-truck",
      valor: "24/7",
      descripcion: "Operación logística continua",
      color: "text-blue-500",
    },
    {
      icono: "fas fa-shield-check",
      valor: "100%",
      descripcion: "Cumplimiento normativo",
      color: "text-green-500",
    },
    {
      icono: "fas fa-users",
      valor: "50+",
      descripcion: "Recicladores formalizados",
      color: "text-purple-500",
    },
  ];

  const materialesProcesados = [
    { material: "Papel y Cartón", porcentaje: "35%", color: "bg-blue-500" },
    { material: "Plásticos", porcentaje: "28%", color: "bg-red-500" },
    { material: "Vidrio", porcentaje: "18%", color: "bg-green-500" },
    { material: "Metales", porcentaje: "12%", color: "bg-yellow-500" },
    { material: "Tetra Pak y Otros", porcentaje: "7%", color: "bg-purple-500" },
  ];

  const normativas = [
    { icon: "fas fa-scale-balanced", text: "Ley 142 de 1994", desc: "Servicios Públicos Domiciliarios" },
    { icon: "fas fa-file-contract", text: "Decreto 596 de 2016", desc: "Gestión Integral de Residuos" },
    { icon: "fas fa-shield-halved", text: "Resolución 1407", desc: "Aprovechamiento de Residuos" },
  ];

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
              Servicio Público de Aseo en Aprovechamiento
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
            Proceso Integral de <br /> <span className="text-gradient">Aprovechamiento Sostenible</span>
          </h1>

          <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed font-medium">
            Dignificamos el reciclaje a través de un ciclo completo que transforma residuos en recursos, generando valor para la comunidad y protegiendo el medio ambiente.
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
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center reveal ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <div className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                  }`}>
                    <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                          {step.numero}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-brand-dark">{step.titulo}</h3>
                      </div>
                      <p className="text-brand-gray mb-4">{step.descripcion}</p>
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
                    <i className={step.icono}></i>
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
                {materialesProcesados.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-brand-dark">{item.material}</span>
                      <span className="text-brand-gray">{item.porcentaje}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: item.porcentaje }}
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
            {normativas.map((norma, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <i className={`${norma.icon} text-3xl text-brand-green mb-4`}></i>
                <h4 className="font-bold text-lg text-brand-dark mb-2">{norma.text}</h4>
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
}