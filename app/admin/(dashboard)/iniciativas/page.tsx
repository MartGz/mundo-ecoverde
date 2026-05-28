import { getInitiatives } from '@/app/actions/admin';
import IniciativasClient from './IniciativasClient';

export default async function IniciativasPage() {
  const result = await getInitiatives();
  const initiatives = (result.data || []) as {
    id: string; title: string; content: string;
    imageUrl: string | null; status: string; createdAt: Date;
  }[];
  return <IniciativasClient initialInitiatives={initiatives} />;
}
