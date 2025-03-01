import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('top');
  const tagRef = useRef<HTMLDivElement>(null);
  const skill = getSkillByName(name);
  
  // Check if we're on mobile and set position accordingly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial render
    checkMobile();
    
    // Check on window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Determine if tooltip should appear above or below based on position in viewport
  useEffect(() => {
    if (tagRef.current && showTooltip) {
      const rect = tagRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      // If there's more space below or on mobile, show tooltip below
      setTooltipPosition(spaceBelow > spaceAbove || isMobile ? 'bottom' : 'top');
    }
  }, [showTooltip, isMobile]);
  
  return (
    <div className="relative inline-block" ref={tagRef}>
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)} // Toggle on click for mobile
      >
        {name}
      </span>
      
      {showTooltip && skill && (
        <div 
          className={`absolute z-10 w-64 px-3 py-2 text-sm bg-gray-800 text-white rounded shadow-lg 
            ${tooltipPosition === 'top' 
              ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' 
              : 'top-full left-1/2 transform -translate-x-1/2 mt-2'}`}
        >
          {skill.description}
          <div 
            className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2
              ${tooltipPosition === 'top' ? 'bottom-[-4px]' : 'top-[-4px]'}`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;