import * as React from 'react';
import { ScrollView } from 'react-native';

import { Button, useTheme } from 'react-native-easy-kit';

const ButtonScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{ marginHorizontal: 10, marginBottom: 50 }}
    >
      {Object.keys(colors).map((color, index) => (
        <Button
          key={`${color}-${index}`}
          title={`Button ${color}`}
          color={'$' + color}
          onPress={() => console.log(`Pressed ${color} Button`)}
        />
      ))}
    </ScrollView>
  );
};

export default ButtonScreen;
