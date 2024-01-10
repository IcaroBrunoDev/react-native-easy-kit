import type { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

interface StyleText {
  style?: StyleProp<TextStyle>;
}

export type BaseText = PropsWithChildren<StyleText>;

export interface AnchorProps extends BaseText {
  onPress: (...args: any) => Promise<any> | any;
}
