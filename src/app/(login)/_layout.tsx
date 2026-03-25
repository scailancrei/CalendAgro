import { Stack } from 'expo-router';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <Stack screenOptions={{ headerShown: false, animation: 'flip' }}>{children}</Stack>;
}
