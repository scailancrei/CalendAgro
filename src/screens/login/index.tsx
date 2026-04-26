import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
export default function LoginScreen() {
  return (
    <SafeAreaView>
      <View className="w-full flex-1 items-start p-10">
        <Text>Iniciar sesión</Text>
        <Button title="Volver a Home" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}
