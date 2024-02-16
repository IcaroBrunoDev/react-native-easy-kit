import React, { type FC } from 'react';

import type { BaseText } from '../Models';
import { styled, useTheme } from '../../../config';

const Text: FC<BaseText> = ({ style, children }) => {
  const { colors } = useTheme();

  return <Base style={[{ color: colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 13.2,
  fontWeight: 'normal',
});

export default Text;
