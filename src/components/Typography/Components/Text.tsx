import React, { useMemo, type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { TypographyProps } from '../Models';

const Text: FC<TypographyProps> = ({ size, style, children }) => {
  const { colors } = useTheme();

  const fontSize = useMemo(() => {
    return typeof size === 'string' ? `$${size}` : size ?? '$xs';
  }, [size]);

  return (
    <Base style={[{ fontSize, color: colors.text }, style]}>{children}</Base>
  );
};

const Base = styled('Text', {
  fontSize: '$sm',
  fontWeight: '600',
});

export default Text;
