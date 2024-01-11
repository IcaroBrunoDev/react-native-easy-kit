import React, { memo, type FC } from 'react';

import { Wrapper } from './styles';

import { useTheme } from '../../../stitches.config';

import type { FabProps } from './Models';

const Fab: FC<FabProps> = ({ Icon, onPress }) => {
  const theme = useTheme();

  return (
    <Wrapper
      onPress={onPress}
      style={{ backgroundColor: theme.colors.default }}
    >
      {Icon}
    </Wrapper>
  );
};

export default memo(Fab);
