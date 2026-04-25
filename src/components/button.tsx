import { Button } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return <Button title={title} onPress={onPress} />;
};
