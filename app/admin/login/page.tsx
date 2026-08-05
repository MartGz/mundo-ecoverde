import { Leaf, Recycle, Shield, Users } from 'lucide-react'
import { getSiteStats } from '@/app/actions/settings'
import LoginForm from './LoginForm'

export default async function AdminLoginPage() {
  const statsRes = await getSiteStats()
  const stats = statsRes.data

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left brand panel */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-[#1a3a1a] text-white md:w-1/2 lg:w-[45%] px-8 py-12 md:py-0 flex flex-col justify-center">
        <div className="absolute top-[-15%] left-[-15%] w-[400px] h-[400px] rounded-full bg-brand-green opacity-[0.12] blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-green opacity-[0.15] blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#49a739 1px, transparent 1px), linear-gradient(90deg, #49a739 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-md mx-auto md:mx-0">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-darker shadow-[0_20px_50px_rgba(73,167,57,0.4)] mb-8">
            <Leaf className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
            Gestiona el impacto ambiental de <span className="text-brand-green">Mundo EcoVerde</span>
          </h1>
          <p className="text-gray-300 leading-relaxed mb-10">
            Un solo panel para administrar servicios, iniciativas, mensajes y todo el contenido de tu sitio.
          </p>

          {stats && (
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <Recycle className="w-5 h-5 text-brand-green mb-2" />
                <p className="text-xl font-extrabold">{stats.tonnes}</p>
                <p className="text-gray-400 text-xs mt-0.5">Toneladas</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <Users className="w-5 h-5 text-brand-green mb-2" />
                <p className="text-xl font-extrabold">{stats.allies}</p>
                <p className="text-gray-400 text-xs mt-0.5">Aliados</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-brand-green mb-2" />
                <p className="text-xl font-extrabold">{stats.certifiedPercent}</p>
                <p className="text-gray-400 text-xs mt-0.5">Certificado</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <LoginForm />
      </div>
    </div>
  )
}
