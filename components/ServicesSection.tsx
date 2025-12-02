import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-light/50 opacity-50 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-brand-green font-bold uppercase text-sm mb-3 tracking-widest">Nuestra Oferta</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark">
            Soluciones Integrales 360°
          </h3>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto text-lg">
            Gestionamos el ciclo completo de tus residuos con eficiencia, tecnología y responsabilidad ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal">
            <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-truck-ramp-box text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Recolección Selectiva</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Logística especializada para el retiro eficiente de materiales aprovechables en la fuente.
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Recolección programada</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Flota propia</li>
            </ul>
          </div>

           {/* Card 2 */}
           <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-100">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-recycle text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Clasificación ECA</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
               Procesamiento técnico en nuestra Estación de Clasificación y Aprovechamiento (ECA).
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Tecnología de punta</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Control de calidad ISO</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-200">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-dumpster text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Gestión de Residuos</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Manejo integral de residuos sólidos para empresas y comunidades.
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Planes personalizados</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Reportes de gestión</li>
            </ul>
          </div>

           {/* Card 4 */}
           <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-300">
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-hand-holding-dollar text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Comercialización</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Venta y distribución de materiales reciclables procesados. ¡Monetiza tus residuos!
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Materiales certificados</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Precios competitivos</li>
            </ul>
          </div>

           {/* Card 5 */}
           <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-400">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-chalkboard-user text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Educación Ambiental</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Programas de capacitación y concienciación sobre reciclaje y sostenibilidad.
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Talleres educativos</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Charlas empresariales</li>
            </ul>
          </div>

           {/* Card 6 */}
           <div className="feature-card p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-500">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 mx-auto">
              <i className="fa-solid fa-broom text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Limpieza Especial</h4>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Servicios de aseo técnico y mantenimiento de áreas comunes y eventos.
            </p>
            <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Limpieza ecológica</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Equipos especializados</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 reveal max-w-5xl mx-auto shadow-sm">
          <div className="md:w-2/3 text-center md:text-left">
            <h4 className="text-2xl font-bold text-brand-dark mb-2">¿Necesita un servicio personalizado?</h4>
            <p className="text-brand-gray">Contáctenos para evaluar sus necesidades y desarrollar un plan a medida.</p>
          </div>
          <div className="text-center">
            <a href="#contacto" className="btn-primary px-8 py-4 rounded-xl font-bold shadow-green hover:shadow-none inline-flex items-center gap-2 whitespace-nowrap">
              Solicitar Cotización <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;