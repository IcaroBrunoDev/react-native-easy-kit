import type { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';

type StylesToParserToken =
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

type MergedStyles = ViewStyle & FlexStyle & TextStyle & ImageStyle;

type PreTokenStyles = Partial<Omit<MergedStyles, StylesToParserToken>>;

type Styles = PreTokenStyles & {
  [P in StylesToParserToken]?: string | number;
};

export type { Styles };
