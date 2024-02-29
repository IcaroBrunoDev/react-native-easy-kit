import React, { type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { TypographyProps } from '../Models';

const Title: FC<TypographyProps> = ({ style, children }) => {
  const { colors } = useTheme();

  return <Base style={[{ color: colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: '$sm',
  fontWeight: '800',
});

export default Title;
