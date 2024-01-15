import React, {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type PropsWithChildren,
} from 'react';

import type { Config } from '../models/Theme';

import type { ReactNativeElements, RNStyles } from '../models/ReactNative';

import { generateStyle } from '../utils';

const ReactNative = require('react-native');

type ProviderProps = {
  theme: Config;
};

const createBaseTheme = (config: Config) => {
  const theme = config;

  const ThemeContext = createContext<Config>(theme);

  function ThemeProvider({
    theme,
    children,
  }: PropsWithChildren<ProviderProps>) {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  }

  const useTheme = () => useContext(ThemeContext) as Config;

  const styled = <T extends keyof ReactNativeElements>(
    element: T,
    attrs?: RNStyles
  ) => {
    if (typeof element !== 'string')
      throw new Error('Element type is not supported');

    const Component = forwardRef((props: any, ref) => {
      const theme = useTheme();

      const style = generateStyle(props.style, attrs, theme.theme);

      return createElement(ReactNative[element], { ...props, style, ref });
    });

    return Component;
  };

  return { theme: theme.theme, styled, useTheme, ThemeProvider };
};

export default createBaseTheme;
