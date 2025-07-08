export interface CTA {
  label: string;
  link: string;
}

export interface ServiceItem {
  title: string;
  link?: string;
  description?: string;
  icon?: string;
}

export interface Client {
  name: string;
  logo: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  url?: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface HeroSection {
  type: 'hero';
  title: string;
  subtitle: string;
  animation?: boolean;
  cta?: CTA;
  background?: string;
}

export interface AboutSection {
  type: 'about';
  title: string;
  content: string;
  image?: string | null;
}

export interface ServicesSection {
  type: 'services';
  title: string;
  items: ServiceItem[];
}

export interface ServicesGridSection {
  type: 'services_grid';
  title: string;
  items: ServiceItem[];
}

export interface IntroSection {
  type: 'intro';
  title: string;
  content: string;
}

export interface ClientsSliderSection {
  type: 'clients_slider';
  title: string;
  slider_type: 'logos';
  clients: Client[];
}

export interface ProjectsSliderSection {
  type: 'projects_slider';
  title: string;
  slider_type: 'projects';
  projects: Project[];
}

export interface TestimonialsSection {
  type: 'testimonials';
  title: string;
  testimonials: Testimonial[];
}

export interface CTASection {
  type: 'cta';
  title: string;
  cta: CTA;
}

export interface FooterSection {
  type: 'footer';
  content: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

export type Section = 
  | HeroSection 
  | AboutSection 
  | ServicesSection 
  | ServicesGridSection 
  | IntroSection 
  | ClientsSliderSection 
  | ProjectsSliderSection 
  | TestimonialsSection 
  | CTASection 
  | FooterSection;

export interface Page {
  slug: string;
  title: string;
  url: string;
  sections: Section[];
}

export interface PortfolioData {
  website: string;
  pages: Page[];
} 