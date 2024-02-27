import React from 'react';

import { Text, Title, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
  padding: '$2',
  justifyContent: 'center',
});

const Home = () => {
  return (
    <View>
      <Title>Hello There, Welcome to the React Native Easy Kit</Title>
      <Text>
        Hi everyone! Welcome to the Easy Kit library. This application has the
        purpose to guide you through a easy kit components and functionality, be
        free to use it as your playground and explore the limits and power of
        the built-in components, you are open to navigate between the
        pre-builted screens or create new screens
      </Text>
    </View>
  );
};

export default Home;
