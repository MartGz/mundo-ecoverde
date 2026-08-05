import { getInitiatives } from '@/app/actions/admin'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import IniciativasPageClient from './IniciativasPageClient'

export default async function IniciativasPage() {
  const res = await getInitiatives()
  const initiatives = res.data || []

  return (
    <>
      <IniciativasPageClient initiatives={initiatives} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
