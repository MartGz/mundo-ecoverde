import Link from 'next/link'
import { Recycle, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-eco-verde-900 text-white py-12">
      <div className="container-eco">
        <div className="grid md:grid-cols-3 gap-8 mb-8"> {/* Cambiado de 4 a 3 columnas */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Recycle className="w-8 h-8 text-eco-verde-300" />
              <span className="text-xl font-bold">Mundo Eco Verde</span>
            </div>
            <p className="text-eco-verde-200 mb-4">
              Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos.
            </p>
            {/* SOLO UN CONTACTO EN EL FOOTER */}
            <div className="flex items-center space-x-2 text-eco-verde-200">
              <Mail className="w-4 h-4" />
              <span className="text-sm">asociacionmundoecoverde@gmail.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-eco-verde-200">
              <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition">Servicios</Link></li>
              <li><Link href="/proceso" className="hover:text-white transition">Proceso</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/mundoecoverde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-verde-800 rounded-full flex items-center justify-center hover:bg-eco-verde-700 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/mundoecoverde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-verde-800 rounded-full flex items-center justify-center hover:bg-eco-verde-700 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/mundoecoverde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-verde-800 rounded-full flex items-center justify-center hover:bg-eco-verde-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-eco-verde-800 pt-8 text-center text-eco-verde-300">
          <p>&copy; {new Date().getFullYear()} Asociación Mundo Ecoverde. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">ECA - Estación de Clasificación y Aprovechamiento</p>
        </div>
      </div>
    </footer>
  )
}