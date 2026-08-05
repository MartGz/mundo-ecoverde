import { getServices } from '@/app/actions/admin';
import ServiciosClient from './ServiciosClient';

export default async function ServiciosPage() {
  const result = await getServices();
  const services = (result.data || []) as {
    id: string; title: string; description: string;
    icon: string | null; category: string; isActive: boolean; createdAt: Date;
  }[];
  return <ServiciosClient initialServices={services} />;
}
