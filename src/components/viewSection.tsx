import { View } from 'react-native';

export default function ViewSection({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={`m-3 items-center rounded-lg bg-slate-100 p-5 ${className}`}>{children}</View>
  );
}
