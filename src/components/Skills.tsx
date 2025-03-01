import React from 'react';
import { Code2, Database, Shield, Code, Layers, Tool, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["TypeScript", "Python", "Java"]
    },
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React", "Tailwind CSS", "EmailJS", "Lucide React"]
    },
    {
      title: "Build Tools",
      icon: <Tool className="w-6 h-6" />,
      skills: ["Vite", "ESLint", "PostCSS"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Git", "GitHub Actions", "Docker", "Jenkins"]
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["OWASP", "Penetration Testing", "Cybersecurity"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;