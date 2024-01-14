type Colors = {
  [color: string]: string;
};

type Fonts = {
  [font: string]: string;
};

type Theme = {
  colors: Colors;
  fonts: Fonts;
};

type Config = {
  theme: Partial<Theme>;
};

export type { Theme, Config };
