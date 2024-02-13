import React, {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type PropsWithChildren,
  type ReactElement,
  memo,
} from 'react';

import * as ReactNative from 'react-native';

import { generateStyles, mergeThemes } from '../utils';

import type { Elements, Styles } from '../models';
import type { CustomTheme, Theme, ThemeConfig } from '../theme/Models';

const createBaseTheme = (config: ThemeConfig) => {
  const defaultTheme = config.theme;

  const ThemeContext = createContext(defaultTheme);

  /**
   *
   * @param theme Theme
   * @returns {ReactElement}
   */

  const KitThemeProvider = ({
    theme,
    children,
  }: PropsWithChildren<ThemeConfig>): ReactElement => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  /**
   * @returns {Theme}
   *
   * Export a hook that provides access to the current theme.
   */

  const useTheme = (): Theme => useContext(ThemeContext);

  /**
   *
   * @param extension {T extends CustomTheme}
   * @returns theme {BaseTheme & T}
   *
   * Merge the existing theme with a new theme object.
   */
  const extendTheme = <T extends CustomTheme>(extension: T) =>
    mergeThemes(defaultTheme, extension);

  /**
   * @param element ReactNativeElements
   * @param styles RNStyles
   * @returns React.ForwardRefExoticComponent
   *
   * Create a styled component that inherits theme properties,
   * whether they are tokens or a styled object.
   */

  const styled = (element: keyof Elements, styles?: Styles) => {
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

    return memo(Component);
  };

  return {
    theme: defaultTheme,
    styled,
    useTheme,
    extendTheme,
    KitThemeProvider,
  };
};

export default createBaseTheme;
