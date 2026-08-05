import { getSiteSettings } from "@/app/actions/settings";
import WhatsAppButtonClient from "./WhatsAppButtonClient";

export default async function WhatsAppButton() {
  const { data: settings } = await getSiteSettings();

  const whatsapp = settings?.whatsapp || "+57 314 728 9141";
  const whatsappUrl = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  return (
    <WhatsAppButtonClient whatsappUrl={whatsappUrl} whatsappDisplay={whatsapp} />
  );
}
