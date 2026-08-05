'use client';

import { useState, useTransition } from 'react';
import { Users, Trash2, Shield, UserCircle, Search, Calendar, Plus, X, Pencil, Check } from 'lucide-react';
import { deleteUser, createUser, updateUser } from '@/app/actions/admin';

interface User {
  id: string;
  name: string | null;
  email: string;
  role: string;
  createdAt: Date;
}

const roleConfig: Record<string, { label: string; color: string }> = {
  ADMIN: { label: 'Admin',   color: 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20' },
  USER:  { label: 'Usuario', color: 'text-blue-600 bg-blue-100 border-blue-200' },
};

const emptyForm = { name: '', email: '', password: '', role: 'USER' };

export default function UsuariosClient({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (user: User) => {
    setEditing(user);
    setForm({ name: user.name || '', email: user.email, password: '', role: user.role });
    setFormError('');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(emptyForm);
    setFormError('');
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este usuario?')) return;
    startTransition(async () => {
      await deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    });
  };

  const handleSubmit = () => {
    if (!form.email || (!editing && !form.password)) return;
    setFormError('');
    startTransition(async () => {
      if (editing) {
        const res = await updateUser(editing.id, {
          name: form.name || undefined,
          email: form.email,
          role: form.role,
          password: form.password || undefined,
        });
        if (!res.success || !res.data) {
          setFormError(res.error || 'Error al actualizar usuario');
          return;
        }
        setUsers(prev => prev.map(u => u.id === editing.id ? res.data! : u));
      } else {
        const res = await createUser({
          name: form.name || undefined,
          email: form.email,
          password: form.password,
          role: form.role,
        });
        if (!res.success || !res.data) {
          setFormError(res.error || 'Error al crear usuario');
          return;
        }
        setUsers(prev => [res.data!, ...prev]);
      }
      closeForm();
    });
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[#111827]">Usuarios</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {users.length} usuarios registrados ·{' '}
            {users.filter(u => u.role === 'ADMIN').length} administradores
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Stats pills */}
          <div className="flex gap-2">
            {Object.entries(roleConfig).map(([key, cfg]) => (
              <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${cfg.color}`}>
                <Shield size={11} />
                {cfg.label}: {users.filter(u => u.role === key).length}
              </span>
            ))}
          </div>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-[#111827] font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
          >
            <Plus size={18} />
            Nuevo Usuario
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4b5563]" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por nombre o email..."
          className="w-full bg-[#ffffff] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm"
        />
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[#111827] font-extrabold text-lg">{editing ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
              <button onClick={closeForm} className="p-2 rounded-xl bg-[#f3f5f3] text-[#6b7280] hover:text-[#111827] transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Nombre</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Nombre completo"
                  className="w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Email *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="usuario@correo.com"
                  className="w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">
                  Contraseña {editing ? '(dejar en blanco para no cambiar)' : '*'}
                </label>
                <input type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Rol</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(roleConfig).map(([key, cfg]) => (
                    <button key={key} onClick={() => setForm(f => ({ ...f, role: key }))}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${form.role === key ? cfg.color : 'border-[#e5e9e5] text-[#4b5563] hover:border-[#c7d3c7]'}`}>
                      {cfg.label}
                    </button>
                  ))}
                </div>
              </div>
              {formError && (
                <p className="text-red-600 text-sm">{formError}</p>
              )}
              <button onClick={handleSubmit} disabled={isPending || !form.email || (!editing && !form.password)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all">
                {isPending ? 'Guardando...' : editing ? 'Guardar Cambios' : 'Crear Usuario'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-[#ffffff] border border-[#e5e9e5] rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <Users size={40} className="mx-auto text-[#e5e9e5] mb-3" />
            <p className="text-[#6b7280] font-semibold">
              {search ? 'No se encontraron usuarios' : 'No hay usuarios registrados'}
            </p>
            <p className="text-[#374151] text-sm mt-1">
              {search ? 'Prueba con otros términos de búsqueda' : 'Crea el primer usuario con el botón de arriba'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e9e5] bg-[#f3f5f3]">
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider">Usuario</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider hidden sm:table-cell">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider">Rol</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#4b5563] uppercase tracking-wider hidden md:table-cell">Registro</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-[#4b5563] uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e9e5]">
                {filtered.map((user) => {
                  const roleCfg = roleConfig[user.role] || roleConfig.USER;
                  return (
                    <tr key={user.id} className="hover:bg-[#f3f5f3] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-[0_4px_12px_rgba(73,167,57,0.3)]">
                            {user.name ? user.name.charAt(0).toUpperCase() : <UserCircle size={16} />}
                          </div>
                          <div>
                            <p className="text-[#111827] text-sm font-semibold">{user.name || 'Sin nombre'}</p>
                            <p className="text-[#4b5563] text-xs sm:hidden">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="text-[#6b7280] text-sm">{user.email}</span>
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
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all">
                          <button
                            onClick={() => openEdit(user)}
                            className="p-2 rounded-xl text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all"
                            title="Editar usuario"
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            disabled={isPending}
                            className="p-2 rounded-xl text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all disabled:opacity-50"
                            title="Eliminar usuario"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
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
        Crea y administra las cuentas que pueden acceder a este panel.
      </p>
    </div>
  );
}
