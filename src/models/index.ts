import type { PropsWithChildren } from 'react';

import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlexStyle,
  ButtonProps,
  FlatListProps,
  ImageBackgroundProps,
  ImageProps,
  InputAccessoryViewProps,
  KeyboardAvoidingViewProps,
  PressableProps,
  ScrollViewProps,
  SectionListProps,
  TextInputProps,
  TextProps,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
  VirtualizedListProps,
} from 'react-native';

/**
 * @description
 * Manual ReactNativeElements type (copied from stitches library)
 * Used to create type assertions in the @function styled
 */

type Elements = {
  Button: PropsWithChildren<ButtonProps>;
  FlatList: FlatListProps<any>;
  Image: PropsWithChildren<ImageProps>;
  ImageBackground: PropsWithChildren<ImageBackgroundProps>;
  InputAccessoryView: PropsWithChildren<InputAccessoryViewProps>;
  KeyboardAvoidingView: PropsWithChildren<KeyboardAvoidingViewProps>;
  Pressable: PropsWithChildren<PressableProps>;
  SafeAreaView: PropsWithChildren<ViewProps>;
  ScrollView: PropsWithChildren<ScrollViewProps>;
  SectionList: SectionListProps<any>;
  Text: PropsWithChildren<TextProps>;
  TextInput: PropsWithChildren<TextInputProps>;
  TouchableHighlight: PropsWithChildren<TouchableHighlightProps>;
  TouchableNativeFeedback: PropsWithChildren<TouchableNativeFeedbackProps>;
  TouchableOpacity: PropsWithChildren<TouchableOpacityProps>;
  TouchableWithoutFeedback: PropsWithChildren<TouchableWithoutFeedbackProps>;
  View: PropsWithChildren<ViewProps>;
  VirtualizedList: VirtualizedListProps<any>;
};

type PropsToChange =
  | 'margin'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginVertical'
  | 'marginHorizontal'
  | 'padding'
  | 'paddingTop'
  | 'paddingVertical'
  | 'paddingHorizontal';

type SpaceTypes = {
  [P in PropsToChange]?: string | number;
};

type Styles = StyleProp<
  ViewStyle | FlexStyle | TextStyle | ImageStyle | SpaceTypes
>;

export type { Styles, Elements };
