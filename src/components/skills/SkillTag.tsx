import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tagRef = useRef<HTMLDivElement>(null);
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
  
  // Handle click for mobile devices
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      setShowTooltip(!showTooltip);
    }
  };
  
  // Close mobile tooltip when clicking outside
  useEffect(() => {
    if (!isMobile) return;
    
    const handleOutsideClick = () => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showTooltip, isMobile]);
  
  return (
    <div className="relative inline-block" ref={tagRef}>
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onMouseEnter={() => !isMobile && setShowTooltip(true)}
        onMouseLeave={() => !isMobile && setShowTooltip(false)}
        onClick={handleClick}
      >
        {name}
      </span>
      
      {showTooltip && skill && isMobile && (
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
      
      {/* Desktop tooltip (original behavior) */}
      {showTooltip && skill && !isMobile && (
        <div className="absolute z-10 w-64 px-3 py-2 mt-1 text-sm bg-gray-800 text-white rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          {skill.description}
          <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-4px]"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;