import React, { memo, useMemo, type FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import { useTheme } from '../../config';

import { applyVariant } from '../../utils';
import type { ButtonProps } from './Models';

const Button: FC<ButtonProps> = ({
  title,
  color,
  ghost,
  style,
  loading,
  rounded,
  onPress,
  outlined,
  variant,
}) => {
  const theme = useTheme();

  const handlePress = (): void => {
    if (loading) return;

    onPress();
  };

  const { text, wrapper } = useMemo(() => {
    const { primary, white } = theme.colors;

    const text = {
      color: outlined || ghost ? color : white,
    };

    const wrapper = {
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 100 : 0,
      backgroundColor: outlined || ghost ? 'transparent' : color ?? primary,
    };

    return applyVariant({ text, wrapper }, variant, theme.variants);
  }, [outlined, rounded, ghost, color, variant, theme]);

  return (
    <TouchableOpacity
      variant={variant}
      onPress={handlePress}
      style={[wrapper, style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={text.color}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text style={text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
