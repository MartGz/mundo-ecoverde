import { getUsers } from '@/app/actions/admin';
import UsuariosClient from './UsuariosClient';

export default async function UsuariosPage() {
  const result = await getUsers();
  const users = (result.data || []) as {
    id: string; name: string | null;
    email: string; role: string; createdAt: Date;
  }[];
  return <UsuariosClient initialUsers={users} />;
}
