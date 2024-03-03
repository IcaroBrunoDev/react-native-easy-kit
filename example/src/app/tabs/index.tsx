import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { Fab, Title, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
  padding: '$2',
  justifyContent: 'center',
});

const CustomInput = styled('TextInput', {
  width: 100,
  height: 100,
  backgroundColor: '$secondary',
});

const CustomText = styled('Text', {
  fontSize: 25,
  color: '$primary',
});

const ExtendedInput = styled(CustomInput);

const ExtendedComponent = styled(CustomText);

const ExtendedFab = styled(Fab, {
  width: 100,
  height: 100,
  backgroundColor: '$danger',
});

const Home = () => {
  return (
    <View>
      <Title>Hello There, Welcome to the React Native Easy Kit</Title>
      <ExtendedComponent>
        Hi everyone! Welcome to the Easy Kit library. This application has the
        purpose to guide you through a easy kit components and functionality, be
        free to use it as your playground and explore the limits and power of
        the built-in components, you are open to navigate between the
        pre-builted screens or create new screens
      </ExtendedComponent>
      <ExtendedInput placeholder="Teste de component extendido"></ExtendedInput>

      <ExtendedFab
        icon={<MaterialIcons name="work" size={25} color="#fff" />}
        onPress={() => console.log('Fab Pressed')}
      />
    </View>
  );
};

export default Home;
