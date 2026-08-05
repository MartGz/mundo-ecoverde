'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, Shield } from 'lucide-react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
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
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Credenciales incorrectas')
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
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-bold tracking-wider text-brand-green uppercase bg-green-100 rounded-full">
          <Lock size={12} />
          Acceso Restringido
        </div>
        <h1 className="text-2xl font-extrabold text-brand-dark">Bienvenido de nuevo</h1>
        <p className="text-brand-gray text-sm mt-2">Ingresa tus credenciales para entrar al panel administrativo.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Correo
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mundoecoverde.com"
              required
              autoComplete="username"
              className="w-full bg-gray-50 border border-gray-200 text-brand-dark placeholder-gray-400 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Contraseña
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              autoComplete="current-password"
              className="w-full bg-gray-50 border border-gray-200 text-brand-dark placeholder-gray-400 rounded-xl pl-11 pr-11 py-3.5 outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-green transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2.5 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold">!</span>
            </div>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full py-3.5 rounded-xl font-bold text-base disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-green hover:shadow-none transition-all"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Verificando...
            </>
          ) : (
            <>
              <Shield size={18} />
              Ingresar al Panel
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
        <Lock size={12} />
        <span>Conexión segura · Mundo EcoVerde © {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
