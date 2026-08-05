'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const SITE_SETTINGS_SEED = {
  phone: '+57 314 728 9141',
  whatsapp: '+57 314 728 9141',
  email: 'asociacionmundoecoverde@gmail.com',
  addressLine: 'Barrio Henequén, Calle Principal Mza D Lte 3',
  addressCity: 'Cartagena, Bolívar, Colombia',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Barrio+Henequén+Calle+Principal+Mza+D+Lte+3+Cartagena',
};

const SITE_STATS_SEED = {
  yearsExperience: '5+',
  tonnes: '50k+',
  allies: '120+',
  families: '50+',
  certifiedPercent: '100%',
};

function revalidatePublicPages() {
  revalidatePath('/');
  revalidatePath('/nosotros');
  revalidatePath('/proceso');
  revalidatePath('/contacto');
  revalidatePath('/servicios');
  revalidatePath('/iniciativas');
}

// ============ SITE SETTINGS ============
export async function getSiteSettings() {
  try {
    const settings = await prisma.siteSettings.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...SITE_SETTINGS_SEED },
    });
    return { success: true, data: settings };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return { success: false, data: null };
  }
}

export async function updateSiteSettings(data: {
  phone: string;
  whatsapp: string;
  email: string;
  addressLine: string;
  addressCity: string;
  mapUrl?: string;
}) {
  try {
    const settings = await prisma.siteSettings.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidatePublicPages();
    return { success: true, data: settings };
  } catch (error) {
    console.error('Error updating site settings:', error);
    return { success: false, error: 'Error al guardar los ajustes' };
  }
}

// ============ SITE STATS ============
export async function getSiteStats() {
  try {
    const stats = await prisma.siteStats.upsert({
      where: { id: 'main' },
      update: {},
      create: { id: 'main', ...SITE_STATS_SEED },
    });
    return { success: true, data: stats };
  } catch (error) {
    console.error('Error fetching site stats:', error);
    return { success: false, data: null };
  }
}

export async function updateSiteStats(data: {
  yearsExperience: string;
  tonnes: string;
  allies: string;
  families: string;
  certifiedPercent: string;
}) {
  try {
    const stats = await prisma.siteStats.upsert({
      where: { id: 'main' },
      update: data,
      create: { id: 'main', ...data },
    });
    revalidatePublicPages();
    return { success: true, data: stats };
  } catch (error) {
    console.error('Error updating site stats:', error);
    return { success: false, error: 'Error al guardar las estadísticas' };
  }
}
