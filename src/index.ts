import Fab from './components/Fab';
import Button from './components/Button';
import NavBar from './components/NavBar';
import Accordion from './components/Accordion';

//Typography
import { Text, Title, Anchor } from './components/Typography';

//Stitches
import {
  theme,
  useTheme,
  createTheme,
  ThemeProvider,
} from '../stitches.config';

export { Button, Anchor, Text, Title, NavBar, Fab, Accordion };

export { theme as baseTheme, createTheme, ThemeProvider, useTheme };
