import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { Accordion, Button, Fab, NavBar, Text } from 'rn-ui-base-components';

import Icon from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Teste"
        onPress={() => {
          console.log('Pressed');
        }}
        rounded
      /> */}

      {/* <NavBar
        text="Página teste"
        onIconPress={() => {
          console.log('Pressed');
        }}
        NavIcon={<Icon name="chevron-back" color="#000" size={20} />}
      /> */}

      {/* <Fab
        onPress={() => {
          console.log('FAB Pressed');
        }}
        Icon={<Icon name="chevron-back" color="#000" size={20} />}
      /> */}

      <Accordion title="Teste">
        <Text style={{ color: '#FFF' }}>
          This error is located at: in Accordion (created by App) in RCTView
          (created by View) in View (created by App) in App (created by
          withDevTools(App)) in withDevTools(App) in RCTView (created by View)
          in View (created by AppContainer) in RCTView (created by View) in View
          (created by AppContainer) in AppContainer in main(RootComponent), js
          engine: hermes
        </Text>
      </Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
