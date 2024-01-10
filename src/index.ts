import Fab from './components/Fab';
import Button from './components/Button';
import NavBar from './components/NavBar';
import Accordion from './components/Accordion';

//Typography
import Text from './components/Typography/Text';
import Title from './components/Typography/Title';
import Anchor from './components/Typography/Anchor';

//Stitches
import {
  theme,
  createTheme,
  ThemeProvider,
  useTheme,
} from '../stitches.config';

export { Button, Anchor, Text, Title, NavBar, Fab, Accordion };

export { theme as baseTheme, createTheme, ThemeProvider, useTheme };
