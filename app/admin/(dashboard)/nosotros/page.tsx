import { getNosotrosContent, getValues } from '@/app/actions/nosotros';
import NosotrosClient from './NosotrosClient';

export default async function NosotrosAdminPage() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const contentRes = await getNosotrosContent();
  const valuesRes = await getValues();

  return (
    <NosotrosClient
      initialContent={contentRes.data}
      initialValues={valuesRes.data || []}
    />
  );
}
