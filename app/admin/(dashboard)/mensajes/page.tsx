import { getContactMessages } from '@/app/actions/admin';
import MensajesClient from './MensajesClient';

export default async function MensajesPage() {
  const result = await getContactMessages();
  const messages = (result.data || []) as {
    id: string; name: string; email: string;
    subject: string | null; message: string; isRead: boolean; createdAt: Date;
  }[];

  return <MensajesClient initialMessages={messages} />;
}
