import React, { useState, useEffect, useRef } from 'react';
import { getSkillByName } from './skillsData';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
  
  // Handle clicks outside the component to close the tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // For mobile, we only want to close when tapping elsewhere, not immediately
      if (skillRef.current && !skillRef.current.contains(event.target as Node)) {
        // Small delay to prevent immediate closing on mobile
        if (isMobile) {
          // Don't close if this is the initial touch that opened the tooltip
          const touch = event as TouchEvent;
          if (touch.timeStamp && touch.timeStamp < 100) return;
        }
        setShowTooltip(false);
      }
    };

    // Add event listener if tooltip is open
    if (showTooltip) {
      // For mobile, use touchend instead of touchstart to avoid immediate closing
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [showTooltip, isMobile]);

  // Toggle tooltip on click/touch for both mobile and desktop
  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // For mobile, make sure we don't close immediately
    if (isMobile) {
      // If tooltip is already shown, only close on explicit tap of the same skill
      // This prevents accidental closing
      setShowTooltip(!showTooltip);
      
      // Stop the event from further propagation
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation?.();
        e.nativeEvent.stopPropagation?.();
      }
    } else {
      // Desktop behavior remains the same
      setShowTooltip(!showTooltip);
    }
  };
  
  return (
    <div className="relative inline-block" ref={skillRef}>
      <span
        className={`px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 cursor-help transition-colors ${className}`}
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
        onMouseEnter={() => !isMobile && setShowTooltip(true)}
        onMouseLeave={() => !isMobile && setShowTooltip(false)}
      >
        {name}
      </span>
      
      {/* Mobile tooltip (bottom of screen) */}
      {showTooltip && skill && isMobile && (
        <div 
          className="fixed inset-x-0 bottom-0 z-50 p-4 bg-gray-800 text-white text-sm rounded-t-lg shadow-lg mx-auto"
          style={{ 
            maxWidth: '100%',
            animation: 'slideUp 0.2s ease-out'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md mx-auto relative pb-6">
            <button 
              className="absolute top-0 right-0 text-white w-6 h-6 flex items-center justify-center"
              onClick={() => setShowTooltip(false)}
            >
              ×
            </button>
            <strong className="block mb-1">{name}</strong>
            {skill.description}
          </div>
        </div>
      )}
      
      {/* Desktop tooltip (appears above the skill tag) */}
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