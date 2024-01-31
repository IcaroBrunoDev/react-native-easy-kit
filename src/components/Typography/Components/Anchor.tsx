import React, { type FC } from 'react';

import { styled, useTheme } from '../../../../base.config';
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
  fontSize: 11,
  fontWeight: '300',
  fontFamily: '$OpenSans',
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
});

export default Anchor;
