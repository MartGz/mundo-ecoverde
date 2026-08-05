'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const NOSOTROS_CONTENT_SEED = {
  heroEyebrow: 'Nuestra Esencia',
  heroHeading: 'Conoce a Mundo Eco Verde',
  heroParagraph:
    'Somos un equipo apasionado dedicado a transformar la manera en que el mundo ve los residuos. Construimos puentes entre la sostenibilidad ambiental y el progreso social.',
  storyParagraph1:
    'Mundo Eco Verde nació de la necesidad de transformar la manera en que gestionamos los residuos en nuestra región, combinando tecnología, procesos certificados y un profundo compromiso social.',
  storyParagraph2:
    'Desde nuestros inicios, hemos trabajado de la mano con recicladores de oficio, empresas y comunidades para construir un modelo de economía circular que dignifica el trabajo del reciclaje y garantiza el cumplimiento normativo ambiental.',
  storyParagraph3:
    'Hoy somos un referente en gestión integral de residuos aprovechables, con procesos auditados y una operación logística especializada que abarca recolección, transporte, clasificación y comercialización.',
  teamImageUrl:
    'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
  missionText1:
    'Brindar soluciones integrales en la gestión de residuos sólidos aprovechables, promoviendo la cultura del reciclaje y la economía circular.',
  missionText2:
    'Nos dedicamos a dignificar la labor social del reciclador y a garantizar a nuestros clientes el cumplimiento normativo ambiental, transformando problemas en recursos valiosos para la industria.',
  visionText1:
    'Consolidarnos para el año 2030 como la organización líder y referente en la Costa Caribe en innovación ambiental y gestión sostenible de residuos.',
  visionText2:
    'Aspiramos a ser reconocidos por nuestra excelencia operativa, nuestro impacto social positivo y por ser el aliado estratégico preferido de empresas comprometidas con el cuidado del planeta.',
  ctaHeading: '¿Listo para unirte al cambio?',
  ctaParagraph: 'Forma parte de nuestra misión por un planeta más limpio y sostenible. Juntos podemos hacer la diferencia.',
};

const VALUE_ITEMS_SEED = [
  { order: 0, icon: 'fas fa-hand-holding-heart', title: 'Responsabilidad', description: 'Comprometidos con el entorno y la sociedad en cada acción.', colorKey: 'green' },
  { order: 1, icon: 'fas fa-lightbulb', title: 'Innovación', description: 'Buscamos constantemente mejores formas de proteger el planeta.', colorKey: 'blue' },
  { order: 2, icon: 'fas fa-scale-balanced', title: 'Integridad', description: 'Transparencia y ética en todas nuestras operaciones.', colorKey: 'orange' },
  { order: 3, icon: 'fas fa-users-rays', title: 'Trabajo en Equipo', description: 'La unión hace la fuerza para lograr un mundo más verde.', colorKey: 'purple' },
  { order: 4, icon: 'fas fa-leaf', title: 'Sostenibilidad', description: 'Equilibrio entre desarrollo económico, social y ambiental.', colorKey: 'teal' },
  { order: 5, icon: 'fas fa-heart', title: 'Compromiso Social', description: 'Dignificación del reciclador y apoyo a comunidades.', colorKey: 'red' },
];

function revalidateNosotros() {
  revalidatePath('/nosotros');
  revalidatePath('/');
}

// ============ NOSOTROS CONTENT ============
export async function getNosotrosContent() {
  try {
    const content = await prisma.nosotrosContent.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...NOSOTROS_CONTENT_SEED },
    });
    return { success: true, data: content };
  } catch (error) {
    console.error('Error fetching nosotros content:', error);
    return { success: false, data: null };
  }
}

export async function updateNosotrosContent(data: {
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
}) {
  try {
    const content = await prisma.nosotrosContent.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidateNosotros();
    return { success: true, data: content };
  } catch (error) {
    console.error('Error updating nosotros content:', error);
    return { success: false, error: 'Error al guardar el contenido de Nosotros' };
  }
}

// ============ VALUES ============
export async function getValues() {
  try {
    const count = await prisma.valueItem.count();
    if (count === 0) {
      await prisma.valueItem.createMany({ data: VALUE_ITEMS_SEED });
    }
    const values = await prisma.valueItem.findMany({ orderBy: { order: 'asc' } });
    return { success: true, data: values };
  } catch (error) {
    console.error('Error fetching values:', error);
    return { success: false, data: [] };
  }
}

export async function createValue(data: { icon: string; title: string; description: string; colorKey?: string }) {
  try {
    const maxOrder = await prisma.valueItem.aggregate({ _max: { order: true } });
    const value = await prisma.valueItem.create({
      data: { ...data, order: (maxOrder._max.order ?? -1) + 1 },
    });
    revalidateNosotros();
    return { success: true, data: value };
  } catch (error) {
    console.error('Error creating value:', error);
    return { success: false, error: 'Error al crear el valor' };
  }
}

export async function updateValue(id: string, data: { icon?: string; title?: string; description?: string; colorKey?: string }) {
  try {
    const value = await prisma.valueItem.update({ where: { id }, data });
    revalidateNosotros();
    return { success: true, data: value };
  } catch (error) {
    console.error('Error updating value:', error);
    return { success: false };
  }
}

export async function deleteValue(id: string) {
  try {
    await prisma.valueItem.delete({ where: { id } });
    revalidateNosotros();
    return { success: true };
  } catch (error) {
    console.error('Error deleting value:', error);
    return { success: false };
  }
}

export async function reorderValue(id: string, direction: 'up' | 'down') {
  try {
    const values = await prisma.valueItem.findMany({ orderBy: { order: 'asc' } });
    const index = values.findIndex((v) => v.id === id);
    if (index === -1) return { success: false };
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= values.length) return { success: false };

    const current = values[index];
    const swapWith = values[swapIndex];

    await prisma.$transaction([
      prisma.valueItem.update({ where: { id: current.id }, data: { order: swapWith.order } }),
      prisma.valueItem.update({ where: { id: swapWith.id }, data: { order: current.order } }),
    ]);

    revalidateNosotros();
    return { success: true };
  } catch (error) {
    console.error('Error reordering value:', error);
    return { success: false };
  }
}
