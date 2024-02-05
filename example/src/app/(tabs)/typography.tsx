import React from 'react';

import { View } from './styles';

import { Text, useTheme } from 'rn-ui-base-components';

const RenderTypography = () => {
  const { customFontSize } = useTheme();

  return (
    <View>
      <Text>This is a base text example</Text>
    </View>
  );
};

export default RenderTypography;
