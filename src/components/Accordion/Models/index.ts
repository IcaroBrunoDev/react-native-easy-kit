import type { StyleProp, ViewStyle } from 'react-native';

/**
 * @interface AccordionProps
 */
export interface AccordionProps {
  /**
   * Accordion Retracted Section Text
   * @type {string}
   */
  title: string;

  /**
   * Accordion Retracted Animated Icon (It is usually a chevron)
   * @type {SVGElement}
   */
  Icon: SVGElement;

  rounded?: boolean;

  color?: string;

  labelColor?: string;

  style?: StyleProp<ViewStyle>;
}
