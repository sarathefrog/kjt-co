import { getPageData } from '@/lib/data';
import SectionRenderer from '@/components/SectionRenderer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const pageData = getPageData('about');
  if (!pageData) return null;
  return (
    <main className="min-h-screen pt-100">
      <Header />
      <SectionRenderer sections={pageData.sections} />
      <Footer />
    </main>
  );
}

function HeroPageTitle({ title }: { title: string }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden z-10">
      <img
        src="/welding-sparks.gif"
        alt="Welding sparks background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
      </div>
    </section>
  );
} 