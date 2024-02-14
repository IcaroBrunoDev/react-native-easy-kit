import type { BaseTheme } from '..';
import type { Styles } from '../../models';

type VariantType = 'success' | 'error' | 'warning';

type Variants = {
  [P in VariantType | string]: Partial<Record<keyof Styles, string | number>>;
};

type CustomTheme = {
  sizes?: Record<string | number, string | number>;
  space?: Record<string | number, string | number>;
  fonts?: Record<string | number, string | number>;
  colors?: Record<string, string>;
  variants?: Variants;
  fontSizes?: Record<string | number, string | number>;
};

type Theme = CustomTheme & BaseTheme;

type ThemeConfig = {
  theme: Theme;
};

export type { CustomTheme, Variants, Theme, ThemeConfig };
