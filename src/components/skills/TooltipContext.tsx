import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Skill } from './skillsData';

interface TooltipContextType {
  activeSkill: Skill | null;
  setActiveSkill: (skill: Skill | null) => void;
}

const TooltipContext = createContext<TooltipContextType>({
  activeSkill: null,
  setActiveSkill: () => {}
});

export const useTooltip = () => useContext(TooltipContext);

interface TooltipProviderProps {
  children: ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  // Close tooltip when clicking anywhere
  const handleBackgroundClick = () => {
    setActiveSkill(null);
  };

  return (
    <TooltipContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
      {activeSkill && (
        <>
          {/* Invisible overlay that covers the entire screen */}
          <div 
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleBackgroundClick}
            style={{ pointerEvents: 'auto' }}
          />
          {/* Tooltip content */}
          <div 
            className="fixed inset-x-0 bottom-0 z-50 p-4 bg-gray-800 text-white text-sm rounded-t-lg shadow-lg mx-auto"
            style={{ 
              maxWidth: '100%',
              animation: 'slideUp 0.2s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-md mx-auto pb-2">
              <strong className="block mb-2 text-lg">{activeSkill.name}</strong>
              <p>{activeSkill.description}</p>
            </div>
          </div>
        </>
      )}
    </TooltipContext.Provider>
  );
};