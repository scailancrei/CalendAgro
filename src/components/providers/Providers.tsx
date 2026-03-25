import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProgressContextProvider } from '@components/context/useProgressContext';
import { KeyboardProvider } from 'react-native-keyboard-controller';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <ProgressContextProvider>{children}</ProgressContextProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};
