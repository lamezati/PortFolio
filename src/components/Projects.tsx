import React from 'react';
import ProjectSection from './projects/ProjectSection';
import { personalProjects, academicProjects } from './projects/projectsData';

const Projects = () => {
  const academicMessage = "Due to university academic integrity policies, access to school project repositories requires verification. Please use the contact form to request temporary access.";

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <ProjectSection 
          title="Personal Projects" 
          projects={personalProjects} 
        />
        <ProjectSection 
          title="Academic Projects" 
          projects={academicProjects}
          message={academicMessage}
        />
      </div>
    </section>
  );
};

export default Projects;