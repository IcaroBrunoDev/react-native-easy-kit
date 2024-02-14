import React from 'react';

import { Button, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
  justifyContent: 'center',
});

const RenderButton = () => {
  return (
    <View>
      <Button
        title="Danger Button"
        variant="success"
        onPress={() => console.log('Pressed Danger Button')}
      />
    </View>
  );
};

export default RenderButton;
