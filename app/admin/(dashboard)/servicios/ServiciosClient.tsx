'use client';

import { useState, useTransition } from 'react';
import { Briefcase, Plus, Trash2, ToggleLeft, ToggleRight, X, Pencil } from 'lucide-react';
import { createService, deleteService, updateService } from '@/app/actions/admin';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  category: string;
  isActive: boolean;
  createdAt: Date;
}

const iconOptions = ['♻️', '🌿', '🚛', '🌍', '📦', '⚡', '💧', '🔬', '🏭', '🌱'];

const categoryConfig: Record<string, { label: string; color: string }> = {
  OPERATIVO: { label: 'Operativo', color: 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20' },
  SOCIAL:    { label: 'Social',    color: 'text-amber-600 bg-amber-100 border-amber-200' },
};

const emptyForm = { title: '', description: '', icon: '♻️', category: 'OPERATIVO' };

export default function ServiciosClient({ initialServices }: { initialServices: Service[] }) {
  const [services, setServices] = useState(initialServices);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [isPending, startTransition] = useTransition();

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (service: Service) => {
    setEditing(service);
    setForm({
      title: service.title,
      description: service.description,
      icon: service.icon || '♻️',
      category: service.category,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(emptyForm);
  };

  const handleSubmit = () => {
    if (!form.title || !form.description) return;
    startTransition(async () => {
      if (editing) {
        const res = await updateService(editing.id, form);
        if (res.success) {
          setServices(prev => prev.map(s => s.id === editing.id ? { ...s, ...form } : s));
        }
      } else {
        const res = await createService(form);
        if (res.success && res.data) {
          setServices(prev => [res.data!, ...prev]);
        }
      }
      closeForm();
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

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[#111827]">Servicios</h1>
          <p className="text-[#6b7280] text-sm mt-1">{services.length} servicios registrados · {services.filter(s => s.isActive).length} activos</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-[#111827] font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} />
          Nuevo Servicio
        </button>
      </div>

      {/* Form modal (create + edit) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[#111827] font-extrabold text-lg">{editing ? 'Editar Servicio' : 'Nuevo Servicio'}</h2>
              <button onClick={closeForm} className="p-2 rounded-xl bg-[#f3f5f3] text-[#6b7280] hover:text-[#111827] transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Icono</label>
                <div className="flex flex-wrap gap-2">
                  {iconOptions.map(ico => (
                    <button key={ico} onClick={() => setForm(f => ({ ...f, icon: ico }))}
                      className={`w-10 h-10 rounded-lg text-xl transition-all ${form.icon === ico ? 'bg-[#49a739]/20 border-2 border-[#49a739]' : 'bg-[#f3f5f3] border border-[#e5e9e5] hover:border-[#c7d3c7]'}`}>
                      {ico}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Título *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Recolección de Residuos"
                  className="w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Descripción *</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={3} placeholder="Describe el servicio..."
                  className="w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all resize-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block">Categoría</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(categoryConfig).map(([key, cfg]) => (
                    <button key={key} onClick={() => setForm(f => ({ ...f, category: key }))}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${form.category === key ? cfg.color : 'border-[#e5e9e5] text-[#4b5563] hover:border-[#c7d3c7]'}`}>
                      {cfg.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleSubmit} disabled={isPending || !form.title || !form.description}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all">
                {isPending ? 'Guardando...' : editing ? 'Guardar Cambios' : 'Crear Servicio'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Services grid */}
      {services.length === 0 ? (
        <div className="bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-12 text-center">
          <Briefcase size={40} className="mx-auto text-[#e5e9e5] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay servicios aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea tu primer servicio con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id}
              className="bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-5 hover:border-[#c7d3c7] transition-all group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{service.icon || '♻️'}</span>
                <div className="flex items-center gap-1">
                  <button onClick={() => openEdit(service)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all opacity-0 group-hover:opacity-100">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => handleToggle(service.id, service.isActive)} className={`p-1.5 rounded-lg transition-all ${service.isActive ? 'text-[#49a739]' : 'text-[#4b5563]'}`}>
                    {service.isActive ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                  </button>
                  <button onClick={() => handleDelete(service.id)} disabled={isPending} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all opacity-0 group-hover:opacity-100">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-1">{service.title}</h3>
              <p className="text-[#6b7280] text-xs leading-relaxed">{service.description}</p>
              <div className="mt-3 pt-3 border-t border-[#e5e9e5] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${service.isActive ? 'bg-[#49a739]' : 'bg-[#374151]'}`} />
                  <span className={`text-xs font-semibold ${service.isActive ? 'text-[#49a739]' : 'text-[#4b5563]'}`}>
                    {service.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${(categoryConfig[service.category] || categoryConfig.OPERATIVO).color}`}>
                  {(categoryConfig[service.category] || categoryConfig.OPERATIVO).label}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
