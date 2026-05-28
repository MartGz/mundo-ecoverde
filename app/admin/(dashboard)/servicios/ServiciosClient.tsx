'use client';

import { useState, useTransition } from 'react';
import { Briefcase, Plus, Trash2, ToggleLeft, ToggleRight, X, Pencil, Check } from 'lucide-react';
import { createService, deleteService, updateService } from '@/app/actions/admin';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  isActive: boolean;
  createdAt: Date;
}

const iconOptions = ['♻️', '🌿', '🚛', '🌍', '📦', '⚡', '💧', '🔬', '🏭', '🌱'];

export default function ServiciosClient({ initialServices }: { initialServices: Service[] }) {
  const [services, setServices] = useState(initialServices);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ title: '', description: '', icon: '♻️' });
  const [isPending, startTransition] = useTransition();

  const handleCreate = () => {
    if (!form.title || !form.description) return;
    startTransition(async () => {
      await createService(form);
      setForm({ title: '', description: '', icon: '♻️' });
      setShowForm(false);
      // Refresh
      window.location.reload();
    });
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteService(id);
      setServices(prev => prev.filter(s => s.id !== id));
    });
  };

  const handleToggle = (id: string, current: boolean) => {
    startTransition(async () => {
      await updateService(id, { isActive: !current });
      setServices(prev => prev.map(s => s.id === id ? { ...s, isActive: !current } : s));
    });
  };

  const handleSaveEdit = () => {
    if (!editing) return;
    startTransition(async () => {
      await updateService(editing.id, { title: editing.title, description: editing.description, icon: editing.icon || '♻️' });
      setServices(prev => prev.map(s => s.id === editing.id ? { ...s, ...editing } : s));
      setEditing(null);
    });
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Servicios</h1>
          <p className="text-[#6b7280] text-sm mt-1">{services.length} servicios registrados · {services.filter(s => s.isActive).length} activos</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} />
          Nuevo Servicio
        </button>
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-extrabold text-lg">Nuevo Servicio</h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-xl bg-[#111a11] text-[#6b7280] hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Icono</label>
                <div className="flex flex-wrap gap-2">
                  {iconOptions.map(ico => (
                    <button key={ico} onClick={() => setForm(f => ({ ...f, icon: ico }))}
                      className={`w-10 h-10 rounded-lg text-xl transition-all ${form.icon === ico ? 'bg-[#49a739]/20 border-2 border-[#49a739]' : 'bg-[#111a11] border border-[#1a2e1a] hover:border-[#2a3e2a]'}`}>
                      {ico}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Título *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Recolección de Residuos"
                  className="w-full bg-[#111a11] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Descripción *</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={3} placeholder="Describe el servicio..."
                  className="w-full bg-[#111a11] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all resize-none" />
              </div>
              <button onClick={handleCreate} disabled={isPending || !form.title || !form.description}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all">
                {isPending ? 'Creando...' : 'Crear Servicio'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Services grid */}
      {services.length === 0 ? (
        <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-12 text-center">
          <Briefcase size={40} className="mx-auto text-[#1a2e1a] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay servicios aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea tu primer servicio con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id}
              className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-5 hover:border-[#2a3e2a] transition-all group">
              {editing?.id === service.id ? (
                <div className="space-y-3">
                  <input value={editing.title} onChange={e => setEditing(ed => ed ? { ...ed, title: e.target.value } : ed)}
                    className="w-full bg-[#111a11] border border-[#1a2e1a] text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-[#49a739]" />
                  <textarea value={editing.description} onChange={e => setEditing(ed => ed ? { ...ed, description: e.target.value } : ed)}
                    rows={2} className="w-full bg-[#111a11] border border-[#1a2e1a] text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-[#49a739] resize-none" />
                  <div className="flex gap-2">
                    <button onClick={handleSaveEdit} disabled={isPending} className="flex-1 py-2 rounded-xl bg-[#49a739] text-white text-sm font-bold flex items-center justify-center gap-1">
                      <Check size={14} /> Guardar
                    </button>
                    <button onClick={() => setEditing(null)} className="px-3 py-2 rounded-xl bg-[#111a11] border border-[#1a2e1a] text-[#6b7280] text-sm">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{service.icon || '♻️'}</span>
                    <div className="flex items-center gap-1">
                      <button onClick={() => setEditing(service)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-white hover:bg-[#111a11] transition-all opacity-0 group-hover:opacity-100">
                        <Pencil size={14} />
                      </button>
                      <button onClick={() => handleToggle(service.id, service.isActive)} className={`p-1.5 rounded-lg transition-all ${service.isActive ? 'text-[#49a739]' : 'text-[#4b5563]'}`}>
                        {service.isActive ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                      </button>
                      <button onClick={() => handleDelete(service.id)} disabled={isPending} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-400 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{service.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{service.description}</p>
                  <div className="mt-3 pt-3 border-t border-[#1a2e1a] flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${service.isActive ? 'bg-[#49a739]' : 'bg-[#374151]'}`} />
                    <span className={`text-xs font-semibold ${service.isActive ? 'text-[#49a739]' : 'text-[#4b5563]'}`}>
                      {service.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
