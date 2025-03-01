import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom' | 'center'>('center');
  const tagRef = useRef<HTMLDivElement>(null);
  const skill = getSkillByName(name);
  
  // Handle click for mobile devices
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent propagation
    setShowTooltip(!showTooltip);
  };
  
  // Close tooltip when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showTooltip]);
  
  return (
    <div className="relative inline-block" ref={tagRef}>
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleClick}
      >
        {name}
      </span>
      
      {showTooltip && skill && (
        <div 
          className="fixed inset-x-0 bottom-0 z-50 p-4 bg-gray-800 text-white text-sm rounded-t-lg shadow-lg mx-auto"
          style={{ 
            maxWidth: '100%',
            animation: 'slideUp 0.2s ease-out'
          }}
        >
          <div className="max-w-md mx-auto">
            <strong className="block mb-1">{name}</strong>
            {skill.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;