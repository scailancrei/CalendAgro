import { Stack } from 'expo-router';

import { Providers } from '../components/providers/Providers';
import { StatusBarAnimation } from '../components/animations/StatusBarAnimation';
import { NavigationBarAnimation } from '../components/animations/NavigationBarAnimation';
import '../global.css';

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
    </Providers>
  );
}
