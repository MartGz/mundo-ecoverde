import { getNosotrosContent, getValues } from '@/app/actions/nosotros'
import { getSiteStats } from '@/app/actions/settings'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import NosotrosPageClient from './NosotrosPageClient'

const FALLBACK_STATS = {
  yearsExperience: '5+',
  tonnes: '50k+',
  allies: '120+',
  families: '50+',
  certifiedPercent: '100%',
}

export default async function NosotrosPage() {
  // Sequential, not Promise.all: concurrent upserts against the shared
  // Prisma driver-adapter pool can hang indefinitely (see lib/prisma.ts).
  const contentRes = await getNosotrosContent()
  const statsRes = await getSiteStats()
  const valuesRes = await getValues()

  const content = contentRes.data!
  const stats = statsRes.data || FALLBACK_STATS
  const values = valuesRes.data || []

  return (
    <>
      <NosotrosPageClient content={content} stats={stats} values={values} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
