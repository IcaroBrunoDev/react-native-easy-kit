import { memo, type FC } from 'react';

import { TextInput, Wrapper } from './styles';

import React from 'react';
import { useTheme } from '../../config';
import type { InputProps } from './Models';

const Input: FC<InputProps> = ({ leftIcon, rightIcon, styles, ...props }) => {
  const { colors } = useTheme();

  return (
    <Wrapper style={styles}>
      {leftIcon}
      <TextInput placeholderTextColor={colors.text} {...props} />
      {rightIcon}
    </Wrapper>
  );
};

export default memo(Input);
