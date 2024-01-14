import React, { useCallback, useMemo, type FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import type { ButtonProps } from './Models';
import { useTheme } from '../../../base.config';

const Button: FC<ButtonProps> = ({
  title,
  color,
  ghost,
  style,
  loading,
  rounded,
  onPress,
  outlined,
}) => {
  const { colors } = useTheme();

  /**
   * Function that prevents the event to be called
   * when @prop {loading} is active.
   *
   * @function handlePress @returns {void}
   */

  const handlePress = useCallback(() => {
    !loading && onPress();
  }, [onPress, loading]);

  const conditionalStyle = useMemo(() => {
    return {
      borderWidth: outlined ? 1 : 0,
      borderRadius: rounded ? 8 : 0,
      backgroundColor: outlined || ghost ? 'transparent' : color ?? '$primary',
    };
  }, [outlined, rounded, ghost, color]);

  return (
    <TouchableOpacity onPress={handlePress} style={[conditionalStyle, style]}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outlined || ghost ? color ?? colors.primary : colors.white}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text
          style={{
            color: outlined || ghost ? color ?? '$primary' : '$white',
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
