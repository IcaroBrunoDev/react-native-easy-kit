import { Tabs } from 'expo-router';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { KitProvider } from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';
import { dark, theme } from '../../theme';

const RoutesLayout = () => {
  const colorScheme = useColorScheme();

  const currentTheme = colorScheme === 'dark' ? dark : theme;

  return (
    <KitProvider theme={currentTheme}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <MaterialIcons name="search" color={currentTheme.colors.main} />
            ),
          }}
        />
        <Tabs.Screen name="fab" options={{ title: 'Fab' }} />
        <Tabs.Screen name="button" options={{ title: 'Buttons' }} />
        <Tabs.Screen name="accordion" options={{ title: 'Acordion' }} />
        <Tabs.Screen name="typography" options={{ title: 'Typography' }} />
      </Tabs>
    </KitProvider>
  );
};

export default RoutesLayout;
