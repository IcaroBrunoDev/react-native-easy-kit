import React from 'react';

import { View } from './styles';

import { Fab, useTheme } from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';

const RenderFab = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Fab
        Icon={<MaterialIcons name="add" size={25} color={colors.text} />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default RenderFab;
