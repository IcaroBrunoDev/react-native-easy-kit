import React, { type FC } from 'react';
import type { PressableProps } from 'react-native';
import { View } from 'react-native';
import { styled } from '../../config';

export type IconProps = {
  size?: number;
  color?: string;
} & Omit<PressableProps, 'style'>;

const CloseIcon: FC<IconProps> = ({ size = 15, color = '$text', ...props }) => {
  return (
    <Container {...props}>
      <View
        style={{
          width: size,
          height: size,
          transform: [{ rotate: '-45deg' }],
        }}
      >
        <Line style={{ backgroundColor: color }} />
        <Line
          style={{ backgroundColor: color, transform: [{ rotate: '90deg' }] }}
        />
      </View>
    </Container>
  );
};

const Container = styled('Pressable', {
  alignItems: 'center',
  justifyContent: 'center',
});

const Line = styled('View', {
  top: '50%',
  width: '100%',
  height: 1.5,
  backgroundColor: 'black',
  position: 'absolute',
});

export default CloseIcon;
