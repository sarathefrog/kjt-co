import { getPageData } from '@/lib/data';
import SectionRenderer from '@/components/SectionRenderer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import ProjectsSlider from '@/components/sections/ProjectsSlider';

export const metadata: Metadata = {
  title: 'کاوش جوش تهران | صفحه اصلی',
  description: 'کاوش جوش تهران - ارائه دهنده خدمات تخصصی در حوزه بازرسی، مشاوره و اجرای پروژه‌ها در صنایع مختلف',
  keywords: 'کاوش جوش تهران, صفحه اصلی, مهندسی, مشاوره, بازرسی, نظارت, پروژه, صنعت, جوشکاری',
};

export default function Home() {
  return (
    <>
      <Hero 
        section={{
          title: "کاوش جوش تهران",
          subtitle: "پیشگام در صنعت جوشکاری و مهندسی با بیش از 30 سال تجربه",
          cta: {
            label: "درخواست مشاوره رایگان",
            link: "/contact"
          },
          type: 'hero',
        }}
      />
      <ProjectsSlider />
      <About />
      <Services 
        section={{
          title: "خدمات تخصصی ما",
          items: [
            {
              title: "جوشکاری صنعتی",
              description: "انواع جوشکاری با تکنولوژی‌های پیشرفته و استانداردهای بین‌المللی",
              link: "/services/welding"
            },
            {
              title: "مشاوره مهندسی",
              description: "مشاوره تخصصی در حوزه‌های مختلف مهندسی و صنعتی",
              link: "/services/consulting"
            },
            {
              title: "کنترل کیفیت",
              description: "بازرسی و کنترل کیفیت با تجهیزات پیشرفته و روش‌های استاندارد",
              link: "/services/quality"
            },
            {
              title: "آموزش و گواهینامه",
              description: "دوره‌های آموزشی تخصصی و صدور گواهینامه‌های معتبر",
              link: "/services/training"
            }
          ],
          type: 'services',
        }}
      />
      <CTA />
    </>
  );
}
