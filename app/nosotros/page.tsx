import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import NosotrosContent from '@/components/NosotrosContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros - Mundo Eco Verde',
  description: 'Conoce nuestra historia, misión, visión y valores como asociación dedicada al reciclaje en Cartagena',
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <NosotrosContent />
      <Footer />
      <WhatsAppButton />
    </>
  )
}