'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const PROCESS_META_SEED = {
  heroBadge: 'Servicio Público de Aseo en Aprovechamiento',
  heroTitle: 'Proceso Integral de Aprovechamiento Sostenible',
  heroSubtitle:
    'Dignificamos el reciclaje a través de un ciclo completo que transforma residuos en recursos, generando valor para la comunidad y protegiendo el medio ambiente.',
  metric1Value: '95%',
  metric1Label: 'Tasa de aprovechamiento de materiales',
  metric1Icon: 'fas fa-recycle',
  metric2Value: '24/7',
  metric2Label: 'Operación logística continua',
  metric2Icon: 'fas fa-truck',
  metric3Value: '100%',
  metric3Label: 'Cumplimiento normativo',
  metric3Icon: 'fas fa-shield-check',
  metric4Value: '50+',
  metric4Label: 'Recicladores formalizados',
  metric4Icon: 'fas fa-users',
  normativas: [
    { ley: 'Ley 142 de 1994', desc: 'Servicios Públicos Domiciliarios' },
    { ley: 'Decreto 596 de 2016', desc: 'Gestión Integral de Residuos' },
    { ley: 'Resolución 1407', desc: 'Aprovechamiento de Residuos' },
  ],
};

const PROCESS_STEPS_SEED = [
  {
    order: 0,
    icon: 'fas fa-clipboard-check',
    title: 'Diagnóstico Inicial',
    description:
      'Evaluamos tu operación para identificar tipos de residuos, volúmenes y puntos críticos de generación. Desarrollamos un plan personalizado de Gestión Integral de Residuos (PGIRS).',
    items: ['Aforo de residuos', 'Plan de Gestión Integral (PGIRS)', 'Capacitación inicial al personal'],
  },
  {
    order: 1,
    icon: 'fas fa-truck-pickup',
    title: 'Recolección y Transporte',
    description:
      'Implementamos micro y macro rutas optimizadas con nuestra flota especializada. Garantizamos frecuencias fijas y personal uniformado con todos los protocolos de seguridad.',
    items: ['Micro rutas comunitarias', 'Macro rutas empresariales', 'Manifiesto de recolección digital'],
  },
  {
    order: 2,
    icon: 'fas fa-warehouse',
    title: 'Clasificación en ECA',
    description:
      'El material llega a nuestra Estación de Clasificación y Aprovechamiento (ECA). Operarios expertos separan, limpian y clasifican según tipo de material.',
    items: ['Pesaje electrónico certificado', 'Clasificación por tipo de material', 'Almacenamiento temporal seguro'],
  },
  {
    order: 3,
    icon: 'fas fa-industry',
    title: 'Transformación y Procesamiento',
    description:
      'Transformamos los residuos en materia prima secundaria mediante procesos de compactación, trituración y preparación para la comercialización.',
    items: ['Compactación y prensado', 'Procesamiento según especificaciones', 'Preparación para transporte industrial'],
  },
  {
    order: 4,
    icon: 'fas fa-handshake',
    title: 'Comercialización Certificada',
    description:
      'Comercializamos los materiales procesados directamente con industrias transformadoras, garantizando trazabilidad completa y disposición final certificada.',
    items: ['Certificados de disposición', 'Comercialización directa', 'Reportes de sostenibilidad'],
  },
];

const PROCESS_MATERIALS_SEED = [
  { order: 0, name: 'Papel y Cartón', percent: 35 },
  { order: 1, name: 'Plásticos', percent: 28 },
  { order: 2, name: 'Vidrio', percent: 18 },
  { order: 3, name: 'Metales', percent: 12 },
  { order: 4, name: 'Tetra Pak y Otros', percent: 7 },
];

function revalidateProceso() {
  revalidatePath('/proceso');
  revalidatePath('/');
}

// ============ PROCESS META ============
export async function getProcessMeta() {
  try {
    const meta = await prisma.processMeta.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...PROCESS_META_SEED },
    });
    return { success: true, data: meta };
  } catch (error) {
    console.error('Error fetching process meta:', error);
    return { success: false, data: null };
  }
}

export async function updateProcessMeta(data: {
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
  normativas: { ley: string; desc: string }[];
}) {
  try {
    const meta = await prisma.processMeta.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidateProceso();
    return { success: true, data: meta };
  } catch (error) {
    console.error('Error updating process meta:', error);
    return { success: false, error: 'Error al guardar la información del proceso' };
  }
}

// ============ PROCESS STEPS ============
export async function getProcessSteps() {
  try {
    const count = await prisma.processStep.count();
    if (count === 0) {
      await prisma.processStep.createMany({ data: PROCESS_STEPS_SEED });
    }
    const steps = await prisma.processStep.findMany({ orderBy: { order: 'asc' } });
    return { success: true, data: steps };
  } catch (error) {
    console.error('Error fetching process steps:', error);
    return { success: false, data: [] };
  }
}

export async function createProcessStep(data: { icon: string; title: string; description: string; items: string[] }) {
  try {
    const maxOrder = await prisma.processStep.aggregate({ _max: { order: true } });
    const step = await prisma.processStep.create({
      data: { ...data, order: (maxOrder._max.order ?? -1) + 1 },
    });
    revalidateProceso();
    return { success: true, data: step };
  } catch (error) {
    console.error('Error creating process step:', error);
    return { success: false, error: 'Error al crear el paso' };
  }
}

export async function updateProcessStep(id: string, data: { icon?: string; title?: string; description?: string; items?: string[] }) {
  try {
    const step = await prisma.processStep.update({ where: { id }, data });
    revalidateProceso();
    return { success: true, data: step };
  } catch (error) {
    console.error('Error updating process step:', error);
    return { success: false };
  }
}

export async function deleteProcessStep(id: string) {
  try {
    await prisma.processStep.delete({ where: { id } });
    revalidateProceso();
    return { success: true };
  } catch (error) {
    console.error('Error deleting process step:', error);
    return { success: false };
  }
}

export async function reorderProcessStep(id: string, direction: 'up' | 'down') {
  try {
    const steps = await prisma.processStep.findMany({ orderBy: { order: 'asc' } });
    const index = steps.findIndex((s) => s.id === id);
    if (index === -1) return { success: false };
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= steps.length) return { success: false };

    const current = steps[index];
    const swapWith = steps[swapIndex];

    await prisma.$transaction([
      prisma.processStep.update({ where: { id: current.id }, data: { order: swapWith.order } }),
      prisma.processStep.update({ where: { id: swapWith.id }, data: { order: current.order } }),
    ]);

    revalidateProceso();
    return { success: true };
  } catch (error) {
    console.error('Error reordering process step:', error);
    return { success: false };
  }
}

// ============ PROCESS MATERIALS ============
export async function getProcessMaterials() {
  try {
    const count = await prisma.processMaterial.count();
    if (count === 0) {
      await prisma.processMaterial.createMany({ data: PROCESS_MATERIALS_SEED });
    }
    const materials = await prisma.processMaterial.findMany({ orderBy: { order: 'asc' } });
    return { success: true, data: materials };
  } catch (error) {
    console.error('Error fetching process materials:', error);
    return { success: false, data: [] };
  }
}

export async function createProcessMaterial(data: { name: string; percent: number }) {
  try {
    const maxOrder = await prisma.processMaterial.aggregate({ _max: { order: true } });
    const material = await prisma.processMaterial.create({
      data: { ...data, order: (maxOrder._max.order ?? -1) + 1 },
    });
    revalidateProceso();
    return { success: true, data: material };
  } catch (error) {
    console.error('Error creating process material:', error);
    return { success: false, error: 'Error al crear el material' };
  }
}

export async function updateProcessMaterial(id: string, data: { name?: string; percent?: number }) {
  try {
    const material = await prisma.processMaterial.update({ where: { id }, data });
    revalidateProceso();
    return { success: true, data: material };
  } catch (error) {
    console.error('Error updating process material:', error);
    return { success: false };
  }
}

export async function deleteProcessMaterial(id: string) {
  try {
    await prisma.processMaterial.delete({ where: { id } });
    revalidateProceso();
    return { success: true };
  } catch (error) {
    console.error('Error deleting process material:', error);
    return { success: false };
  }
}
