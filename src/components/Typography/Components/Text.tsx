import React, { type FC } from 'react';

import { styled, useTheme } from '../../../../base.config';

import type { BaseText } from '../Models';

const Text: FC<BaseText> = ({ children, style }) => {
  const theme = useTheme();

  return <Base style={[{ color: theme.colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 13,
  fontWeight: 'normal',
});

export default Text;
