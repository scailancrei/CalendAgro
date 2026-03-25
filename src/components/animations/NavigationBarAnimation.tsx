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

  const updateColorValueNavigationBar = (value: number) => {
    const isLight = value > 0.5;
    NavigationBar.setButtonStyleAsync(isLight ? 'light' : 'dark');
  };

  useDerivedValue(() => {
    runOnJS(updateColorValueNavigationBar)(progressValue.value);
  });

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: insets.bottom,
            zIndex: 10,
          },
          animatedStyle,
        ]}
      />
    </>
  );
};
