import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import { getHeroContent, getAboutContent } from '@/app/actions/home'
import { getSiteStats } from '@/app/actions/settings'
import { getProcessSteps, getProcessMeta } from '@/app/actions/proceso'
import { getValues } from '@/app/actions/nosotros'

export const metadata: Metadata = {
  title: 'Mundo Eco Verde | Transformando el Futuro',
  description: 'Centro de reciclaje certificado ECA. Gestión integral de residuos en Cartagena.',
}

const FALLBACK_HERO = {
  badge: 'Líderes en Gestión Ambiental',
  titleLine1: 'El futuro del',
  titleGradient: 'Reciclaje Inteligente',
  subtitle:
    'Transformamos la gestión de residuos con tecnología de punta y conciencia social. Ayudamos a tu empresa a ser rentable mientras cuidas el planeta.',
  cta1Text: 'Nuestros Servicios',
  cta2Text: 'Ver Proceso',
  image1Url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop',
  image2Url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop',
  floatingBadgeText: 'Impacto Positivo',
  floatingBadgeValue: '-40% CO2',
}

const FALLBACK_ABOUT = {
  eyebrow: 'Sobre Nosotros',
  heading: 'Más que reciclaje, creamos cultura ambiental.',
  paragraph:
    'En Mundo Eco Verde, no solo gestionamos residuos; diseñamos soluciones. Desde 2018, hemos liderado la transformación de la industria del reciclaje integrando tecnología y dignidad humana.',
  feature1Title: 'Certificación Ambiental',
  feature1Desc: 'Procesos auditados y cumplimiento normativo garantizado con trazabilidad total.',
  feature2Title: 'Inclusión Social',
  feature2Desc: 'Dignificamos la labor de más de 50 familias recicladoras con oportunidades de crecimiento.',
  feature3Title: 'Sostenibilidad Integral',
  feature3Desc: 'Modelo circular que beneficia al medio ambiente, la economía y la sociedad por igual.',
  image1Url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3',
  image2Url: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop',
}

export default async function Home() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const heroResult = await getHeroContent()
  const aboutResult = await getAboutContent()
  const statsResult = await getSiteStats()
  const stepsRes = await getProcessSteps()
  const valuesRes = await getValues()
  const metaRes = await getProcessMeta()

  const stats = {
    tonnes: statsResult.data?.tonnes ?? '50k+',
    allies: statsResult.data?.allies ?? '120+',
    certifiedPercent: statsResult.data?.certifiedPercent ?? '100%',
  }

  const hero = heroResult.data ?? FALLBACK_HERO
  const about = aboutResult.data ?? FALLBACK_ABOUT

  return (
    <>
      <Navbar />
      <HeroSection hero={hero} stats={stats} />
      <AboutSection about={about} stats={stats} />
      <ServicesSection />
      <ProcessSection
        steps={stepsRes.data || []}
        values={valuesRes.data || []}
        meta={{ ...metaRes.data!, normativas: metaRes.data!.normativas as unknown as { ley: string; desc: string }[] }}
      />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
