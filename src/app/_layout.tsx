import { Stack } from 'expo-router';
import { Providers } from '@hooks/providers/Providers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../global.css';

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
    </Providers>
  );
}
