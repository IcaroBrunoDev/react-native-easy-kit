import type { Theme } from '../theme/Models';
import type { RNStyles } from '../models/ReactNative';

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

const mapStyles = (theme: Theme, styles: Omit<RNStyles, 'Falsy'>) => {
  let mappedStyles = {};

  for (const style in styles) {
    /**
     * @todo RNStyles currently does not account for string tokens. Soon I'll explore potential solutions for enabling type-checking of tokens.
     */
    const [key, value] = [style, styles[style as keyof RNStyles]];

    if (value && value[0] === '$') {
      const plain = plainTheme(theme);

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

type PlainTheme = {
  [T: string]: string;
};

const plainTheme = (theme: Theme): PlainTheme => {
  let plainedValues = {};

  for (const key in theme) {
    plainedValues = { ...plainedValues, ...theme[key as keyof Theme] };
  }

  return plainedValues;
};

export const mergeThemes = (current: Theme, newTheme: Theme) => {
  const newValues = { ...current };

  for (const theme in newTheme) {
    const key = theme as keyof Theme;

    const inheritedValues = current[key];

    if (inheritedValues && Reflect.ownKeys(inheritedValues).length) {
      newValues[key] = {
        ...(current[key] as Record<string, any>),
        ...(newTheme[key] as Record<string, any>),
      };
    }
  }

  return newValues;
};
