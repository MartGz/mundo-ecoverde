'use client';

import { useState, useTransition } from 'react';
import { Users, Trash2, Shield, UserCircle, Search, Calendar } from 'lucide-react';
import { deleteUser } from '@/app/actions/admin';

interface User {
  id: string;
  name: string | null;
  email: string;
  role: string;
  createdAt: Date;
}

const roleConfig: Record<string, { label: string; color: string }> = {
  ADMIN: { label: 'Admin',   color: 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20' },
  USER:  { label: 'Usuario', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
};

export default function UsuariosClient({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este usuario?')) return;
    startTransition(async () => {
      await deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    });
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Usuarios</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {users.length} usuarios registrados ·{' '}
            {users.filter(u => u.role === 'ADMIN').length} administradores
          </p>
        </div>
        {/* Stats pills */}
        <div className="flex gap-2">
          {Object.entries(roleConfig).map(([key, cfg]) => (
            <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${cfg.color}`}>
              <Shield size={11} />
              {cfg.label}: {users.filter(u => u.role === key).length}
            </span>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4b5563]" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por nombre o email..."
          className="w-full bg-[#0d150d] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <Users size={40} className="mx-auto text-[#1a2e1a] mb-3" />
            <p className="text-[#6b7280] font-semibold">
              {search ? 'No se encontraron usuarios' : 'No hay usuarios registrados'}
            </p>
            <p className="text-[#374151] text-sm mt-1">
              {search ? 'Prueba con otros términos de búsqueda' : 'Los usuarios aparecerán aquí cuando se registren'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a2e1a] bg-[#111a11]">
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider">Usuario</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider hidden sm:table-cell">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider">Rol</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider hidden md:table-cell">Registro</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-[#4b5563] uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a2e1a]">
                {filtered.map((user) => {
                  const roleCfg = roleConfig[user.role] || roleConfig.USER;
                  return (
                    <tr key={user.id} className="hover:bg-[#111a11] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-[0_4px_12px_rgba(73,167,57,0.3)]">
                            {user.name ? user.name.charAt(0).toUpperCase() : <UserCircle size={16} />}
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">{user.name || 'Sin nombre'}</p>
                            <p className="text-[#4b5563] text-xs sm:hidden">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="text-[#9ca3af] text-sm">{user.email}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${roleCfg.color}`}>
                          <Shield size={10} />
                          {roleCfg.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-1.5 text-[#4b5563] text-sm">
                          <Calendar size={13} />
                          {new Date(user.createdAt).toLocaleDateString('es-CO')}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(user.id)}
                          disabled={isPending}
                          className="p-2 rounded-xl text-[#4b5563] hover:text-red-400 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                          title="Eliminar usuario"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer note */}
      <p className="text-[#374151] text-xs text-center">
        Los usuarios se registran automáticamente cuando llenan formularios en tu sitio web.
      </p>
    </div>
  );
}
