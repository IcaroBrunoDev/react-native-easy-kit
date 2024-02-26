import React, { memo, type FC, useMemo } from 'react';

import { Wrapper } from './styles';

import { useTheme } from '../../config';

import type { FabProps } from './Models';
import { FabPositions } from '../../constants';
import { applyVariant } from '../../utils';

import type { KitTheme } from '../../theme';

const Fab: FC<FabProps> = ({
  icon,
  color,
  style,
  variant,
  position,
  onPress,
}) => {
  const { colors, variants } = useTheme<KitTheme>();

  const styles = useMemo(() => {
    const directions = position ? FabPositions[position] : FabPositions.bottom;

    const styles = {
      ...directions,
      backgroundColor: color ?? colors.primary,
    };

    return applyVariant(styles, variant, variants);
  }, [colors, color, variant, variants, position]);

  return (
    <Wrapper onPress={onPress} style={[styles, style]}>
      {icon}
    </Wrapper>
  );
};

export default memo(Fab);
