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
      link: 'https://maps.google.com/?q=Barrio+Henequén+Cartagena'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: 'Lunes a Viernes: 7:00 AM - 5:00 PM\nSábados: 7:00 AM - 12:00 PM',
      link: null
    }
  ]

  return (
    <section id="contacto" className="section section-dark">
      <div className="container-eco">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contáctenos
          </h2>
          <div className="divider-eco bg-[var(--verde-claro)]"></div>
          <p className="text-xl text-[var(--verde-menta)] max-w-3xl mx-auto">
            Estamos listos para atender sus necesidades en gestión de residuos. ¡Escríbanos o llámenos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Información de Contacto</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 bg-[var(--verde-oscuro)]/50 p-4 rounded-xl hover:bg-[var(--verde-oscuro)]/70 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[var(--verde-principal)] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-[var(--verde-claro)] hover:text-white transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-[var(--verde-menta)] whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa Preview */}
            <div className="bg-[var(--verde-oscuro)]/50 rounded-2xl p-6 border-2 border-[var(--verde-principal)]">
              <h4 className="font-semibold text-lg mb-4 text-white">📍 Ubicación</h4>
              <div className="bg-[var(--verde-principal)]/20 rounded-lg h-48 flex items-center justify-center border border-[var(--verde-claro)]">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[var(--verde-claro)] mx-auto mb-3" />
                  <p className="text-white font-semibold">
                    Barrio Henequén
                  </p>
                  <p className="text-[var(--verde-menta)] text-sm">
                    Cartagena, Bolívar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-[var(--verde-oscuro)]">
              Envíenos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--gris-neutral)] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--gris-claro)] rounded-lg focus:ring-2 focus:ring-[var(--verde-principal)] focus:border-[var(--verde-principal)] transition-all"
                    placeholder="Su nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[var(--gris-neutral)] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--gris-claro)] rounded-lg focus:ring-2 focus:ring-[var(--verde-principal)] focus:border-[var(--verde-principal)] transition-all"
                    placeholder="Su número de teléfono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--gris-neutral)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[var(--gris-claro)] rounded-lg focus:ring-2 focus:ring-[var(--verde-principal)] focus:border-[var(--verde-principal)] transition-all"
                  placeholder="su.email@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--gris-neutral)] mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--gris-claro)] rounded-lg focus:ring-2 focus:ring-[var(--verde-principal)] focus:border-[var(--verde-principal)] transition-all"
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
                <label className="block text-sm font-semibold text-[var(--gris-neutral)] mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[var(--gris-claro)] rounded-lg focus:ring-2 focus:ring-[var(--verde-principal)] focus:border-[var(--verde-principal)] transition-all resize-none"
                  placeholder="Describa su requerimiento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>

              <p className="text-sm text-[var(--gris-neutral)] text-center">
                * Campos obligatorios
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}