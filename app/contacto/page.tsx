import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Contacto - Mundo Eco Verde',
  description: 'Contáctanos para solicitar información sobre nuestros servicios',
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        <div className="container-eco text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">
              Estamos aquí para ayudarte
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6">
            Ponte en <span className="text-gradient">Contacto</span>
          </h1>
          
          <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            ¿Listo para transformar tu gestión de residuos? Estamos a un mensaje de distancia.
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-white">
        <div className="container-eco">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
                <Phone className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Teléfono / WhatsApp</h3>
              <p className="text-lg font-semibold text-brand-gray">+57 314 850 9312</p>
              <a 
                href="https://wa.me/573148509312" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-brand-green font-semibold hover:text-brand-green/80"
              >
                <i className="fab fa-whatsapp"></i> Chatear por WhatsApp
              </a>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
                <Mail className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Correo Electrónico</h3>
              <p className="text-lg font-semibold text-brand-gray break-all">
                asociacionmundoecoverde@gmail.com
              </p>
              <a 
                href="mailto:asociacionmundoecoverde@gmail.com"
                className="inline-flex items-center gap-2 mt-4 text-brand-green font-semibold hover:text-brand-green/80"
              >
                <i className="fas fa-envelope"></i> Enviar correo
              </a>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
                <Clock className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Horario de Atención</h3>
              <div className="space-y-2">
                <p className="font-medium text-brand-gray">Lun-Vie: 7:00 AM - 5:00 PM</p>
                <p className="font-medium text-brand-green font-bold">Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
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
                className="filter grayscale-0 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="bg-gradient-to-r from-brand-green to-green-700 text-white p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 mr-2" />
                <p className="font-semibold text-lg">
                  Barrio Henequén, Calle Principal Mza D Lte 3
                </p>
              </div>
              <p className="text-green-100 mb-4">Cartagena, Bolívar, Colombia</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Barrio+Henequén+Calle+Principal+Mza+D+Lte+3+Cartagena"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white text-brand-green hover:bg-gray-100"
              >
                <i className="fas fa-map-marked-alt"></i>
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}