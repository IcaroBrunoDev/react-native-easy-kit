import React, { type FC } from 'react';
import { styled } from '../../config';
import type { IconProps } from './Close';

const CaretArrowDown: FC<IconProps> = ({ ...props }) => {
  return (
    <Container {...props}>
      <Triangle />
    </Container>
  );
};

const Container = styled('Pressable', {
  flexDirection: 'row',
  alignItems: 'center',
});

const Triangle = styled('View', {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 8,
  borderBottomWidth: 0,
  borderLeftWidth: 6,
  borderRightWidth: 6,
  borderTopColor: '$text',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
});

export default CaretArrowDown;
