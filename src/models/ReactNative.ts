/**
 * @description
 * Manual ReactNativeElements type (copied from stitches library)
 * Used to create type assertions in the @function styled
 */

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

export type ReactNativeElements = {
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

/**
 * @todo
 * When we call and pass the attrs properties, we can use properties
 * that belongs to another component in a component that shoudn't be able
 * to use it, e.g: When using TouchableOpacity, I was able to pass resizeMode
 * as style property, It only should appear as option when use Image component.
 *
 * @interface RNStyles
 *
 */

export type RNStyles = StyleProp<
  ViewStyle | FlexStyle | TextStyle | ImageStyle
>;
