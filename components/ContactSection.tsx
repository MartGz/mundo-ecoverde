'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor completa todos los campos obligatorios (*)');
      return;
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const emailBody = `
Nuevo mensaje de contacto - Mundo Eco Verde

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio de Interés: ${formData.service || 'No especificado'}

Mensaje:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:asociacionmundoecoverde@gmail.com?subject=Contacto Web - ${formData.name}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 2000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // SOLO UN CONTACTO PRINCIPAL
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono / WhatsApp',
      content: '+57 371 886 6549',
      link: 'https://wa.me/573718866549',
      color: 'from-eco-verde-500 to-eco-verde-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'asociacionmundoecoverde@gmail.com',
      link: 'mailto:asociacionmundoecoverde@gmail.com',
      color: 'from-eco-verde-500 to-eco-verde-600'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Barrio Henequén, Calle Principal Mza D Lte 3, Cartagena',
      link: 'https://maps.google.com/?q=Barrio+Henequén+Cartagena',
      color: 'from-eco-verde-500 to-eco-verde-600'
    }
  ]

  return (
    <section id="contacto" className="relative py-20 bg-eco-neutral-beige overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-eco-verde-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-verde-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-eco-verde-800">
            ¡Hablemos! 💚
          </h2>
          <div className="divider-eco mb-6"></div>
          <p className="text-xl text-eco-neutral-gris max-w-3xl mx-auto leading-relaxed">
            Estamos listos para atender tus necesidades en gestión de residuos. 
            <span className="block mt-2 text-eco-verde-700 font-semibold">¡Contáctanos y construyamos un futuro más verde juntos! 🌱</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-eco-verde-800 flex items-center">
              <span className="w-2 h-10 bg-eco-verde-500 rounded-full mr-4"></span>
              Información de Contacto
            </h3>
            
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="group card-eco p-6 rounded-2xl hover:shadow-eco-lg transition-all duration-300 border-2 border-eco-verde-100 hover:border-eco-verde-400 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-eco-verde-800">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-eco-verde-600 hover:text-eco-verde-800 transition-colors text-sm leading-relaxed block link-eco"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-eco-verde-600 text-sm leading-relaxed">{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Horarios */}
            <div className="card-eco rounded-3xl p-8 border-2 border-eco-verde-200 mt-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-eco-verde-400 to-eco-verde-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-2xl mb-4 text-eco-verde-800">🕒 Horarios de Atención</h4>
                <div className="space-y-2 text-eco-verde-700">
                  <p><strong>Lunes a Viernes:</strong> 7:00 AM - 5:00 PM</p>
                  <p><strong>Sábados:</strong> 7:00 AM - 12:00 PM</p>
                  <p><strong>Domingos:</strong> Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card rounded-3xl p-8 md:p-10 shadow-eco-lg">
            <h3 className="text-3xl font-bold mb-2 text-eco-verde-800 flex items-center">
              <Send className="w-8 h-8 mr-3 text-eco-verde-500" />
              Envíanos un Mensaje
            </h3>
            <p className="text-eco-neutral-gris mb-8">Completa el formulario y nos pondremos en contacto contigo</p>
            
            {submitStatus === 'success' && (
              <div className="mb-6 bg-eco-verde-50 border-2 border-eco-verde-500 rounded-xl p-4 flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-eco-verde-600 flex-shrink-0" />
                <p className="text-eco-verde-800 font-semibold">¡Mensaje enviado! Te contactaremos pronto 🎉</p>
              </div>
            )}
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-eco-neutral-gris mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-eco-neutral-gris-claro rounded-xl focus:ring-2 focus:ring-eco-verde-500 focus:border-eco-verde-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Juan Pérez"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-eco-neutral-gris mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-eco-neutral-gris-claro rounded-xl focus:ring-2 focus:ring-eco-verde-500 focus:border-eco-verde-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-eco-neutral-gris mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-eco-neutral-gris-claro rounded-xl focus:ring-2 focus:ring-eco-verde-500 focus:border-eco-verde-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-eco-neutral-gris mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-eco-neutral-gris-claro rounded-xl focus:ring-2 focus:ring-eco-verde-500 focus:border-eco-verde-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="recoleccion">♻️ Recolección Selectiva</option>
                  <option value="clasificacion">📦 Clasificación y Aprovechamiento</option>
                  <option value="gestion">🗑️ Gestión de Residuos</option>
                  <option value="comercializacion">💼 Comercialización</option>
                  <option value="educacion">📚 Educación Ambiental</option>
                  <option value="limpieza">🧹 Limpieza Especial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-eco-neutral-gris mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-eco-neutral-gris-claro rounded-xl focus:ring-2 focus:ring-eco-verde-500 focus:border-eco-verde-500 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-primary w-full py-4 px-6 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-eco hover:shadow-eco-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              <p className="text-sm text-eco-neutral-gris text-center">
                * Campos obligatorios | Tus datos están protegidos 🔒
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}