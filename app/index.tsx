import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { MainScreen } from '../components/MainScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <MainScreen title="Bienvenido a CalendAgro" className="bg-green-900" />
    </SafeAreaView>
  );
}
