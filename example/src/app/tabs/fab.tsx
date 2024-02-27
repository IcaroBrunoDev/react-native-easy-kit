import React from 'react';

import { View } from '../../styles';

import { Fab, useTheme } from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';

import type { Theme } from '../../theme';

const FabScreen = () => {
  const { colors } = useTheme<Theme>();

  return (
    <View>
      <Fab
        color={colors.secondary}
        icon={<MaterialIcons name="add" size={25} color={colors.white} />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default FabScreen;
