import React from 'react';

import { View } from './styles';

import { Fab, useTheme } from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';

const RenderFab = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Fab
        icon={<MaterialIcons name="add" size={25} color={colors.text} />}
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        position="bottom-inverted"
        color="red"
        icon={
          <MaterialIcons name="home-filled" size={25} color={colors.text} />
        }
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        position="top-inverted"
        color="green"
        icon={<MaterialIcons name="waves" size={25} color={colors.text} />}
        onPress={() => console.log('Fab Pressed')}
      />
      <Fab
        color="black"
        position="top"
        icon={<MaterialIcons name="phone" size={25} color={colors.text} />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default RenderFab;
