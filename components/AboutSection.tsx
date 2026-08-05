'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface AboutContentProps {
  eyebrow: string;
  heading: string;
  paragraph: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  image1Url: string;
  image2Url: string;
}

interface AboutStatsProps {
  tonnes: string;
  allies: string;
  certifiedPercent: string;
}

interface AboutSectionProps {
  about: AboutContentProps;
  stats: AboutStatsProps;
}

export default function AboutSection({ about, stats }: AboutSectionProps) {
  useEffect(() => {
    // Animaciones Reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-brand-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-eco">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid - Mobile First */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main decorative element */}
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[2.5rem] rotate-3 opacity-0 lg:opacity-30 -z-10 transition-transform duration-500 group-hover:rotate-1"></div>

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-3 lg:space-y-4">
                  <img
                    src={about.image1Url}
                    alt="Equipo trabajando en reciclaje"
                    className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="bg-white p-4 lg:p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                        <i className="fas fa-users text-brand-green text-sm"></i>
                      </div>
                      <p className="text-sm font-semibold text-brand-dark">+50 Familias</p>
                    </div>
                    <p className="text-xs text-brand-gray mt-2">Impacto social positivo</p>
                  </div>
                </div>

                <div className="space-y-3 lg:space-y-4 mt-8 lg:mt-0">
                  <div className="bg-brand-green/5 p-4 lg:p-6 rounded-2xl border border-brand-green/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-brand-green/20 flex items-center justify-center">
                        <i className="fas fa-certificate text-brand-green"></i>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-dark">Certificados</p>
                        <p className="text-xs text-brand-gray">Garantía de calidad</p>
                      </div>
                    </div>
                  </div>

                  <img
                    src={about.image2Url}
                    alt="Instalaciones modernas de reciclaje"
                    className="w-full h-48 lg:h-64 object-cover rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating badge for desktop */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:flex items-center gap-4 animate-float-medium">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <i className="fas fa-leaf text-brand-green text-xl"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-gray">Desde 2018</p>
                  <p className="text-lg font-extrabold text-brand-dark">5+ Años</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-brand-green/5 border border-brand-green/10 mb-4 lg:mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 lg:mb-6 leading-tight">
              {about.heading}
            </h2>

            <p className="text-base lg:text-lg text-brand-gray mb-6 lg:mb-8 leading-relaxed">
              {about.paragraph}
            </p>

            {/* Features List */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fas fa-check text-sm lg:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg lg:text-xl mb-1 lg:mb-2">
                    {about.feature1Title}
                  </h4>
                  <p className="text-sm lg:text-base text-brand-gray">
                    {about.feature1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fas fa-users text-sm lg:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg lg:text-xl mb-1 lg:mb-2">
                    {about.feature2Title}
                  </h4>
                  <p className="text-sm lg:text-base text-brand-gray">
                    {about.feature2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fas fa-shield-alt text-sm lg:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg lg:text-xl mb-1 lg:mb-2">
                    {about.feature3Title}
                  </h4>
                  <p className="text-sm lg:text-base text-brand-gray">
                    {about.feature3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Mobile Optimized */}
            <div className="grid grid-cols-3 gap-4 mb-8 lg:mb-10 py-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark mb-1">
                  {stats.tonnes}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-brand-gray uppercase tracking-wide">
                  Toneladas
                </div>
              </div>

              <div className="text-center border-x border-gray-200">
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark mb-1">
                  {stats.allies}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-brand-gray uppercase tracking-wide">
                  Aliados
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-brand-dark mb-1">
                  {stats.certifiedPercent}
                </div>
                <div className="text-xs lg:text-sm font-semibold text-brand-gray uppercase tracking-wide">
                  Certificado
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 lg:gap-3 text-brand-green font-bold hover:text-brand-dark transition-colors group border-b-2 border-brand-green pb-2"
            >
              <span className="text-base lg:text-lg">
                Conoce nuestra historia completa
              </span>
              <i className="fas fa-arrow-right text-sm lg:text-base group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
