import * as React from 'react';

import { Button, styled } from 'rn-ui-base-components';

const View = styled('View', {
  flex: 1,
  margin: 20,
  alignItems: 'center',
  justifyContent: 'center',
});

export default function App() {
  return (
    <View>
      <Button
        title="Teste"
        loading
        onPress={() => {
          console.log('Pressed');
        }}
      />
    </View>
  );
}
