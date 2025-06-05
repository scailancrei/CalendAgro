import React, { createContext, useContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

type ProgressContextType = {
  progressValue: SharedValue<number>;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgressContext must be used within a ProgressContextProvider');
  }
  return context;
};

export const ProgressContextProvider = ({
  children,
  progressValue,
}: {
  children: React.ReactNode;
  progressValue: SharedValue<number>;
}) => {
  return <ProgressContext.Provider value={{ progressValue }}>{children}</ProgressContext.Provider>;
};
