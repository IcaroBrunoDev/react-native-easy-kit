import React, { useState } from 'react';

import {
  ActionSheet,
  Button,
  Text,
  styled,
  useTheme,
} from 'react-native-easy-kit';

import { MaterialIcons } from '@expo/vector-icons';
import type { Theme } from '../../theme';

const View = styled('View', {
  flex: 1,
  padding: '$2',
  justifyContent: 'center',
});

const Home = () => {
  const { colors } = useTheme<Theme>();

  const [actionSheet, setActionSheed] = useState<boolean>(false);

  return (
    <View>
      <ActionSheet
        title="ActionSheet Test"
        visible={actionSheet}
        onClose={() => setActionSheed(false)}
      >
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ActionSheet.Item key={index}>
              <Text>Item 0{index + 1}</Text>
              <MaterialIcons
                name="workspaces-outline"
                size={15}
                color={colors.text}
              />
            </ActionSheet.Item>
          ))}
      </ActionSheet>

      <Button
        title="Handle ActionSheet"
        rounded
        onPress={() => setActionSheed(true)}
      />
    </View>
  );
};

export default Home;
