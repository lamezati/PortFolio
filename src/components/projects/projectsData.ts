export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  requestAccess?: boolean;
}

export const personalProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A professional portfolio showcasing my academic and professional achievements.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS", "ESLint", "PostCSS"],
    githubUrl: "https://github.com/lamezati/PortFolio"
  }
];

export const academicProjects: Project[] = [
  {
    title: "Wolf Tracker",
    description: "A comprehensive student progress tracking system for NC State University.",
    technologies: ["Java", "Eclipse", "Jenkins", "JUnit"],
    requestAccess: true
  }
];