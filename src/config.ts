import createKitTheme from './context';
import { kitTheme } from './theme';

export const { theme, styled, useTheme, extendTheme, KitProvider } =
  createKitTheme(kitTheme);
