import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './projectsData';
import SkillTag from '../skills/SkillTag';

const ProjectCard: React.FC<Project> = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  requestAccess 
}) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="text-gray-600 hover:text-blue-600" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <SkillTag
            key={i}
            name={tech}
          />
        ))}
      </div>
      {requestAccess && (
        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Request Access
        </button>
      )}
    </div>
  );
};

export default ProjectCard;