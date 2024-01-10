import React, { memo, type FC, type ReactNode } from 'react';

import { FabWrapper } from './styles';

import { useTheme } from '../../../stitches.config';

interface FabProps {
  Icon: ReactNode;
  onPress: (...args: any) => Promise<any> | any;
}

const Fab: FC<FabProps> = ({ Icon, onPress }) => {
  const theme = useTheme();

  return (
    <FabWrapper
      onPress={onPress}
      style={{ backgroundColor: theme.colors.mainColor }}
    >
      {Icon}
    </FabWrapper>
  );
};

export default memo(Fab);
