import React, { memo, useMemo, type FC } from 'react';

import { Wrapper } from './styles';

import { useTheme } from '../../config';

import { FabPositions } from '../../constants';
import useVariant from '../../hooks/variants';

import type { FabProps } from './Models';

const Fab: FC<FabProps> = ({
  icon,
  color,
  style,
  variant,
  position,
  onPress,
  ...props
}) => {
  const { apply } = useVariant();
  const { colors } = useTheme();

  const styles = useMemo(() => {
    const directions = position ? FabPositions[position] : FabPositions.bottom;

    const style = {
      ...directions,
      backgroundColor: color ?? colors.primary,
    };

    return apply(style, variant);
  }, [colors, color, variant, position, apply]);

  return (
    <Wrapper {...props} onPress={onPress} style={[styles, style]}>
      {icon}
    </Wrapper>
  );
};

export default memo(Fab);
