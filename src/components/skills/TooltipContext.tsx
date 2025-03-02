import React, { ReactNode } from 'react';

interface TooltipProviderProps {
  children: ReactNode;
}

// This is now just a wrapper component since we're using direct DOM manipulation
const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default TooltipProvider;