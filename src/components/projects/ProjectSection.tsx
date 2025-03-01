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
        <div className="max-w-4xl mx-auto mb-8 p-4 bg-red-200 text-red-800 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-center px-2">{message}</p>
          </div>
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