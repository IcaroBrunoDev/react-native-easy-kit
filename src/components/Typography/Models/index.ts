import type { StyleProp, TextStyle } from 'react-native';
import type { fonts } from '../../../theme/fonts';

interface StyleText {
  size?: keyof typeof fonts | number;

  style?: StyleProp<TextStyle>;

  children: string;
}

export type TextProps = StyleText;

export interface AnchorProps extends TextProps {
  onPress: (...args: any) => Promise<any> | any;
}
