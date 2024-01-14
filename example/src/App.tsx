import * as React from 'react';
import { View } from 'react-native';

import { Button } from 'rn-ui-base-components';
import { styled } from '../base.config';

const Touchable = styled('TouchableOpacity', {
  width: 100,
  height: 100,
  backgroundColor: '#000',
  margin: 10,
});

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        title="Teste"
        onPress={() => {
          console.log('Pressed');
        }}
      />
    </View>
  );
}
