import { getDashboardStats, getContactMessages } from '@/app/actions/admin';
import { Users, MessageSquare, Briefcase, Leaf, TrendingUp, Clock, Mail } from 'lucide-react';

export default async function AdminDashboard() {
  const statsRes = await getDashboardStats();
  const messagesRes = await getContactMessages();
  const stats = statsRes.data;
  const recentMessages = (messagesRes.data || []).slice(0, 5);

  const cards = [
    {
      label: 'Mensajes',
      value: stats.messages,
      sub: `${stats.unreadMessages} sin leer`,
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-700',
      glow: 'rgba(59,130,246,0.35)',
    },
    {
      label: 'Servicios Activos',
      value: stats.services,
      sub: 'En la web pública',
      icon: Briefcase,
      color: 'from-[#49a739] to-[#2e7d32]',
      glow: 'rgba(73,167,57,0.35)',
    },
    {
      label: 'Iniciativas',
      value: stats.initiatives,
      sub: 'Proyectos creados',
      icon: Leaf,
      color: 'from-teal-500 to-teal-700',
      glow: 'rgba(20,184,166,0.35)',
    },
    {
      label: 'Usuarios',
      value: stats.users,
      sub: 'Registrados',
      icon: Users,
      color: 'from-purple-500 to-purple-700',
      glow: 'rgba(168,85,247,0.35)',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
          <p className="text-[#6b7280] text-sm mt-1">Bienvenido al panel de control de Mundo EcoVerde</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-[#4b5563] bg-[#111a11] border border-[#1a2e1a] rounded-xl px-3 py-2">
          <Clock size={13} />
          <span>{new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="relative bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-5 overflow-hidden group hover:border-[#2a3e2a] transition-all duration-300"
            style={{ boxShadow: `0 0 0 0 ${card.glow}` }}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${card.color} opacity-5 translate-x-8 -translate-y-8 group-hover:opacity-10 transition-opacity`} />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#6b7280] text-xs font-semibold uppercase tracking-wider">{card.label}</p>
                <p className="text-4xl font-extrabold text-white mt-1">{card.value}</p>
                <p className="text-[#4b5563] text-xs mt-1 font-medium">{card.sub}</p>
              </div>
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}
                style={{ boxShadow: `0 8px 20px ${card.glow}` }}>
                <card.icon size={20} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent messages */}
        <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Mail size={16} className="text-blue-400" />
              </div>
              <h2 className="text-white font-bold text-sm">Mensajes Recientes</h2>
            </div>
            <a href="/admin/mensajes" className="text-xs text-[#49a739] font-semibold hover:underline">Ver todos</a>
          </div>
          <div className="space-y-3">
            {recentMessages.length > 0 ? recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#111a11] border border-[#1a2e1a] hover:border-[#2a3e2a] transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{msg.name}</p>
                  <p className="text-[#4b5563] text-xs truncate">{msg.subject}</p>
                </div>
                {!msg.isRead && <span className="w-2 h-2 rounded-full bg-[#49a739] flex-shrink-0" />}
              </div>
            )) : (
              <div className="text-center py-8">
                <Mail size={32} className="mx-auto text-[#1a2e1a] mb-2" />
                <p className="text-[#4b5563] text-sm">Sin mensajes aún</p>
              </div>
            )}
          </div>
        </div>

        {/* Activity log */}
        <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#49a739]/10 flex items-center justify-center">
              <TrendingUp size={16} className="text-[#49a739]" />
            </div>
            <h2 className="text-white font-bold text-sm">Actividad del Sistema</h2>
          </div>
          <div className="space-y-3">
            {[
              { text: 'Panel administrativo activo', time: 'Ahora', color: 'bg-[#49a739]' },
              { text: 'Base de datos conectada (Prisma Postgres)', time: 'Conectado', color: 'bg-blue-500' },
              { text: 'Formularios web integrados con BD', time: 'Activo', color: 'bg-teal-500' },
              { text: 'Vercel deployment configurado', time: 'Listo', color: 'bg-purple-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#111a11] border border-[#1a2e1a]">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                <p className="text-[#9ca3af] text-sm flex-1">{item.text}</p>
                <span className="text-[#4b5563] text-xs">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
