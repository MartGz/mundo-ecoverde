'use client';

import { useState, useTransition } from 'react';
import {
  Heart,
  Plus,
  Trash2,
  X,
  Pencil,
  ChevronUp,
  ChevronDown,
  FileText,
  Target,
  Eye,
  Image as ImageIcon,
  AlertCircle,
} from 'lucide-react';
import {
  updateNosotrosContent,
  createValue,
  updateValue,
  deleteValue,
  reorderValue,
} from '@/app/actions/nosotros';

interface NosotrosContent {
  id: string;
  heroEyebrow: string;
  heroHeading: string;
  heroParagraph: string;
  storyParagraph1: string;
  storyParagraph2: string;
  storyParagraph3: string;
  teamImageUrl: string;
  missionText1: string;
  missionText2: string;
  visionText1: string;
  visionText2: string;
  ctaHeading: string;
  ctaParagraph: string;
  updatedAt: Date;
}

interface ValueItem {
  id: string;
  order: number;
  icon: string;
  title: string;
  description: string;
  colorKey: string;
  createdAt: Date;
  updatedAt: Date;
}

const COLOR_OPTIONS = [
  { key: 'green', swatch: 'bg-green-500' },
  { key: 'blue', swatch: 'bg-blue-500' },
  { key: 'orange', swatch: 'bg-orange-500' },
  { key: 'purple', swatch: 'bg-purple-500' },
  { key: 'teal', swatch: 'bg-teal-500' },
  { key: 'red', swatch: 'bg-red-500' },
];

const COLOR_LABEL: Record<string, { text: string; bg: string }> = {
  green: { text: 'text-brand-green', bg: 'bg-green-100' },
  blue: { text: 'text-blue-600', bg: 'bg-blue-100' },
  orange: { text: 'text-orange-500', bg: 'bg-orange-100' },
  purple: { text: 'text-purple-600', bg: 'bg-purple-100' },
  teal: { text: 'text-teal-600', bg: 'bg-teal-100' },
  red: { text: 'text-red-500', bg: 'bg-red-100' },
};

const inputClass =
  'w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm';
const labelClass = 'text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block';

const EMPTY_CONTENT: NosotrosContent = {
  id: 'main',
  heroEyebrow: '',
  heroHeading: '',
  heroParagraph: '',
  storyParagraph1: '',
  storyParagraph2: '',
  storyParagraph3: '',
  teamImageUrl: '',
  missionText1: '',
  missionText2: '',
  visionText1: '',
  visionText2: '',
  ctaHeading: '',
  ctaParagraph: '',
  updatedAt: new Date(),
};

const EMPTY_VALUE_FORM = { icon: 'fas fa-leaf', title: '', description: '', colorKey: 'green' };

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-white border border-[#e5e9e5] rounded-2xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.25)] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#111827] font-extrabold text-lg">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-xl bg-[#f3f5f3] text-[#6b7280] hover:text-[#111827] transition-colors">
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function NosotrosClient({
  initialContent,
  initialValues,
}: {
  initialContent: NosotrosContent | null;
  initialValues: ValueItem[];
}) {
  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-[#111827]">Nosotros</h1>
        <p className="text-[#6b7280] text-sm mt-1">Contenido de la página "Nosotros" y los valores corporativos</p>
      </div>

      <ContentCard initialContent={initialContent ?? EMPTY_CONTENT} />
      <ValuesSection initialValues={initialValues} />
    </div>
  );
}

// ============ CONTENIDO GENERAL (Pattern A: preview + edit modal) ============
function ContentCard({ initialContent }: { initialContent: NosotrosContent }) {
  const [content, setContent] = useState(initialContent);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState(initialContent);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const openEdit = () => {
    setForm(content);
    setError('');
    setShowEdit(true);
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const { id, updatedAt, ...data } = form;
      const res = await updateNosotrosContent(data);
      if (res.success && res.data) {
        setContent(res.data);
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar el contenido de Nosotros');
      }
    });
  };

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-[#49a739]" />
          <h2 className="text-[#111827] font-extrabold text-lg">Contenido General</h2>
        </div>
        <button
          onClick={openEdit}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f3f5f3] hover:bg-[#e5e9e5] text-[#111827] text-sm font-semibold transition-all flex-shrink-0"
        >
          <Pencil size={14} /> Editar
        </button>
      </div>
      <p className="text-[#6b7280] text-sm mb-5">
        Textos e imagen que se muestran en la página pública "Nosotros" (hero, historia, misión, visión y llamado a la acción).
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-[#f7f9f7] border border-[#e5e9e5] flex-shrink-0 flex items-center justify-center">
          {content.teamImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={content.teamImageUrl} alt="Equipo" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon size={22} className="text-[#9ca3af]" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          {content.heroEyebrow && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#49a739] bg-[#49a739]/10 px-2 py-1 rounded-full mb-1.5">
              {content.heroEyebrow}
            </span>
          )}
          <h3 className="text-[#111827] font-extrabold text-base leading-snug line-clamp-2">
            {content.heroHeading || 'Sin título'}
          </h3>
          <p className="text-[#6b7280] text-sm mt-1 line-clamp-2">
            {content.heroParagraph || 'Sin descripción'}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl px-4 py-3">
          <p className="text-[#6b7280] text-xs font-semibold uppercase tracking-wider mb-1">Historia</p>
          <p className="text-[#111827] text-sm line-clamp-2">{content.storyParagraph1 || '—'}</p>
        </div>
        <div className="flex flex-wrap gap-2 content-start">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border ${
              content.missionText1 ? 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20' : 'text-[#9ca3af] bg-[#f7f9f7] border-[#e5e9e5]'
            }`}
          >
            <Target size={12} /> Misión {content.missionText1 ? 'definida' : 'vacía'}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border ${
              content.visionText1 ? 'text-[#49a739] bg-[#49a739]/10 border-[#49a739]/20' : 'text-[#9ca3af] bg-[#f7f9f7] border-[#e5e9e5]'
            }`}
          >
            <Eye size={12} /> Visión {content.visionText1 ? 'definida' : 'vacía'}
          </span>
        </div>
      </div>

      {showEdit && (
        <Modal title="Editar contenido de Nosotros" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Eyebrow (etiqueta superior)</label>
                <input
                  className={inputClass}
                  value={form.heroEyebrow}
                  onChange={(e) => setForm((f) => ({ ...f, heroEyebrow: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>URL Imagen del Equipo</label>
                <input
                  className={inputClass}
                  value={form.teamImageUrl}
                  onChange={(e) => setForm((f) => ({ ...f, teamImageUrl: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Título Hero</label>
              <input
                className={inputClass}
                value={form.heroHeading}
                onChange={(e) => setForm((f) => ({ ...f, heroHeading: e.target.value }))}
              />
            </div>
            <div>
              <label className={labelClass}>Párrafo Hero</label>
              <textarea
                rows={3}
                className={`${inputClass} resize-none`}
                value={form.heroParagraph}
                onChange={(e) => setForm((f) => ({ ...f, heroParagraph: e.target.value }))}
              />
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelClass}>Historia — Párrafo 1</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.storyParagraph1}
                  onChange={(e) => setForm((f) => ({ ...f, storyParagraph1: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Historia — Párrafo 2</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.storyParagraph2}
                  onChange={(e) => setForm((f) => ({ ...f, storyParagraph2: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Historia — Párrafo 3</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.storyParagraph3}
                  onChange={(e) => setForm((f) => ({ ...f, storyParagraph3: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Misión — Texto 1</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.missionText1}
                  onChange={(e) => setForm((f) => ({ ...f, missionText1: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Misión — Texto 2</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.missionText2}
                  onChange={(e) => setForm((f) => ({ ...f, missionText2: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Visión — Texto 1</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.visionText1}
                  onChange={(e) => setForm((f) => ({ ...f, visionText1: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Visión — Texto 2</label>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.visionText2}
                  onChange={(e) => setForm((f) => ({ ...f, visionText2: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Título CTA</label>
                <input
                  className={inputClass}
                  value={form.ctaHeading}
                  onChange={(e) => setForm((f) => ({ ...f, ctaHeading: e.target.value }))}
                />
              </div>
              <div>
                <label className={labelClass}>Párrafo CTA</label>
                <input
                  className={inputClass}
                  value={form.ctaParagraph}
                  onChange={(e) => setForm((f) => ({ ...f, ctaParagraph: e.target.value }))}
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button
              onClick={handleSave}
              disabled={isPending}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.35)] disabled:opacity-50 transition-all"
            >
              {isPending ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============ NUESTROS VALORES (Pattern B: list CRUD + shared create/edit modal) ============
function ValuesSection({ initialValues }: { initialValues: ValueItem[] }) {
  const [values, setValues] = useState(initialValues);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<ValueItem | null>(null);
  const [form, setForm] = useState(EMPTY_VALUE_FORM);
  const [formError, setFormError] = useState('');
  const [isPending, startTransition] = useTransition();

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_VALUE_FORM);
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (value: ValueItem) => {
    setEditing(value);
    setForm({ icon: value.icon, title: value.title, description: value.description, colorKey: value.colorKey });
    setFormError('');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_VALUE_FORM);
    setFormError('');
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este valor?')) return;
    startTransition(async () => {
      await deleteValue(id);
      setValues((prev) => prev.filter((v) => v.id !== id));
    });
  };

  const handleSubmit = () => {
    if (!form.title || !form.description) return;
    setFormError('');
    startTransition(async () => {
      if (editing) {
        const res = await updateValue(editing.id, form);
        if (!res.success || !res.data) {
          setFormError('Error al actualizar el valor');
          return;
        }
        setValues((prev) => prev.map((v) => (v.id === editing.id ? res.data! : v)));
      } else {
        const res = await createValue(form);
        if (!res.success || !res.data) {
          setFormError(res.error || 'Error al crear el valor');
          return;
        }
        setValues((prev) => [...prev, res.data!]);
      }
      closeForm();
    });
  };

  const handleReorder = (id: string, direction: 'up' | 'down') => {
    startTransition(async () => {
      const res = await reorderValue(id, direction);
      if (res.success) {
        setValues((prev) => {
          const sorted = [...prev].sort((a, b) => a.order - b.order);
          const index = sorted.findIndex((v) => v.id === id);
          const swapIndex = direction === 'up' ? index - 1 : index + 1;
          if (index === -1 || swapIndex < 0 || swapIndex >= sorted.length) return prev;
          const a = sorted[index];
          const b = sorted[swapIndex];
          return prev.map((v) => {
            if (v.id === a.id) return { ...v, order: b.order };
            if (v.id === b.id) return { ...v, order: a.order };
            return v;
          });
        });
      }
    });
  };

  const sortedValues = [...values].sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827]">Nuestros Valores</h2>
          <p className="text-[#6b7280] text-sm mt-1">{values.length} valores registrados</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-[#111827] font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} />
          Nuevo Valor
        </button>
      </div>

      {showForm && (
        <Modal title={editing ? 'Editar Valor' : 'Nuevo Valor'} onClose={closeForm}>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Icono (clase Font Awesome)</label>
              <input
                value={form.icon}
                onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))}
                placeholder="fas fa-leaf"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Título *</label>
              <input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Sostenibilidad"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Descripción *</label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div>
              <label className={labelClass}>Color</label>
              <div className="flex flex-wrap gap-2">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setForm((f) => ({ ...f, colorKey: c.key }))}
                    className={`w-9 h-9 rounded-full ${c.swatch} transition-all ${
                      form.colorKey === c.key ? 'ring-2 ring-offset-2 ring-offset-[#ffffff] ring-white' : 'opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {formError && (
              <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                <AlertCircle size={16} /> {formError}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isPending || !form.title || !form.description}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all"
            >
              {isPending ? 'Guardando...' : editing ? 'Guardar Cambios' : 'Crear Valor'}
            </button>
          </div>
        </Modal>
      )}

      {sortedValues.length === 0 ? (
        <div className="bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-12 text-center">
          <Heart size={40} className="mx-auto text-[#e5e9e5] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay valores aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea el primero con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sortedValues.map((value, index) => {
            const colorCfg = COLOR_LABEL[value.colorKey] || COLOR_LABEL.green;
            return (
              <div key={value.id} className="bg-[#ffffff] border border-[#e5e9e5] rounded-2xl p-5 hover:border-[#c7d3c7] transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-full ${colorCfg.bg} flex items-center justify-center`}>
                    <i className={`${value.icon} text-lg ${colorCfg.text}`} />
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleReorder(value.id, 'up')}
                      disabled={index === 0 || isPending}
                      className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                    >
                      <ChevronUp size={14} />
                    </button>
                    <button
                      onClick={() => handleReorder(value.id, 'down')}
                      disabled={index === sortedValues.length - 1 || isPending}
                      className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                    >
                      <ChevronDown size={14} />
                    </button>
                    <button onClick={() => openEdit(value)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all">
                      <Pencil size={13} />
                    </button>
                    <button onClick={() => handleDelete(value.id)} disabled={isPending} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <h3 className="text-[#111827] font-bold text-sm mb-1">{value.title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
