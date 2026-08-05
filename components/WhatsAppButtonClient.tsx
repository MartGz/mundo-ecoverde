"use client";

import { useState } from "react";

export default function WhatsAppButtonClient({
  whatsappUrl,
  whatsappDisplay,
}: {
  whatsappUrl: string;
  whatsappDisplay: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Perfil del negocio */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-white rounded-2xl shadow-2xl p-5 border border-green-200 animate-slide-up">
          {/* Header del perfil */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
              <img
                src="/images/logos/logo.png"
                alt="MundoEcoVerde Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Mundo Eco Verde
              </h3>
              <p className="text-sm text-gray-600">
                Gestión sostenible de residuos
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  <i className="fas fa-check-circle text-green-600 mr-1"></i>
                  Verificado
                </span>
                <span className="text-xs text-gray-500">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  4.9 (128 reseñas)
                </span>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-green-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700">Número WhatsApp</p>
                <p className="text-green-600 font-semibold">{whatsappDisplay}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-green-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700">
                  Horario de respuesta
                </p>
                <p className="text-gray-600">Generalmente responde en 15 min</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <i className="fas fa-certificate text-green-600"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700">Servicios</p>
                <p className="text-gray-600">
                  Reciclaje, gestión integral, certificación
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Chatear
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green transition-all duration-300 hover:scale-110"
      >
        <i className="fab fa-whatsapp text-white text-xl lg:text-2xl"></i>

        {/* Indicador animado */}
        <span className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-green-100 items-center justify-center">
            <i className="fas fa-comment text-green-600 text-xs"></i>
          </span>
        </span>
      </button>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
