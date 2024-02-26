import { extendTheme } from 'react-native-easy-kit';

export const theme = extendTheme({
  colors: {
    main: '#000',
  },
  variants: {
    teste: {
      backgroundColor: '$main',
    },
  },
});

export const dark = extendTheme({
  colors: {
    main: 'grey',
  },
});

export type Theme = typeof theme | typeof dark;
