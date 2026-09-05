import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { Services } from '../components/sections/Services';
import { Cases } from '../components/sections/Cases';

export function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Cases />
    </main>
  );
}
