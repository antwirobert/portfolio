export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Infrastructure & Tools"
  | "Languages";

export interface TechItem {
  name: string;
  note?: string;
}

export interface TechStackGroup {
  category: TechCategory;
  items: TechItem[];
}

export type ProjectCategory =
  | "Backend Systems"
  | "Full-Stack"
  | "Developer Tools"
  | "Data / ML"
  | "Infrastructure";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "demo";
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface ProjectDetailSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  technologies: string[];
  contribution: string;
  links: ProjectLink[];
  showcaseTechnologies: string[];
  engineeringHighlights: string[];
  showcaseScreenshot: ProjectScreenshot;
  detailScreenshots: ProjectScreenshot[];
  featured?: boolean;
  detail: {
    sections: ProjectDetailSection[];
    keyDecisions?: { title: string; body: string }[];
    challenges?: { title: string; body: string }[];
    features?: string[];
    learnings?: string;
    results?: string;
  };
}

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string | string[];
  type: "experience" | "education" | "certification";
  tags?: string[];
}

export interface Profile {
  name: string;
  title: string;
  positioning: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
}

export interface AboutContent {
  paragraphs: string[];
  learning: string[];
  interestedIn: string[];
}
