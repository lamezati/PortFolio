import React from 'react';
import { Skill } from './skillsData';

interface MobileTooltipProps {
  skill: Skill;
  onClose: () => void;
}

const MobileTooltip: React.FC<MobileTooltipProps> = ({ skill, onClose }) => {
  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 z-20 bg-black bg-opacity-10"
        onClick={onClose}
      />
      
      {/* Tooltip content */}
      <div 
        className="fixed inset-x-0 bottom-0 z-30 p-4 bg-gray-800 text-white text-sm rounded-t-lg shadow-lg mx-auto"
        style={{ animation: 'slideUp 0.2s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-md mx-auto pb-2">
          <strong className="block mb-2 text-lg">{skill.name}</strong>
          <p>{skill.description}</p>
        </div>
      </div>
    </>
  );
};

export default MobileTooltip;