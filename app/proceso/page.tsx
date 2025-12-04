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
      icono: "fas fa-clipboard-list",
      titulo: "Diagnóstico y Consultoría",
      descripcion:
        "Antes de recoger la primera bolsa, entendemos tu operación. Realizamos un aforo inicial para identificar tipos de residuos, volúmenes y puntos críticos de generación.",
      items: ["Plan de Gestión Integral (PGIRS)", "Capacitación al personal"],
    },
    {
      numero: "02",
      icono: "fas fa-truck-fast",
      titulo: "Logística y Recolección",
      descripcion:
        "Ejecución operativa con nuestra flota especializada. Garantizamos frecuencias fijas y personal uniformado que cumple con todos los protocolos de seguridad industrial.",
      items: ["Rutas optimizadas por GPS", "Manifiesto de recolección digital"],
    },
    {
      numero: "03",
      icono: "fas fa-hands-holding-circle",
      titulo: "Clasificación Técnica (ECA)",
      descripcion:
        "El material ingresa a nuestra Estación de Clasificación y Aprovechamiento. Aquí, operarios expertos separan, limpian y compactan los residuos según sus propiedades.",
      items: [
        "Pesaje electrónico certificado",
        "Segregación por polímeros y fibras",
      ],
    },
    {
      numero: "04",
      icono: "fas fa-industry",
      titulo: "Valorización y Cierre de Ciclo",
      descripcion:
        "Transformamos el residuo en materia prima secundaria. Comercializamos los materiales compactados directamente con industrias transformadoras nacionales, garantizando que no terminen en rellenos sanitarios.",
      items: [
        "Reincorporación a cadena productiva",
        "Reducción de huella de carbono",
      ],
    },
  ];

  const metricas = [
    {
      icono: "fas fa-chart-line",
      valor: "95%",
      descripcion: "Tasa de aprovechamiento",
      color: "text-brand-green",
    },
    {
      icono: "fas fa-clock",
      valor: "24h",
      descripcion: "Tiempo promedio de procesamiento",
      color: "text-blue-500",
    },
    {
      icono: "fas fa-shield-check",
      valor: "100%",
      descripcion: "Trazabilidad garantizada",
      color: "text-green-500",
    },
    {
      icono: "fas fa-ban",
      valor: "0%",
      descripcion: "Material a relleno sanitario",
      color: "text-red-500",
    },
  ];

  const normativas = [
    { icon: "fas fa-scale-balanced", text: "Ley 142 de 1994" },
    { icon: "fas fa-file-contract", text: "Decreto 596 de 2016" },
    { icon: "fas fa-shield-halved", text: "Resolución 1407" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section para Proceso */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-24 relative overflow-hidden bg-brand-light">
        <div className="hero-blob bg-brand-green w-[600px] h-[600px] top-[-100px] left-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-blue-100 w-[400px] h-[400px] bottom-0 right-0 rounded-full animate-float-medium"></div>

        <div className="container-eco relative z-10 text-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-xs font-bold text-brand-gray uppercase tracking-widest">
              Modelo Operativo Certificado
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
            Trazabilidad completa <br /> desde la{" "}
            <span className="text-gradient">Fuente</span> hasta el{" "}
            <span className="text-gradient">Destino</span>
          </h1>

          <p className="text-lg text-brand-gray max-w-3xl mx-auto leading-relaxed font-medium">
            Hemos perfeccionado un ciclo de gestión de residuos que combina
            logística eficiente, clasificación técnica y cumplimiento legal,
            garantizando que tu empresa sea parte de la solución.
          </p>
        </div>
      </section>

      {/* Proceso Detallado con Línea de Tiempo */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container-eco timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-progress"></div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center reveal group ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Círculo con ícono */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-1/2 flex items-center justify-center z-20 w-12 h-12 lg:w-16 lg:h-16 
                  ${
                    index === 0
                      ? "bg-brand-green text-white"
                      : "bg-white text-brand-green"
                  } 
                  rounded-full shadow-green border-4 lg:border-[6px] border-white group-hover:bg-brand-green group-hover:text-white transition-colors duration-300`}
                >
                  <i className={`${step.icono} text-lg lg:text-2xl`}></i>
                </div>

                {/* Contenido de la tarjeta */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16"
                  } w-full pl-16 md:pl-0 ${
                    index % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div className="step-card p-6 lg:p-8 xl:p-10">
                    <span className="step-number-bg">{step.numero}</span>
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3">
                        {step.titulo}
                      </h3>
                      <p className="text-brand-gray mb-6 leading-relaxed text-sm lg:text-base">
                        {step.descripcion}
                      </p>

                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <h4 className="text-xs font-bold text-brand-green uppercase mb-2">
                          {index === 0
                            ? "Entregables Clave:"
                            : index === 1
                            ? "Características:"
                            : index === 2
                            ? "Proceso Técnico:"
                            : "Economía Circular:"}
                        </h4>
                        <ul
                          className={`text-sm text-brand-dark space-y-2 ${
                            index % 2 === 1 ? "md:text-right" : ""
                          }`}
                        >
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

            {/* Certificación */}
            <div className="reveal pt-8 lg:pt-16 flex flex-col items-center justify-center text-center relative z-20">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-brand-dark rounded-full flex items-center justify-center text-brand-green text-3xl lg:text-4xl shadow-2xl mb-6 lg:mb-8 border-4 border-white animate-float-medium">
                <i className="fas fa-certificate"></i>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4">
                Certificación Ambiental
              </h3>
              <p className="text-brand-gray max-w-xl mb-6 lg:mb-8 text-base lg:text-lg">
                El ciclo finaliza con la emisión de tu{" "}
                <strong>Certificado de Aprovechamiento</strong>, un documento
                legal que valida tu cumplimiento normativo y respalda tus
                indicadores de sostenibilidad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleOpenModal('recoleccion')}
                  className="btn-primary px-8 lg:px-10 py-3 lg:py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-green hover:shadow-lg transition-all text-sm lg:text-base"
                >
                  Solicitar Recolección <i className="fas fa-arrow-right"></i>
                </button>
                <button className="px-8 lg:px-10 py-3 lg:py-4 bg-white border border-gray-200 text-brand-dark font-bold rounded-xl hover:border-brand-green hover:text-brand-green transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                  <i className="fas fa-download"></i> Ver Ejemplo de Certificado
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas del Proceso */}
      <section className="py-16 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green opacity-10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-eco relative z-10">
          <div className="text-center mb-12 lg:mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 mb-6">
              <i className="fas fa-microchip text-brand-green text-xs"></i>
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                Trazabilidad Digital 4.0
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Lo que no se mide, <br /> no se puede mejorar.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              En Mundo Eco Verde utilizamos tecnología avanzada para monitorear
              cada kilogramo de residuo. Brindamos transparencia total a
              nuestros aliados a través de reportes data-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metricas.map((metrica, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center reveal"
              >
                <i
                  className={`${metrica.icono} ${metrica.color} text-2xl lg:text-3xl mb-4`}
                ></i>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {metrica.valor}
                </div>
                <h4 className="text-lg font-semibold text-gray-300">
                  {metrica.descripcion}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cumplimiento Normativo */}
      <section className="py-12 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container-eco text-center reveal">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-8 lg:mb-12">
            Operamos bajo estricto cumplimiento normativo
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500">
            {normativas.map((norma, index) => (
              <div key={index} className="flex items-center gap-3">
                <i className={`${norma.icon} text-3xl lg:text-4xl text-brand-gray`}></i>
                <span className="font-bold text-lg lg:text-xl text-brand-gray">
                  {norma.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-brand-green to-green-700 text-white">
        <div className="container-eco text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Quieres Implementar Este Proceso?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo a transformar tu gestión de residuos con nuestro
            sistema probado y certificado de aprovechamiento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenModal('proceso')}
              className="btn-secondary text-lg px-8 py-4 rounded-full font-semibold"
            >
              <i className="fas fa-phone mr-2"></i> Iniciar Proceso
            </button>
            <button className="bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-900 transition">
              <i className="fas fa-download mr-2"></i> Descargar Brochure
            </button>
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