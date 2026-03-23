import { View, Text } from 'react-native';
import { MainBackgroundColorAnimation } from './animations/MainBackgroundColorAnimation';
import { MainTextColorAnimation } from './animations/MainTextColorAnimation';

type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export const MainScreen = ({ title, children, className }: ScreenContentProps) => {
  return (
    <View className={className}>
      <Text>{title}</Text>
      {children}
    </View>
  );
};
