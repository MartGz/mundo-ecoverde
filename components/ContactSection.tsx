'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 371 886 6549',
      link: 'tel:+573718866549'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'asociacionmundoecoverde@gmail.com',
      link: 'mailto:asociacionmundoecoverde@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Barrio Henequén, Calle Principal Mza D Lte 3, Cartagena, Bolívar',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: 'Lunes a Viernes: 7:00 AM - 5:00 PM\nSábados: 7:00 AM - 12:00 PM',
      link: null
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctenos
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Estamos listos para atender sus necesidades en gestión de residuos. ¡Escríbanos o llámenos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-green-200 hover:text-white transition"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-green-200 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <div className="bg-green-800 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-4">Ubicación</h4>
              <div className="bg-green-700 rounded-lg h-48 flex items-center justify-center">
                <p className="text-green-200 text-center">
                  Mapa interactivo de Google Maps<br />
                  Barrio Henequén, Cartagena
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-green-900">Envíenos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Su nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Su número de teléfono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="su.email@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="recoleccion">Recolección Selectiva</option>
                  <option value="clasificacion">Clasificación y Aprovechamiento</option>
                  <option value="gestion">Gestión de Residuos</option>
                  <option value="comercializacion">Comercialización</option>
                  <option value="educacion">Educación Ambiental</option>
                  <option value="limpieza">Limpieza Especial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describa su requerimiento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}