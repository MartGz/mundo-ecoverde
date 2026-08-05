import { getProcessMeta, getProcessSteps, getProcessMaterials } from '@/app/actions/proceso';
import ProcesoClient from './ProcesoClient';

export default async function ProcesoAdminPage() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const metaRes = await getProcessMeta();
  const stepsRes = await getProcessSteps();
  const materialsRes = await getProcessMaterials();

  const meta = metaRes.data
    ? { ...metaRes.data, normativas: metaRes.data.normativas as unknown as { ley: string; desc: string }[] }
    : null;

  return (
    <ProcesoClient
      initialMeta={meta}
      initialSteps={stepsRes.data || []}
      initialMaterials={materialsRes.data || []}
    />
  );
}
