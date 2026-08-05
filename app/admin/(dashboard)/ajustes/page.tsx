import { getSiteSettings, getSiteStats } from '@/app/actions/settings';
import AjustesClient from './AjustesClient';

export default async function AjustesPage() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const settingsResult = await getSiteSettings();
  const statsResult = await getSiteStats();

  const settings = settingsResult.data;
  const stats = statsResult.data;

  return (
    <AjustesClient
      initialSettings={
        settings || {
          id: 'main',
          phone: '',
          whatsapp: '',
          email: '',
          addressLine: '',
          addressCity: '',
          mapUrl: null,
          updatedAt: new Date(),
        }
      }
      initialStats={
        stats || {
          id: 'main',
          yearsExperience: '',
          tonnes: '',
          allies: '',
          families: '',
          certifiedPercent: '',
          updatedAt: new Date(),
        }
      }
    />
  );
}
