import { TextStyleKeys } from '../constants';
import type { ComponentStyles, Styles } from '../models';
import type { BaseTheme } from '../theme';
import type { CustomTheme, Theme, Variants } from '../theme/Models';

type UnchainedTheme = {
  [T: string | number]: string | number;
};

export const generateStyles = (
  inline: Styles | undefined,
  styled: Styles | undefined,
  theme: Theme
): Styles => {
  let mergedStyles = {};

  if (styled) {
    mergedStyles = { ...mergedStyles, ...styled };
  }

  if (inline && Array.isArray(inline)) {
    inline
      .filter((style) => style && Reflect.ownKeys(style).length)
      .forEach((style) => (mergedStyles = { ...mergedStyles, ...style }));
  } else if (inline && Reflect.ownKeys(inline).length) {
    mergedStyles = { ...mergedStyles, ...inline };
  }

  return transformTokens(theme, mergedStyles);
};

const transformTokens = (theme: Theme, styles: Omit<Styles, 'Falsy'>) => {
  for (const style in styles) {
    const [key, value] = [style, styles[style as keyof Styles]];

    if (value && typeof value === 'string' && value[0] === '$') {
      const plainedTheme = unchainTheme(theme);

      const removedTokenStyle = (value as string).substring(1);

      if (plainedTheme[removedTokenStyle])
        styles = { ...styles, [key]: plainedTheme[removedTokenStyle] };
    }
  }

  return styles;
};

const unchainTheme = (theme: Theme) => {
  let plainedValues = {};

  for (const key in theme) {
    if (key !== 'variants')
      plainedValues = { ...plainedValues, ...theme[key as keyof Theme] };
  }

  return plainedValues as UnchainedTheme;
};

export const mergeThemes = <T extends CustomTheme>(
  theme: BaseTheme,
  extension: T
) => {
  for (const current in theme) {
    const key = current as keyof BaseTheme;

    if (extension.hasOwnProperty(key)) {
      theme = { ...theme, [key]: { ...theme[key], ...extension[key] } };
    }
  }

  return theme as BaseTheme & T;
};

export const applyVariant = (
  styles: ComponentStyles,
  variant: string | undefined,
  variants: Variants
) => {
  if (variants && variant) {
    const values = variants[variant];

    if (values && Reflect.ownKeys(values).length) {
      for (const val in values) {
        if (TextStyleKeys.includes(val)) {
          styles.text = { ...styles.text, [val]: values[val] };
        } else {
          styles.wrapper = { ...styles.wrapper, [val]: values[val] };
        }
      }
    }
  }

  return styles;
};
