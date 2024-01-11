import { createStitches } from 'stitches-native';

export const {
  css,
  theme,
  config,
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} = createStitches({
  theme: {
    colors: {
      text: '#000',
      white: '#FFF',
      danger: '#bb2124',
      warning: '#FFC107',
      default: '#1A3F6A',
      borderColor: '#7C7B87',
      placeholder: '#2D4356',
      backgroundColor: '#FEFEFE',
    },
    fonts: {
      OpenSans: 'OpenSans-Regular',
      OpenSansBold: 'OpenSans-SemiBold',
    },
  },
});
