import { getProcessMeta, getProcessSteps, getProcessMaterials } from '@/app/actions/proceso'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ProcesoPageClient from './ProcesoPageClient'

export default async function ProcesoPage() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const metaRes = await getProcessMeta()
  const stepsRes = await getProcessSteps()
  const materialsRes = await getProcessMaterials()

  const meta = { ...metaRes.data!, normativas: metaRes.data!.normativas as unknown as { ley: string; desc: string }[] }
  const steps = stepsRes.data || []
  const materials = materialsRes.data || []

  return (
    <>
      <ProcesoPageClient meta={meta} steps={steps} materials={materials} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
