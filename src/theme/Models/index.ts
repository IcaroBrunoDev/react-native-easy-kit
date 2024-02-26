import type { ReactNode } from 'react';
import type { Styles } from '../../models';

type BaseVariants = 'success' | 'error' | 'warning';

type Variants = {
  [P in BaseVariants | string]: Partial<Record<keyof Styles, string | number>>;
};

type Theme = {
  sizes?: Record<string | number, string | number>;
  space?: Record<string | number, string | number>;
  fonts?: Record<string | number, string | number>;
  colors?: Record<string, string>;
  variants?: Variants;
  fontSizes?: Record<string | number, string | number>;
};

type Provider = {
  theme: Theme;
  children?: ReactNode;
};

export type { Theme, Variants, Provider, BaseVariants };
