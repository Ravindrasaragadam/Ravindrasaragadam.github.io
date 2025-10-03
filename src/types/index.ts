export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  tags: string[];
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  author_id: string | null;
  view_count: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  technologies: string[];
  impact_metrics: string | null;
  project_url: string | null;
  github_url: string | null;
  featured_image: string | null;
  display_order: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency?: number;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
