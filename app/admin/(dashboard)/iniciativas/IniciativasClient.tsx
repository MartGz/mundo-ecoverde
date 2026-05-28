'use client';

import { useState, useTransition } from 'react';
import { Leaf, Plus, Trash2, X, Pencil, Check } from 'lucide-react';
import { createInitiative, deleteInitiative, updateInitiative } from '@/app/actions/admin';

interface Initiative {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  status: string;
  createdAt: Date;
}

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  ACTIVE:    { label: 'Activa',      color: 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20',   dot: 'bg-[#49a739]' },
  COMPLETED: { label: 'Completada',  color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',       dot: 'bg-blue-400' },
  PLANNED:   { label: 'Planeada',    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',    dot: 'bg-amber-400' },
};

export default function IniciativasClient({ initialInitiatives }: { initialInitiatives: Initiative[] }) {
  const [initiatives, setInitiatives] = useState(initialInitiatives);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Initiative | null>(null);
  const [form, setForm] = useState({ title: '', content: '', imageUrl: '', status: 'ACTIVE' });
  const [isPending, startTransition] = useTransition();

  const handleCreate = () => {
    if (!form.title || !form.content) return;
    startTransition(async () => {
      await createInitiative({ ...form, imageUrl: form.imageUrl || undefined });
      setForm({ title: '', content: '', imageUrl: '', status: 'ACTIVE' });
      setShowForm(false);
      window.location.reload();
    });
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteInitiative(id);
      setInitiatives(prev => prev.filter(i => i.id !== id));
    });
  };

  const handleSaveEdit = () => {
    if (!editing) return;
    startTransition(async () => {
      await updateInitiative(editing.id, { title: editing.title, content: editing.content, status: editing.status });
      setInitiatives(prev => prev.map(i => i.id === editing.id ? { ...i, ...editing } : i));
      setEditing(null);
    });
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Iniciativas</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            {initiatives.filter(i => i.status === 'ACTIVE').length} activas ·{' '}
            {initiatives.filter(i => i.status === 'COMPLETED').length} completadas ·{' '}
            {initiatives.filter(i => i.status === 'PLANNED').length} planeadas
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} />
          Nueva Iniciativa
        </button>
      </div>

      {/* Status filter pills */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(statusConfig).map(([key, cfg]) => {
          const count = initiatives.filter(i => i.status === key).length;
          return (
            <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cfg.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label}: {count}
            </span>
          );
        })}
      </div>

      {/* Create Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-extrabold text-lg">Nueva Iniciativa</h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-xl bg-[#111a11] text-[#6b7280] hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Título *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Campaña de Reciclaje 2025"
                  className="w-full bg-[#111a11] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Contenido / Descripción *</label>
                <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                  rows={4} placeholder="Describe esta iniciativa..."
                  className="w-full bg-[#111a11] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all resize-none text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">URL de Imagen (opcional)</label>
                <input value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                  placeholder="https://imagen.com/foto.jpg"
                  className="w-full bg-[#111a11] border border-[#1a2e1a] text-white placeholder-[#374151] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5 block">Estado</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(statusConfig).map(([key, cfg]) => (
                    <button key={key} onClick={() => setForm(f => ({ ...f, status: key }))}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${form.status === key ? cfg.color : 'border-[#1a2e1a] text-[#4b5563] hover:border-[#2a3e2a]'}`}>
                      {cfg.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleCreate} disabled={isPending || !form.title || !form.content}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all">
                {isPending ? 'Creando...' : 'Crear Iniciativa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {initiatives.length === 0 ? (
        <div className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl p-12 text-center">
          <Leaf size={40} className="mx-auto text-[#1a2e1a] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay iniciativas aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea tu primera iniciativa con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {initiatives.map(initiative => {
            const cfg = statusConfig[initiative.status] || statusConfig.ACTIVE;
            return (
              <div key={initiative.id}
                className="bg-[#0d150d] border border-[#1a2e1a] rounded-2xl overflow-hidden hover:border-[#2a3e2a] transition-all group">
                {initiative.imageUrl && (
                  <div className="h-36 overflow-hidden">
                    <img src={initiative.imageUrl} alt={initiative.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                {!initiative.imageUrl && (
                  <div className="h-24 bg-gradient-to-br from-[#0f1f0f] to-[#1a2e1a] flex items-center justify-center">
                    <Leaf size={32} className="text-[#49a739]/30" />
                  </div>
                )}
                <div className="p-5">
                  {editing?.id === initiative.id ? (
                    <div className="space-y-3">
                      <input value={editing.title} onChange={e => setEditing(ed => ed ? { ...ed, title: e.target.value } : ed)}
                        className="w-full bg-[#111a11] border border-[#1a2e1a] text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-[#49a739]" />
                      <textarea value={editing.content} onChange={e => setEditing(ed => ed ? { ...ed, content: e.target.value } : ed)}
                        rows={2} className="w-full bg-[#111a11] border border-[#1a2e1a] text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-[#49a739] resize-none" />
                      <div className="grid grid-cols-3 gap-1">
                        {Object.entries(statusConfig).map(([key, c]) => (
                          <button key={key} onClick={() => setEditing(ed => ed ? { ...ed, status: key } : ed)}
                            className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${editing.status === key ? c.color : 'border-[#1a2e1a] text-[#4b5563]'}`}>
                            {c.label}
                          </button>
                        ))}
                      </div>
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
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-white font-bold text-sm leading-snug">{initiative.title}</h3>
                        <div className="flex gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setEditing(initiative)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-white hover:bg-[#111a11] transition-all">
                            <Pencil size={13} />
                          </button>
                          <button onClick={() => handleDelete(initiative.id)} disabled={isPending} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-400 hover:bg-red-500/10 transition-all">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                      <p className="text-[#6b7280] text-xs leading-relaxed line-clamp-3">{initiative.content}</p>
                      <div className="mt-3 pt-3 border-t border-[#1a2e1a] flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cfg.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                        <span className="text-[#374151] text-xs">{new Date(initiative.createdAt).toLocaleDateString('es-CO')}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
