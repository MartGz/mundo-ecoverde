'use client';

import { useState, useTransition } from 'react';
import {
  Recycle,
  ListChecks,
  PieChart,
  Plus,
  Trash2,
  X,
  Pencil,
  Check,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  FileText,
} from 'lucide-react';
import {
  updateProcessMeta,
  createProcessStep,
  updateProcessStep,
  deleteProcessStep,
  reorderProcessStep,
  createProcessMaterial,
  updateProcessMaterial,
  deleteProcessMaterial,
} from '@/app/actions/proceso';

interface Normativa {
  ley: string;
  desc: string;
}

interface ProcessMeta {
  id: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  metric1Value: string;
  metric1Label: string;
  metric1Icon: string;
  metric2Value: string;
  metric2Label: string;
  metric2Icon: string;
  metric3Value: string;
  metric3Label: string;
  metric3Icon: string;
  metric4Value: string;
  metric4Label: string;
  metric4Icon: string;
  normativas: Normativa[];
  updatedAt: Date;
}

interface ProcessStep {
  id: string;
  order: number;
  icon: string;
  title: string;
  description: string;
  items: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface ProcessMaterial {
  id: string;
  order: number;
  name: string;
  percent: number;
}

type MetaFormState = Omit<ProcessMeta, 'id' | 'updatedAt'>;

const inputClass =
  'w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all text-sm';
const labelClass = 'text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block';

const EMPTY_META: ProcessMeta = {
  id: 'main',
  heroBadge: '',
  heroTitle: '',
  heroSubtitle: '',
  metric1Value: '', metric1Label: '', metric1Icon: '',
  metric2Value: '', metric2Label: '', metric2Icon: '',
  metric3Value: '', metric3Label: '', metric3Icon: '',
  metric4Value: '', metric4Label: '', metric4Icon: '',
  normativas: [],
  updatedAt: new Date(),
};

const toMetaForm = (m: ProcessMeta): MetaFormState => {
  const { id, updatedAt, ...rest } = m;
  return rest;
};

const linesToItems = (text: string) => text.split('\n').map((l) => l.trim()).filter(Boolean);

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

export default function ProcesoClient({
  initialMeta,
  initialSteps,
  initialMaterials,
}: {
  initialMeta: ProcessMeta | null;
  initialSteps: ProcessStep[];
  initialMaterials: ProcessMaterial[];
}) {
  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-[#111827]">Proceso</h1>
        <p className="text-[#6b7280] text-sm mt-1">Información general, pasos del proceso y materiales procesados</p>
      </div>

      <MetaCard initialMeta={initialMeta ?? EMPTY_META} />
      <StepsSection initialSteps={initialSteps} />
      <MaterialsSection initialMaterials={initialMaterials} />
    </div>
  );
}

// ============================================================
// INFORMACIÓN GENERAL — Pattern A (singleton preview + edit modal)
// ============================================================
function MetaCard({ initialMeta }: { initialMeta: ProcessMeta }) {
  const [meta, setMeta] = useState<ProcessMeta>(initialMeta);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState<MetaFormState>(toMetaForm(initialMeta));
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const openEdit = () => {
    setForm(toMetaForm(meta));
    setError('');
    setShowEdit(true);
  };

  const updateNormativa = (index: number, field: keyof Normativa, value: string) => {
    setForm((f) => ({
      ...f,
      normativas: f.normativas.map((n, i) => (i === index ? { ...n, [field]: value } : n)),
    }));
  };

  const addNormativa = () => {
    setForm((f) => ({ ...f, normativas: [...f.normativas, { ley: '', desc: '' }] }));
  };

  const removeNormativa = (index: number) => {
    setForm((f) => ({ ...f, normativas: f.normativas.filter((_, i) => i !== index) }));
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const res = await updateProcessMeta(form);
      if (res.success && res.data) {
        setMeta({ ...res.data, normativas: res.data.normativas as unknown as Normativa[] });
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar la información del proceso');
      }
    });
  };

  const metrics = [
    { value: meta.metric1Value, label: meta.metric1Label, icon: meta.metric1Icon },
    { value: meta.metric2Value, label: meta.metric2Label, icon: meta.metric2Icon },
    { value: meta.metric3Value, label: meta.metric3Label, icon: meta.metric3Icon },
    { value: meta.metric4Value, label: meta.metric4Label, icon: meta.metric4Icon },
  ];

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <Recycle size={18} className="text-[#49a739]" />
          <h2 className="text-[#111827] font-extrabold text-lg">Información General</h2>
        </div>
        <button
          onClick={openEdit}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f3f5f3] hover:bg-[#e5e9e5] text-[#111827] text-sm font-semibold transition-all flex-shrink-0"
        >
          <Pencil size={14} /> Editar
        </button>
      </div>
      <p className="text-[#6b7280] text-sm mb-5">
        Encabezado, métricas destacadas y normativas que se muestran en la página pública de Proceso.
      </p>

      <div className="space-y-4">
        <div className="bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl p-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#49a739]/10 text-[#49a739] text-xs font-bold mb-2">
            {meta.heroBadge || 'Sin badge'}
          </span>
          <p className="text-[#111827] font-extrabold text-lg leading-snug">{meta.heroTitle || '—'}</p>
          <p className="text-[#6b7280] text-sm mt-1 line-clamp-2">{meta.heroSubtitle || '—'}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metrics.map((m, i) => (
            <div key={i} className="bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl p-4 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-[#49a739]/10 flex items-center justify-center mb-2">
                {m.icon ? <i className={`${m.icon} text-sm text-[#49a739]`} /> : <Recycle size={14} className="text-[#49a739]" />}
              </div>
              <p className="text-lg font-extrabold text-[#111827]">{m.value || '—'}</p>
              <p className="text-[#6b7280] text-xs font-semibold mt-1 line-clamp-2">{m.label || '—'}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <FileText size={13} className="text-[#6b7280]" />
            <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
              Normativas ({meta.normativas.length})
            </p>
          </div>
          {meta.normativas.length === 0 ? (
            <p className="text-[#6b7280] text-sm">Sin normativas agregadas</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {meta.normativas.map((n, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f7f9f7] border border-[#e5e9e5] text-xs font-semibold text-[#111827]">
                  {n.ley || 'Sin nombre'}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {showEdit && (
        <Modal title="Editar información general" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Badge Hero</label>
              <input className={inputClass} value={form.heroBadge} onChange={(e) => setForm((f) => ({ ...f, heroBadge: e.target.value }))} />
            </div>
            <div>
              <label className={labelClass}>Título Hero</label>
              <input className={inputClass} value={form.heroTitle} onChange={(e) => setForm((f) => ({ ...f, heroTitle: e.target.value }))} />
            </div>
            <div>
              <label className={labelClass}>Subtítulo Hero</label>
              <textarea rows={3} className={`${inputClass} resize-none`} value={form.heroSubtitle} onChange={(e) => setForm((f) => ({ ...f, heroSubtitle: e.target.value }))} />
            </div>

            <div>
              <label className={labelClass}>Métricas</label>
              <div className="space-y-3">
                {([1, 2, 3, 4] as const).map((n) => {
                  const valueKey = `metric${n}Value` as const;
                  const labelKey = `metric${n}Label` as const;
                  const iconKey = `metric${n}Icon` as const;
                  return (
                    <div key={n} className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#f3f5f3] border border-[#e5e9e5] rounded-xl p-3">
                      <input
                        placeholder="Valor (ej: 95%)"
                        className="bg-white border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#49a739]"
                        value={form[valueKey]}
                        onChange={(e) => setForm((f) => ({ ...f, [valueKey]: e.target.value }))}
                      />
                      <input
                        placeholder="Etiqueta"
                        className="bg-white border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#49a739]"
                        value={form[labelKey]}
                        onChange={(e) => setForm((f) => ({ ...f, [labelKey]: e.target.value }))}
                      />
                      <input
                        placeholder="Icono (fas fa-recycle)"
                        className="bg-white border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#49a739]"
                        value={form[iconKey]}
                        onChange={(e) => setForm((f) => ({ ...f, [iconKey]: e.target.value }))}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={labelClass}>Normativas</label>
                <button onClick={addNormativa} className="text-xs font-bold text-[#49a739] hover:text-[#3d8f2f] inline-flex items-center gap-1">
                  <Plus size={14} /> Agregar normativa
                </button>
              </div>
              <div className="space-y-2">
                {form.normativas.map((norma, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-2 bg-[#f3f5f3] border border-[#e5e9e5] rounded-xl p-3">
                    <input
                      placeholder="Ley / Decreto"
                      className="flex-1 bg-white border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#49a739]"
                      value={norma.ley}
                      onChange={(e) => updateNormativa(index, 'ley', e.target.value)}
                    />
                    <input
                      placeholder="Descripción"
                      className="flex-1 bg-white border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#49a739]"
                      value={norma.desc}
                      onChange={(e) => updateNormativa(index, 'desc', e.target.value)}
                    />
                    <button onClick={() => removeNormativa(index)} className="p-2 rounded-lg text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all self-center">
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
                {form.normativas.length === 0 && <p className="text-[#6b7280] text-sm">No hay normativas agregadas</p>}
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

// ============================================================
// PASOS DEL PROCESO — Pattern B (list CRUD + shared modal)
// ============================================================
const EMPTY_STEP_FORM = { icon: '', title: '', description: '', itemsText: '' };

function StepsSection({ initialSteps }: { initialSteps: ProcessStep[] }) {
  const [steps, setSteps] = useState(initialSteps);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<ProcessStep | null>(null);
  const [form, setForm] = useState(EMPTY_STEP_FORM);
  const [formError, setFormError] = useState('');
  const [isPending, startTransition] = useTransition();

  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_STEP_FORM);
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (step: ProcessStep) => {
    setEditing(step);
    setForm({ icon: step.icon, title: step.title, description: step.description, itemsText: step.items.join('\n') });
    setFormError('');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_STEP_FORM);
    setFormError('');
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este paso?')) return;
    startTransition(async () => {
      await deleteProcessStep(id);
      setSteps((prev) => prev.filter((s) => s.id !== id));
    });
  };

  const handleSubmit = () => {
    if (!form.title || !form.description) return;
    setFormError('');
    startTransition(async () => {
      const items = linesToItems(form.itemsText);
      if (editing) {
        const res = await updateProcessStep(editing.id, {
          icon: form.icon,
          title: form.title,
          description: form.description,
          items,
        });
        if (!res.success || !res.data) {
          setFormError('Error al actualizar el paso');
          return;
        }
        setSteps((prev) => prev.map((s) => (s.id === editing.id ? res.data! : s)));
      } else {
        const res = await createProcessStep({
          icon: form.icon,
          title: form.title,
          description: form.description,
          items,
        });
        if (!res.success || !res.data) {
          setFormError(res.error || 'Error al crear el paso');
          return;
        }
        setSteps((prev) => [...prev, res.data!]);
      }
      closeForm();
    });
  };

  const handleReorder = (id: string, direction: 'up' | 'down') => {
    startTransition(async () => {
      const res = await reorderProcessStep(id, direction);
      if (res.success) {
        setSteps((prev) => {
          const sorted = [...prev].sort((a, b) => a.order - b.order);
          const index = sorted.findIndex((s) => s.id === id);
          const swapIndex = direction === 'up' ? index - 1 : index + 1;
          if (index === -1 || swapIndex < 0 || swapIndex >= sorted.length) return prev;
          const a = sorted[index];
          const b = sorted[swapIndex];
          return prev.map((s) => {
            if (s.id === a.id) return { ...s, order: b.order };
            if (s.id === b.id) return { ...s, order: a.order };
            return s;
          });
        });
      }
    });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
            <ListChecks size={18} className="text-[#49a739]" /> Pasos del Proceso
          </h2>
          <p className="text-[#6b7280] text-sm mt-1">{steps.length} pasos registrados</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-[#111827] font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} /> Nuevo Paso
        </button>
      </div>

      {sortedSteps.length === 0 ? (
        <div className="bg-white border border-[#e5e9e5] rounded-2xl p-12 text-center">
          <ListChecks size={40} className="mx-auto text-[#e5e9e5] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay pasos aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea el primero con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sortedSteps.map((step, index) => (
            <div key={step.id} className="bg-white border border-[#e5e9e5] rounded-2xl p-5 hover:border-[#c7d3c7] transition-all group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-[#49a739]/10 flex items-center justify-center">
                  <i className={`${step.icon} text-lg text-[#49a739]`} />
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleReorder(step.id, 'up')}
                    disabled={index === 0 || isPending}
                    className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    onClick={() => handleReorder(step.id, 'down')}
                    disabled={index === sortedSteps.length - 1 || isPending}
                    className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                  >
                    <ChevronDown size={14} />
                  </button>
                  <button
                    onClick={() => openEdit(step)}
                    className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all"
                  >
                    <Pencil size={13} />
                  </button>
                  <button onClick={() => handleDelete(step.id)} disabled={isPending} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-1">{step.title}</h3>
              <p className="text-[#6b7280] text-xs leading-relaxed mb-2">{step.description}</p>
              <ul className="text-xs text-[#4b5563] space-y-1">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check size={12} className="text-[#49a739] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <Modal title={editing ? 'Editar Paso' : 'Nuevo Paso'} onClose={closeForm}>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Icono (clase Font Awesome)</label>
              <input value={form.icon} onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))} placeholder="fas fa-clipboard-check" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Título *</label>
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Diagnóstico Inicial" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Descripción *</label>
              <textarea rows={3} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className={labelClass}>Puntos clave (uno por línea)</label>
              <textarea
                rows={3}
                value={form.itemsText}
                onChange={(e) => setForm((f) => ({ ...f, itemsText: e.target.value }))}
                placeholder={'Aforo de residuos\nPlan de Gestión Integral (PGIRS)'}
                className={`${inputClass} resize-none`}
              />
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
              {isPending ? 'Guardando...' : editing ? 'Guardar Cambios' : 'Crear Paso'}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

// ============================================================
// MATERIALES PROCESADOS — Pattern B (list CRUD + shared modal)
// ============================================================
const EMPTY_MATERIAL_FORM = { name: '', percent: 0 };

function MaterialsSection({ initialMaterials }: { initialMaterials: ProcessMaterial[] }) {
  const [materials, setMaterials] = useState(initialMaterials);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<ProcessMaterial | null>(null);
  const [form, setForm] = useState(EMPTY_MATERIAL_FORM);
  const [formError, setFormError] = useState('');
  const [isPending, startTransition] = useTransition();

  const sortedMaterials = [...materials].sort((a, b) => a.order - b.order);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_MATERIAL_FORM);
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (material: ProcessMaterial) => {
    setEditing(material);
    setForm({ name: material.name, percent: material.percent });
    setFormError('');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_MATERIAL_FORM);
    setFormError('');
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este material?')) return;
    startTransition(async () => {
      await deleteProcessMaterial(id);
      setMaterials((prev) => prev.filter((m) => m.id !== id));
    });
  };

  const handleSubmit = () => {
    if (!form.name) return;
    setFormError('');
    startTransition(async () => {
      if (editing) {
        const res = await updateProcessMaterial(editing.id, { name: form.name, percent: form.percent });
        if (!res.success || !res.data) {
          setFormError('Error al actualizar el material');
          return;
        }
        setMaterials((prev) => prev.map((m) => (m.id === editing.id ? res.data! : m)));
      } else {
        const res = await createProcessMaterial(form);
        if (!res.success || !res.data) {
          setFormError(res.error || 'Error al crear el material');
          return;
        }
        setMaterials((prev) => [...prev, res.data!]);
      }
      closeForm();
    });
  };

  const handleReorder = (id: string, direction: 'up' | 'down') => {
    // updateProcessMaterial only accepts { name?, percent? } — there is no order field to update.
    // To reorder without a dedicated server action, we swap the *content* (name + percent) between
    // the two adjacent-order rows, leaving each row's own `order` untouched. Visually this reorders
    // the list exactly like swapping positions would.
    const sorted = [...materials].sort((a, b) => a.order - b.order);
    const index = sorted.findIndex((m) => m.id === id);
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (index === -1 || swapIndex < 0 || swapIndex >= sorted.length) return;
    const a = sorted[index];
    const b = sorted[swapIndex];
    startTransition(async () => {
      // Sequential, not Promise.all: concurrent writes against the shared
      // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
      await updateProcessMaterial(a.id, { name: b.name, percent: b.percent });
      await updateProcessMaterial(b.id, { name: a.name, percent: a.percent });
    });
    setMaterials((prev) =>
      prev.map((m) => {
        if (m.id === a.id) return { ...m, name: b.name, percent: b.percent };
        if (m.id === b.id) return { ...m, name: a.name, percent: a.percent };
        return m;
      })
    );
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827] flex items-center gap-2">
            <PieChart size={18} className="text-[#49a739]" /> Materiales Procesados
          </h2>
          <p className="text-[#6b7280] text-sm mt-1">{materials.length} materiales registrados</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-[#111827] font-bold text-sm shadow-[0_8px_20px_rgba(73,167,57,0.35)] hover:shadow-[0_12px_28px_rgba(73,167,57,0.45)] transition-all"
        >
          <Plus size={18} /> Nuevo Material
        </button>
      </div>

      {sortedMaterials.length === 0 ? (
        <div className="bg-white border border-[#e5e9e5] rounded-2xl p-12 text-center">
          <PieChart size={40} className="mx-auto text-[#e5e9e5] mb-3" />
          <p className="text-[#6b7280] font-semibold">No hay materiales aún</p>
          <p className="text-[#374151] text-sm mt-1">Crea el primero con el botón de arriba</p>
        </div>
      ) : (
        <div className="bg-white border border-[#e5e9e5] rounded-2xl divide-y divide-[#e5e9e5]">
          {sortedMaterials.map((material, index) => (
            <div key={material.id} className="p-4 flex items-center gap-3 group">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#111827] font-semibold text-sm truncate">{material.name}</span>
                  <span className="text-[#6b7280] text-sm">{material.percent}%</span>
                </div>
                <div className="w-full bg-[#f3f5f3] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#49a739] h-full rounded-full" style={{ width: `${material.percent}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <button
                  onClick={() => handleReorder(material.id, 'up')}
                  disabled={index === 0}
                  className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  onClick={() => handleReorder(material.id, 'down')}
                  disabled={index === sortedMaterials.length - 1}
                  className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all disabled:opacity-30"
                >
                  <ChevronDown size={14} />
                </button>
                <button onClick={() => openEdit(material)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f5f3] transition-all">
                  <Pencil size={13} />
                </button>
                <button onClick={() => handleDelete(material.id)} className="p-1.5 rounded-lg text-[#4b5563] hover:text-red-600 hover:bg-red-100 transition-all">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <Modal title={editing ? 'Editar Material' : 'Nuevo Material'} onClose={closeForm}>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Nombre *</label>
              <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Papel y Cartón" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Porcentaje (0-100)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={form.percent}
                onChange={(e) => setForm((f) => ({ ...f, percent: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>

            {formError && (
              <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                <AlertCircle size={16} /> {formError}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isPending || !form.name}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white font-bold shadow-[0_8px_20px_rgba(73,167,57,0.3)] disabled:opacity-50 transition-all"
            >
              {isPending ? 'Guardando...' : editing ? 'Guardar Cambios' : 'Crear Material'}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
