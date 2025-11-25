import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import { MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contacto - Mundo Eco Verde',
  description: 'Contáctanos para solicitar información sobre nuestros servicios',
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        
        {/* SOLO MANTENER EL MAPA - ELIMINAR LA SECCIÓN DE CONTACTO DUPLICADA */}
        <section className="py-20 bg-eco-neutral-beige">
          <div className="container-eco">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">Encuéntranos</h2>
              <p className="text-xl text-eco-neutral-gris">Visita nuestra Estación de Clasificación</p>
            </div>
            
            <div className="card rounded-3xl overflow-hidden max-w-6xl mx-auto">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7654321!2d-75.5012345!3d10.3910123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIzJzI3LjYiTiA3NcKwMzAnMDQuNCJX!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Mundo Eco Verde"
                />
              </div>
              
              <div className="p-6 bg-gradient-to-r from-eco-verde-50 to-eco-verde-100 text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-eco-verde-600 mr-2" />
                  <p className="text-eco-verde-800 font-semibold text-lg">
                    Barrio Henequén, Calle Principal Mza D Lte 3
                  </p>
                </div>
                <p className="text-eco-neutral-gris mb-4">Cartagena, Bolívar, Colombia</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Barrio+Henequén+Calle+Principal+Mza+D+Lte+3+Cartagena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block px-6 py-3 rounded-full font-semibold"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}