import type { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NumberKeys =
  | 'fontSize'
  | 'bottom'
  | 'end'
  | 'flexBasis'
  | 'height'
  | 'left'
  | 'margin'
  | 'marginBottom'
  | 'marginEnd'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginTop'
  | 'marginVertical'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'padding'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingTop'
  | 'paddingVertical'
  | 'right'
  | 'start'
  | 'top'
  | 'width';

type ReactNativeStyles = Partial<
  Omit<ViewStyle & FlexStyle & TextStyle & ImageStyle, NumberKeys>
> &
  NumericStyles;

type NumericStyles = {
  [P in NumberKeys]?: string | number;
};

type Styles = ReactNativeStyles;

export type { Styles };
