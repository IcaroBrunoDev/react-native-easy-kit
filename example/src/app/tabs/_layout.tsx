import { Tabs } from 'expo-router';
import * as React from 'react';

import { ThemeProvider, extendTheme } from 'react-native-easy-kit';

const theme = extendTheme({
  colors: {
    red: 'red',
    primary: 'purple',
    violet: 'violet',
  },
  customFontSize: {
    large: 18,
  },
  variants: {
    customVariant: {
      backgrounColor: 'red',
    },
  },
});

export default function TabRoutesLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="accordion" options={{ title: 'Acordion' }} />
        <Tabs.Screen name="buttons" options={{ title: 'Buttons' }} />
        <Tabs.Screen name="fab" options={{ title: 'Fab' }} />
        <Tabs.Screen name="typography" options={{ title: 'Typography' }} />
      </Tabs>
    </ThemeProvider>
  );
}
