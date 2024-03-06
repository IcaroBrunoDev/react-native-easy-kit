import React, { type FC } from 'react';
import { styled } from '../../../config';
import type { ActionItemProps } from '../Models';

const ActionItem: FC<ActionItemProps> = ({ style, children, ...props }) => {
  return (
    <Wrapper {...props} style={style}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled('TouchableOpacity', {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: '$0',
  paddingVertical: '$2',
});

export default ActionItem;
