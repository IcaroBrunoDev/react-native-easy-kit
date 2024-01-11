import * as React from 'react';

import { StyleSheet, View } from 'react-native';

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
