import React, { type FC } from 'react';

import type { BaseText } from '../Models';

import { styled } from '../../../../base.config';

const Text: FC<BaseText> = ({ children, style }) => {
  return <Base style={[{ color: '$text' }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 13,
  fontWeight: 'normal',
});

export default Text;
