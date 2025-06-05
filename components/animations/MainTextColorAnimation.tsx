import React from 'react';
import Animated, { useAnimatedStyle, interpolateColor } from 'react-native-reanimated';
import { useProgressContext } from 'components/context/useProgressContext';

type MainTextColorProps = {
  children?: React.ReactNode;
};

//Component to animate main text color based on progress value
export const MainTextColorAnimation = ({ children }: MainTextColorProps) => {
  const { progressValue } = useProgressContext();
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
