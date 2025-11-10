'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Leaf } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200')"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-semibold">🌿 Centro de Clasificación ECA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Bienvenidos a</span>
              <span className="text-6xl md:text-8xl font-extrabold text-green-300">Mundo Eco Verde</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Asociación sin ánimo de lucro dedicada a la <span className="font-bold text-green-300">prestación de servicio de aseo público</span> en el componente de aprovechamiento.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-2xl text-center hover:scale-105 transition">
                <p className="text-3xl font-bold text-green-300">+500</p>
                <p className="text-xs mt-1">Clientes</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-2xl text-center hover:scale-105 transition">
                <p className="text-3xl font-bold text-green-300">24/7</p>
                <p className="text-xs mt-1">Servicio</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-2xl text-center hover:scale-105 transition">
                <p className="text-3xl font-bold text-green-300">100%</p>
                <p className="text-xs mt-1">Compromiso</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/servicios"
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:shadow-2xl transition"
              >
                <span>🌱 Nuestros Servicios</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contacto"
                className="bg-white bg-opacity-20 backdrop-blur-lg text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-30 transition"
              >
                <Phone className="w-5 h-5" />
                <span>Contactar</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Reciclaje Responsable</h3>
                    <p className="text-sm opacity-80">Dignificando el oficio</p>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Plástico', value: 85, color: 'bg-blue-500' },
                    { name: 'Papel', value: 92, color: 'bg-orange-500' },
                    { name: 'Vidrio', value: 78, color: 'bg-cyan-500' }
                  ].map(item => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">{item.name}</span>
                        <span className="text-white font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                        <div 
                          className={`${item.color} h-3 rounded-full transition-all duration-1000`} 
                          style={{width: `${item.value}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}