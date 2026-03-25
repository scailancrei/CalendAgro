import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';
import { MainScreen } from '@components/MainScreen';
import { Button, Image, Text, View } from 'react-native';

export default function HomeScreen() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center bg-slate-300 pt-10">
      {loggedIn ? (
        <MainScreen
          title="Bienvenido a CalendAgro"
          className="m-3 items-center rounded-lg bg-slate-100 p-5">
          <Text className="mt-4">Aquí puedes ver tu calendario de cultivos y tareas.</Text>
        </MainScreen>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Image source={require('@assets/images/plant.png')} style={{ width: 200, height: 200 }} />
          <MainScreen
            title="Inicia sesión para continuar"
            className="mt-5 items-center rounded-lg bg-slate-100 p-5">
            <Button title="Iniciar sesión" onPress={() => router.push('/(login)/login')} />
          </MainScreen>
        </View>
      )}
    </SafeAreaView>
  );
}
