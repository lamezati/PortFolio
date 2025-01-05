import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  logoUrl?: string;
}

const ExperienceCard = ({ title, company, period, location, description, logoUrl }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md mb-8 last:mb-0 transform transition-all hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {logoUrl && (
            <img 
              src={logoUrl} 
              alt={`${company} logo`} 
              className="w-12 h-12 object-contain bg-white rounded-lg p-2"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <Building2 className="w-4 h-4" />
              <span>{company}</span>
              <span className="text-gray-400">•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-4 md:mt-0">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
      </div>
      <ul className="space-y-3 text-gray-600 pl-4">
        {description.map((desc, i) => (
          <li key={i} className="relative pl-2">
            <span className="absolute left-[-1rem] top-[0.6rem] w-2 h-2 bg-blue-600 rounded-full"></span>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;