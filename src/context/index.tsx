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
import type { CustomTheme, ThemeConfig } from '../theme/Models';

const createBaseTheme = (config: ThemeConfig) => {
  const defaultTheme = config.theme;

  const ThemeContext = createContext(defaultTheme);

  /**
   *
   * @param theme Theme
   * @returns {ReactElement}
   */

  const ThemeProvider = ({
    theme,
    children,
  }: PropsWithChildren<ThemeConfig>): ReactElement => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  /**
   *
   * @returns
   */

  const useTheme = () => useContext(ThemeContext);

  /**
   *
   * @param extension
   * @returns
   */

  const extendTheme = <T extends CustomTheme>(extension: T) =>
    mergeThemes(defaultTheme, extension);

  /**
   * @param element ReactNativeElements
   * @param styles RNStyles
   * @returns React.ForwardRefExoticComponent
   *
   * Create a styled component that inherit the theme
   * properties, wether tokens or a styled object.
   */

  const styled = <T extends keyof Elements>(element: T, styles?: Styles) => {
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
    ThemeProvider,
  };
};

export default createBaseTheme;
