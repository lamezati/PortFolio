import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from './projectsData';
import { AlertTriangle } from 'lucide-react';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  message?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects, message }) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      {message && (
        <div className="max-w-4xl mx-auto mb-8 p-4 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="text-center">{message}</p>
        </div>
      )}
      <div className="max-w-4xl mx-auto grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;