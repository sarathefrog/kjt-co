import portfolioData from '../data/portfolio.json';
import { PortfolioData, Page, Section } from '@/types';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

export function getPageData(slug: string): Page | undefined {
  const data = getPortfolioData();
  return data.pages.find(page => page.slug === slug);
}

export function getPageBySlug(slug: string): Page | undefined {
  const data = getPortfolioData();
  return data.pages.find(page => page.slug === slug);
}

export function getHomePage(): Page | undefined {
  return getPageBySlug('homepage');
}

export function getAllPages(): Page[] {
  const data = getPortfolioData();
  return data.pages;
}

export function getServicePages(): Page[] {
  const data = getPortfolioData();
  return data.pages.filter(page => page.slug !== 'homepage');
}

export function getSectionByType(page: Page, type: string): Section | undefined {
  return page.sections.find(section => section.type === type);
}

export function getSectionsByType(page: Page, type: string): Section[] {
  return page.sections.filter(section => section.type === type);
}

export function getNavigationItems() {
  const pages = getAllPages();
  return pages.map(page => ({
    title: page.title,
    url: page.url,
    slug: page.slug
  }));
} 