import { Tabs } from 'expo-router';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { KitProvider } from 'react-native-easy-kit';

import { dark, theme } from '../../theme';

export default function TabRoutesLayout() {
  const colorScheme = useColorScheme();

  const currentTheme = colorScheme === 'dark' ? dark : theme;

  return (
    <KitProvider theme={currentTheme}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Buttons' }} />
        <Tabs.Screen name="accordion" options={{ title: 'Acordion' }} />
        <Tabs.Screen name="navbar" options={{ title: 'Navbar' }} />
        <Tabs.Screen name="fab" options={{ title: 'Fab' }} />
        <Tabs.Screen name="typography" options={{ title: 'Typography' }} />
      </Tabs>
    </KitProvider>
  );
}
