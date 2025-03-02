import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';
import { useTooltip } from './TooltipContext';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { setActiveSkill, activeSkill } = useTooltip();
  const skillRef = useRef<HTMLDivElement>(null);
  const skill = getSkillByName(name);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle skill interaction
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMobile && skill) {
      // Always set the active skill on mobile
      // This works for both opening new skills and switching between skills
      setActiveSkill(skill);
    } else {
      // On desktop, toggle the local tooltip
      setShowDesktopTooltip(!showDesktopTooltip);
    }
  };
  
  return (
    <div className="relative inline-block z-50" ref={skillRef}>
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onClick={handleClick}
        onMouseEnter={() => !isMobile && setShowDesktopTooltip(true)}
        onMouseLeave={() => !isMobile && setShowDesktopTooltip(false)}
      >
        {name}
      </span>
      
      {/* Desktop tooltip (appears above the skill tag) */}
      {showDesktopTooltip && skill && !isMobile && (
        <div className="absolute z-10 w-64 px-3 py-2 mt-1 text-sm bg-gray-800 text-white rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          {skill.description}
          <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-4px]"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;