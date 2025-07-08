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