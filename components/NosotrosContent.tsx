'use client'

import { useReveal } from '@/hooks/useReveal'
import Link from 'next/link'

export default function NosotrosContent() {
  useReveal()

  return (
    <div className="min-h-screen pt-24">
      <section className="pt-20 pb-20 relative overflow-hidden bg-brand-light">
        <div className="hero-blob bg-brand-green w-[500px] h-[500px] top-0 left-[-100px] rounded-full animate-float-slow"></div>
        <div className="hero-blob bg-blue-100 w-[300px] h-[300px] bottom-0 right-0 rounded-full animate-float-medium"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center reveal relative z-10">
          <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Esencia</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-6">
            Conoce a <span className="text-gradient">Mundo Eco Verde</span>
          </h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Somos un equipo apasionado dedicado a transformar la manera en que el mundo ve los residuos. 
            Construimos puentes entre la sostenibilidad ambiental y el progreso social.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal group">
              <div className="absolute -inset-4 bg-brand-green/20 rounded-[2.5rem] rotate-6 opacity-30 group-hover:rotate-3 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop" 
                alt="Equipo trabajando" 
                className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              />
              
              <div className="absolute bottom-8 right-[-20px] bg-white p-6 rounded-2xl shadow-xl animate-float-medium border-l-4 border-brand-green hidden md:block">
                <p className="text-brand-gray text-xs font-bold uppercase mb-1">Experiencia</p>
                <p className="text-3xl font-extrabold text-brand-dark">5+ Años</p>
                <p className="text-sm text-brand-gray">Liderando el cambio</p>
              </div>
            </div>

            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/5 border border-brand-green/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span className="text-xs font-bold text-brand-green uppercase">Quiénes Somos</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Expertos en gestión ambiental y economía circular
              </h2>
              
              <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                <p>
                  En <span className="font-bold text-brand-dark">Mundo Eco Verde</span>, no solo somos una empresa de reciclaje; somos agentes de cambio. Nacimos con la convicción de que los residuos no son el final del ciclo, sino el comienzo de uno nuevo.
                </p>
                <p>
                  Operamos bajo los más altos estándares de calidad, integrando tecnología avanzada en nuestros procesos de recolección, clasificación y aprovechamiento. Pero lo que realmente nos define es nuestro <span className="text-brand-green font-bold">compromiso humano</span>.
                </p>
                <p>
                  Trabajamos mano a mano con comunidades y empresas, educando y dignificando la labor del reciclador, demostrando que la rentabilidad y la responsabilidad ecológica van de la mano.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex gap-8">
                <div>
                  <span className="block text-3xl font-bold text-brand-dark mb-1">100%</span>
                  <span className="text-sm text-brand-gray font-medium">Compromiso</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-brand-dark mb-1">24/7</span>
                  <span className="text-sm text-brand-gray font-medium">Operación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="feature-card p-10 reveal h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 mission-icon-bg rounded-2xl flex items-center justify-center text-brand-green text-3xl group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <span className="text-6xl font-bold text-gray-100 select-none">01</span>
                </div>
                
                <h3 className="text-3xl font-bold text-brand-dark mb-6 group-hover:text-brand-green transition-colors">Nuestra Misión</h3>
                
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Brindar soluciones integrales en la gestión de residuos sólidos aprovechables, promoviendo la cultura del reciclaje y la economía circular. 
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Nos dedicamos a dignificar la labor social del reciclador y a garantizar a nuestros clientes el cumplimiento normativo ambiental, transformando problemas en recursos valiosos para la industria.
                </p>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-8 overflow-hidden">
                <div className="w-1/3 h-full bg-brand-green group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>

            <div className="feature-card p-10 reveal h-full flex flex-col justify-between group" style={{ transitionDelay: '200ms' }}>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-earth-americas"></i>
                  </div>
                  <span className="text-6xl font-bold text-gray-100 select-none">02</span>
                </div>
                
                <h3 className="text-3xl font-bold text-brand-dark mb-6 group-hover:text-blue-600 transition-colors">Nuestra Visión</h3>
                
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Consolidarnos para el año 2030 como la organización líder y referente en la Costa Caribe en innovación ambiental y gestión sostenible de residuos.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Aspiramos a ser reconocidos por nuestra excelencia operativa, nuestro impacto social positivo y por ser el aliado estratégico preferido de empresas comprometidas con el cuidado del planeta.
                </p>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-8 overflow-hidden">
                <div className="w-1/3 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold text-brand-dark">Nuestros Valores Corporativos</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal group p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-green-100 text-brand-green rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-2">Responsabilidad</h4>
              <p className="text-sm text-brand-gray">Comprometidos con el entorno y la sociedad en cada acción.</p>
            </div>

            <div className="text-center reveal group p-6 rounded-2xl hover:bg-gray-50 transition-colors" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-2">Innovación</h4>
              <p className="text-sm text-brand-gray">Buscamos constantemente mejores formas de proteger el planeta.</p>
            </div>

            <div className="text-center reveal group p-6 rounded-2xl hover:bg-gray-50 transition-colors" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-scale-balanced"></i>
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-2">Integridad</h4>
              <p className="text-sm text-brand-gray">Transparencia y ética en todas nuestras operaciones.</p>
            </div>

            <div className="text-center reveal group p-6 rounded-2xl hover:bg-gray-50 transition-colors" style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-users-rays"></i>
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-2">Trabajo en Equipo</h4>
              <p className="text-sm text-brand-gray">La unión hace la fuerza para lograr un mundo más verde.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}