import React, { memo, useMemo, type FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import { useTheme } from '../../config';

import type { BaseComponentStyle } from '../../models';
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
  const { colors } = useTheme();

  const handlePress = (): void => {
    if (loading) return;

    onPress();
  };

  const styles = useMemo((): BaseComponentStyle => {
    const { primary, white } = colors;

    const text = {
      color: outlined || ghost ? color : white,
    };

    const general = {
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 8 : 0,
      backgroundColor: outlined || ghost ? 'transparent' : color ?? primary,
    };

    return { text, general };
  }, [outlined, rounded, ghost, color, colors]);

  return (
    <TouchableOpacity
      variant={variant}
      onPress={handlePress}
      style={[styles.general, style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={styles.text.color}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
