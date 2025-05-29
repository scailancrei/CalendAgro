import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { MainBackgroundColor } from './animations/MainBackgroundColor';
import Theme from './Theme';
import { MainTextColor } from './animations/MainTextColor';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  children?: React.ReactNode;
};

export const MainScreen = ({ title, children }: ScreenContentProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    const toggle = () => {
      progress.value = withTiming(progress.value === 0 ? 1 : 0, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    };

    const interval = setInterval(toggle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <MainBackgroundColor progressValue={progress} />

      <MainTextColor progressValue={progress}>{title}</MainTextColor>
      <EditScreenInfo progressValue={progress} />
    </View>
  );
};
