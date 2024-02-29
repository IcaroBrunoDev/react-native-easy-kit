import type { ReactNode } from 'react';
import type { TextInputProps } from 'react-native';
import type { Styles } from '../../../models/styles';

export interface InputProps extends TextInputProps {
  styles?: Styles;
  isError?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
