import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { PropsFunction } from '../../../models';
import type { Styles } from '../../../models/styles';

type ActionSheetProps = {
  title?: string;
  visible: boolean;
  style?: Styles;
  onClose: PropsFunction;
  children?: ReactNode;
};

type ActionItemProps = { style?: Styles; children: ReactNode } & Omit<
  TouchableOpacityProps,
  'style'
>;

export type { ActionItemProps, ActionSheetProps };
