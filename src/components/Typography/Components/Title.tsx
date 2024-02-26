import React, { type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { TextProps } from '../Models';

const Title: FC<TextProps> = ({ children, style }) => {
  const { colors } = useTheme();

  return <Base style={[{ color: colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 15,
  fontWeight: '800',
});

export default Title;
