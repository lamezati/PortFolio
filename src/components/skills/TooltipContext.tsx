import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Skill } from './skillsData';
import MobileTooltip from './MobileTooltip';

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

  const handleClose = () => {
    setActiveSkill(null);
  };

  return (
    <TooltipContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
      {activeSkill && (
        <MobileTooltip skill={activeSkill} onClose={handleClose} />
      )}
    </TooltipContext.Provider>
  );
};

export default TooltipProvider;