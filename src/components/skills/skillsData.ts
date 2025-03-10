export interface Skill {
  name: string;
  description: string;
  category: 'language' | 'frontend' | 'build' | 'database' | 'devops';
}

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "TypeScript",
    description: "Used for type-safe JavaScript development, enhancing code quality and developer experience",
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
    description: "Primary framework for building interactive user interfaces with reusable components",
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom designs without leaving HTML",
    category: "frontend"
  },
  {
    name: "EmailJS",
    description: "Used to send emails directly from client-side JavaScript without needing a server",
    category: "frontend"
  },
  
  // Build Tools
  {
    name: "Vite",
    description: "Next-generation frontend build tool that significantly improves development experience",
    category: "build"
  },
  {
    name: "Eclipse",
    description: "Integrated development environment used primarily for Java development with extensive plugin support",
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
    name: "Jenkins",
    description: "Open-source automation server for building, testing, and deploying code",
    category: "devops"
  },
  {
    name: "JUnit",
    description: "Testing framework for Java applications, supporting test-driven development and unit testing",
    category: "devops"
  }
];

export const getSkillsByCategory = (category: string) => {
  return skillsData.filter(skill => skill.category === category);
};

export const getSkillByName = (name: string) => {
  return skillsData.find(skill => skill.name === name);
};