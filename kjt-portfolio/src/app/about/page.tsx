import { getPageData } from '@/lib/data';
import SectionRenderer from '@/components/SectionRenderer';

export default function AboutPage() {
  const pageData = getPageData('about');
  if (!pageData) return null;
  return (
    <main className="min-h-screen pt-100">
      <SectionRenderer sections={pageData.sections} />
    </main>
  );
}