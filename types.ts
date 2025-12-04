export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Content {
  nav: {
    home: string;
    about: string;
    skills: string;
    tools: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
    };
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
    };
  };
  tools: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    viewCode: string;
    viewDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface Project {
  id: number;
  title: string;
  descEn: string;
  descAr: string;
  tags: string[];
  image: string; // Using placeholder URLs
  link: string;
  github: string;
}