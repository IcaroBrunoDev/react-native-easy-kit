import React, { useMemo, type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { TypographyProps } from '../Models';

const Text: FC<TypographyProps> = ({ size, style, children, ...props }) => {
  const { colors } = useTheme();

  const fontSize = useMemo(() => {
    return typeof size === 'string' ? `$${size}` : size ?? '$xs';
  }, [size]);

  return (
    <Base {...props} style={[{ fontSize, color: colors.text }, style]}>
      {children}
    </Base>
  );
};

const Base = styled('Text', {
  fontSize: '$sm',
  fontWeight: 'normal',
});

export default Text;
