import { createStitches } from 'stitches-native';

export const {
  styled,
  css,
  theme,
  createTheme,
  ThemeProvider,
  useTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      text: '#000',
      white: '#FFF',
      danger: '#bb2124',
      examText: '#FFF',
      warning: '#FFC107',
      mainColor: '#1A3F6A',
      borderColor: '#7C7B87',
      placeholder: '#2D4356',
      backgroundColor: '#fefefe',
      elevatedBackground: '#fff',
    },
    fonts: {
      OpenSans: 'OpenSans-Regular',
      OpenSansBold: 'OpenSans-SemiBold',
    },
  },
});
