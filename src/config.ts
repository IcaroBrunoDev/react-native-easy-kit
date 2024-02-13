import { theme as defaultTheme } from './theme';

import createBaseTheme from './context';

export const { theme, styled, useTheme, extendTheme, KitThemeProvider } =
  createBaseTheme({
    theme: defaultTheme,
  });
