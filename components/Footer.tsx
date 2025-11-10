import Link from 'next/link'
import { Recycle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Recycle className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">Mundo Eco Verde</span>
            </div>
            <p className="text-gray-400">
              Asociación sin ánimo de lucro dedicada al aprovechamiento de residuos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition">Servicios</Link></li>
              <li><Link href="/proceso" className="hover:text-white transition">Proceso</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 371 886 6549</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">asociacionmundoecoverde@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Barrio Henequén, Calle Principal Mza D Lte 3<br />Cartagena, Bolívar</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Asociación Mundo Ecoverde. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">ECA - Estación de Clasificación y Aprovechamiento</p>
        </div>
      </div>
    </footer>
  )
}