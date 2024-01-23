import { theme as defaultTheme } from './src/theme';

import createBaseTheme from './src/context';

export const { theme, styled, useTheme, extendtheme, ThemeProvider } =
  createBaseTheme({
    theme: defaultTheme,
  });
