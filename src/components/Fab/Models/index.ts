import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type variants from '../../../theme/variants';

type Positions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';

export interface FabProps {
  icon: ReactElement;

  color?: string;

  position?: Positions;

  style?: StyleProp<ViewStyle>;

  variant?: keyof typeof variants;

  onPress: (...args: any) => Promise<any> | any;
}
