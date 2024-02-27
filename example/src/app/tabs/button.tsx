import * as React from 'react';
import { ScrollView } from 'react-native';

import { Button } from 'react-native-easy-kit';

const basics = ['primary', 'secondary'];
const variants = [
  'success',
  'danger',
  'warning',
  'ghost',
  'dark',
  'customVariant',
];

export const ButtonScreen = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
  }, [isLoading]);

  return (
    <ScrollView
      contentContainerStyle={{ marginHorizontal: 10, marginBottom: 50 }}
    >
      {basics.map((button, index) => (
        <Button
          key={`${button}-${index}`}
          title={`Button ${button}`}
          color={'$' + button}
          onPress={() => console.log(`Pressed ${button} Button`)}
        />
      ))}

      {variants.map((button, index) => (
        <Button
          key={`${button}-${index}`}
          title={`Variant ${button} Button`}
          variant={button as any}
          onPress={() => console.log(`Pressed ${button} Button`)}
        />
      ))}

      {/* <Button
        title={`Custom Color Button (Without Theme)`}
        color="#FA9500"
        onPress={() => console.log(`Pressed #FA9500 Button`)}
      />

      <Button
        title={`Custom Color Button (With Theme)`}
        color={colors.red}
        onPress={() => console.log(`Pressed ${colors.red} Button`)}
      />

      <Button
        title="IsLoading Button"
        loading={isLoading}
        color={colors.violet}
        onPress={() => setIsLoading(true)}
      />

      <Button
        title="Rounded Button"
        rounded
        color="#00272B"
        onPress={() => console.log(`Pressed rounded Button`)}
      />

      <Button
        title="Custom Button"
        style={{
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderWidth: 1,
          borderColor: '#FFF',
          backgroundColor: '#7A89C2',
        }}
        onPress={() => console.log(`Pressed Custom Button`)}
      /> */}
    </ScrollView>
  );
};
