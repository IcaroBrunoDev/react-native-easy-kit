import colors from './colors';
import space from './spaces';

import { sizes as fontSizes } from './fonts';

import variants from './variants';

export const theme = {
  colors,
  sizes: {},
  space,
  fonts: {},
  fontSizes,
  variants,
};

export type BaseTheme = typeof theme;
