import React from 'react';

interface HeroContentProps {
  badge: string;
  titleLine1: string;
  titleGradient: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  image1Url: string;
  image2Url: string;
  floatingBadgeText: string;
  floatingBadgeValue: string;
}

interface HeroStatsProps {
  tonnes: string;
  allies: string;
  certifiedPercent: string;
}

interface HeroProps {
  hero: HeroContentProps;
  stats: HeroStatsProps;
}

const Hero = ({ hero, stats }: HeroProps) => {
  return (
    <section id="inicio" className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute z-[-1] bg-brand-green w-[600px] h-[600px] top-[-10%] left-[-10%] rounded-full animate-float-slow filter blur-[80px] opacity-10"></div>
      <div className="absolute z-[-1] bg-blue-100 w-[400px] h-[400px] bottom-[10%] right-[-5%] rounded-full animate-float-medium filter blur-[80px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          <div className="reveal pr-4 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/5 border border-brand-green/10 mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              </span>
              <span className="text-xs font-bold text-brand-green tracking-wider uppercase">{hero.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-brand-dark mb-6">
              {hero.titleLine1} <br />
              <span className="text-gradient">{hero.titleGradient}</span>
            </h1>

            <p className="text-lg text-brand-gray mb-10 leading-relaxed font-medium">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#servicios" className="btn-primary px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 group text-lg">
                {hero.cta1Text}
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#proceso" className="px-8 py-4 bg-white border-2 border-gray-200 text-brand-dark font-bold rounded-2xl hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center gap-3 text-lg group">
                <div className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                  <i className="fa-solid fa-play text-brand-green text-sm ml-0.5"></i>
                </div>
                {hero.cta2Text}
              </a>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-brand-dark">{stats.tonnes}</span>
                <span className="text-sm font-bold text-brand-gray uppercase mt-2">Toneladas</span>
              </div>
              <div className="flex flex-col relative pl-8 border-l border-gray-200">
                <span className="text-4xl font-extrabold text-brand-dark">{stats.allies}</span>
                <span className="text-sm font-bold text-brand-gray uppercase mt-2">Aliados</span>
              </div>
              <div className="flex flex-col relative pl-8 border-l border-gray-200">
                <span className="text-4xl font-extrabold text-brand-dark">{stats.certifiedPercent}</span>
                <span className="text-sm font-bold text-brand-gray uppercase mt-2">Certificado</span>
              </div>
            </div>
          </div>

          <div className="relative reveal lg:mt-0 mt-12 delay-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-green/5 rounded-[4rem] rotate-6 z-0"></div>

            <img
              src={hero.image1Url}
              alt="Planta de reciclaje"
              className="relative w-full h-[500px] lg:h-[600px] object-cover z-10 transition-transform duration-700 hover:scale-[1.01] rounded-[3rem_1rem_3rem_3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"
            />

            <img
              src={hero.image2Url}
              alt="Detalle"
              className="absolute bottom-[-40px] right-[-20px] lg:right-[-40px] w-2/3 h-64 object-cover z-20 animate-float-slow rounded-[1rem_3rem_3rem_3rem] border-4 border-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            />

            <div className="absolute top-12 left-[-20px] lg:left-[-40px] bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 flex items-center gap-4 animate-float-medium border border-gray-50">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <i className="fa-solid fa-leaf text-brand-green text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-gray">{hero.floatingBadgeText}</p>
                <p className="font-extrabold text-xl text-brand-dark">{hero.floatingBadgeValue}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
