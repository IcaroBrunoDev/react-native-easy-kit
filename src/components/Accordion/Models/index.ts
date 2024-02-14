import type { StyleProp, ViewStyle } from 'react-native';

/**
 * @interface AccordionProps
 */
export interface AccordionProps {
  title: string;

  color?: string;

  Icon?: SVGElement;

  rounded?: boolean;

  labelColor?: string;

  style?: StyleProp<ViewStyle>;
}
