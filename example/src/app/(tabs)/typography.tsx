import React from 'react';

import { View } from './styles';

import { Anchor, Text, Title } from 'react-native-easy-kit';

const RenderTypography = () => {
  return (
    <View>
      <Text>This is a base text example</Text>

      <Title>This is a base title example</Title>

      <Anchor onPress={() => console.log('Anchor Pressed')}>
        This is an anchor example
      </Anchor>
    </View>
  );
};

export default RenderTypography;
