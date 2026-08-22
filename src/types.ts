export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Java & DSA' | 'Systems';
  description: string;
  longDescription: string;
  duration: string;
  associatedWith?: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  accentColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skillsGained: string[];
  badgeColor: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreOrStatus?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}
