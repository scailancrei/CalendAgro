import { MainScreen } from 'components/MainScreen';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <MainScreen title="AgroTech"></MainScreen>
      <StatusBar style="auto" />
    </>
  );
}
