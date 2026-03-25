import { View, TextInput, Text, Button } from 'react-native';
import LoginFeature from '@components/features/login/login';
('@components/features/login/login');

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full flex-1 items-start p-10">
      <LoginFeature />
    </View>
  );
}
