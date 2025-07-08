import { getPageData, getAllPages } from '@/lib/data';
import SectionRenderer from '@/components/SectionRenderer';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageData = getPageData(params.slug);
  
  if (!pageData) {
    return {
      title: 'کاوش جوش تهران | صفحه یافت نشد',
    };
  }

  return {
    title: `کاوش جوش تهران | ${pageData.title}`,
    description: `خدمات ${pageData.title} - کاوش جوش تهران ارائه دهنده خدمات تخصصی در حوزه‌های مختلف مهندسی و صنعتی`,
    keywords: `کاوش جوش تهران, ${pageData.title}, مهندسی, مشاوره, بازرسی, نظارت, پروژه, صنعت, جوشکاری`,
  };
}

export default function DynamicPage({ params }: PageProps) {
  const pageData = getPageData(params.slug);
  
  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <SectionRenderer sections={pageData.sections} />
    </main>
  );
} 