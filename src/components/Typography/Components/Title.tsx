import React, { type FC } from 'react';

import { styled, useTheme } from '../../../../stitches.config';
import type { BaseText } from '../Models';

const Title: FC<BaseText> = ({ children, style }) => {
  const theme = useTheme();

  return <Base style={[{ color: theme.colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 15,
  fontWeight: '800',
  fontFamily: '$OpenSans',
});

export default Title;
