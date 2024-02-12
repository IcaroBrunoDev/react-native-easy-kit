import React from 'react';

import { Button, useTheme, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
});

const RenderButton = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Button
        color={colors.primary}
        title="Danger Button"
        onPress={() => console.log('Pressed Danger Button')}
      />
    </View>
  );
};

export default RenderButton;
