import React, { useMemo, type FC } from 'react';

import type { TextProps } from '../Models';
import { styled, useTheme } from '../../../config';

const Text: FC<TextProps> = ({ size, style, children }) => {
  const { colors } = useTheme();

  const styles = useMemo(() => {
    return { fontSize: typeof size === 'string' ? `$${size}` : size ?? '$xs' };
  }, [size]);

  return (
    <Base style={[{ ...styles, color: colors.text }, style]}>{children}</Base>
  );
};

const Base = styled('Text', {
  fontSize: 13.2,
  fontWeight: 'normal',
});

export default Text;
