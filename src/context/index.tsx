import React, {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type PropsWithChildren,
} from 'react';

import type { Config, Theme } from '../models/Theme';

import type { ReactNativeElements, RNStyles } from '../models/ReactNative';

import { transformCompStyle } from '../utils';

const ReactNative = require('react-native');

type ProviderProps = {
  theme: Theme;
};

const createBaseTheme = (config: Config) => {
  let theme = config.theme;

  const ThemeContext = createContext(theme);

  const styled = <T extends keyof ReactNativeElements>(
    element: T,
    attrs?: RNStyles
  ) => {
    if (typeof element !== 'string')
      throw new Error('Element type is not supported');

    const Component = forwardRef((props: any, ref) => {
      const style = transformCompStyle(props.style, attrs, theme);

      delete props.style;

      return createElement(ReactNative[element], { ...props, style, ref });
    });

    return Component;
  };

  function ThemeProvider({
    theme,
    children,
  }: PropsWithChildren<ProviderProps>) {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  }

  const useTheme = () => {
    const theme = useContext(ThemeContext);

    return theme as Theme;
  };

  // const createTheme = (theme: Theme) => {};

  return { styled, useTheme, ThemeProvider };
};

export default createBaseTheme;
