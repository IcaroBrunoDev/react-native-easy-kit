import React, { memo, type FC, useMemo } from 'react';

import { Wrapper } from './styles';

import { useTheme } from '../../config';

import type { FabProps } from './Models';
import { FabPositions } from '../../constants';

const Fab: FC<FabProps> = ({ icon, color, style, position, onPress }) => {
  const { colors } = useTheme();

  const { wrapper } = useMemo(() => {
    const directions = position ? FabPositions[position] : FabPositions.bottom;

    const styles = {
      ...directions,
      backgroundColor: color ?? colors.primary,
    };

    return { wrapper: styles };
  }, [color, colors, position]);

  return (
    <Wrapper onPress={onPress} style={[wrapper, style]}>
      {icon}
    </Wrapper>
  );
};

export default memo(Fab);
