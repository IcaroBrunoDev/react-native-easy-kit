import { extendTheme } from 'react-native-easy-kit';

export const theme = extendTheme({
  colors: {
    main: '#000',
    secondary: '#0123',
    newThemeColor: 'blue',
  },
  variants: {
    teste: {
      backgroundColor: '$main',
    },
  },
});

export const dark = extendTheme({
  colors: {
    main: '#000',
  },
});

export type Theme = typeof theme;
