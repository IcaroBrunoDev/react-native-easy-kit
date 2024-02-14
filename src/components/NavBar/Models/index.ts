import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

/**
 * @interface HeaderProps
 */
export interface HeaderProps {
  title: string;

  icon?: ReactNode;

  style?: StyleProp<ViewStyle>;

  onPress?: (...args: any) => Promise<any> | any;
}
