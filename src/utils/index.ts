import type { Styles } from '../models';
import type { BaseTheme } from '../theme';
import type { CustomTheme, Theme } from '../theme/Models';

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

  return mapStyles(theme, mergedStyles);
};

const mapStyles = (theme: Theme, styles: Omit<Styles, 'Falsy'>) => {
  let mappedStyles = {};

  for (const style in styles) {
    const [key, value] = [style, styles[style as keyof Styles]];

    if (value && typeof value === 'string' && value[0] === '$') {
      const plain = unchainTheme(theme);

      const removedTokenStyle = (value as string).substring(1);

      if (plain[removedTokenStyle]) {
        mappedStyles = { ...mappedStyles, [key]: plain[removedTokenStyle] };
      }
    } else {
      mappedStyles = { ...mappedStyles, [key]: value };
    }
  }

  return mappedStyles;
};

const unchainTheme = (theme: Theme) => {
  let plainedValues = {};

  for (const key in theme) {
    plainedValues = { ...plainedValues, ...theme[key as keyof Theme] };
  }

  return plainedValues as UnchainedTheme;
};

export const mergeThemes = <T extends CustomTheme>(
  theme: BaseTheme,
  extension: T
) => {
  let themes = { ...extension, ...theme };

  for (const current in theme) {
    const key = current as keyof BaseTheme;

    if (extension.hasOwnProperty(key)) {
      themes = { ...themes, [key]: { ...theme[key], ...extension[key] } };
    }
  }

  return themes;
};
