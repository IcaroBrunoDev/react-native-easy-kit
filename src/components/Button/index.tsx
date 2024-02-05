import React, { memo, useMemo, type FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import { useTheme } from '../../../base.config';

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

  /**
   * Function that prevents the event to be called
   * when loading is active.
   *
   * @function handlePress
   */

  const handlePress = (): void => {
    if (loading) return;

    onPress();
  };

  const { textStyles, buttonStyles, indicatorStyles } = useMemo(() => {
    const { primary, white } = colors;

    const textStyles = {
      color: outlined || ghost ? color : white,
    };

    const buttonStyles = {
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 8 : 0,
      backgroundColor: outlined || ghost ? 'transparent' : color ?? primary,
    };

    const indicatorStyles = {
      color: outlined || ghost ? color : white,
    };

    return { textStyles, buttonStyles, indicatorStyles };
  }, [outlined, rounded, ghost, color, colors]);

  return (
    <TouchableOpacity
      variant={variant}
      onPress={handlePress}
      style={[buttonStyles, style]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={indicatorStyles.color}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
