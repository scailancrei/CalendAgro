import Animated, { useAnimatedStyle, interpolateColor } from 'react-native-reanimated';
import { useProgressContext } from 'components/context/useProgressContext';

export const MainBackgroundColorAnimation = () => {
  const { progressValue } = useProgressContext();

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progressValue.value, [0, 1], ['#ffffff', '#4f6d7a']);
    return {
      backgroundColor,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
  });

  return <Animated.View style={[animatedStyle]} className={styles.container} />;
};

const styles = {
  container: `items-center flex-1 justify-center`,
};
