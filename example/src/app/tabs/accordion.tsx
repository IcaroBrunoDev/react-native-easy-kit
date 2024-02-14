import React from 'react';
import { FlatList } from 'react-native';
import { Accordion, Text, styled, useTheme } from 'react-native-easy-kit';
import { fakeFAQ } from '../../utils/fakers';

import { MaterialIcons } from '@expo/vector-icons';

const View = styled('View', {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 5,
});

const RenderAccordion = () => {
  const { colors } = useTheme();

  return (
    <View>
      <FlatList
        data={fakeFAQ}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <Accordion
            Icon={<MaterialIcons color={colors.white} name="add" size={20} />}
            title={item.title}
          >
            <Text>{item.text}</Text>
          </Accordion>
        )}
      />
    </View>
  );
};

export default RenderAccordion;
