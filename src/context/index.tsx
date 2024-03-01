import React, {
  createContext,
  createElement,
  forwardRef,
  memo,
  useContext,
} from 'react';

import * as ReactNative from 'react-native';

import { generateStyles, mergeThemes } from '../utils';

import type { ElementStyles, Elements } from '../models';
import type { Styles } from '../models/styles';
import type { KitTheme } from '../theme';
import type { Provider, Theme } from '../theme/Models';

const createKitTheme = (defaultTheme: Theme) => {
  const ThemeContext = createContext(defaultTheme);

  /**
   *
   * @param param0
   * @returns
   */
  const KitProvider = ({ theme, children }: Provider) => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  /**
   * useTheme Hook
   *
   * Returns the current theme object
   *
   * @returns {Theme & T}
   */
  const useTheme = <T extends Theme>(): KitTheme & T =>
    useContext(ThemeContext) as KitTheme & T;

  /**
   *
   * @param extension
   * @returns {Theme & T}
   */
  const extendTheme = <T extends Theme>(extension: T): Theme & T =>
    mergeThemes(defaultTheme, extension);

  /**
   *
   * @param element
   * @param styles
   * @returns
   */
  const styled = <T extends keyof Elements>(
    element: T,
    styles?: Styles | Styles[]
  ) => {
    if (typeof element !== 'string' || !ReactNative[element])
      throw new Error('Element type is not supported');

    const Component = forwardRef((props: any, ref) => {
      const theme = useTheme();

      const style = generateStyles(props.style, styles, theme);

      return createElement(ReactNative[element] as any, {
        ...props,
        style,
        ref,
      });
    });

    return memo(Component) as React.ComponentType<
      Omit<Elements[T], 'style'> & ElementStyles & { [P in any]: any }
    >;
  };

  return {
    theme: defaultTheme,
    styled,
    useTheme,
    extendTheme,
    KitProvider,
  };
};

export default createKitTheme;
