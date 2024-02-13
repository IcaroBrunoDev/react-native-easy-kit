import React, { memo, type FC } from 'react';

import { Wrapper } from './styles';

import { useTheme } from '../../config';

import type { FabProps } from './Models';

const Fab: FC<FabProps> = ({ Icon, onPress }) => {
  const { colors } = useTheme();

  return (
    <Wrapper onPress={onPress} style={{ backgroundColor: colors.primary }}>
      {Icon}
    </Wrapper>
  );
};

export default memo(Fab);
