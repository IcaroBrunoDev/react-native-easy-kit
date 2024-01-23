import * as React from 'react';

import {
  Button,
  styled,
  extendtheme,
  ThemeProvider,
} from 'rn-ui-base-components';

const View = styled('View', {
  flex: 1,
  backgroundColor: '$secondary',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function App() {
  const theme = extendtheme({
    colors: {
      primary: '#000',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Button
          title="sdasadsad"
          onPress={() => {
            console.log('Pressed');
          }}
        />
      </View>
    </ThemeProvider>
  );
}
