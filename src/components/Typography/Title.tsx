import React, { type FC, type PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { styled, useTheme } from '../../../stitches.config';

interface TextProps {
  style?: StyleProp<TextStyle> | undefined;
}

const Title: FC<PropsWithChildren<TextProps>> = ({ children, style }) => {
  const theme = useTheme();

  return <Base style={[{ color: theme.colors.text }, style]}>{children}</Base>;
};

const Base = styled('Text', {
  fontSize: 15,
  fontWeight: '800',
  fontFamily: '$OpenSans',
});

export default Title;
