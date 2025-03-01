import React, { useState } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const skill = getSkillByName(name);
  
  return (
    <div className="relative inline-block">
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {name}
      </span>
      
      {showTooltip && skill && (
        <div className="absolute z-10 w-64 px-3 py-2 mt-1 text-sm bg-gray-800 text-white rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          {skill.description}
          <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-4px]"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;