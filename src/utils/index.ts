import type { RNStyles } from '../models/ReactNative';
import type { Theme } from '../models/Theme';

export const transformCompStyle = (
  primaryStyles: any,
  secondaryStyles: any,
  theme: Partial<Theme>
) => {
  let mergedStyles = {};

  if (primaryStyles && Array.isArray(primaryStyles)) {
    primaryStyles
      .filter((style) => style && Reflect.ownKeys(style).length)
      .forEach((styles) => (mergedStyles = { ...secondaryStyles, ...styles }));
  } else {
    mergedStyles = { ...secondaryStyles, ...primaryStyles };
  }

  return stylesMap(theme, mergedStyles);
};

export const stylesMap = (
  theme: Partial<Theme>,
  styles: Omit<RNStyles, 'Falsy'>
) => {
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

export const plainTheme = (theme: Partial<Theme>): PlainTheme => {
  let plainedValues = {};

  for (const key in theme) {
    plainedValues = { ...plainedValues, ...theme[key as keyof Theme] };
  }

  return plainedValues;
};
