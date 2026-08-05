'use client';

import { useState, useTransition } from 'react';
import { Phone, Mail, MapPin, MessageCircle, BarChart3, AlertCircle, Pencil, X } from 'lucide-react';
import { updateSiteSettings, updateSiteStats } from '@/app/actions/settings';

interface SiteSettings {
  id: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressLine: string;
  addressCity: string;
  mapUrl: string | null;
  updatedAt: Date;
}

interface SiteStats {
  id: string;
  yearsExperience: string;
  tonnes: string;
  allies: string;
  families: string;
  certifiedPercent: string;
  updatedAt: Date;
}

const inputClass =
  'w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all';
const labelClass = 'text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block';

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

export default function AjustesClient({
  initialSettings,
  initialStats,
}: {
  initialSettings: SiteSettings;
  initialStats: SiteStats;
}) {
  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[#111827]">Ajustes</h1>
        <p className="text-[#6b7280] text-sm mt-1">Configura la información pública del sitio</p>
      </div>

      <ContactCard initialSettings={initialSettings} />
      <StatsCard initialStats={initialStats} />
    </div>
  );
}

function ContactCard({ initialSettings }: { initialSettings: SiteSettings }) {
  const [settings, setSettings] = useState(initialSettings);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState({
    phone: settings.phone,
    whatsapp: settings.whatsapp,
    email: settings.email,
    addressLine: settings.addressLine,
    addressCity: settings.addressCity,
    mapUrl: settings.mapUrl || '',
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const openEdit = () => {
    setForm({
      phone: settings.phone,
      whatsapp: settings.whatsapp,
      email: settings.email,
      addressLine: settings.addressLine,
      addressCity: settings.addressCity,
      mapUrl: settings.mapUrl || '',
    });
    setError('');
    setShowEdit(true);
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const res = await updateSiteSettings(form);
      if (res.success && res.data) {
        setSettings(res.data);
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar los ajustes');
      }
    });
  };

  const rows: { icon: React.ReactNode; label: string; value: string }[] = [
    { icon: <Phone size={14} />, label: 'Teléfono', value: settings.phone },
    { icon: <MessageCircle size={14} />, label: 'WhatsApp', value: settings.whatsapp },
    { icon: <Mail size={14} />, label: 'Correo', value: settings.email },
    { icon: <MapPin size={14} />, label: 'Dirección', value: `${settings.addressLine}, ${settings.addressCity}` },
  ];

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-[#49a739]" />
          <h2 className="text-[#111827] font-extrabold text-lg">Información de Contacto</h2>
        </div>
        <button
          onClick={openEdit}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f3f5f3] hover:bg-[#e5e9e5] text-[#111827] text-sm font-semibold transition-all flex-shrink-0"
        >
          <Pencil size={14} /> Editar
        </button>
      </div>
      <p className="text-[#6b7280] text-sm mb-5">
        Estos datos aparecen en el pie de página, WhatsApp y la página de contacto de todo el sitio.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl px-4 py-3">
            <span className="text-[#49a739] flex-shrink-0">{r.icon}</span>
            <div className="min-w-0">
              <p className="text-[#6b7280] text-xs font-semibold uppercase tracking-wider">{r.label}</p>
              <p className="text-[#111827] text-sm font-semibold truncate">{r.value || '—'}</p>
            </div>
          </div>
        ))}
      </div>

      {showEdit && (
        <Modal title="Editar información de contacto" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Teléfono</label>
                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+57 314 728 9141" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} placeholder="+57 314 728 9141" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Correo Electrónico</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="contacto@correo.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Dirección</label>
                <input value={form.addressLine} onChange={e => setForm(f => ({ ...f, addressLine: e.target.value }))} placeholder="Barrio Henequén, Calle Principal Mza D Lte 3" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Ciudad</label>
                <input value={form.addressCity} onChange={e => setForm(f => ({ ...f, addressCity: e.target.value }))} placeholder="Cartagena, Bolívar, Colombia" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>URL de Google Maps (opcional)</label>
                <input value={form.mapUrl} onChange={e => setForm(f => ({ ...f, mapUrl: e.target.value }))} placeholder="https://www.google.com/maps/search/?api=1&query=..." className={inputClass} />
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

function StatsCard({ initialStats }: { initialStats: SiteStats }) {
  const [stats, setStats] = useState(initialStats);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState({
    yearsExperience: stats.yearsExperience,
    tonnes: stats.tonnes,
    allies: stats.allies,
    families: stats.families,
    certifiedPercent: stats.certifiedPercent,
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const openEdit = () => {
    setForm({
      yearsExperience: stats.yearsExperience,
      tonnes: stats.tonnes,
      allies: stats.allies,
      families: stats.families,
      certifiedPercent: stats.certifiedPercent,
    });
    setError('');
    setShowEdit(true);
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const res = await updateSiteStats(form);
      if (res.success && res.data) {
        setStats(res.data);
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar las estadísticas');
      }
    });
  };

  const tiles = [
    { label: 'Años de Experiencia', value: stats.yearsExperience },
    { label: 'Toneladas Recicladas', value: stats.tonnes },
    { label: 'Aliados', value: stats.allies },
    { label: 'Familias Beneficiadas', value: stats.families },
    { label: 'Certificados', value: stats.certifiedPercent },
  ];

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-[#49a739]" />
          <h2 className="text-[#111827] font-extrabold text-lg">Estadísticas del Sitio</h2>
        </div>
        <button
          onClick={openEdit}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f3f5f3] hover:bg-[#e5e9e5] text-[#111827] text-sm font-semibold transition-all flex-shrink-0"
        >
          <Pencil size={14} /> Editar
        </button>
      </div>
      <p className="text-[#6b7280] text-sm mb-5">
        Estas cifras se muestran en el Inicio y en Nosotros.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {tiles.map((t) => (
          <div key={t.label} className="bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl p-4 text-center">
            <p className="text-2xl font-extrabold text-[#49a739]">{t.value || '—'}</p>
            <p className="text-[#6b7280] text-xs font-semibold mt-1">{t.label}</p>
          </div>
        ))}
      </div>

      {showEdit && (
        <Modal title="Editar estadísticas del sitio" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Años de Experiencia</label>
                <input value={form.yearsExperience} onChange={e => setForm(f => ({ ...f, yearsExperience: e.target.value }))} placeholder="5+" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Toneladas Recicladas</label>
                <input value={form.tonnes} onChange={e => setForm(f => ({ ...f, tonnes: e.target.value }))} placeholder="50k+" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Aliados</label>
                <input value={form.allies} onChange={e => setForm(f => ({ ...f, allies: e.target.value }))} placeholder="120+" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Familias Beneficiadas</label>
                <input value={form.families} onChange={e => setForm(f => ({ ...f, families: e.target.value }))} placeholder="50+" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Certificados</label>
                <input value={form.certifiedPercent} onChange={e => setForm(f => ({ ...f, certifiedPercent: e.target.value }))} placeholder="100%" className={inputClass} />
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
