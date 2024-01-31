import React from 'react';

import { View } from './styles';

import { Fab } from 'rn-ui-base-components';

import { MaterialIcons } from '@expo/vector-icons';

const RenderFab = () => {
  return (
    <View>
      <Fab
        Icon={<MaterialIcons name="add" size={25} />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default RenderFab;
