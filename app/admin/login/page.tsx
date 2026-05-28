// app/admin/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Leaf, Lock, Shield } from 'lucide-react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Contraseña incorrecta')
        setIsLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Error de conexión. Intenta nuevamente.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f0a] flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#49a739] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2e7d32] opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#49a739] opacity-[0.04] blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#49a739 1px, transparent 1px), linear-gradient(90deg, #49a739 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-[#49a739] to-[#2e7d32] shadow-[0_20px_60px_rgba(73,167,57,0.4)] mb-6 relative">
            <Leaf className="w-10 h-10 text-white" strokeWidth={1.5} />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-[#49a739]" />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Mundo <span className="text-[#49a739]">EcoVerde</span>
          </h1>
          <p className="text-[#6b7280] mt-2 font-medium">Panel Administrativo</p>
        </div>

        {/* Card */}
        <div className="bg-[#111a11] border border-[#1f2f1f] rounded-3xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#49a739]/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#49a739]" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Acceso Restringido</h2>
              <p className="text-[#6b7280] text-sm">Solo administradores autorizados</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-[#9ca3af] uppercase tracking-wider">
                Contraseña de Acceso
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-[#0d150d] border border-[#1f2f1f] text-white placeholder-[#374151] rounded-xl px-4 py-4 pr-12 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#49a739] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">!</span>
                </div>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-bold text-white text-base relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              style={{ background: 'linear-gradient(135deg, #49a739 0%, #2e7d32 100%)' }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Verificando...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Shield size={18} />
                  Ingresar al Panel
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#1f2f1f] flex items-center justify-center gap-2 text-xs text-[#4b5563]">
            <Lock size={12} />
            <span>Conexión segura SSL · Mundo EcoVerde © 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
