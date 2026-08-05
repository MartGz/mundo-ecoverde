import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import AdminShell from './AdminShell';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();

  // Defensive fallback: middleware already guards /admin, this only covers an
  // edge case where the token expires between the middleware check and render.
  if (!user) {
    redirect('/admin/login');
  }

  return (
    <AdminShell user={{ name: user.name, email: user.email, role: user.role }}>
      {children}
    </AdminShell>
  );
}
