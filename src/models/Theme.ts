type Colors = {
  [color: string]: string;
};

type Sizes = {
  [size: string | number]: string | number;
};

type Spaces = {
  [space: string | number]: string | number;
};

type Fonts = {
  [font: string]: string;
};

type FontSizes = {
  [size: string]: string | number;
};

type Theme = {
  sizes: Sizes;
  space: Spaces;
  fonts: Fonts;
  colors: Colors;
  fontSizes: FontSizes;
};

type Config = {
  theme: Theme;
};

export type { Theme, Config };
