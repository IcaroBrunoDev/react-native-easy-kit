import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type FabPositions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';

export interface FabProps {
  icon: ReactNode;

  color?: string;

  position?: FabPositions;

  style?: StyleProp<ViewStyle>;

  onPress: (...args: any) => Promise<any> | any;
}
