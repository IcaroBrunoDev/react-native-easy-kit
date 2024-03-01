import React, { type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { AnchorProps } from '../Models';

const Anchor: FC<AnchorProps> = ({ style, onPress, children }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{ color: colors.text }, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled('TouchableOpacity');

const Text = styled('Text', {
  fontSize: '$xs',
  textDecorationStyle: 'solid',
  textDecorationLine: 'underline',
});

export default Anchor;
