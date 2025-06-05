import React from 'react';
import { View } from 'react-native';
import { MainBackgroundColorAnimation } from './animations/MainBackgroundColorAnimation';
import { MainTextColorAnimation } from './animations/MainTextColorAnimation';

type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
};

export const MainScreen = ({ title }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center">
      <MainBackgroundColorAnimation />
      <MainTextColorAnimation>{title}</MainTextColorAnimation>
    </View>
  );
};
