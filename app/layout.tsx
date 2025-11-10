import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mundo Eco Verde - Centro de Reciclaje | Cartagena',
  description: 'Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos en Cartagena. ECA - Estación de Clasificación y Aprovechamiento.',
  keywords: 'reciclaje, aprovechamiento, residuos, Cartagena, ECA, medio ambiente',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}