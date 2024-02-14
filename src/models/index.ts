import type { PropsWithChildren } from 'react';

import type {
  ButtonProps,
  FlatListProps,
  FlexStyle,
  ImageBackgroundProps,
  ImageProps,
  ImageStyle,
  InputAccessoryViewProps,
  KeyboardAvoidingViewProps,
  PressableProps,
  ScrollViewProps,
  SectionListProps,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
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
  [P in PropsToChange]: string | number;
};

type Styles = Partial<
  Omit<ViewStyle & FlexStyle & TextStyle & ImageStyle, PropsToChange> &
    SpaceTypes
>;

type BaseComponentStyle = {
  text: TextStyle;
  general: Styles;
};

export type { Elements, Styles, BaseComponentStyle };
