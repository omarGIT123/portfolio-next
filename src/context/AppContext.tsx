"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of a single command from the LLM
export interface LlmAction {
  information: string;
  section: string;
  card?: string; // card is optional
}

// Define the shape of our context's state and functions
interface AppContextType {
  commandQueue: LlmAction[];
  setCommandQueue: React.Dispatch<React.SetStateAction<LlmAction[]>>;
  isProcessingQueue: boolean;
  setIsProcessingQueue: React.Dispatch<React.SetStateAction<boolean>>;
  projectToOpen: string | null;
  setProjectToOpen: (title: string | null) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component that will wrap our application
export function AppProvider({ children }: { children: ReactNode }) {
  const [commandQueue, setCommandQueue] = useState<LlmAction[]>([]);
  const [isProcessingQueue, setIsProcessingQueue] = useState<boolean>(false);
  const [projectToOpen, setProjectToOpen] = useState<string | null>(null);

  const value = {
    commandQueue,
    setCommandQueue,
    isProcessingQueue,
    setIsProcessingQueue,
    projectToOpen,
    setProjectToOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Create a custom hook for easy access to the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
