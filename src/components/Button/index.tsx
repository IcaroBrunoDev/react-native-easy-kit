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
  const { colors, variants } = useTheme();

  const handlePress = (): void => {
    if (loading) return;

    onPress();
  };

  const styles = useMemo(() => {
    const { primary, white } = colors;

    const styles = {
      color: outlined || ghost ? color : white,
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 100 : 0,
      backgroundColor: outlined || ghost ? 'transparent' : color ?? primary,
    };

    return applyVariant(styles, variant, variants);
  }, [outlined, rounded, ghost, color, variant, colors, variants]);

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
        <Text style={{ color: styles.color }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
