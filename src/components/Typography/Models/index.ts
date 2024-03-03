import type { TextProps } from 'react-native';
import type { fonts } from '../../../theme/fonts';
import type { Styles } from '../../../models/styles';
import type { PropsFunction } from '../../../models';
import type { ReactNode } from 'react';

export interface TypographyProps extends Omit<TextProps, 'style'> {
  size?: keyof typeof fonts | number;
  style?: Styles;
  children: ReactNode;
}

export interface AnchorProps extends TypographyProps {
  underline?: boolean;
  onPress: PropsFunction;
}
