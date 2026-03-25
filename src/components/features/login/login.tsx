import { TextInput, View, Text } from 'react-native';

export default function LoginFeature() {
  return (
    <View className="color w-full flex-1 justify-center rounded-lg bg-white p-5">
      <Text className="mb-5 text-2xl font-bold">Iniciar sesión</Text>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder="ejemplo@gmail.com" className="mb-4 border p-2" />
      <TextInput placeholder="Contraseña" secureTextEntry className="mb-4 border p-2" />
    </View>
  );
}
