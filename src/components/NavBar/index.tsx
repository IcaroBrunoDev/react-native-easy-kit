import React, { memo, type FC, type ReactNode } from 'react';

import Text from '../Typography/Text';

import { Pressable } from 'react-native';
import { useTheme } from '../../../stitches.config';
import { ArrowWrapper, TitleWrapper, Wrapper } from './styles';

interface HeaderProps {
  text?: string;
  NavIcon: ReactNode;
  onIconPress?: (...args: any) => Promise<any> | any;
}

const NavBar: FC<HeaderProps> = ({ text, NavIcon, onIconPress }) => {
  const theme = useTheme();

  return (
    <Wrapper style={{ backgroundColor: theme.colors.backgroundColor }}>
      <ArrowWrapper>
        <Pressable onPress={onIconPress}>{NavIcon}</Pressable>
      </ArrowWrapper>

      {text && (
        <TitleWrapper>
          <Text>{text}</Text>
        </TitleWrapper>
      )}
    </Wrapper>
  );
};

export default memo(NavBar);
