import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-light/50 opacity-50 pointer-events-none -z-10"></div>

      <div className="container-eco relative z-10">
        <div className="text-center mb-12 lg:mb-20 reveal">
          <h2 className="text-brand-green font-bold uppercase text-sm mb-3 tracking-widest">Nuestros Servicios</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-brand-dark">
            Servicio Público de Aseo en Aprovechamiento
          </h3>
          <p className="text-brand-gray mt-4 max-w-2xl mx-auto text-lg">
            Dignificamos el reciclaje a través del manejo integral de materiales aprovechables
          </p>
        </div>

        <div className="mb-16 reveal">
          <h4 className="text-2xl font-bold text-brand-dark text-center mb-8">Gestión Operativa</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {/* Card 1 - Recolección */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-truck-loading text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Recolección de Residuos</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Micro y macro rutas para la recolección eficiente de materiales aprovechables
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Micro rutas</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Macro rutas</li>
              </ul>
            </div>

            {/* Card 2 - Transporte */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-100">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-truck text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Transporte de Residuos</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Transporte seguro de materiales aprovechables a nuestra ECA
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Flota especializada</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Logística eficiente</li>
              </ul>
            </div>

            {/* Card 3 - Clasificación ECA */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-200">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-warehouse text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Clasificación en ECA</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Clasificación y almacenamiento en Estación de Clasificación y Aprovechamiento
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Clasificación técnica</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Almacenamiento seguro</li>
              </ul>
            </div>

            {/* Card 4 - Transformación */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-300">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-industry text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Transformación</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Transformación de materiales para reintroducción a cadenas productivas
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Procesamiento</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Valorización</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h4 className="text-2xl font-bold text-brand-dark text-center mb-8">Gestión Social</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {/* Card 5 - Capacitación */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-400">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-chalkboard-user text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Capacitación</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Capacitación y sensibilización ambiental para comunidades y empresas
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Talleres prácticos</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Sensibilización</li>
              </ul>
            </div>

            {/* Card 6 - Proyectos Ambientales */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-500">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-seedling text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Proyectos Ambientales</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Desarrollo e implementación de proyectos ambientales sostenibles
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Desarrollo de proyectos</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Implementación</li>
              </ul>
            </div>

            {/* Card 7 - Campañas Pedagógicas */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-600">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-bullhorn text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Campañas Pedagógicas</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Campañas de separación en la fuente para mejorar el reciclaje
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Educación en fuente</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Material didáctico</li>
              </ul>
            </div>

            {/* Card 8 - Comercialización */}
            <div className="feature-card p-6 lg:p-8 group border border-gray-100 shadow-sm bg-white rounded-[2rem] w-full text-center reveal delay-700">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 mx-auto">
                <i className="fa-solid fa-handshake text-2xl lg:text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">Comercialización</h4>
              <p className="text-brand-gray text-sm lg:text-base leading-relaxed mb-6">
                Comercialización y disposición final certificada de materiales
              </p>
              <ul className="text-sm text-brand-gray space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Venta certificada</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-brand-green"></i> Disposición final</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección de Materiales */}
        <div className="mt-16 lg:mt-24 reveal">
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-8">Materiales que Aprovechamos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
            {['Papel y Cartón', 'Plástico', 'Vidrio', 'Aluminio', 'Tetra-Pak', 'Aceite Usado', 'Botellas de Amor'].map((material, index) => (
              <div key={index} className="bg-brand-light rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-recycle text-brand-green"></i>
                </div>
                <p className="text-sm font-medium text-brand-dark">{material}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-20 bg-brand-light rounded-2xl p-6 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 reveal max-w-5xl mx-auto shadow-sm">
          <div className="md:w-2/3 text-center md:text-left">
            <h4 className="text-2xl font-bold text-brand-dark mb-2">¿Necesita nuestro servicio integral?</h4>
            <p className="text-brand-gray">Trabajamos juntos por un mundo más verde. Contáctenos para evaluar sus necesidades.</p>
          </div>
          <div className="text-center">
            <a href="#contacto" className="btn-primary px-8 py-4 rounded-xl font-bold shadow-green hover:shadow-none inline-flex items-center gap-2 whitespace-nowrap">
              Contáctanos <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;