import space from './spaces';
import colors from './colors';
import variants from './variants';

import { fonts as fontSizes } from './fonts';

export const kitTheme = {
  space,
  colors,
  variants,
  fontSizes,
};

export type KitTheme = typeof kitTheme;
