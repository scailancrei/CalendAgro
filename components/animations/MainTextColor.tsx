import React from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle, interpolateColor, SharedValue } from 'react-native-reanimated';

type MainTextColorProps = {
  progressValue: SharedValue<number>;
  children?: React.ReactNode;
};

export const MainTextColor = ({ progressValue, children }: MainTextColorProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(progressValue.value, [0, 1], ['#4f6d7a', '#ffffff']);
    return {
      color,
    };
  });

  return (
    <Animated.Text style={[animatedStyle]} className={styles.text}>
      {children}
    </Animated.Text>
  );
};

const styles = {
  text: `text-2xl font-bold`,
};
