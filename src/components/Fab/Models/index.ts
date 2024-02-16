import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type FabPositions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';

export interface FabProps {
  icon: ReactElement;

  color?: string;

  position?: FabPositions;

  style?: StyleProp<ViewStyle>;

  variant?: 'success' | 'danger' | 'warning' | string;

  onPress: (...args: any) => Promise<any> | any;
}
