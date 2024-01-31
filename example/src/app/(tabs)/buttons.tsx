import React from 'react';

import { View } from './styles';

import { Button, useTheme } from 'rn-ui-base-components';

const RenderButton = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Button
        color={colors.danger}
        title="Danger Button"
        onPress={() => console.warn('Pressed Danger Button')}
      />
    </View>
  );
};

export default RenderButton;
