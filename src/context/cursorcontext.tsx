// src/context/cursorcontext.tsx

// === ADD THIS LINE ===
"use client"; 

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface CursorContextType {
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
}

// Create the context with a default (null) value
const CursorContext = createContext<CursorContextType | undefined>(undefined);

// Hook to easily use the context
export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursorContext must be used within a CursorProvider');
  }
  return context;
};

// Provider component
export const CursorProvider = ({ children }: { children: ReactNode }) => {
  // Uses the useState hook, which requires "use client"
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};