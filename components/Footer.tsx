import Link from "next/link";
import { getSiteSettings } from "@/app/actions/settings";

export default async function Footer() {
  const { data: settings } = await getSiteSettings();

  const phone = settings?.phone || "+57 314 728 9141";
  const email = settings?.email || "asociacionmundoecoverde@gmail.com";
  const addressLine = settings?.addressLine || "";
  const addressCity = settings?.addressCity || "Cartagena, Colombia";
  const address = addressLine ? `${addressLine}, ${addressCity}` : addressCity;

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 lg:pt-16 pb-8">
      <div className="container-eco">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 lg:w-24 lg:h-24 relative flex items-center justify-center">
                <img
                  src="/images/logos/logo.png"
                  alt="MundoEcoVerde Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl lg:text-3xl text-brand-dark">
                Mundo Eco Verde
              </span>
            </div>
            <p className="text-brand-gray text-sm lg:text-base leading-relaxed max-w-sm">
              Comprometidos con el desarrollo sostenible y la economía circular.
              Transformamos residuos en oportunidades para un futuro más limpio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4 text-lg">Empresa</h4>
            <ul className="space-y-2 text-sm lg:text-base text-brand-gray">
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-brand-green transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-brand-green transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/proceso"
                  className="hover:text-brand-green transition-colors"
                >
                  Proceso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-4 text-lg">Contacto</h4>
            <ul className="space-y-2 text-sm lg:text-base text-brand-gray">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-brand-green"></i>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-brand-green"></i>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-brand-green"></i>
                {address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mundo Eco Verde S.A.S. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}