import type { TouchableOpacityProps } from 'react-native';
import type { PropsFunction } from '../../../models';
import type { Styles } from '../../../models/styles';

/**
 * @interface ButtonProps
 */
export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  color?: string;
  style?: Styles;
  loading?: boolean;
  rounded?: boolean;
  variant?: string;
  outlined?: boolean;
  onPress: PropsFunction;
}
