import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';
import { useProgressContext } from 'components/context/useProgressContext';

export const StatusBarAnimation = () => {
  const insets = useSafeAreaInsets();
  const { progressValue } = useProgressContext();

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progressValue.value, [0, 1], ['#ffffff', '#4f6d7a']);
    return {
      backgroundColor,
    };
  });

  const [statusBarStyle, setStatusBarStyle] = useState<'light' | 'dark'>('light');

  // Actualizar la barra de estado según el valor de progreso
  // Almacena el estilo actual de la barra de estado y se actualiza cuando el valor de progreso cambia
  //RunOnJs
  useDerivedValue(() => {
    const newStyle = progressValue.value > 0.5 ? 'light' : 'dark';

    runOnJS(setStatusBarStyle)(newStyle);
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
      <StatusBar translucent style={statusBarStyle} />
    </>
  );
};
