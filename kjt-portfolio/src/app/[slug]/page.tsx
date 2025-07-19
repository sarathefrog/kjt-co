'use client';
import { getPageData, getAllPages } from '@/lib/data';
import SectionRenderer from '@/components/SectionRenderer';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SakhtVaEjraIntro from '@/components/sections/SakhtVaEjraIntro';
import ServiceSectionSakhtVaEjra from '@/components/sections/ServiceSectionSakhtVaEjra';
import Hero from '@/components/sections/Hero';
import { useRef, useEffect, useState } from 'react';

// Update PageProps to match Next.js 15+ (params is a Promise)
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageData(slug);
  
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

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getPageData(slug);
  if (!pageData) {
    notFound();
  }

  // Custom rendering for sakht-va-ejra
  if (slug === 'sakht-va-ejra') {
    // Extract sections by type
    const heroSection = pageData.sections.find(s => s.type === 'hero');
    const introSection = pageData.sections.find(s => s.type === 'intro');
    const servicesSection = pageData.sections.find(s => s.type === 'services_grid');
    return (
      <main className="min-h-screen">
        <Header />
        {/* Hero Section (same as homepage style) */}
        {heroSection && <Hero section={heroSection} />}
        {/* Custom Dark Animated Intro */}
        {introSection && (
          <SakhtVaEjraIntro title={introSection.title} content={introSection.content} />
        )}
        {/* Each service as a unique section */}
        {servicesSection && servicesSection.items && servicesSection.items.map((item, idx) => (
          <ServiceSectionSakhtVaEjra
            key={idx}
            title={item.title}
            accentColor={['orange','blue','green','purple','red','yellow'][idx % 6]}
          />
        ))}
      </main>
    );
  }

  // Custom rendering for nezarat-va-bazresi
  if (slug === 'nezarat-va-bazresi') {
    const heroSection = pageData.sections.find(s => s.type === 'hero');
    // Sidebar sections and sample data
    const projectSections = [
      {
        id: 'overview',
        label: 'پروژه های نظارت و بازرسی',
        description: 'در این بخش با پروژه‌های شاخص نظارت و بازرسی آشنا می‌شوید.',
        projects: [
          { title: 'پروژه الف', desc: 'توضیح نمونه برای پروژه الف.' },
          { title: 'پروژه ب', desc: 'توضیح نمونه برای پروژه ب.' }
        ]
      },
      {
        id: 'sazeh-sakhtemani',
        label: 'بازرسی و نظارت بر سازه‌های ساختمانی',
        description: 'بازرسی و کنترل کیفیت سازه‌های فلزی و بتنی در پروژه‌های ساختمانی.',
        projects: [
          { title: 'برج میلاد', desc: 'بازرسی جوش و اتصالات فلزی برج میلاد.' },
          { title: 'مجتمع تجاری کوروش', desc: 'کنترل کیفیت سازه بتنی مجتمع کوروش.' }
        ]
      },
      {
        id: 'niroogahi',
        label: 'بازرسی و نظارت بر تأسیسات نیروگاهی',
        description: 'بازرسی تجهیزات و خطوط لوله نیروگاه‌ها.',
        projects: [
          { title: 'نیروگاه شهید رجایی', desc: 'بازرسی خطوط بخار و تجهیزات نیروگاه.' }
        ]
      },
      {
        id: 'daryayi',
        label: 'بازرسی تأسیسات دریایی',
        description: 'بازرسی سکوها و خطوط انتقال دریایی.',
        projects: [
          { title: 'سکوی نفتی ابوذر', desc: 'بازرسی جوش و اتصالات سکو.' }
        ]
      },
      {
        id: 'haml-naql-rili',
        label: 'بازرسی بر تأسیسات و تجهیزات حمل و نقل و ریلی',
        description: 'کنترل کیفیت خطوط و تجهیزات ریلی.',
        projects: [
          { title: 'مترو تهران', desc: 'بازرسی خطوط و اتصالات مترو.' }
        ]
      },
      {
        id: 'naft-gaz-petro',
        label: 'بازرسی و نظارت بر تأسیسات و تجهیزات نفت گاز پتروشیمی',
        description: 'بازرسی خطوط لوله و تجهیزات صنایع نفت و گاز.',
        projects: [
          { title: 'پالایشگاه اصفهان', desc: 'بازرسی خطوط لوله و مخازن پالایشگاه.' }
        ]
      },
      {
        id: 'haml-naql-havaei',
        label: 'بازرسی و نظارت بر تأسیسات و تجهیزات حمل و نقل هوایی',
        description: 'بازرسی تجهیزات فرودگاهی و خطوط هوایی.',
        projects: [
          { title: 'فرودگاه امام خمینی', desc: 'کنترل کیفیت تجهیزات فرودگاهی.' }
        ]
      },
      {
        id: 'karxaneh-siman',
        label: 'بازرسی تأسیسات کارخانه سیمان',
        description: 'بازرسی تجهیزات و سازه‌های کارخانه سیمان.',
        projects: [
          { title: 'کارخانه سیمان تهران', desc: 'بازرسی اسکلت فلزی و تجهیزات کارخانه.' }
        ]
      },
      {
        id: 'ghataat-khodro',
        label: 'بازرسی بر ساخت قطعات خودرو',
        description: 'کنترل کیفیت قطعات و خطوط تولید خودرو.',
        projects: [
          { title: 'ایران خودرو', desc: 'بازرسی قطعات و خطوط تولید ایران خودرو.' }
        ]
      }
    ];
    const [showSidebar, setShowSidebar] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => setShowSidebar(!entry.isIntersecting),
        { root: null, threshold: 0 }
      );
      if (heroRef.current) observer.observe(heroRef.current);
      return () => { if (heroRef.current) observer.unobserve(heroRef.current); };
    }, []);
    return (
      <main className="w-full min-h-screen bg-white">
        {/* Hero Section */}
        <div ref={heroRef} id="hero-section">
          {heroSection && (
            <Hero section={{
              type: 'hero',
              title: heroSection.title,
              subtitle: heroSection.subtitle,
              cta: undefined
            }} />
          )}
        </div>
        {/* Floating Sidebar - only after hero, never on hero */}
        {showSidebar && (
          <aside className="hidden md:flex flex-col items-center w-64 fixed top-0 right-8 z-40 bg-white/95 border-l-4 border-orange-400 shadow-2xl rounded-3xl p-8 gap-6 transition-all duration-300">
            <div className="mb-6 flex flex-col items-center">
              <span className="text-3xl font-extrabold text-orange-500 mb-1">KJT</span>
              <span className="text-xs text-gray-500">پروژه‌های نظارت و بازرسی</span>
            </div>
            <nav className="w-full">
              <ul className="flex flex-col gap-4 w-full">
                {projectSections.map(section => (
                  <li key={section.id} className="w-full">
                    <a href={`#${section.id}`} className="block w-full py-3 px-4 rounded-lg text-right font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all border-r-4 border-transparent hover:border-orange-400">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        {/* Main Sections - full width, content padded to avoid sidebar */}
        <div className="flex-1 flex flex-col gap-0">
          {projectSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={`min-h-screen flex flex-col justify-center px-0 py-16 md:py-24 w-full ${idx % 2 === 0 ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition-colors duration-300`}
            >
              <div className="w-full flex flex-col gap-8 px-6 md:pr-80 md:pl-16 lg:pl-32">
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight border-r-8 pr-6 ${idx % 2 === 0 ? 'border-orange-400 text-orange-600' : 'border-orange-300 text-orange-200'}`}>{section.label}</h2>
                <p className={`mb-6 text-lg ${idx % 2 === 0 ? 'text-gray-700' : 'text-gray-200'}`}>{section.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {section.projects.map((proj, pidx) => (
                    <div key={pidx} className={`rounded-2xl shadow-lg p-8 border ${idx % 2 === 0 ? 'bg-white border-orange-100 text-gray-900' : 'bg-gray-800 border-orange-900 text-white'} flex flex-col gap-2 transition-colors duration-300`}>
                      <span className="font-bold text-xl mb-2">{proj.title}</span>
                      <span className="text-base leading-relaxed">{proj.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    );
  }

  // Default rendering for other pages
  return (
    <main className="min-h-screen">
      <Header />
      <SectionRenderer sections={pageData.sections} />
    </main>
  );
} 