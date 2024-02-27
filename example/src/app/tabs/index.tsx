import React from 'react';

import { Text, Title, styled } from 'react-native-easy-kit';

const View = styled('View', {
  flex: 1,
});

const Home = () => {
  return (
    <View>
      <Title>Hello There, Welcome to the React Native Easy Kit</Title>

      <Text>
        This app has the objective of guide you throught the Easy Kit, showing
        the components
      </Text>
    </View>
  );
};

export default Home;
