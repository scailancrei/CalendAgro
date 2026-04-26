import { createContext, useContext, useEffect, useEffectEvent } from 'react';
import { SharedValue, useSharedValue, withTiming } from 'react-native-reanimated';

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

export const ProgressContextProvider = ({ children }: { children: React.ReactNode }) => {
  const progressValue = useSharedValue(0);

  const toggleProgress = useEffectEvent(() => {
    progressValue.value = withTiming(progressValue.value === 0 ? 1 : 0, { duration: 1000 });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      toggleProgress();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <ProgressContext.Provider value={{ progressValue }}>{children}</ProgressContext.Provider>;
};
