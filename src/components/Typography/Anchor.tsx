import React, { type FC, type PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { styled, useTheme } from '../../../stitches.config';

interface AnchorProps {
  style?: StyleProp<TextStyle>;
  onPress: (...args: any) => any;
}

const Anchor: FC<PropsWithChildren<AnchorProps>> = ({
  style,
  onPress,
  children,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{ color: theme.colors.text }, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled('TouchableOpacity');

const Text = styled('Text', {
  fontSize: 11,
  fontWeight: '300',
  fontFamily: '$OpenSans',
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
});

export default Anchor;
