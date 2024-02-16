import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

/**
 * @interface AccordionProps
 */
export interface AccordionProps {
  title: string;

  color?: string;

  icon?: ReactElement;

  rounded?: boolean;

  labelColor?: string;

  variant?: 'success' | 'danger' | 'warning' | string;

  style?: StyleProp<ViewStyle>;

  children: ReactElement | ReactElement[];
}
