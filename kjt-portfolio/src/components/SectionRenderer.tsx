'use client';

import { Section } from '@/types';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import CTA from './sections/CTA';
import Footer from './Footer';
import ServicesGrid from './sections/ServicesGrid';
import Intro from './sections/Intro';

interface SectionRendererProps {
  sections: Section[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'hero':
        return <Hero key={index} section={section} />;
      case 'services':
        return <Services key={index} section={section} />;
      case 'about':
        return <About key={index} section={section} />;
      case 'cta':
        return <CTA key={index} section={section} />;
      case 'footer':
        return <Footer key={index} section={section} />;
      case 'servicesGrid':
        return <ServicesGrid key={index} section={section} />;
      case 'intro':
        return <Intro key={index} section={section} />;
      default:
        console.warn(`Unknown section type: ${(section as any).type}`);
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => renderSection(section, index))}
    </>
  );
} 