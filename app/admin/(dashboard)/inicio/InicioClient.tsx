'use client';

import { useState, useTransition } from 'react';
import { Sparkles, Info, Pencil, X, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { updateHeroContent, updateAboutContent } from '@/app/actions/home';

interface HeroContent {
  id: string;
  badge: string;
  titleLine1: string;
  titleGradient: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  image1Url: string;
  image2Url: string;
  floatingBadgeText: string;
  floatingBadgeValue: string;
  updatedAt: Date;
}

interface AboutContent {
  id: string;
  eyebrow: string;
  heading: string;
  paragraph: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  image1Url: string;
  image2Url: string;
  updatedAt: Date;
}

type HeroForm = Omit<HeroContent, 'id' | 'updatedAt'>;
type AboutForm = Omit<AboutContent, 'id' | 'updatedAt'>;

const emptyHero: HeroForm = {
  badge: '',
  titleLine1: '',
  titleGradient: '',
  subtitle: '',
  cta1Text: '',
  cta2Text: '',
  image1Url: '',
  image2Url: '',
  floatingBadgeText: '',
  floatingBadgeValue: '',
};

const emptyAbout: AboutForm = {
  eyebrow: '',
  heading: '',
  paragraph: '',
  feature1Title: '',
  feature1Desc: '',
  feature2Title: '',
  feature2Desc: '',
  feature3Title: '',
  feature3Desc: '',
  image1Url: '',
  image2Url: '',
};

function toHeroForm(h: HeroContent | null): HeroForm {
  if (!h) return emptyHero;
  return {
    badge: h.badge,
    titleLine1: h.titleLine1,
    titleGradient: h.titleGradient,
    subtitle: h.subtitle,
    cta1Text: h.cta1Text,
    cta2Text: h.cta2Text,
    image1Url: h.image1Url,
    image2Url: h.image2Url,
    floatingBadgeText: h.floatingBadgeText,
    floatingBadgeValue: h.floatingBadgeValue,
  };
}

function toAboutForm(a: AboutContent | null): AboutForm {
  if (!a) return emptyAbout;
  return {
    eyebrow: a.eyebrow,
    heading: a.heading,
    paragraph: a.paragraph,
    feature1Title: a.feature1Title,
    feature1Desc: a.feature1Desc,
    feature2Title: a.feature2Title,
    feature2Desc: a.feature2Desc,
    feature3Title: a.feature3Title,
    feature3Desc: a.feature3Desc,
    image1Url: a.image1Url,
    image2Url: a.image2Url,
  };
}

const inputClass =
  'w-full bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] placeholder-[#9ca3af] rounded-xl px-4 py-3 outline-none focus:border-[#49a739] focus:ring-2 focus:ring-[#49a739]/20 transition-all';
const labelClass = 'text-xs font-semibold text-[#6b7280] uppercase tracking-wider mb-2 block';
const editButtonClass =
  'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f3f5f3] hover:bg-[#e5e9e5] text-[#111827] text-sm font-semibold transition-all flex-shrink-0';

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

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

/** Small preview thumbnail for an image URL, with a graceful placeholder when empty/broken. */
function ImgThumb({ url, className = '' }: { url: string; className?: string }) {
  const [broken, setBroken] = useState(false);
  const showPlaceholder = !url || broken;
  return (
    <div className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f7f9f7] border border-[#e5e9e5] ${className}`}>
      {showPlaceholder ? (
        <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
          <ImageIcon size={18} />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" className="w-full h-full object-cover" onError={() => setBroken(true)} />
      )}
    </div>
  );
}

export default function InicioClient({
  initialHero,
  initialAbout,
}: {
  initialHero: HeroContent | null;
  initialAbout: AboutContent | null;
}) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[#111827]">Inicio</h1>
        <p className="text-[#6b7280] text-sm mt-1">Edita el contenido de la portada y la sección Sobre Nosotros de la página principal.</p>
      </div>

      <HeroCard initialHero={initialHero} />
      <AboutCard initialAbout={initialAbout} />
    </div>
  );
}

function HeroCard({ initialHero }: { initialHero: HeroContent | null }) {
  const [hero, setHero] = useState<HeroForm>(toHeroForm(initialHero));
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState<HeroForm>(hero);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const setField = (key: keyof HeroForm) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const openEdit = () => {
    setForm(hero);
    setError('');
    setShowEdit(true);
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const res = await updateHeroContent(form);
      if (res.success && res.data) {
        setHero(toHeroForm(res.data));
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar el Hero');
      }
    });
  };

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#49a739]/10 border border-[#49a739]/20 flex items-center justify-center flex-shrink-0">
            <Sparkles size={18} className="text-[#49a739]" />
          </div>
          <div>
            <h2 className="text-[#111827] font-extrabold text-lg">Hero (portada)</h2>
            <p className="text-[#6b7280] text-sm">Lo primero que ven los visitantes al entrar al sitio.</p>
          </div>
        </div>
        <button onClick={openEdit} className={editButtonClass}>
          <Pencil size={14} /> Editar
        </button>
      </div>

      {/* Read-only preview mimicking the real hero layout */}
      <div className="mt-5 grid sm:grid-cols-5 gap-4 items-start">
        <div className="sm:col-span-3 space-y-3 min-w-0">
          <span className="inline-block bg-[#49a739]/10 text-[#49a739] text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
            {hero.badge || '—'}
          </span>
          <h3 className="text-xl font-extrabold text-[#111827] leading-snug">
            {hero.titleLine1 || '—'}{' '}
            <span className="text-gradient">{hero.titleGradient}</span>
          </h3>
          <p className="text-[#6b7280] text-sm line-clamp-2">{hero.subtitle || '—'}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white text-xs font-bold">
              {hero.cta1Text || '—'}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#f3f5f3] border border-[#e5e9e5] text-[#111827] text-xs font-bold">
              {hero.cta2Text || '—'}
            </span>
          </div>
        </div>
        <div className="sm:col-span-2 min-w-0">
          <div className="grid grid-cols-2 gap-2">
            <ImgThumb url={hero.image1Url} />
            <ImgThumb url={hero.image2Url} />
          </div>
          <div className="mt-2 inline-flex items-center gap-2 bg-white border border-[#e5e9e5] rounded-xl px-3 py-2 shadow-sm">
            <span className="text-[#49a739] font-extrabold text-sm">{hero.floatingBadgeValue || '—'}</span>
            <span className="text-[#6b7280] text-xs font-semibold truncate">{hero.floatingBadgeText || '—'}</span>
          </div>
        </div>
      </div>

      {showEdit && (
        <Modal title="Editar Hero (portada)" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <Field label="Badge" value={form.badge} onChange={setField('badge')} placeholder="Líderes en Gestión Ambiental" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Título línea 1" value={form.titleLine1} onChange={setField('titleLine1')} placeholder="El futuro del" />
              <Field label="Título línea 2 (gradiente)" value={form.titleGradient} onChange={setField('titleGradient')} placeholder="Reciclaje Inteligente" />
            </div>
            <p className="text-xs text-[#4b5563] -mt-2">
              El titular grande se arma con dos partes: la línea 1 se muestra en texto normal y la línea 2 se muestra en el degradado verde característico.
            </p>

            <Field label="Subtítulo" value={form.subtitle} onChange={setField('subtitle')} textarea rows={3} placeholder="Transformamos la gestión de residuos..." />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Texto botón 1 (CTA)" value={form.cta1Text} onChange={setField('cta1Text')} placeholder="Nuestros Servicios" />
              <Field label="Texto botón 2 (CTA)" value={form.cta2Text} onChange={setField('cta2Text')} placeholder="Ver Proceso" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Imagen principal (URL)" value={form.image1Url} onChange={setField('image1Url')} placeholder="https://..." />
              <Field label="Imagen secundaria (URL)" value={form.image2Url} onChange={setField('image2Url')} placeholder="https://..." />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Badge flotante - texto" value={form.floatingBadgeText} onChange={setField('floatingBadgeText')} placeholder="Impacto Positivo" />
              <Field label="Badge flotante - valor" value={form.floatingBadgeValue} onChange={setField('floatingBadgeValue')} placeholder="-40% CO2" />
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

function AboutCard({ initialAbout }: { initialAbout: AboutContent | null }) {
  const [about, setAbout] = useState<AboutForm>(toAboutForm(initialAbout));
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState<AboutForm>(about);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  const setField = (key: keyof AboutForm) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const openEdit = () => {
    setForm(about);
    setError('');
    setShowEdit(true);
  };

  const handleSave = () => {
    setError('');
    startTransition(async () => {
      const res = await updateAboutContent(form);
      if (res.success && res.data) {
        setAbout(toAboutForm(res.data));
        setShowEdit(false);
      } else {
        setError(res.error || 'Error al guardar la sección Nosotros');
      }
    });
  };

  const featureTiles = [
    { n: 1, title: about.feature1Title },
    { n: 2, title: about.feature2Title },
    { n: 3, title: about.feature3Title },
  ];

  return (
    <div className="bg-white border border-[#e5e9e5] rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#49a739]/10 border border-[#49a739]/20 flex items-center justify-center flex-shrink-0">
            <Info size={18} className="text-[#49a739]" />
          </div>
          <div>
            <h2 className="text-[#111827] font-extrabold text-lg">Sección Sobre Nosotros (home)</h2>
            <p className="text-[#6b7280] text-sm">Bloque de presentación de la empresa en la página principal.</p>
          </div>
        </div>
        <button onClick={openEdit} className={editButtonClass}>
          <Pencil size={14} /> Editar
        </button>
      </div>

      {/* Read-only preview */}
      <div className="mt-5 grid sm:grid-cols-5 gap-4 items-start">
        <div className="sm:col-span-3 space-y-2 min-w-0">
          <span className="inline-block bg-[#49a739]/10 text-[#49a739] text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
            {about.eyebrow || '—'}
          </span>
          <h3 className="text-lg font-extrabold text-[#111827] leading-snug">{about.heading || '—'}</h3>
          <p className="text-[#6b7280] text-sm line-clamp-2">{about.paragraph || '—'}</p>
        </div>
        <div className="sm:col-span-2 grid grid-cols-2 gap-2">
          <ImgThumb url={about.image1Url} />
          <ImgThumb url={about.image2Url} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {featureTiles.map((t) => (
          <div key={t.n} className="bg-[#f7f9f7] border border-[#e5e9e5] rounded-xl px-4 py-3">
            <p className="text-[#49a739] text-[10px] font-bold uppercase tracking-wider">Feature {t.n}</p>
            <p className="text-[#111827] text-sm font-semibold truncate">{t.title || '—'}</p>
          </div>
        ))}
      </div>

      {showEdit && (
        <Modal title="Editar sección Sobre Nosotros" onClose={() => setShowEdit(false)}>
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Eyebrow (etiqueta pequeña)" value={form.eyebrow} onChange={setField('eyebrow')} placeholder="Sobre Nosotros" />
              <Field label="Encabezado" value={form.heading} onChange={setField('heading')} placeholder="Más que reciclaje, creamos cultura ambiental." />
            </div>

            <Field label="Párrafo" value={form.paragraph} onChange={setField('paragraph')} textarea rows={3} placeholder="En Mundo Eco Verde, no solo gestionamos residuos..." />

            <div>
              <label className={labelClass}>Características</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#f3f5f3] border border-[#e5e9e5] rounded-xl p-4 space-y-3">
                  <p className="text-[#49a739] text-xs font-bold uppercase tracking-wider">Feature 1</p>
                  <Field label="Título" value={form.feature1Title} onChange={setField('feature1Title')} placeholder="Certificación Ambiental" />
                  <Field label="Descripción" value={form.feature1Desc} onChange={setField('feature1Desc')} textarea rows={3} placeholder="Procesos auditados..." />
                </div>
                <div className="bg-[#f3f5f3] border border-[#e5e9e5] rounded-xl p-4 space-y-3">
                  <p className="text-[#49a739] text-xs font-bold uppercase tracking-wider">Feature 2</p>
                  <Field label="Título" value={form.feature2Title} onChange={setField('feature2Title')} placeholder="Inclusión Social" />
                  <Field label="Descripción" value={form.feature2Desc} onChange={setField('feature2Desc')} textarea rows={3} placeholder="Dignificamos la labor..." />
                </div>
                <div className="bg-[#f3f5f3] border border-[#e5e9e5] rounded-xl p-4 space-y-3">
                  <p className="text-[#49a739] text-xs font-bold uppercase tracking-wider">Feature 3</p>
                  <Field label="Título" value={form.feature3Title} onChange={setField('feature3Title')} placeholder="Sostenibilidad Integral" />
                  <Field label="Descripción" value={form.feature3Desc} onChange={setField('feature3Desc')} textarea rows={3} placeholder="Modelo circular..." />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Imagen principal (URL)" value={form.image1Url} onChange={setField('image1Url')} placeholder="https://..." />
              <Field label="Imagen secundaria (URL)" value={form.image2Url} onChange={setField('image2Url')} placeholder="https://..." />
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
