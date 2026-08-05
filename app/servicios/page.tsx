import { getServices } from '@/app/actions/admin'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiciosPageClient from './ServiciosPageClient'

export default async function ServiciosPage() {
  const res = await getServices()
  const active = (res.data || []).filter(s => s.isActive)

  const serviciosOperativos = active.filter(s => s.category === 'OPERATIVO')
  const serviciosSociales = active.filter(s => s.category === 'SOCIAL')

  return (
    <>
      <ServiciosPageClient
        serviciosOperativos={serviciosOperativos}
        serviciosSociales={serviciosSociales}
      />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
