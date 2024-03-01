import type { ReactNode } from 'react';
import type { Styles } from '../../../models/styles';

/**
 * @interface AccordionProps
 */
export interface AccordionProps {
  title: string;

  color?: string;

  icon?: ReactNode;

  rounded?: boolean;

  labelColor?: string;

  variant?: string;

  style?: Styles;

  children: ReactNode;
}
