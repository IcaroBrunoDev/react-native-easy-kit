import type { PropsWithChildren } from 'react';

import type {
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
} from 'react-native';
import type { Styles } from './styles';

/**
 * @description
 *
 * React Native Elements Types
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

type ElementStyles = {
  style?: Styles | Styles[];
};

type PropsFunction = (...args: any) => Promise<any> | any;

export type { Elements, ElementStyles, PropsFunction };
