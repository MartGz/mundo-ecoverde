import { getHeroContent, getAboutContent } from '@/app/actions/home';
import InicioClient from './InicioClient';

export default async function InicioPage() {
  const heroResult = await getHeroContent();
  const aboutResult = await getAboutContent();

  return (
    <InicioClient
      initialHero={heroResult.data ?? null}
      initialAbout={aboutResult.data ?? null}
    />
  );
}
