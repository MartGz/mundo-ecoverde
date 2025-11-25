import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Nosotros - Mundo Eco Verde',
  description: 'Conoce nuestra historia, misión, visión y valores como asociación dedicada al reciclaje en Cartagena',
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section para Nosotros */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-eco-verde-800 to-eco-verde-900 text-white">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-eco-verde-100 leading-relaxed">
              Conoce más sobre nuestra asociación, nuestra misión y nuestro compromiso 
              con el medio ambiente y la comunidad de Cartagena.
            </p>
          </div>
        </div>
      </section>

      {/* Historia y Valores */}
      <section className="py-20 bg-white">
        <div className="container-eco">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-eco-verde-800 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-eco-neutral-gris text-lg leading-relaxed">
                <p>
                  <strong>Mundo Eco Verde</strong> nació como una iniciativa comunitaria 
                  con el objetivo de transformar la gestión de residuos en Cartagena. 
                  Desde nuestros inicios, nos hemos dedicado a dignificar el oficio 
                  del reciclador y promover la cultura del reciclaje.
                </p>
                <p>
                  Como <strong>Centro de Clasificación ECA</strong> certificado, 
                  hemos crecido para servir a más de 500 clientes entre residencias, 
                  empresas y comunidades, siempre manteniendo nuestro compromiso 
                  ambiental y social.
                </p>
                <p>
                  Hoy somos referentes en el aprovechamiento de residuos sólidos 
                  en la región Caribe, contribuyendo activamente a la economía 
                  circular y al desarrollo sostenible.
                </p>
              </div>
            </div>
            
            <div className="bg-eco-verde-50 rounded-2xl p-8">
              <div className="grid gap-6">
                <div className="card-eco rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-eco-verde-800 mb-3">🏭 Nuestra Infraestructura</h3>
                  <p className="text-eco-neutral-gris">
                    Contamos con una Estación de Clasificación y Aprovechamiento (ECA) 
                    equipada con tecnología y personal capacitado para el procesamiento 
                    eficiente de materiales reciclables.
                  </p>
                </div>
                
                <div className="card-eco rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-eco-verde-800 mb-3">👥 Nuestro Equipo</h3>
                  <p className="text-eco-neutral-gris">
                    Más de 50 familias dependen de nuestra asociación, conformando 
                    un equipo comprometido con la sostenibilidad y el servicio de calidad.
                  </p>
                </div>
                
                <div className="card-eco rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-eco-verde-800 mb-3">🌎 Impacto Ambiental</h3>
                  <p className="text-eco-neutral-gris">
                    Hemos logrado desviar más de 1,000 toneladas de residuos de los 
                    rellenos sanitarios, contribuyendo significativamente a la 
                    reducción de la huella de carbono.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-eco-verde-50">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              Nuestra Esencia
            </h2>
            <p className="text-xl text-eco-neutral-gris max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y nuestro compromiso con la comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-2xl p-8 text-center hover:shadow-eco-lg transition">
              <div className="w-20 h-20 bg-eco-verde-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-eco-verde-800 mb-4">Misión</h3>
              <p className="text-eco-neutral-gris leading-relaxed">
                Promover la cultura del reciclaje y el aprovechamiento de residuos, 
                contribuyendo al cuidado del medio ambiente y dignificando el oficio 
                de los recicladores a través de procesos eficientes y sostenibles.
              </p>
            </div>

            <div className="card rounded-2xl p-8 text-center hover:shadow-eco-lg transition">
              <div className="w-20 h-20 bg-eco-verde-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-eco-verde-800 mb-4">Visión</h3>
              <p className="text-eco-neutral-gris leading-relaxed">
                Ser líderes en la gestión integral de residuos sólidos en la región Caribe, 
                reconocidos por nuestro compromiso ambiental, innovación en procesos y 
                impacto social positivo para el año 2025.
              </p>
            </div>

            <div className="card rounded-2xl p-8 text-center hover:shadow-eco-lg transition">
              <div className="w-20 h-20 bg-eco-verde-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-eco-verde-800 mb-4">Valores</h3>
              <div className="text-eco-neutral-gris text-left space-y-2">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                  <strong>Compromiso ambiental</strong>
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                  <strong>Responsabilidad social</strong>
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                  <strong>Trabajo en equipo</strong>
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                  <strong>Innovación continua</strong>
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-eco-verde-500 rounded-full mr-3"></span>
                  <strong>Sostenibilidad</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Reconocimientos */}
      <section className="py-20 bg-white">
        <div className="container-eco">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-eco-verde-800 mb-4">
              Certificaciones y Aliados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-eco-verde-800 mb-6">🏅 Reconocimientos</h3>
              <div className="space-y-4">
                <div className="bg-eco-verde-50 rounded-xl p-6">
                  <h4 className="font-bold text-eco-verde-900 text-lg mb-2">Centro de Clasificación ECA</h4>
                  <p className="text-eco-verde-800">
                    Certificados como Estación de Clasificación y Aprovechamiento 
                    autorizada para el manejo integral de residuos sólidos.
                  </p>
                </div>
                
                <div className="bg-eco-verde-50 rounded-xl p-6">
                  <h4 className="font-bold text-eco-verde-900 text-lg mb-2">Asociación Legalmente Constituida</h4>
                  <p className="text-eco-verde-800">
                    Reconocida ante Cámara de Comercio y entidades ambientales 
                    como asociación sin ánimo de lucro.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-eco-verde-800 mb-6">🤝 Aliados Estratégicos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Alcaldía de Cartagena', logo: '🏛️' },
                  { name: 'EPA Cartagena', logo: '🌿' },
                  { name: 'Empresas Privadas', logo: '🏢' },
                  { name: 'Comunidades', logo: '👨‍👩‍👧‍👦' }
                ].map((aliado, index) => (
                  <div key={index} className="bg-eco-verde-100 rounded-xl p-4 text-center hover:scale-105 transition">
                    <div className="text-3xl mb-2">{aliado.logo}</div>
                    <p className="text-eco-verde-900 font-semibold text-sm">{aliado.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}