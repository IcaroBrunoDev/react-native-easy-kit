import React, { type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { TypographyProps } from '../Models';

const Title: FC<TypographyProps> = ({ style, children, ...props }) => {
  const { colors } = useTheme();

  return (
    <Base {...props} style={[{ color: colors.text }, style]}>
      {children}
    </Base>
  );
};

const Base = styled('Text', {
  fontSize: '$md',
  fontWeight: '800',
});

export default Title;
