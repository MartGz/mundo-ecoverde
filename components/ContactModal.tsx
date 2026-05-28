// components/ContactModal.tsx
'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { createContactMessage } from '@/app/actions/admin'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType?: 'cotizacion' | 'recoleccion' | 'proceso'
}

export default function ContactModal({ isOpen, onClose, serviceType = 'cotizacion' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceType === 'cotizacion' ? 'Cotización de Servicios' : 
             serviceType === 'recoleccion' ? 'Solicitud de Recolección' : 
             'Proceso de Reciclaje',
    message: '',
    company: '',
    address: '',
    schedule: '',
    volume: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const getTitle = () => {
    switch(serviceType) {
      case 'cotizacion': return 'Solicitar Cotización'
      case 'recoleccion': return 'Programar Recolección'
      case 'proceso': return 'Iniciar Proceso'
      default: return 'Contacto'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor completa todos los campos obligatorios (*)')
      setIsSubmitting(false)
      return
    }

    try {
      const emailBody = `
📋 Información del Cliente:
Teléfono: ${formData.phone}
${formData.company ? `Empresa: ${formData.company}` : ''}

📍 Información de Servicio:
Servicio: ${formData.service}
${formData.address ? `Dirección: ${formData.address}` : ''}
${formData.schedule ? `Horario preferido: ${formData.schedule}` : ''}
${formData.volume ? `Volumen aproximado: ${formData.volume}` : ''}

📝 Mensaje:
${formData.message}
      `.trim()

      // Enviar el mensaje a la base de datos a través del Server Action
      const result = await createContactMessage({
        name: formData.name,
        email: formData.email,
        subject: getTitle() + (formData.company ? ` - ${formData.company}` : ''),
        message: emailBody
      })
      
      if (!result.success) {
        throw new Error('No se pudo guardar el mensaje en la base de datos');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: serviceType === 'cotizacion' ? 'Cotización de Servicios' : 
                serviceType === 'recoleccion' ? 'Solicitud de Recolección' : 
                'Proceso de Reciclaje',
        message: '',
        company: '',
        address: '',
        schedule: '',
        volume: ''
      })
      setSubmitStatus('success')
      setIsSubmitting(false)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 p-8 rounded-t-[2.5rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                <i className="fas fa-paper-plane text-brand-green text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">{getTitle()}</h2>
                <p className="text-brand-gray">Completa el formulario y te contactaremos en menos de 24 horas</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-brand-gray" />
            </button>
          </div>
        </div>

        {/* Form - EXACTAMENTE el mismo estilo del ContactSection */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="empresa" className="text-sm font-bold text-brand-dark ml-1">
                  Empresa (opcional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <i className="fas fa-building"></i>
                  </div>
                  <input
                    type="text"
                    id="empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Campos específicos según el tipo de servicio */}
            {serviceType === 'recoleccion' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="direccion" className="text-sm font-bold text-brand-dark ml-1">
                    Dirección para recolección
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <input
                      type="text"
                      id="direccion"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Dirección completa"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="horario" className="text-sm font-bold text-brand-dark ml-1">
                    Horario preferido
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-clock"></i>
                    </div>
                    <select
                      id="horario"
                      name="schedule"
                      value={formData.schedule}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark appearance-none cursor-pointer"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona un horario</option>
                      <option value="Mañana (7am-12pm)">Mañana (7am-12pm)</option>
                      <option value="Tarde (1pm-5pm)">Tarde (1pm-5pm)</option>
                      <option value="Cualquier horario">Cualquier horario</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                  placeholder="Cuéntanos cómo podemos ayudarte, tipo de residuos, frecuencia requerida, etc."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all font-medium text-brand-dark placeholder-gray-400 resize-none"
                  disabled={isSubmitting}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-5 rounded-xl font-bold text-lg shadow-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane group-hover:rotate-12 transition-transform duration-300"></i>
                  Enviar Solicitud
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                <i className="fas fa-check-circle mr-2"></i>
                ¡Solicitud enviada exitosamente! Te contactaremos pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                <i className="fas fa-exclamation-circle mr-2"></i>
                Ocurrió un error al enviar el mensaje. Intenta nuevamente.
              </div>
            )}

            <p className="text-center text-xs text-brand-gray mt-4 flex items-center justify-center gap-1">
              <i className="fas fa-lock text-brand-green"></i>
              * Campos obligatorios | Tus datos están protegidos
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}