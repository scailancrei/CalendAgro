import { MainScreen } from 'components/MainScreen';
import { Providers } from './components/providers/Providers';
import { EditScreenInfo } from './components/EditScreenInfo';
import './global.css';
import { StatusBarAnimation } from 'components/animations/StatusBarAnimation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationBarAnimation } from './components/animations/NavigationBarAnimation';

export default function App() {
  return (
    <>
      <Providers>
        <StatusBarAnimation />

        <SafeAreaView className="flex-1">
          <MainScreen title="CalendAgro MIAUUUU"></MainScreen>
        </SafeAreaView>
        <SafeAreaView className="flex-1">
          <EditScreenInfo title="Bienvenido a CalendAgro"></EditScreenInfo>
        </SafeAreaView>
        <NavigationBarAnimation />
      </Providers>
    </>
  );
}
