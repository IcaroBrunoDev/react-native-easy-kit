import React from 'react';

import { View } from './styles';

import { Fab, useTheme } from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';

const RenderFab = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Fab
        variant="danger"
        icon={<MaterialIcons name="add" size={25} color={colors.white} />}
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        position="bottom-inverted"
        color="$secondary"
        icon={
          <MaterialIcons name="home-filled" size={25} color={colors.white} />
        }
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        position="top-inverted"
        color="$tertiary"
        icon={<MaterialIcons name="waves" size={25} color={colors.white} />}
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        color="$rose"
        position="top"
        icon={<MaterialIcons name="phone" size={25} color={colors.white} />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default RenderFab;
