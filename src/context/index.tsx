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

  function ThemeProvider({
    theme,
    children,
  }: PropsWithChildren<ProviderProps>) {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  }

  const useTheme = () => useContext(ThemeContext) as Required<Theme>;

  const extendtheme = (newTheme: Theme) => {
    return mergeThemes(theme, newTheme);
  };

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
