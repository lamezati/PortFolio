import React from 'react';
import { Code2, Database, Layers, Wrench, Palette } from 'lucide-react';
import SkillTag from './skills/SkillTag';
import { getSkillsByCategory } from './skills/skillsData';
import { TooltipProvider } from './skills/TooltipContext';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: getSkillsByCategory("language"),
      key: "language"
    },
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: getSkillsByCategory("frontend"),
      key: "frontend"
    },
    {
      title: "Build Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: getSkillsByCategory("build"),
      key: "build"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: getSkillsByCategory("database"),
      key: "database"
    },
    {
      title: "DevOps & Tools",
      icon: <Layers className="w-6 h-6" />,
      skills: getSkillsByCategory("devops"),
      key: "devops"
    }
  ];

  return (
    <TooltipProvider>
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
                    <SkillTag
                      key={i}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Skills;