import createBaseTheme from './src/context';

import { theme } from './src/constants/theme';

export const { styled, useTheme, ThemeProvider } = createBaseTheme({ theme });
