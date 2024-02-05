import type { Styles } from '../models';
import type { BaseTheme } from '../theme';
import type { CustomTheme, Theme } from '../theme/Models';

type UnchainedTheme = {
  [T: string | number]: string | number;
};

export const generateStyles = (
  primaryStyles: any,
  secondaryStyles: any,
  theme: Theme
) => {
  let mergedStyles = {};

  if (primaryStyles && Array.isArray(primaryStyles)) {
    primaryStyles
      .filter((style) => style && Reflect.ownKeys(style).length)
      .forEach((styles) => (mergedStyles = { ...secondaryStyles, ...styles }));
  } else {
    mergedStyles = { ...secondaryStyles, ...primaryStyles };
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
  theme: Theme,
  extension: T
) => {
  const mergedThemes = { ...theme, ...extension };

  for (const ext in extension) {
    const key = ext as keyof T;

    const newValues = extension[key] as Record<
      keyof T,
      Record<string | number, string | number>
    >;
    const inheritedValues = theme[key as keyof Theme];

    if (inheritedValues && Reflect.ownKeys(inheritedValues).length)
      mergedThemes[key] = {
        ...inheritedValues,
        ...newValues,
      };
  }

  return mergedThemes;
};
