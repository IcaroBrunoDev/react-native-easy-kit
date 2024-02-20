import { Tabs } from 'expo-router';
import * as React from 'react';

import { KitThemeProvider, extendTheme } from 'react-native-easy-kit';

const theme = extendTheme({
  colors: {
    main: '#F6F930',
  },
});

export default function TabRoutesLayout() {
  return (
    <KitThemeProvider theme={theme}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Buttons' }} />
        <Tabs.Screen name="accordion" options={{ title: 'Acordion' }} />
        <Tabs.Screen name="navbar" options={{ title: 'Navbar' }} />
        <Tabs.Screen name="fab" options={{ title: 'Fab' }} />
        <Tabs.Screen name="typography" options={{ title: 'Typography' }} />
      </Tabs>
    </KitThemeProvider>
  );
}
