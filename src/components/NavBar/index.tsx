import React, { memo, type FC, useMemo } from 'react';

import { Text } from '../Typography';

import { Pressable } from 'react-native';
import { useTheme } from '../../config';

import { ArrowWrapper, TitleWrapper, Wrapper } from './styles';

import type { HeaderProps } from './Models';

const Navbar: FC<HeaderProps> = ({ title, style, icon, onPress }) => {
  const { colors } = useTheme();

  const styles = useMemo(() => {
    const wrapper = {
      backgroundColor: colors.background,
    };

    return { wrapper };
  }, [colors]);

  return (
    <Wrapper style={[styles.wrapper, style]}>
      {icon && (
        <ArrowWrapper>
          <Pressable onPress={onPress}>{icon}</Pressable>
        </ArrowWrapper>
      )}

      {title && (
        <TitleWrapper>
          <Text>{title}</Text>
        </TitleWrapper>
      )}
    </Wrapper>
  );
};

export default memo(Navbar);
