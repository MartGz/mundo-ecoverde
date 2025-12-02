'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

export default function ContactSection() {
  useReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor completa todos los campos obligatorios (*)')
      return
    }

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
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      alert('¡Mensaje enviado! Te contactaremos pronto 🎉')
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="inline-flex items-center gap-2 text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">
            ¡Hablemos! <i className="fas fa-heart text-brand-green animate-pulse"></i>
          </h2>
          <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos listos para atender tus necesidades en gestión de residuos.
            <br />
            <span className="font-bold text-brand-green">¡Contáctanos y construyamos un futuro más verde juntos! 🌱</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-brand-green rounded-full"></div>
              <h3 className="text-2xl font-bold text-brand-dark">Información de Contacto</h3>
            </div>

            <div className="space-y-4">
              <a href="https://wa.me/573718866549" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-green hover:border-brand-green/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Teléfono / WhatsApp</p>
                  <p className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                    +57 371 886 6549
                  </p>
                </div>
              </a>

              <a href="mailto:asociacionmundoecoverde@gmail.com"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-green hover:border-brand-green/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-bold text-brand-dark break-all group-hover:text-brand-green transition-colors">
                    asociacionmundoecoverde@gmail.com
                  </p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=Barrio+Henequén+Cartagena" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-green hover:border-brand-green/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <i className="fas fa-map-location-dot text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Dirección</p>
                  <p className="text-lg font-bold text-brand-dark leading-snug group-hover:text-brand-green transition-colors">
                    Barrio Henequén, Calle Principal Mza D Lte 3, Cartagena
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-brand-green/5 rounded-3xl p-8 border border-brand-green/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-clock"></i>
                </div>
                <h4 className="text-xl font-bold text-brand-dark">Horarios de Atención</h4>
              </div>
              <ul className="space-y-3 relative z-10">
                <li className="flex justify-between items-center text-brand-gray pb-2 border-b border-brand-green/10">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span className="font-bold text-brand-dark bg-white px-3 py-1 rounded-lg text-sm shadow-sm">7:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-brand-gray pb-2 border-b border-brand-green/10">
                  <span className="font-medium">Sábados</span>
                  <span className="font-bold text-brand-dark bg-white px-3 py-1 rounded-lg text-sm shadow-sm">7:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-brand-gray">
                  <span className="font-medium">Domingos</span>
                  <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg text-sm">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 lg:p-12 relative">
              <div className="absolute top-8 right-8 text-brand-green/10 hidden md:block">
                <i className="fas fa-paper-plane text-8xl transform -rotate-12"></i>
              </div>

              <div className="mb-8 relative z-10">
                <h3 className="text-3xl font-bold text-brand-dark mb-2 flex items-center gap-3">
                  <i className="fas fa-paper-plane text-brand-green"></i> Envíanos un Mensaje
                </h3>
                <p className="text-brand-gray">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-bold text-brand-dark ml-1">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-bold text-brand-dark ml-1">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <input
                        type="tel"
                        id="telefono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+57 300 123 4567"
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-dark ml-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu.email@ejemplo.com"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-sm font-bold text-brand-dark ml-1">
                    Servicio de Interés
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-list-check"></i>
                    </div>
                    <select
                      id="servicio"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Recolección Selectiva">♻️ Recolección Selectiva</option>
                      <option value="Clasificación">📦 Clasificación y Aprovechamiento</option>
                      <option value="Gestión Integral">🏢 Gestión de Residuos</option>
                      <option value="Comercialización">💼 Comercialización</option>
                      <option value="Educación">🎓 Educación Ambiental</option>
                      <option value="Limpieza">🧹 Limpieza Especial</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-bold text-brand-dark ml-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-5 rounded-xl font-bold text-lg shadow-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <i className="fas fa-paper-plane group-hover:rotate-12 transition-transform duration-300"></i>
                  Enviar Mensaje
                </button>

                <p className="text-center text-xs text-brand-gray mt-4 flex items-center justify-center gap-1">
                  <i className="fas fa-lock text-brand-green"></i>
                  * Campos obligatorios | Tus datos están protegidos
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}