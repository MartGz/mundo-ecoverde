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
        
        {/* Mapa Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Encuéntranos</h2>
              <p className="text-xl text-gray-600">Visita nuestra Estación de Clasificación</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Aquí puedes integrar Google Maps */}
              <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold text-lg">
                    Barrio Henequén, Calle Principal Mza D Lte 3
                  </p>
                  <p className="text-gray-600">Cartagena, Bolívar, Colombia</p>
                  <a 
                    href="https://maps.google.com/?q=Barrio+Henequén+Cartagena" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            {/* Horarios */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="font-bold text-green-900 mb-2">📅 Lunes a Viernes</h3>
                <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="font-bold text-green-900 mb-2">📅 Sábados</h3>
                <p className="text-gray-600">8:00 AM - 12:00 PM</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="font-bold text-green-900 mb-2">📅 Domingos</h3>
                <p className="text-gray-600">Cerrado</p>
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