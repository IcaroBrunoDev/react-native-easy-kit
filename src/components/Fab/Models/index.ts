import type { ReactNode } from 'react';
import type { Styles } from '../../../models/styles';
import type variants from '../../../theme/variants';
import type { PropsFunction } from '../../../models';
import type { TouchableOpacityProps } from 'react-native';

type Positions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';

export interface FabProps extends Omit<TouchableOpacityProps, 'style'> {
  icon: ReactNode;

  color?: string;

  position?: Positions;

  style?: Styles;

  variant?: keyof typeof variants;

  onPress: PropsFunction;
}
