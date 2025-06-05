import { MainScreen } from 'components/MainScreen';
import { Providers } from './components/providers/Providers';
import './global.css';
import { StatusBarAnimation } from 'components/animations/StatusBarAnimation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationBarAnimation } from 'components/animations/NavigationBarAnimation';

export default function App() {
  return (
    <>
      <Providers>
        <StatusBarAnimation />

        <SafeAreaView className="flex-1">
          <MainScreen title="CalendAgro"></MainScreen>
        </SafeAreaView>
        <NavigationBarAnimation />
      </Providers>
    </>
  );
}
