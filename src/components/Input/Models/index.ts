import type { ReactNode } from 'react';
import type { PressableProps, TextInputProps } from 'react-native';
import type { Styles } from '../../../models/styles';

type InputExtension = TextInputProps & PressableProps;

export interface InputProps extends Omit<InputExtension, 'style'> {
  style?: Styles;
  isError?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}
