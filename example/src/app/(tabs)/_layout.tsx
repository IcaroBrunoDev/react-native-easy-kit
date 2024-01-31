import { Tabs } from 'expo-router';
import * as React from 'react';

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="accordion" options={{ title: 'Acordion' }} />
      <Tabs.Screen name="buttons" options={{ title: 'Buttons' }} />
      <Tabs.Screen name="fab" options={{ title: 'Fab' }} />
      <Tabs.Screen name="typography" options={{ title: 'Typography' }} />
    </Tabs>
  );
}
