import React, { memo, useMemo, type FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import { useTheme } from '../../config';

import useVariant from '../../hooks/variants';
import type { ButtonProps } from './Models';

const Button: FC<ButtonProps> = ({
  title,
  color,
  style,
  loading,
  rounded,
  onPress,
  outlined,
  variant,
}) => {
  const { apply } = useVariant();
  const { colors } = useTheme();

  const handlePress = (): void => {
    if (loading) return;

    onPress();
  };

  const styles = useMemo(() => {
    const { primary, white } = colors;

    const styles = {
      color: outlined ? color : white,
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 100 : 0,
      backgroundColor: outlined ? 'transparent' : color ?? primary,
    };

    return apply(styles, variant);
  }, [outlined, rounded, color, variant, apply, colors]);

  return (
    <TouchableOpacity
      variant={variant}
      onPress={handlePress}
      style={[styles, style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={styles.color}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text size="sm" style={{ color: styles.color }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
