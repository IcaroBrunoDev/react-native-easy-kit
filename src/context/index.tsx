import React, {
  forwardRef,
  useContext,
  createContext,
  createElement,
  type PropsWithChildren,
} from 'react';

import * as ReactNative from 'react-native';

import { generateStyles, mergeThemes } from '../utils';

import type { Config, Theme } from '../theme/Models';
import type { ReactNativeElements, RNStyles } from '../models/ReactNative';

type ProviderProps = {
  theme: Theme;
};

const createBaseTheme = (config: Config) => {
  const { theme } = config;

  const ThemeContext = createContext<Theme>(theme);

  /**
   *
   * @param theme Theme
   * @returns React.Context
   */

  const ThemeProvider = ({
    theme,
    children,
  }: PropsWithChildren<ProviderProps>) => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  /**
   * Use the current theme
   *
   * @returns Theme
   */

  const useTheme = () => useContext(ThemeContext) as Required<Theme>;

  /**
   * Extend the default theme with your own assets.
   * You can create new styles or just overwrite the existing theme.
   *
   * @param newTheme Theme
   * @returns
   */
  const extendtheme = (newTheme: Theme) => {
    return mergeThemes(theme, newTheme);
  };

  /**
   * @param element ReactNativeElements
   * @param styles RNStyles
   * @returns React.ForwardRefExoticComponent
   *
   * Create a styled component that inherit the theme
   * properties, wether tokens or a styled object.
   */

  const styled = <T extends keyof ReactNativeElements>(
    element: T,
    styles?: RNStyles
  ) => {
    if (typeof element !== 'string')
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

    return Component;
  };

  return {
    theme,
    styled,
    useTheme,
    extendtheme,
    ThemeProvider,
  };
};

export default createBaseTheme;
