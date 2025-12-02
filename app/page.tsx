import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mundo Eco Verde | Transformando el Futuro',
  description: 'Centro de reciclaje certificado ECA. Gestión integral de residuos en Cartagena.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}