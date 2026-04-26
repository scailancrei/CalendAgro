import { View, Text } from 'react-native';

type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};
export default function ProfileScreen({ title, children, className }: ScreenContentProps) {
  return (
    <View className={className}>
      <Text className="text-xl font-bold">{title}</Text>
      {children}
    </View>
  );
}
