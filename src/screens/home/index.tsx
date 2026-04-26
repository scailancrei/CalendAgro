import { View, Text, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import ProfileScreen from '@screens/profile';
import { router } from 'expo-router';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center bg-slate-300 pt-10">
      {loggedIn ? (
        <ProfileScreen
          title="Bienvenido a CalendAgro"
          className="m-3 items-center rounded-lg bg-slate-100 p-5">
          <Text className="mt-4">Aquí puedes ver tu calendario de cultivos y tareas.</Text>
        </ProfileScreen>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Image source={require('@assets/images/plant.png')} style={{ width: 200, height: 200 }} />
          <View className="mt-5 items-center rounded-lg bg-slate-100 p-5">
            <Text className="mt-2 text-center">
              Inicia sesión para acceder a tu calendario de cultivos y tareas.
            </Text>
            <Button title="Iniciar Sesión" onPress={() => router.push('/(login)')} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
