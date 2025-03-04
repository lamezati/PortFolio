import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

// Create a single static tooltip element for all skills to share on mobile
let mobileTooltipElement: HTMLDivElement | null = null;
let activeSkillName: string | null = null;

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const skill = getSkillByName(name);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Create the tooltip element once on component mount if it doesn't exist
    if (!mobileTooltipElement) {
      mobileTooltipElement = document.createElement('div');
      mobileTooltipElement.className = 'fixed inset-x-0 bottom-0 z-30 p-4 bg-gray-800 text-white text-sm rounded-t-lg shadow-lg mx-auto';
      mobileTooltipElement.style.display = 'none';
      mobileTooltipElement.style.animation = 'slideUp 0.2s ease-out';
      
      // Create the backdrop
      const backdrop = document.createElement('div');
      backdrop.className = 'fixed inset-0 z-20 bg-black bg-opacity-10';
      backdrop.style.display = 'none';
      backdrop.id = 'skill-tooltip-backdrop';
      
      // Handle backdrop click to close the tooltip
      backdrop.addEventListener('click', () => {
        backdrop.style.display = 'none';
        mobileTooltipElement!.style.display = 'none';
        activeSkillName = null;
      });
      
      document.body.appendChild(backdrop);
      document.body.appendChild(mobileTooltipElement);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const showMobileTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!skill || !mobileTooltipElement) return;
    
    // Always show the tooltip for the clicked skill
    // Update content
    mobileTooltipElement.innerHTML = `
      <div class="max-w-md mx-auto pb-2">
        <strong class="block mb-2 text-lg">${skill.name}</strong>
        <p>${skill.description}</p>
      </div>
    `;
    
    // Show the tooltip
    mobileTooltipElement.style.display = 'block';
    const backdrop = document.getElementById('skill-tooltip-backdrop');
    if (backdrop) backdrop.style.display = 'block';
    
    // Set this as the active skill
    activeSkillName = skill.name;
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDesktopTooltip(!showDesktopTooltip);
  };
  
  return (
    <div className="relative inline-block z-10">
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onClick={isMobile ? showMobileTooltip : handleDesktopClick}
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