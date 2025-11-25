import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata, Viewport } from 'next'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Mundo Eco Verde - Centro de Reciclaje | Cartagena',
    template: '%s | Mundo Eco Verde'
  },
  description: 'Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos en Cartagena. ECA - Estación de Clasificación y Aprovechamiento.',
  keywords: 'reciclaje, aprovechamiento, residuos, Cartagena, ECA, medio ambiente, gestión residuos, centro clasificación',
  authors: [{ name: 'Asociación Mundo Eco Verde' }],
  creator: 'Asociación Mundo Eco Verde',
  publisher: 'Asociación Mundo Eco Verde',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mundoecoverde.com'),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://mundoecoverde.com',
    siteName: 'Mundo Eco Verde',
    title: 'Mundo Eco Verde - Centro de Reciclaje | Cartagena',
    description: 'Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos en Cartagena.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mundo Eco Verde - Centro de Reciclaje',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundo Eco Verde - Centro de Reciclaje | Cartagena',
    description: 'Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos en Cartagena.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agrega aquí tu Google Search Console verification code si lo tienes
    // google: 'verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4A7C2C',
  colorScheme: 'light',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mundoecoverde.com" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mundo Eco Verde",
              "alternateName": "Asociación Mundo Eco Verde",
              "url": "https://mundoecoverde.com",
              "logo": "https://mundoecoverde.com/logo.png",
              "description": "Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos en Cartagena",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Barrio Henequén, Calle Principal Mza D Lte 3",
                "addressLocality": "Cartagena",
                "addressRegion": "Bolívar",
                "addressCountry": "CO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+57-371-886-6549",
                "contactType": "customer service",
                "email": "asociacionmundoecoverde@gmail.com",
                "areaServed": "CO",
                "availableLanguage": "es"
              },
              "sameAs": [
                "https://www.facebook.com/mundoecoverde",
                "https://www.instagram.com/mundoecoverde"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}