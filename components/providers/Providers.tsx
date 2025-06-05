import React, { useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProgressContextProvider } from 'components/context/useProgressContext';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  const progressValue = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      progressValue.value = withTiming(progressValue.value === 0 ? 1 : 0, { duration: 1000 });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaProvider>
      <ProgressContextProvider progressValue={progressValue}>{children}</ProgressContextProvider>
    </SafeAreaProvider>
  );
};
