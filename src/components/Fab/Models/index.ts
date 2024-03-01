import type { ReactNode } from 'react';
import type { Styles } from '../../../models/styles';
import type variants from '../../../theme/variants';
import type { PropsFunction } from '../../../models';

type Positions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';

export interface FabProps {
  icon: ReactNode;

  color?: string;

  position?: Positions;

  style?: Styles;

  variant?: keyof typeof variants;

  onPress: PropsFunction;
}
