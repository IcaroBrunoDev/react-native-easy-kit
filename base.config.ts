import { theme as defaultTheme } from './src/constants/theme';

import createBaseTheme from './src/context';

export const { theme, styled, useTheme, ThemeProvider } = createBaseTheme({
  theme: defaultTheme,
});
