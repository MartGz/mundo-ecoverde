import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroCarousel'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import { JSX } from 'react'
import HeroCarousel from '@/components/HeroCarousel'

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}