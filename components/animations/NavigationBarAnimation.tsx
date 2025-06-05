import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useProgressContext } from 'components/context/useProgressContext';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';

export const NavigationBarAnimation = () => {
  const insets = useSafeAreaInsets();
  const { progressValue } = useProgressContext();

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progressValue.value, [0, 1], ['#ffffff', '#4f6d7a']);
    return {
      backgroundColor,
    };
  });

  const [navigationBarStyle, setNavigationBarStyle] = useState<'light' | 'dark'>('light');

  const updateNavigationBarStyle = async (style: 'light' | 'dark') => {
    await NavigationBar.setButtonStyleAsync(style);
    setNavigationBarStyle(style);
    console.log('updateNavigationBarStyle', style);
  };

  useDerivedValue(() => {
    const newStyle = progressValue.value < 0.5 ? 'light' : 'dark';
    runOnJS(updateNavigationBarStyle)(newStyle);
  });

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: insets.top,
            zIndex: 10,
          },
          animatedStyle,
        ]}
      />
    </>
  );
};
