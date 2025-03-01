export interface Skill {
  name: string;
  description: string;
  category: 'language' | 'frontend' | 'build' | 'database' | 'devops';
}

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "TypeScript",
    description: "Used in my portfolio for type safety to prevent runtime errors and improve code maintainability",
    category: "language"
  },
  {
    name: "Python",
    description: "Utilized for data analysis, automation scripts, and backend development",
    category: "language"
  },
  {
    name: "Java",
    description: "Used for building robust, cross-platform applications with strong OOP principles",
    category: "language"
  },
  
  // Frontend
  {
    name: "React",
    description: "Core framework for my portfolio, enabling component-based UI with efficient DOM updates",
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    description: "Used in my portfolio for rapid styling without writing custom CSS, ensuring responsive design",
    category: "frontend"
  },
  {
    name: "EmailJS",
    description: "Implemented in my portfolio's contact form to send emails directly from frontend without a server",
    category: "frontend"
  },
  {
    name: "Lucide React",
    description: "Used for consistent, lightweight SVG icons throughout my portfolio's UI",
    category: "frontend"
  },
  
  // Build Tools
  {
    name: "Vite",
    description: "Powers my portfolio with lightning-fast hot module replacement and optimized production builds",
    category: "build"
  },
  {
    name: "ESLint",
    description: "Enforces code quality and consistency standards in my portfolio codebase",
    category: "build"
  },
  {
    name: "PostCSS",
    description: "Processes Tailwind and adds vendor prefixes to CSS in my portfolio for cross-browser compatibility",
    category: "build"
  },
  
  // Databases
  {
    name: "SQL",
    description: "Used for structured data queries and database management",
    category: "database"
  },
  {
    name: "Firebase",
    description: "Platform for web and mobile app development with real-time database capabilities",
    category: "database"
  },
  
  // DevOps & Tools
  {
    name: "Git",
    description: "Version control system for tracking changes and collaborating on code",
    category: "devops"
  },
  {
    name: "GitHub Actions",
    description: "CI/CD platform for automating build, test, and deployment workflows",
    category: "devops"
  },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running applications in containers",
    category: "devops"
  },
  {
    name: "Jenkins",
    description: "Open-source automation server for building, testing, and deploying code",
    category: "devops"
  }
];

export const getSkillsByCategory = (category: string) => {
  return skillsData.filter(skill => skill.category === category);
};

export const getSkillByName = (name: string) => {
  return skillsData.find(skill => skill.name === name);
};
