'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const HERO_CONTENT_SEED = {
  badge: 'Líderes en Gestión Ambiental',
  titleLine1: 'El futuro del',
  titleGradient: 'Reciclaje Inteligente',
  subtitle:
    'Transformamos la gestión de residuos con tecnología de punta y conciencia social. Ayudamos a tu empresa a ser rentable mientras cuidas el planeta.',
  cta1Text: 'Nuestros Servicios',
  cta2Text: 'Ver Proceso',
  image1Url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop',
  image2Url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop',
  floatingBadgeText: 'Impacto Positivo',
  floatingBadgeValue: '-40% CO2',
};

const ABOUT_CONTENT_SEED = {
  eyebrow: 'Sobre Nosotros',
  heading: 'Más que reciclaje, creamos cultura ambiental.',
  paragraph:
    'En Mundo Eco Verde, no solo gestionamos residuos; diseñamos soluciones. Desde 2018, hemos liderado la transformación de la industria del reciclaje integrando tecnología y dignidad humana.',
  feature1Title: 'Certificación Ambiental',
  feature1Desc: 'Procesos auditados y cumplimiento normativo garantizado con trazabilidad total.',
  feature2Title: 'Inclusión Social',
  feature2Desc: 'Dignificamos la labor de más de 50 familias recicladoras con oportunidades de crecimiento.',
  feature3Title: 'Sostenibilidad Integral',
  feature3Desc: 'Modelo circular que beneficia al medio ambiente, la economía y la sociedad por igual.',
  image1Url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3',
  image2Url: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop',
};

// ============ HERO ============
export async function getHeroContent() {
  try {
    const hero = await prisma.heroContent.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...HERO_CONTENT_SEED },
    });
    return { success: true, data: hero };
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return { success: false, data: null };
  }
}

export async function updateHeroContent(data: {
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
}) {
  try {
    const hero = await prisma.heroContent.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidatePath('/');
    return { success: true, data: hero };
  } catch (error) {
    console.error('Error updating hero content:', error);
    return { success: false, error: 'Error al guardar el contenido del Hero' };
  }
}

// ============ ABOUT (home) ============
export async function getAboutContent() {
  try {
    const about = await prisma.aboutContent.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...ABOUT_CONTENT_SEED },
    });
    return { success: true, data: about };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return { success: false, data: null };
  }
}

export async function updateAboutContent(data: {
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
}) {
  try {
    const about = await prisma.aboutContent.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidatePath('/');
    return { success: true, data: about };
  } catch (error) {
    console.error('Error updating about content:', error);
    return { success: false, error: 'Error al guardar la sección Nosotros' };
  }
}
