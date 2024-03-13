import { memo, useMemo, type FC } from 'react';

import { ComponentWrapper, TextInput, TextInputWrapper } from './styles';

import React from 'react';
import { useTheme } from '../../config';
import type { InputProps } from './Models';

const Input: FC<InputProps> = ({
  leftIcon,
  rightIcon,
  isError,
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  const styles = useMemo(() => {
    if (!isError) return style;

    return {
      ...style,
      borderWidth: 1.5,
      borderColor: '$danger',
    };
  }, [style, isError]);

  return (
    <ComponentWrapper {...props}>
      <TextInputWrapper style={styles}>
        {leftIcon}
        <TextInput
          placeholderTextColor={isError ? colors.danger : colors.text}
          {...props}
        />
        {rightIcon}
      </TextInputWrapper>
      {children}
    </ComponentWrapper>
  );
};

export default memo(Input);
