import React, { useMemo, type FC } from 'react';

import { styled, useTheme } from '../../../config';
import type { AnchorProps } from '../Models';

const Anchor: FC<AnchorProps> = ({
  style,
  onPress,
  children,
  underline,
  ...props
}) => {
  const { colors } = useTheme();

  const textDecoration = useMemo(() => {
    return {
      textDecorationStyle: 'solid' as any,
      textDecorationLine: underline ? 'underline' : ('none' as any),
    };
  }, [underline]);

  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <Text style={[{ ...textDecoration, color: colors.text }, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled('TouchableOpacity');

const Text = styled('Text', {
  fontSize: '$sm',
  textDecorationStyle: 'solid',
  textDecorationLine: 'underline',
});

export default Anchor;
